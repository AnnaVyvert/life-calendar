function onCellClick(time) {
  cellRef = document.querySelector(`#cell-${time}`);
  cellRef.style.backgroundColor='red';
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
      let isAfterThisWeek = time > now.getTime();

      // check that a person was born on that week and futher
      if (time >= birthdayTime || (time < birthdayTime && birthdayTime - time < weeksToMilliseconds(1))) {
        weekCountFromBirth++;
      }

      if (now.getTime() >= time) {
        weekLived = weekCountFromBirth;
      }

      cellClasses = ['year__week'];
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