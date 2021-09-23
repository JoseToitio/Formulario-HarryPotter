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

function enableButton() {
  const buttonOff = document.querySelector('#submit-btn');
  buttonOff.disabled = true;
  document.querySelector('#agreement').addEventListener('input', () => {
    const IsChecked = document.querySelector('#agreement').checked;
    if (IsChecked === true) {
      buttonOff.disabled = false;
    } else {
      buttonOff.disabled = true;
    }
  });
}
enableButton();

const desc = document.querySelector('#textarea');
const cont = document.querySelector('#counter');
const maxChars = 500;
function verifica(_e) {
  const qtdCaracteres = desc.value.length;
  const restantes = maxChars - qtdCaracteres;
  cont.innerHTML = restantes;
}
desc.addEventListener('keyup', verifica);

// const nomeSubmit = document.querySelector('#nome-submit');
// const emailSubmit = document.querySelector('#email-submit');
// const casaSubmit = document.querySelector('#casa-submit');
// const familiaSubmit = document.querySelector('#familia-submit');
// const materiasSubmit = document.querySelector('#materias-submit');
// const notaSubmit = document.querySelector('#nota-submit');
// const obsSubmit = document.querySelector('#obs-submit');

// const nomeValue = document.querySelector('#input-name');
// const sobrenomeValue = document.querySelector('#input-lastname');
// const casaValue = document.querySelector('#house');
// const familiaValue = document.querySelector('input[name="family"]:checked').value;
// const
// function submitButton() {
//   document.querySelector('submit-btn').addEventListener('click', () => {

//   });
// }
