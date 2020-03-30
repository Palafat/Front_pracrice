document.addEventListener("DOMContentLoaded", () => {
    const customer = document.getElementById("customer"),
        freelancer = document.getElementById("freelancer"),
        blockFreelancer = document.getElementById("block-freelancer"),
        blockChoice = document.getElementById("block-choice"),
        btnExit = document.getElementById("btn-exit"),
        blockCustomer = document.getElementById("block-customer");

    customer.addEventListener("click", () => {
        blockCustomer.style.display = "block";
        blockChoice.style.display = "none";
        btnExit.style.display = "block";
    });

    freelancer.addEventListener("click", () => {
        blockFreelancer.style.display = "block";
        blockChoice.style.display = "none";
        btnExit.style.display = "block";
    });

    btnExit.addEventListener("click", () => {
        blockChoice.style.display = "block";
        blockFreelancer.style.display = "none";
        blockCustomer.style.display = "none";
        btnExit.style.display = "none";
    });
});