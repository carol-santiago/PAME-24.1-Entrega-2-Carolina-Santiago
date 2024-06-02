document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o botão de enviar
  const enviar = document.querySelector(".btn-login"); // Seleciona o botão de enviar

  enviar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const emailInput = document.getElementById("email"); // Seleciona o input de email
    const emailValue = emailInput.value; // Guarda o valor do input de email

    const passwordInput = document.getElementById("password"); // Seleciona o input de senha
    const passwordValue = passwordInput.value; // Guarda o valor do input de senha

    // console.log("Email:", emailValue);
    // console.log("Senha:", passwordValue);

    alert(
      "Login realizado com sucesso!\n\n" +
        "Email: " +
        emailValue +
        "\nSenha: " +
        passwordValue
    );
  });
});
