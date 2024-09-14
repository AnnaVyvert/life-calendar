yearHeaderHtml = (yearStr) => `
  <div class="year__header">${yearStr[0]}</div>
  <div class="year__header">${yearStr[1]}</div>
  <div class="year__header">${yearStr[2]}</div>
  <div class="year__header">${yearStr[3]}</div>
`;

yearCellHtml = (date, weekCount, classes) => `
  <div 
    id="cell-${date}"
    ${classes.length ? 'class="'+classes.join(' ')+'"' : ''} 
    title="week number: ${weekCount}
    ${formatDate(new Date(date))}"
    onclick="onCellClick(${date}, ${weekCount})"
  ></div>
`;

yearCellLegendHtml = (classes) => `
  <div  
    class="year__week ${classes}" 
  ></div>
`