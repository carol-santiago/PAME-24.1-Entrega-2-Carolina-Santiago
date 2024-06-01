document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o botão de enviar
  const enviar = document.querySelector(".btn-login");

  enviar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value;

    console.log("Email:", emailValue);
    console.log("Senha:", passwordValue);

    alert(
      "Login realizado com sucesso!\n\n" +
        "Email: " +
        emailValue +
        "\nSenha: " +
        passwordValue
    );
  });
});
