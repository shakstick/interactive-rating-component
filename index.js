const first_card = document.querySelector("section.card");
const second_card = document.querySelector("section.card.success");

const numbers = document.querySelectorAll(".number");
const rate = document.getElementById("rate");
const submit = document.querySelector(".submit");

rate.textContent = "1";

numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    number.classList.add("active");
    rate.textContent = number.getAttribute("num");
    remove(index);
  });
});

// for removing other selected rates
const remove = (index) => {
  numbers.forEach((number, indexarr) => {
    if (index != indexarr) {
      number.classList.remove("active");
    }
  });
};

submit.addEventListener("click", () => {
  first_card.classList.add("hidden");
  second_card.classList.remove("hidden");
});
