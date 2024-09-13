function onCellClick(year, weekNumber) {
  cellRef = document.querySelector(`#cell-${year}-${weekNumber}`);
  cellRef.style.backgroundColor='red';
}

function fillCalendar(element, calendarConfig, user) {
  const birthday = new Date(user.birthday);
  const birthdayYear = birthday.getFullYear();
  const now = new Date();
  const years = Number(calendarConfig.marks.at(-1).end);

  let calendarHtml = '';
  let weekCountFromBirth = 0;
  for (let i=0; i<years; i++) {
    let yearCellsHtml = '';
    let yearCount = birthdayYear+i;
    let yearCountStr = yearCount.toString();

    for (let i2=0; i2<52; i2++) {
      // check that week is future
      let isAfterThisWeek = getTimeFromYear(yearCount) + weekNumberToMilliseconds(i2) > now.getTime();
      
      // check that a person was born on that week and futher
      if (getTimeFromYear(yearCount) + weekNumberToMilliseconds(i2+2) > birthday.getTime()) {
        weekCountFromBirth++;
      }

      cellClasses = ['year__week'];
      if (isAfterThisWeek) {
        cellClasses.push('future');
      }
      if (weekCountFromBirth === 0) {
        cellClasses.push('before-birth');
      }

      // TODO we got a problem, there are never 52 weeks in the year.
      yearCellsHtml += yearCellHtml(i2, yearCount, weekCountFromBirth, cellClasses);
    }

    calendarHtml += `
      <div class="year">
        ${yearHeaderHtml(yearCountStr)}
        ${yearCellsHtml}
      </div>
    `;
  }

  element.innerHTML = calendarHtml;
}