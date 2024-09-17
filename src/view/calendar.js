const calendarWrapperElement = document.querySelector('.calendar__wrapper');

yearHeaderHtml = (yearStr) => `
  <div class="year__header">${yearStr[0]}</div>
  <div class="year__header">${yearStr[1]}</div>
  <div class="year__header">${yearStr[2]}</div>
  <div class="year__header">${yearStr[3]}</div>
`;

yearCellHtml = (date, endWeekDayTime, weekCountFromBirth, weekCount, classes, isDetailedMode) => `
  <div 
    id="cell-${date}"
    ${classes.length ? 'class="'+classes.join(' ')+'"' : ''} 
    title="week number: ${weekCountFromBirth}
${formatDate(new Date(date))} - ${formatDate(new Date(endWeekDayTime))}"
    onclick="onCellClick(${date}, ${weekCountFromBirth})"
  >${!!isDetailedMode ? weekCount : ''}</div>
`;

yearCellLegendHtml = (classes) => `
  <div  
    class="year__week ${classes}" 
  ></div>
`