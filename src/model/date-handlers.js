const daysToMilliseconds = (number) => number*24*60*60*1000;
const weeksToMilliseconds = (number) => number*daysToMilliseconds(7);
const getDateByStrDate = (strDate) => new Date(strDate);
const getTimeYearStart = (year) => getDateByStrDate(`${year}-01-01`).getTime();
const formatDate = (date) => `${padNumber(date.getDate())}/${padNumber(date.getMonth()+1)}/${padNumber(date.getFullYear())}`;
const timeToDays = (time) => time/1000/60/60/24;
const getFullYearsFromBirthToTime = (birthdayTime, time) => {
  const birthDayDate = new Date(birthdayTime);
  const birthDay = birthDayDate.getDate();
  const birthMonth = birthDayDate.getMonth() + 1;
  const thisTimeYear = new Date(time).getFullYear();

  const thisYearBirthdayTime = new Date(
    `${birthMonth}-${birthDay}-${thisTimeYear}`
  ).getTime();
  const daysFromBirth = timeToDays(thisYearBirthdayTime - birthdayTime);
  // variance is leap years days.
  const variance = daysFromBirth >= 365? daysFromBirth % 365 : 0;
  const floatYear = (timeToDays(time - birthdayTime) - variance) / 365;
  return Math.floor(floatYear);
}

// sunday=0; monday=1; ...; saturday=6;
function getFirstWeekOfYear(year) {
  const date = getDateByStrDate(`${year}-01-01`);
  const day = date.getDay();
  const time = date.getTime();

  let firstMondayTime;
  if (day > 1) {
    firstMondayTime = time - daysToMilliseconds(day-1);
  } else if (day === 0) {
    firstMondayTime = time - daysToMilliseconds(6);
  } else {
    firstMondayTime = time;
  }

  if (new Date(firstMondayTime).getFullYear() < year) {
    firstMondayTime += weeksToMilliseconds(1);
  }

  return firstMondayTime;
}
