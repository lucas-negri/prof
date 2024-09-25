// 1

const form = document.querySelector("form");
const divTabuada = document.querySelector(".tabuada");

form.addEventListener("submit", (e) => {
  const inputValue = document.querySelector("input").value;
  e.preventDefault();

  divTabuada.innerHTML = ""; 

  for (let i = 1; i <= 10; i++) {
    divTabuada.innerHTML += `<p>${inputValue} x ${i} = ${inputValue * i}</p>`;
  }
}); 

//2 

const button = document.querySelector("#button");
const inpu = document.querySelector("#input");

const handleClick = () => {
  input.value = "olá mundo";
};

button.addEventListener("click",handleClick)

//3


const botao = document.querySelector("#wrapper > button");
const input = document.querySelector("#wrapper > input");

input.style.backgroundColor = "red"; // Corrigido

botao.addEventListener("click", () => {
  input.value = input.value === "OFF" ? "ON" : "OFF"; // Corrigido

  input.style.backgroundColor = // Corrigido
    input.style.backgroundColor === "red" ? "green" : "red";
});