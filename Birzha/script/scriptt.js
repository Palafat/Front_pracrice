document.addEventListener("DOMContentLoaded", () => {
  const customer = document.getElementById("customer"),
    freelancer = document.getElementById("freelancer"),
    blockCustomer = document.querySelector("#block-customer"),
    blockFreelance = document.querySelector("#block-freelancer"),
    blockChoice = document.getElementById("block-choice"),
    btnExit = document.getElementById("btn-exit"),
    formCustomer = document.getElementById("form-customer");

  const orders = [];

  customer.addEventListener("click", () => {
    blockChoice.style.display = "none";
    blockCustomer.style.display = "block";
    btnExit.style.display = "block";
  });

  freelancer.addEventListener("click", () => {
    blockChoice.style.display = "none";
    blockFreelance.style.display = "block";
    btnExit.style.display = "block";
  });

  btnExit.addEventListener("click", () => {
    btnExit.style.display = "none";
    blockFreelance.style.display = "none";
    blockCustomer.style.display = "none";
    blockChoice.style.display = "block";
  });

  formCustomer.addEventListener("submit", (event) => {
    event.preventDefault();

    const obj = {};

    const elements = [...formCustomer.elements]
      .filter((elem) => {
        return (elem.tagName === "INPUT" && elem.type !== "radio") ||
          (elem.type === "radio" && elem.checked) ||
          elem.tagName === "TEXTAREA"
      });

    elements.forEach((elem) => {

      obj[elem.name] = elem.value;

      if (elem.type !== "radio") {
        elem.value = "";
      }

    });

    orders.push(obj);
    console.log(orders);
  });
});