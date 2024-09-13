const daysToMilliseconds = (number) => number*24*60*60*1000;
const weeksToMilliseconds = (number) => number*daysToMilliseconds(7);
const getDateByStrDate = (strDate) => new Date(strDate);
const getTimeYearStart = (year) => getDateByStrDate(`${year}-01-01`).getTime();
const formatDate = (date) => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

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

  return firstMondayTime;
}
