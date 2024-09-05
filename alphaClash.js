const enterPlay = () => {
  // When click to the play button then hide the home screen
  addOrRemoveClassById("home-screen", "hidden", true);
  // Remove class from playground and show to the user interface
  addOrRemoveClassById("playground-screen", "hidden", false);
  continuePlay();
};

//This function used for handle playground relaed inital work
const continuePlay = () => {
  // call function to get random alphabet or latter
  const alphabet = gentrateRandomAlphabet();

  //display latter to the screen
  setInnerText("display-latter", alphabet);

  //set backgroup color to the keyboard user interface
  addOrRemoveClassById(alphabet, "bg-[#FFA500]", true);
};

//This function used for handle keyup event on the playground
const handleKeyupEvent = (event) => {
  const playerPressedAlpahbet = event.key;
  console.log(playerPressedAlpahbet);
  //over the game if click escape button
  if (playerPressedAlpahbet === "Escape") {
    gameOver();
  }
  const expectedAlphabetElement = document.getElementById("display-latter");
  const expectedActualAlphabet =
    expectedAlphabetElement.innerText.toLowerCase();
  if (playerPressedAlpahbet === expectedActualAlphabet) {
    //update current score
    //call function to get score value
    const currentScoreNum = parseInt(getInnerText("current-score"));
    //increase value by one
    const updatedScore = currentScoreNum + 1;
    //set the value into score
    setInnerText("current-score", updatedScore);

    //remove previous key background color
    addOrRemoveClassById(expectedActualAlphabet, "bg-[#FFA500]", false);

    //call function to continue the game
    continuePlay();
  } else {
    //call function to get life value
    const currentLifeNum = parseInt(getInnerText("current-life"));
    //decrease value by one
    const updateLife = currentLifeNum - 1;
    //set updated value into life
    setInnerText("current-life", updateLife);
    if (updateLife === 0) {
      //Tihs function call when over the game
      gameOver();
    }
  }
};
// Captured entered key
document.addEventListener("keyup", handleKeyupEvent);

//This function call when clicked play now button in the final score scrren
const playAgain = () => {
  //hide final score screen
  addOrRemoveClassById("final-score-screen", "hidden", true);

  //Set life and score to initial point
  setInnerText("current-life", 5);
  setInnerText("current-score", 0);

  //To remove previous element background color
  //remove previous key background color
  const expectedActualAlphabet =
    getInnerText("display-latter").toLocaleLowerCase();
  addOrRemoveClassById(expectedActualAlphabet, "bg-[#FFA500]", false);

  //To remove previous alphabet and load new alphabet
  continuePlay();

  //show playGound screen
  addOrRemoveClassById("playground-screen", "hidden", false);
};
