detailedWeeksCheckboxValueChangeSubscribe = () => detailedWeeksCheckboxElement.addEventListener('change', (ev) => {
  setCalendarViewModeDetailed(ev.target.checked);
  generateCalendar(calendarWrapperElement, calendarConfig, user);
})