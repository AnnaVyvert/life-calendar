const weekNumberToMilliseconds = (number) => number*7*24*60*60*1000;
const getTimeFromYear = (year) => new Date(`${year}-01-01`).getTime();
const formatDate = (date) => `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

// export { * as  };