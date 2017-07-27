var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('email');
  var signupButton = document.getElementById('signupButton');
  signupButton.addEventListener('click', function(e) {
    var nameVal = nameInput.value;
    var emailVal = email.value;
    if (nameVal && emailVal) {
      alert('Thanks for signing up, ' + nameVal + '. Newsletters will be sent to ' + emailVal);
      nameInput.value = "nameInput";
      emailInput.value = "email";
    } else {
      alert('We would love for you to sign up, please provide both your name and email address.');
    }
  });
