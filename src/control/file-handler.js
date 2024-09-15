function exportDataHandler() {
  downloadFile(JSON.stringify(user), 'calendar-life-journal.json');
}

function uploadFileRedirect() {
  invisibleFileRecieverElement.click();
}

function uploadFileHandler(res) {
  if (!res) return;
  user = JSON.parse(res);
  writeUserToDb(user);
  generateCalendar();
  setPersonalInfo();
  setDetailedWeeksCheckboxValue();
}

function dataRecieverSubscribe() {
  invisibleFileRecieverElement.addEventListener('change', uploadFileProp(uploadFileHandler), false);
}