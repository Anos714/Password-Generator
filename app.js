let inputBox = document.querySelector("#input");
let generatePass = document.querySelector(".btndiv");
let copy = document.querySelector(".inputImg");

let length = 12;

let capital = "BCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()?/|-_+=<>{}[]";

let allChars = capital + small + number + symbol;

function generatePassword() {
  let password = "";
  password += capital[Math.floor(Math.random() * capital.length)];
  password += small[Math.floor(Math.random() * small.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
}

generatePass.addEventListener("click", () => {
  generatePassword();
});

copy.addEventListener("click", () => {
  inputBox.select();
  document.execCommand("copy");
});
