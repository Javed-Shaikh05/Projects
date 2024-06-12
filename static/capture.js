document.addEventListener("DOMContentLoaded", function() {

    var numScreens = parseInt(document.getElementById('numScreens').getAttribute('data-screens'), 10);
    generateScreenBoxes(numScreens);
  
    function generateScreenBoxes(numScreens) {
      var container = document.getElementById('screenPhotos');
      for (let i = 1; i <= numScreens; i++) {
          let box = document.createElement('div');
          box.className = 'screen-box';
          box.innerHTML = `
              <div class="header">
                  <label for="screenPhoto${i}">Screen ${i} Photo Upload:</label>
                  <i class="fas fa-chevron-down toggle-arrow" onclick="togglePreview(${i}, this)"></i>
              </div>
              <div id="content${i}" class="content">
                  <input type="file" name="photo" id="screenPhoto${i}" accept="image/*" capture="environment" onchange="previewImage(this, ${i})">
                  <div id="previewContainer${i}" class="preview-container"></div>
              </div>
          `;
          container.appendChild(box);
      }
  }
  
  
  
  });
  
  function previewImage(input, index) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var previewContainer = document.getElementById(`previewContainer${index}`);
            previewContainer.innerHTML = `<img src="${e.target.result}" class="preview-image" alt="Screen ${index} Preview">`;
            
        };
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  function togglePreview(index, arrowElement) {
      var content = document.getElementById(`content${index}`);
  
      if (content.style.display === "none" || content.style.display === '') {
          content.style.display = "block";
          arrowElement.classList.remove('fa-chevron-down');
          arrowElement.classList.add('fa-chevron-up');
      } else {
          content.style.display = "none";
          arrowElement.classList.remove('fa-chevron-up');
          arrowElement.classList.add('fa-chevron-down');
      }
  }
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
      document.getElementById('hiddenRegion').value = sessionStorage.getItem('region');
      document.getElementById('hiddenState').value = sessionStorage.getItem('state');
      document.getElementById('hiddenCity').value = sessionStorage.getItem('city');
      document.getElementById('hiddenCinema').value = sessionStorage.getItem('cinema');
  });
  
  function submitPhotos() {
      var form = document.getElementById('photoUploadForm');
      var formData = new FormData(form);
  
      // Show the progress modal
      var progressModal = new bootstrap.Modal(document.getElementById('progressModal'), {
          keyboard: false,
          backdrop: 'static'
      });
      progressModal.show();
  
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/upload_photo", true);
  
      // Update progress bar
      xhr.upload.onprogress = function(e) {
          if (e.lengthComputable) {
              var percentComplete = (e.loaded / e.total) * 100;
              var progressBar = document.getElementById("uploadProgressBar");
              progressBar.style.width = percentComplete + "%";
              progressBar.setAttribute("aria-valuenow", percentComplete);
          }
      };
  
      // Handle response
      xhr.onload = function() {
          if (xhr.status == 200) {
              // Hide the progress modal and show the submission modal
              progressModal.hide();
              var submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'));
              submissionModal.show();
          } else {
              alert("An error occurred!");
          }
      };
  
      xhr.onerror = function() {
          alert("An error occurred during the upload.");
      };
  
      // Send form data
      xhr.send(formData);
  }
  
  
  function logoutUser() {
      sessionStorage.clear(); 
      window.location.href = '/login';
  }
  
  
  
  
  