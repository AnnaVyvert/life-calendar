const maxAgeToRegister = 75;

function registerUser() {
  let userBirthday = new Date(birthdayInputElement.value);
  if (!isValidDate(userBirthday)) {
    birthdayValidationElement.innerHTML = `the given date is invalid.`
    return;
  }
  else if (new Date().getFullYear() - userBirthday.getFullYear() > maxAgeToRegister) {
    birthdayValidationElement.innerHTML = `it's hard to use this site<br>if you are older than ${maxAgeToRegister} y.o. =)`
    return;
  }
  else if (new Date().getTime() < userBirthday.getTime()) {
    birthdayValidationElement.innerHTML = `how can you write this?<br>child of future... =)`
    return;
  }

  createUser(nameInputElement.value, birthdayInputElement.value)

  writeUserToDb(user);
  authLoginElement.close();
  loadApp();
}

function disablePageReloadingOnRegisterSubmit() {
  authFormElement.addEventListener('submit', function(ev) { 
    ev.preventDefault(); 
  }); 
}