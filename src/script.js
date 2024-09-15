function loadApp() {
  generateCalendar();

  setPersonalInfo();
  
  generateLegend();
  detailedWeeksCheckboxValueChangeSubscribe();
  dataRecieverSubscribe();  
}

disablePageReloadingOnRegisterSubmit();
if(loadUser()) {
  loadApp();
} else {
  authLoginElement.showModal();
}