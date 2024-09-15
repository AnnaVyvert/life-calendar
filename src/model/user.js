const LS = window.localStorage;
const writeUserToDb = (user) => LS.setItem('user', JSON.stringify(user));

const userData = LS.getItem('user');
var user;

if (userData === null) {
  // TODO: handle by redirecting for authorization
  user = defaultUser;
  writeUserToDb(user);
} else {
  user = JSON.parse(userData);
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