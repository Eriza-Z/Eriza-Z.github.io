let counter = document.querySelector('h2');
let count = 5;

setInterval(() => {
  counter.innerText = count;
  count++;

  if(count > 5) location.replace();
}, 5000);