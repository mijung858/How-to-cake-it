function helloUser(text) {
  nameForm.classList.remove(SHOWING_CLASS); //폼이 나타남
  sayHello.classList.add(SHOWING_CLASS); //h4보이게
  sayHello.innerText = "Hello ${text}";
}
