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
    let yearFirstMondayTime = getFirstWeekOfYear(yearCount);
    let weekCount = 0;

    let time=yearFirstMondayTime+weeksToMilliseconds(1);
    do {
      weekCount++;
      // check that week is future
      let isAfterThisWeek = getTimeYearStart(yearCount) + weeksToMilliseconds(weekCount) > now.getTime();
      
      // check that a person was born on that week and futher
      if (getTimeYearStart(yearCount) + weeksToMilliseconds(weekCount) > birthday.getTime()) {
        weekCountFromBirth++;
      }

      cellClasses = ['year__week'];
      if (isAfterThisWeek) {
        cellClasses.push('future');
      }
      if (weekCountFromBirth === 0) {
        cellClasses.push('before-birth');
      }

      yearCellsHtml += yearCellHtml(new Date(time), weekCount, yearCount, weekCountFromBirth, cellClasses);

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