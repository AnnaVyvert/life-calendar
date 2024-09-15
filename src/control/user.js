const setName = (name) => {
  userInfoElements.name.innerText = name;
}

const setBirthday = (birthday) => {
  userInfoElements.birth.innerText = formatDate(new Date(birthday));
}

const setWeeksLived = () => {
  userInfoElements.weeksLived.innerText = `~${weekLived || "you haven't been born yet"}`;
}

const setPersonalInfo = () => {
  setName(user.name);
  setBirthday(user.birthday);
  setWeeksLived(user.birthday);
}