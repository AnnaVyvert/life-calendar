function generateLegend() {
  let legendWeeksHtml = '';
  Object.keys(legendConfig).forEach((key) => {
    legendWeeksHtml += getLegendRow(yearCellLegendHtml(legendConfig[key].status), legendConfig[key].label);
  });
  calendarLegendElem.innerHTML = legendWeeksHtml;
}
