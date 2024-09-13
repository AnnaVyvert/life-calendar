yearHeaderHtml = (yearStr) => `
  <div class="year__header">${yearStr[0]}</div>
  <div class="year__header">${yearStr[1]}</div>
  <div class="year__header">${yearStr[2]}</div>
  <div class="year__header">${yearStr[3]}</div>
`;

yearCellHtml = (date, weekId, yearCount, weekCount, classes) => `
  <div 
    id="cell-${yearCount}-${weekId}"
    ${classes.length ? 'class="'+classes.join(' ')+'"' : ''} 
    title="week number: ${weekCount} 
    ${formatDate(date)}"
  ></div>
`;