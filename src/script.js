function loadApp() {
  generateCalendar();

  setPersonalInfo();
  
  generateLegend();
  detailedWeeksCheckboxValueChangeSubscribe();
  dataRecieverSubscribe();
  modalCloseOnEscKeySubscribe();
}

disablePageReloadingOnRegisterSubmit();
if(loadUser()) {
  loadApp();
} else {
  authLoginElement.showModal();
  focusBirthdayInputElement();
}