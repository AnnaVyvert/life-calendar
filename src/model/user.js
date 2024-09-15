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
  const findedNote = user.diary.find((el) => el.weekId === weekId);
  if (findedNote) {
    findedNote.note = note;
  } else {
    user.diary.push({
      weekId,
      note
    })
  }
  writeUserToDb(user);
}

function getNoteByWeekId(weekId) {
  return user.diary.find((el) => el.weekId === weekId)?.note;
}

function emptyWeekNote(weekId) {
  const findedIndex = user.diary.findIndex((el) => el.weekId === weekId);
  if (findedIndex !== -1) {
    user.diary.splice(findedIndex, 1);
  }
  writeUserToDb(user);
}

// isDetailed = [0; 1]
function setCalendarViewModeDetailed(isDetailed) {
  user.viewModeDetailed = isDetailed;
  writeUserToDb(user);
}