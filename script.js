// ===== FORMULÁRIO =====

const form = document.getElementById("contact-form");

form.addEventListener("submit", function() {

  const feedback = document.getElementById("feedback");

  feedback.innerText = "Mensagem enviada com sucesso!";

});

// ===== TEMA ESCURO =====

const button = document.getElementById("theme-button");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // muda o ícone automaticamente
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }
});