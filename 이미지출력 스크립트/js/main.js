// alert("hi");

// $(document).ready(function () {
//   $("#option_button").click(function () {
//     $("#slider_show").show();
//   });
// });

$(document).ready(function () {
  $(".single-item").slick({});
});
let dragged;

// // /* 드래그 가능한 대상에서 발생하는 이벤트 */
// document.addEventListener("drag", (event) => {
//   console.log("dragging");
// });

// document.addEventListener("dragstart", (event) => {
//   // 드래그한 요소에 대한 참조 저장
//   dragged = event.target;
//   // 반투명하게 만들기
//   event.target.classList.add("dragging");
// });

// document.addEventListener("dragend", (event) => {
//   // 투명도 초기화
//   event.target.classList.remove("dragging");
// });

// /* 드롭 대상에서 발생하는 이벤트 */
// document.addEventListener(
//   "dragover",
//   (event) => {
//     // 드롭을 허용하기 위해 기본 동작 취소
//     event.preventDefault();
//   },
//   false
// );

// document.addEventListener("dragenter", (event) => {
//   // 드래그 가능한 요소가 대상 위로 오면 강조
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.add("dragover");
//   }
// });

// document.addEventListener("dragleave", (event) => {
//   // 드래그 가능한 요소가 대상 밖으로 나가면 강조 제거
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.remove("dragover");
//   }
// });

// document.addEventListener("drop", (event) => {
//   // 일부 요소의 링크 열기와 같은 기본 동작 취소
//   event.preventDefault();
//   // 드래그한 요소를 선택한 드롭 대상으로 이동
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.remove("dragover");
//     dragged.parentNode.removeChild(dragged);
//     event.target.appendChild(dragged);
//   }
// });

const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input"),
  sayHello = document.querySelector(".js-sayHello");

const SAVE_NAME = "userName", //저장될이름
  SHOWING_CLASS = "showing"; //클래스 쇼잉

function saveName(text) {
  localStorage.setItem(SAVE_NAME, text); //입력한 텍스트저장
}

function askForName() {
  nameForm.classList.add(SHOWING_CLASS); //폼이 나타남
  nameForm.addEventListener("submit", writeSubmit); //폼에 사용자 이름출력하는 이벤트 발생
}

function helloUser(text) {
  nameForm.classList.remove(SHOWING_CLASS); //폼이 나타남
  sayHello.classList.add(SHOWING_CLASS); //h4보이게
  sayHello.innerText = `Hello ${text}`;
}
function writeSubmit(event) {
  event.preventDefault();
  const userValue = nameInput.value;
  helloUser(userValue);
  saveName(userValue);
}

function submitName() {
  const nowUser = localStorage.getItem(SAVE_NAME);
  if (nowUser === null) {
    askForName();
  } else {
    helloUser(nowUser);
  }
}
function init() {
  submitName();
}
init();
