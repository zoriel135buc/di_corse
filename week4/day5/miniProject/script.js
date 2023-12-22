function playTheGame() {
  if (confirm("Press a button!") == true) {
    let userNumber = prompt("enter a number between 0 and 10");
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      alert("Sorry Not a number, Goodbye");
      return;
    } else {
      let computerNumber = Math.floor(Math.random() * 10);
      console.log(computerNumber);
      compareNumbers(userNumber, computerNumber);
    }
  } else {
    alert("No problem, Goodbye");
  }
}

playTheGame();

function compareNumbers(computerNumber, userNumber) {
  let tries = 0;
  console.log(`computer number:${computerNumber}`);
  console.log(`user number:${userNumber}`);

  while (tries < 3 && computerNumber != userNumber) {
    if (userNumber > computerNumber) {
      alert("Your number is bigger then the computer's, guess again");
      userNumber = prompt("enter a number between 0 and 10");
      console.log(`computer number:${computerNumber}`);
      console.log(`user number:${userNumber}`);
      tries++;
    } else if (userNumber < computerNumber) {
      alert("Your number is smaller then the computer's, guess again");
      userNumber = prompt("enter a number between 0 and 10");
      console.log(`computer number:${computerNumber}`);
      console.log(`user number:${userNumber}`);
      tries++;
    } else {
      alert("out of chances");
    }
    alert("winer");
    console.log("winner");
    console.log(`computer number:${computerNumber}`);
    console.log(`user number:${userNumber}`);
    return;
  }
}
