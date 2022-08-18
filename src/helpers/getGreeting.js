function getGreetingsBasedOnTime(userName) {
  var time = new Date().getHours();

  if (time < 12) {
    return `Good Morning ${userName}`;
  } else if (time < 18) {
    return `Good Afternoon ${userName}`;
  } else {
    return `Good Evening ${userName}`;
  }
}
export default getGreetingsBasedOnTime;
