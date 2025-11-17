document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact_form");

  async function handleSubmit(event) {
    event.preventDefault();

    var data = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          alert("Thanks for your message! I'll get back to you soon.");
        } else {
          alert("Oops! There was a problem sending your message.");
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        alert("Oops! There was a network error.");
      });
  }

  form.addEventListener("submit", handleSubmit);
});