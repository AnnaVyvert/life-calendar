const onWeekNoteSave = (weekId) => {
  if (weekNoteElement.value) {
    saveWeekNoteToDb(weekId, weekNoteElement.value);
    // saved valid value to store
    return 1;
  } else {
    emptyWeekNote(weekId);
    // remove existing note from store
    return 0;
  }
}

const loadNote = (weekId) => {
  const note = getNoteByWeekId(weekId);
  weekNoteElement.value = note || '';
}

const focusWeekNoteElement = () => weekNoteElement.focus();