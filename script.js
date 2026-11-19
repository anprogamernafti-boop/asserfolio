const yearLabel = document.querySelector("[data-current-year]");

if (yearLabel) {
  yearLabel.textContent = String(new Date().getFullYear());
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const status = document.getElementById("cf-status");
  const button = document.getElementById("cf-submit");
  const nameField = contactForm.elements["name"];
  const emailField = contactForm.elements["email"];
  const messageField = contactForm.elements["message"];

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = "contact-status" + (kind ? " is-" + kind : "");
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    [nameField, emailField, messageField].forEach((field) => {
      const value = field.value.trim();
      const bad = !value || (field.type === "email" && !/^\S+@\S+\.\S+$/.test(value));
      field.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setStatus("Check the highlighted fields: name, a valid email and your message are required.", "error");
      firstInvalid.focus();
      return;
    }

    button.disabled = true;
    setStatus("Sending…");

    fetch(contactForm.dataset.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
    })
      .then((response) => {
        if (!response.ok) throw new Error("Bad status");
        contactForm.reset();
        setStatus("Message sent. I’ll reply within two working days.", "ok");
      })
      .catch(() => {
        setStatus("The message didn’t go through. Try again, or message me on LinkedIn.", "error");
      })
      .finally(() => {
        button.disabled = false;
      });
  });
}
