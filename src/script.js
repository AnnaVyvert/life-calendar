generateCalendar(calendarWrapperElement, calendarConfig, user);

setName(user.name);
setBirthday(user.birthday);
setWeeksLived(user.birthday);

generateLegend();
detailedWeeksCheckboxValueChangeSubscribe();