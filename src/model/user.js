const LS = window.localStorage;
const writeUserToDb = (user) => LS.setItem('user', JSON.stringify(user));
var user = {};

function createUser(name, birthday) {
  user = {
    name,
    birthday,
    journal: []
  }
}

function loadUser() {
  const userData = LS.getItem('user');
  if (userData === null) {
    return 0;
  } else {
    user = JSON.parse(userData);
    return 1;
  }
}

function saveWeekNoteToDb(weekId, note) {
  const findedNote = user.journal.find((el) => el.weekId === weekId);
  if (findedNote) {
    findedNote.note = note;
  } else {
    user.journal.push({
      weekId,
      note
    })
  }
  writeUserToDb(user);
}

function getNoteByWeekId(weekId) {
  return user.journal.find((el) => el.weekId === weekId)?.note;
}

function emptyWeekNote(weekId) {
  const findedIndex = user.journal.findIndex((el) => el.weekId === weekId);
  if (findedIndex !== -1) {
    user.journal.splice(findedIndex, 1);
  }
  writeUserToDb(user);
}

// isDetailed = [0; 1]
function setCalendarViewModeDetailed(isDetailed) {
  user.viewModeDetailed = isDetailed;
  writeUserToDb(user);
}