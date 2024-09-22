calendarLegendTitleElem = document.querySelector('.calendar-legend__title');
calendarLegendElem = document.querySelector('.calendar-legend__content');

const getLegendRow = (weekCell, label) => `
  <div class="calendar-legend__row">
    ${weekCell}
    <span class="calendar-legend__row__description">– ${label}</span>
  </div>
`