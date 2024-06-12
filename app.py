from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import DataRequired, Email, EqualTo, Length
from flask_mail import Message
from datetime import datetime
import os
import pandas as pd
import secrets
from models import User
from database import db, init_db
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
from flask_login import current_user
# Import the extensions initialization directly
from extensions import db, bcrypt, login_manager, mail


def create_app():
    app = Flask(__name__)

    # Configuration
    app.config['SECRET_KEY'] = secrets.token_hex(16)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['UPLOAD_FOLDER'] = os.path.join(app.root_path, 'uploads')
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB limit
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'your_email@example.com'
    app.config['MAIL_PASSWORD'] = 'YourEmailPassword'
    

    # Initialize extensions with the app
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)
    

    
    with app.app_context():
        from models import User, Photo
        db.create_all()
        
    reset_tokens = {}
    data = pd.read_excel('data.xlsx')

    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

    def send_reset_email(user_email, token):
        reset_url = url_for('reset_password', token=token, _external=True)
        msg = Message('Password Reset Request', sender='javed.shaikh@screenox.in', recipients=[user_email])
        msg.body = f'''To reset your password, visit the following link:
    {reset_url}
    If you did not make this request, simply ignore this email and no changes will be made.
    '''
        mail.send(msg)


    def add_photo_record_to_db(filename, filepath, user_id):
        new_photo = Photo(filename=filename, filepath=filepath, user_id=user_id)
        db.session.add(new_photo)
        try:
            db.session.commit()
            return True
        except Exception as e:
            print(e)  # For debugging purposes, better to log this error
            db.session.rollback()
            return False


    class LoginForm(FlaskForm):
        email = EmailField('Email', validators=[DataRequired(), Email()])
        password = PasswordField('Password', validators=[DataRequired()])
        submit = SubmitField('Login')

    class SignupForm(FlaskForm):
        fullname = StringField('Fullname', validators=[DataRequired(), Length(min=2, max=20)])
        email = EmailField('Email', validators=[DataRequired(), Email()])
        phone = StringField('Phone', validators=[DataRequired(), Length(min=10, max=15)])
        password = PasswordField('Password', validators=[DataRequired()])  
        confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
        submit = SubmitField('Sign Up')

        
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))


    @app.route('/login', methods=['GET', 'POST'])
    def login():
        form = LoginForm()
        if form.validate_on_submit():
            user = User.query.filter_by(email=form.email.data).first()
            if user and bcrypt.check_password_hash(user.password, form.password.data):
                session['user_id'] = user.id
                flash('You have been logged in successfully!', 'success')
                return redirect(url_for('index'))
            else:
                flash('Login Unsuccessful. Please check email and password.', 'danger')
        return render_template('login.html', title='Login', form=form)


    @app.route('/signup', methods=['GET', 'POST'])
    def signup():
        form = SignupForm()
        if form.validate_on_submit():
            existing_user = User.query.filter_by(email=form.email.data).first()
            if existing_user:
                flash('Email already exists. Please login.', 'warning')
                return redirect(url_for('signup'))       
            hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
            new_user = User(fullname=form.fullname.data, email=form.email.data, phone=form.phone.data, password=hashed_password)
            try:
                db.session.add(new_user)
                db.session.commit()
                flash("User created successfully. Please log in.", "success")
                return redirect(url_for('login'))
            except Exception as e:
                db.session.rollback()
                flash(f"Error creating user: {e}", "error")
        return render_template('signup.html', form=form)

    
    @app.route('/capture')
    def capture():
        # Check if user is logged in
        if 'user_id' not in session:
            return redirect(url_for('login'))
        number_of_screens = request.args.get('screens', default=1, type=int)
        return render_template('capture.html', number_of_screens=number_of_screens)



    @app.route('/forget_password', methods=['GET', 'POST'])
    def forget_password():
        if request.method == 'POST':
            email = request.form['email']
            # Generate a unique token
            token = secrets.token_urlsafe(16)
            reset_tokens[email] = token
            # Send the reset password email
            send_reset_email(email, token)
            flash('An email with instructions to reset your password has been sent.', 'info')
            return redirect(url_for('login'))
        return render_template('forget_password.html')



    @app.route('/reset_password/<token>', methods=['GET', 'POST'])
    def reset_password(token):
        # Check if the token is valid
        if token not in reset_tokens.values():
            flash('Invalid or expired reset password link.', 'error')
            return redirect(url_for('login'))
        if request.method == 'POST':
            # Update the password in your database
            # (Code to update password omitted for brevity)
            flash('Your password has been successfully reset.', 'success')
            return redirect(url_for('login'))
        return render_template('reset_password.html', token=token)

    @app.route('/')
    def index():
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return render_template('index.html')


    @app.route('/upload_photo', methods=['POST'])
    def upload_photo():
        print("Received fields:", request.form)
        region = request.form.get('region')
        state = request.form.get('state')
        city = request.form.get('city')
        cinema = request.form.get('cinema')
        date_str = datetime.now().strftime('%Y-%m-%d')

        if None in [region, state, city, cinema]:
            return jsonify({'error': 'Missing form data'}), 400

        folder_path = os.path.join(app.config['UPLOAD_FOLDER'], region, state, city, cinema, date_str)
        os.makedirs(folder_path, exist_ok=True)

        if 'photo' not in request.files:
            return jsonify({'error': 'No photo file part'}), 400

        # photos = request.files.getlist('photo')
        uploaded_files = request.files.getlist('photo')  # Correctly getting list of files

        for uploaded_file in uploaded_files:
            if uploaded_file.filename == '':
                continue  # Skip any file without a name (not selected)
            if allowed_file(uploaded_file.filename):
                filename = secure_filename(uploaded_file.filename)
                uploaded_file.save(os.path.join(folder_path, filename))

        return jsonify({'success': f'{len(uploaded_files)} files uploaded successfully'})




    @app.route('/get-region-data')
    def get_region_data():
        data = {'region1': 'Region 1', 'region2': 'Region 2'}  # Example data
        return jsonify(data)


    @app.route('/get_data', methods=['POST'])
    def get_data():
        selected_region = request.form['region']
        filtered_data = data[data['Region'] == selected_region]
        states = filtered_data['State'].unique().tolist()
        cities = filtered_data['City'].unique().tolist()
        cinemas = filtered_data['Cinema'].unique().tolist()
        return jsonify({'states': states, 'cities': cities, 'cinemas': cinemas})


    @app.route('/get_state_data', methods=['POST'])
    def get_state_data():
        selected_state = request.form['state']
        filtered_data = data[data['State'] == selected_state]
        cities = filtered_data['City'].unique().tolist()
        return jsonify({'cities': cities})


    @app.route('/get_city_data', methods=['POST'])
    def get_city_data():
        selected_city = request.form['city']
        filtered_data = data[data['City'] == selected_city]
        cinemas = filtered_data['Cinema'].unique().tolist()
        return jsonify({'cinemas': cinemas})




    @app.errorhandler(404)
    def page_not_found(e):
        return 'This page does not exist', 404
    # Define your routes here
    
    return app
    

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)
