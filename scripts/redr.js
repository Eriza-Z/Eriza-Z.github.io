let counter = document.querySelector('h2');
let count = 5;

setInterval(() => {
  counter.innerText = count;
  count++;
}, 5000);