import sqlite3

def get_users():
    # Connect to the SQLite database
    conn = sqlite3.connect('site.db')
    cursor = conn.cursor()

    # Execute a query to fetch user information
    cursor.execute("SELECT * FROM User")
    
    # Fetch all rows from the result
    users = cursor.fetchall()

    # Close the cursor and connection
    cursor.close()
    conn.close()

    return users

def main():
    # Fetch users from the database
    users = get_users()

    # Display user information
    for user in users:
        print(user)

if __name__ == "__main__":
    main()
