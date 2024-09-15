const setName = (name) => {
  userInfoElements.name.innerText = name;
}

const setBirthday = (birthday) => {
  userInfoElements.birth.innerText = formatDate(new Date(birthday));
}

const setWeeksLived = () => {
  // const weeks = (timeToDays(new Date().getTime() - new Date(birthday).getTime())/7).toFixed(2);
  userInfoElements.weeksLived.innerText = `~${weekLived}`;
}

const setPersonalInfo = () => {
  setName(user.name);
  setBirthday(user.birthday);
  setWeeksLived(user.birthday);
}