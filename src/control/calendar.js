let selectedCell;
function onCellClick(time, weekCount) {
  cellEl = document.querySelector(`#cell-${time}`);

  if (cellEl.id === selectedCell?.id) {
    closeModal();
    unselectLastClickedCell();
    
    if (onWeekNoteSave(weekCount)) {
      cellEl.classList.add(weekStatus.note);
    } else {
      cellEl.classList.remove(weekStatus.note);
    }
    nullBufferCell();
  } else {
    loadNote(weekCount);
    showModal(cellEl);
    focusWeekNoteElement();
    cellEl.classList.add(weekStatus.selected);
    unselectLastClickedCell();
    selectedCell = cellEl;
  }
}

function unselectLastClickedCell() {
  selectedCell?.classList.remove(weekStatus.selected);
}

function nullBufferCell() {
  selectedCell = undefined;
}

var weekLived;
function generateCalendar() {
  function generateCalendar(element, calendarConfig, user) {
    const birthday = new Date(user.birthday);
    const birthdayTime = birthday.getTime();
    const birthdayYear = birthday.getFullYear();
    const now = new Date();
    const years = Number(calendarConfig.marks.at(-1).end);

    let calendarHtml = '';
    let weekCountFromBirth = 0;
    let yearFirstMondayTime = getFirstWeekOfYear(birthdayYear);
    let time = yearFirstMondayTime;

    for (let i=0; i<years; i++) {
      let yearCellsHtml = '';
      let yearCount = birthdayYear+i;
      let yearCountStr = yearCount.toString();
      let weekCount = 0;

      do {
        weekCount++;
        // check that week is future
        let isPresent = now.getTime() - time < weeksToMilliseconds(1)
        let isAfterThisWeek = time > now.getTime();


        if (now.getTime() >= time) {
          weekLived = weekCountFromBirth;
        }

        // check that a person was born on that week and futher
        if (time >= birthdayTime || (time < birthdayTime && birthdayTime - time < weeksToMilliseconds(1))) {
          weekCountFromBirth++;
        }

        cellClasses = ['year__week'];
        if (isPresent && !isAfterThisWeek) {
          cellClasses.push(weekStatus.present)
        }
        if (isAfterThisWeek) {
          cellClasses.push(weekStatus.future);
        }
        if (weekCountFromBirth === 0) {
          cellClasses.push(weekStatus.beforeBirth);
        }
        if (user.journal.find((el) => el.weekId === weekCountFromBirth)) {
          cellClasses.push(weekStatus.note)
        }

        yearCellsHtml += yearCellHtml(time, weekCountFromBirth, weekCount, cellClasses, user.viewModeDetailed);

        time+=weeksToMilliseconds(1);
      } while (new Date(time).getFullYear() <= yearCount);

      calendarHtml += `
        <div class="year">
          ${yearHeaderHtml(yearCountStr)}
          ${yearCellsHtml}
        </div>
      `;
    }

    element.innerHTML = calendarHtml;
  }
  generateCalendar(calendarWrapperElement, calendarConfig, user);
}