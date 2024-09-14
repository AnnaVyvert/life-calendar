calendarLegendTitleElem = document.querySelector('.calendar-legend__title');
calendarLegendElem = document.querySelector('.calendar-legend__content');

const getLegendRow = (weekCell, label) => `
  <div>
    ${weekCell}
    <span> – ${label}</span>
  </div>
`