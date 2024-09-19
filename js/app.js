/*-------------------------------- Imports --------------------------------*/
import { story } from "../story/story.js"
/*-------------------------------- Constants --------------------------------*/
const startButton = document.querySelector('#start');
const buttonSection = document.querySelector("#button-section");
const input = document.querySelector('#input');
const firstElement = document.querySelector("#first");
const secondElement = document.querySelector("#second");
const firstImageElement = document.querySelector("#first-image");
const secondImageElement = document.querySelector("#second-image");
/*-------------------------------- Variables --------------------------------*/
let characterName;
let storyPart = "partOne";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', (e) => {
  characterName = input.value;
  displayStory()
});

/*-------------------------------- Functions --------------------------------*/

function displayStory(){
  const currentStory = story[storyPart]

  firstElement.innerText = currentStory.first
  secondElement.innerText = currentStory.second
  firstImageElement.src = currentStory.imageOne
  secondImageElement.src = currentStory.imageTwo

  let buttonsHtml = ""

  currentStory.choices.forEach((choice) => {
    buttonsHtml += `<button class="bananas">${choice}</button>`
  })

  buttonSection.innerHTML = buttonsHtml

  const allChoices = document.querySelectorAll(".bananas")
  allChoices.forEach((btnChoice) => {
    btnChoice.addEventListener("click", (e) => {
      storyPart = e.target.innerText
      displayStory()
    })
  })
};