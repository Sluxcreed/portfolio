// ===== FORMULÁRIO =====

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

  // Impede o envio padrão
  event.preventDefault();

  // Campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const feedback = document.getElementById("feedback");

  // Regex simples para validar e-mail
  const emailValido = /\S+@\S+\.\S+/;

  // Verificação
  if(nome === "" || email === "" || mensagem === "") {

    feedback.innerText = "Preencha todos os campos.";

    return;
  }

  if(!emailValido.test(email)) {

    feedback.innerText = "Digite um e-mail válido.";

    return;
  }

  // Mensagem sucesso
  feedback.innerText = "Mensagem enviada com sucesso!";

  // Limpa formulário
  form.reset();

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