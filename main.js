document.querySelector("button").addEventListener("click", function() {
    alert("Welcome!");
});

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const allInputs = form.querySelectorAll('input');
  let isAllFilled = true;
  for (const input of allInputs) {
    if (!input.value) {
      isAllFilled = false;
      break;
    }
  }

  if (!isAllFilled) {
    alert('Harap isi bagian yang kosong!');
    return;
  }
  form.submit();
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = 'Form terkirim!';

})