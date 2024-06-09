document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    if (name && email && message) {
      formMessage.textContent = "Thank you for your message, " + name + "!";
      formMessage.style.color = "green";

      // Reset the form
      this.reset();
    } else {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    }
  });
