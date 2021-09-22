document.querySelector('#button-form').addEventListener("click", () => {
  const valorEmail = document.querySelector("#email").value;
  const valorSenha = document.querySelector("#password").value;
  if (valorEmail === "tryber@teste.com" || valorSenha === "12345678" ){
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos")
  }
});

