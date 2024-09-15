detailedWeeksCheckboxValueChangeSubscribe = () => detailedWeeksCheckboxElement.addEventListener('change', (ev) => {
  setCalendarViewModeDetailed(ev.target.checked);
  generateCalendar();
});

const setDetailedWeeksCheckboxValue = () => {
  detailedWeeksCheckboxElement.checked = user.viewModeDetailed;
}
