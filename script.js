//your JS code here. If required.
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  
  if (nameInput.value.trim() === '' || ageInput.value.trim() === '') {
    alert('Inputs cannot be empty!');
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    const age = parseInt(ageInput.value);
    if (age >= 18) {
      setTimeout(() => {
        resolve(`Welcome, ${nameInput.value}.You can vote.`);
      }, 4000);
    } else {
      reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
    }
  });
  
  promise.then((message) => {
    alert(message);
  }).catch((error) => {
    alert(error);
  });
  
  form.reset();
});
