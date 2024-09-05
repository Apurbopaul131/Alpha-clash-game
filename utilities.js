const addOrRemoveClassById = (elementId, elementClass, indicator) => {
  const targetElement = document.getElementById(elementId);
  if (indicator) {
    targetElement.classList.add(elementClass);
  } else {
    targetElement.classList.remove(elementClass);
  }
};

const gentrateRandomAlphabet = () => {
  const alphabetsStr = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArr = alphabetsStr.split("");
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabetsArr[randomIndex];
  return alphabet;
};

const setInnerText = (elementId, expectedText) => {
  const textElement = document.getElementById(elementId);
  textElement.innerText = expectedText;
};

const getInnerText = (elementId) => {
  const htmlTargetElement = document.getElementById(elementId);
  const elementText = htmlTargetElement.innerText;
  return elementText;
};

const gameOver = () => {
  //hidden playground screen
  addOrRemoveClassById("playground-screen", "hidden", true);

  //Show final score screen
  addOrRemoveClassById("final-score-screen", "hidden", false);

  //update final score
  const finalGameSocre = parseInt(getInnerText("current-score"));
  setInnerText("show-final-score", finalGameSocre);
};
