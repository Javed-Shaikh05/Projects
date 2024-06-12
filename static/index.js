// -------- Form Validation ---------//
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const region = document.getElementById('region').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const cinema = document.getElementById('cinema').value;

    if (name === '' || email === '' || phone === '' || region === '' || state === '' || city === '' || cinema === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// -------- Fetch Region Data ---------//
function fetchRegionData() {
    fetch('/get-region-data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
// -------- Get Region Data to frontend ---------//
function getRegionData() {
    const region = document.getElementById('region').value;
    fetch('/get_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `region=${region}`
    })
    .then(response => response.json())
    .then(data => {
        populateSelect('state', data.states);
        populateSelect('city', data.cities);
        populateSelect('cinema', data.cinemas);
        console.log("Response Data:", data);
        // Automatically select the first option after populating the dropdowns
        document.getElementById('state').selectedIndex = 0;
        document.getElementById('city').selectedIndex = 0;
        document.getElementById('cinema').selectedIndex = 0;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// -------- Get State Data ---------//
function getStateData() {
    const state = document.getElementById('state').value;
    fetch('/get_state_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `state=${state}`
    })
    .then(response => response.json())
    .then(data => {
        populateSelect('city', data.cities);
        console.log("State Data:", data);
        document.getElementById('city').selectedIndex = 0;
        getCityData();
    })
    .catch(error => {
        console.error('Error fetching state data:', error);
    });
}

// -------- Get City Data ---------//
function getCityData() {
    const city = document.getElementById('city').value;
    fetch('/get_city_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `city=${city}`
    })
    .then(response => response.json())
    .then(data => {
        populateSelect('cinema', data.cinemas);
        console.log("City Data:", data);
        document.getElementById('cinema').selectedIndex = 0;
    })
    .catch(error => {
        console.error('Error fetching city data:', error);
    });
}

// -------- Populate Select Options ---------//
function populateSelect(id, options) {
    const select = document.getElementById(id);
    select.innerHTML = '';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}


function populateLobbyScreensDropdown() {
    const select = document.getElementById('lobbyscreens');
    for (let i = 0; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}


// -------- Populate the number of screens dropdown with options ranging from 0 to 100 ---------//
function populateScreensDropdown() {
    const select = document.getElementById('screens');
    for (let i = 0; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}

// Call both functions on window load
window.onload = function() {
    populateScreensDropdown();
    populateLobbyScreensDropdown();
    getRegionData(); 
};




function redirectToCapturePage() {

    sessionStorage.setItem('region', document.getElementById('region').value);
    sessionStorage.setItem('state', document.getElementById('state').value);
    sessionStorage.setItem('city', document.getElementById('city').value);
    sessionStorage.setItem('cinema', document.getElementById('cinema').value);
    const screens = document.getElementById('screens').value;
    window.location.href = `/capture?screens=${screens}`;
}


