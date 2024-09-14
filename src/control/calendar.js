let selectedCell;
function onCellClick(time) {
  cellEl = document.querySelector(`#cell-${time}`);

  if (cellEl.id === selectedCell?.id) {
    closeModal();
    cellEl.classList.remove('selected');
    selectedCell = undefined;
  } else {
    showModal(cellEl);
    cellEl.classList.add('selected');
    selectedCell?.classList.remove('selected');
    selectedCell = cellEl;
  }
}

function fillCalendar(element, calendarConfig, user) {
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
        cellClasses.push('present')
      }
      if (isAfterThisWeek) {
        cellClasses.push('future');
      }
      if (weekCountFromBirth === 0) {
        cellClasses.push('before-birth');
      }

      yearCellsHtml += yearCellHtml(time, weekCountFromBirth, cellClasses);

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