const searchSedona = document.querySelector(".searchsedona");
const formShow = document.querySelector(".appointment-form");
const arrival = document.getElementById("arrival-date");
const departure = document.getElementById("date-of-departure");
const form = document.querySelector(".appointment-form");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const first = document.querySelector(".inp-first");
const btPlus = document.querySelector(".bt-plus");
const btMinus = document.querySelector(".bt-minus");
const second = document.querySelector(".inp-second");

searchSedona.addEventListener("click", function (evt) {
  console.log("ass");
  formShow.classList.toggle("popup");
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    form.classList.toggle("shake");
  };
  evt.preventDefault();
});

plus.addEventListener("click", function () {
  first.value = +first.value + 1;
});
minus.addEventListener("click", function () {
  first.value = +first.value - 1;
});
btPlus.addEventListener("click", function () {
  second.value = +second.value + 1;
});
btMinus.addEventListener("click", function () {
  second.value = +second.value - 1;
});
