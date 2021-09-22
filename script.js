document.querySelector('#button-form').addEventListener('click', () => {
  const valorEmail = document.querySelector('#email').value;
  const valorSenha = document.querySelector('#password').value;
  if (valorEmail === 'tryber@teste.com' || valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const divAva = document.querySelector('#div-avaliador');
const numButton = 10;

function criaLabel() {
  const label = document.querySelector('label');
  label.innerHTML = 'Como você avalia a Trybewarts?';
  label.id = 'label-rate';
  divAva.appendChild(label);
}
criaLabel();

function criaButton() {
  for (let index = 1; index <= numButton; index += 1) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    label.innerHTML = `<label for="${index}">${index}</label>`;
    input.value = index;
    input.id = index;
    input.type = 'radio';
    input.name = 'rate';
    divAva.appendChild(input);
    divAva.appendChild(label);
  }
}
criaButton();
