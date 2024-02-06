// const gamenameForm = document.querySelector(".js-nameForm"),
//   gamenameInput = gamenameForm.querySelector("nameinput"),
//   sayHello = document.querySelector(".js-sayHello");

// const SAVE_NAME = "userName", //저장될이름
//   SHOWING_CLASS = "showing"; //클래스 쇼잉
// DELETE_CLASS = "delete"; //클래스 삭제

// function saveName(text) {
//   localStorage.setItem(SAVE_NAME, text); //입력한 텍스트저장
// }

// function askForName() {
//   gamenameForm.classList.add(SHOWING_CLASS); //폼이 나타남
//   gamenameForm.addEventListener("submit", writeSubmit); //폼에 사용자 이름출력하는 이벤트 발생
// }

// function helloUser(text) {
//   sayHello.classList.add(SHOWING_CLASS); //h4보이게
//   sayHello.innerText = `Hello ${text}`;
// }
// function writeSubmit(event) {
//   event.preventDefault();
//   const userValue = helloUser(userValue);
//   saveName(userValue);
// }

// function submitName() {
//   const nowUser = localStorage.getItem(SAVE_NAME);
//   if (nowUser === null) {
//     askForName();
//   } else {
//     helloUser(nowUser);
//     gamenameInput.style.display = "none";
//   }
// }
// function init() {
//   submitName();
// }
// init();
// const gamenameForm = document.querySelector(".formLine");
// const gamenameInput = gamenameForm.querySelector(".nameinput");
// const sayHello = document.querySelector(".js-sayHello");
// const img = document.createElement("img");
// img.src = "img/arrow_outward.svg";
// const SAVE_NAME = "userName"; // 저장될 이름
// const SHOWING_CLASS = "showing"; // 클래스 쇼잉

// function saveName(text) {
//   localStorage.setItem(SAVE_NAME, text); // 입력한 텍스트 저장
// }

// function askForName() {
//   gamenameForm.classList.add(SHOWING_CLASS); // 폼이 나타남
//   gamenameForm.addEventListener("submit", writeSubmit); // 폼에 사용자 이름 출력하는 이벤트 발생
// }

// function helloUser(text) {
//   sayHello.classList.add(SHOWING_CLASS); // h4 보이게
//   sayHello.innerText = ` ${text} WELCOME ! appendChild(img);`;
// }

// function writeSubmit(event) {
//   event.preventDefault();
//   const userValue = gamenameInput.value;
//   helloUser(userValue);
//   saveName(userValue);
//   gamenameForm.style.display = "none"; // Hide the entire form after submitting
// }

// function submitName() {
//   const nowUser = localStorage.getItem(SAVE_NAME);
//   if (nowUser === null) {
//     askForName();
//   } else {
//     helloUser(nowUser);
//     gamenameForm.style.display = "none"; // Hide the entire form if the name is already stored
//   }
// }

// function init() {
//   submitName();
// }

// init();
const gamenameForm = document.querySelector(".formLine");
const gamenameInput = gamenameForm.querySelector(".nameinput");
const sayHello = document.querySelector(".js-sayHello");
const SAVE_NAME = "userName"; // Storage key
const SHOWING_CLASS = "showing"; // Class for showing elements

function saveName(text) {
  localStorage.setItem(SAVE_NAME, text);
}

function askForName() {
  gamenameForm.classList.add(SHOWING_CLASS);
  gamenameForm.addEventListener("submit", writeSubmit);
}

function helloUser(text) {
  sayHello.classList.add(SHOWING_CLASS);
  sayHello.innerHTML = `${text} <span class="welcome-text">WELCOME !</span>`;
  const img = document.createElement("img");
  img.src = "img/arrow_outward.svg";
  sayHello.appendChild(img); // Append the image after the text

  // Add CSS styles
  // Change the font-family
  sayHello.style.fontSize = "24px"; // Set the font size
  sayHello.style.color = "black"; // Set the text color
  sayHello.style.fontWeight = "bold"; // Set the font weight
  sayHello.style.lineHeight = "4"; // Set the line-height
  img.style.marginBottom = "-12px";
}

// Add more styles as needed

function writeSubmit(event) {
  event.preventDefault();
  const userValue = gamenameInput.value;
  helloUser(userValue);
  saveName(userValue);
  gamenameForm.style.display = "none";
}

function submitName() {
  const nowUser = localStorage.getItem(SAVE_NAME);
  if (nowUser === null) {
    askForName();
  } else {
    helloUser(nowUser);
    gamenameForm.style.display = "none";
  }
}

function init() {
  submitName();
}

init();
