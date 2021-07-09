let searchSedona = document.querySelector(".searchsedona");
let formShow = document.querySelector(".appointment-form");
let arrival = document.getElementById("arrival-date");
let departure = document.getElementById("date-of-departure");
let form = document.querySelector(".appointment-form");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let first = document.querySelector(".inp_first");
let btPlus = document.querySelector(".bt_plus");
let btMinus = document.querySelector(".bt_minus");
let second = document.querySelector(".inp_second");

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
