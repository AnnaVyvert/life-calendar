function registerUser() {
  if (!isValidDate(new Date(birthdayInputElement.value))) {
    birthdayInputElement.value = '';
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