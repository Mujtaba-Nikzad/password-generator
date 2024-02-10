
let passwordEl = document.getElementById("inputPass");

function genePass() {
  let characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = Math.floor(Math.random() * 10 + 5);
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  passwordEl.textContent = password;
  console.log(password);
}
