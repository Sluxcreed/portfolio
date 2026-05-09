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

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("dark-mode");

});