// Gtag.js
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RRMG5E1NE2');
// ID remove
var links=document.getElementsByTagName("a");Array.prototype.forEach.call(links,function(elem,index){var elemAttr=elem.getAttribute("href");if(elemAttr&&elemAttr.includes("#")){elem.addEventListener("click",function(ev){ev.preventDefault();document.getElementById(elemAttr.replace(/#/g,"")).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})}})
// Google Form
const scriptURL='https://script.google.com/macros/s/AKfycbwDFQ3u2CaMDH4iwjTxQiO-wQTMkrJAeEWfsy7pi7rPYHaSdWo1HCGFIdj_sksrGp8flA/exec'
const form=document.forms['erizazg-contact-form'];const btnKirim=document.querySelector('.btn-kirim');const btnLoading=document.querySelector('.btn-loading');const formAlert=document.querySelector('.form-alert');form.addEventListener('submit',e=>{e.preventDefault();btnLoading.classList.toggle('d-none');btnKirim.classList.toggle('d-none');fetch(scriptURL,{method:'POST',body:new FormData(form)}).then(response=>{btnLoading.classList.toggle('d-none');btnKirim.classList.toggle('d-none');formAlert.classList.toggle('d-none');form.reset()
console.log('Success!',response)}).catch(error=>console.error('Error!',error.message))})
// GSAP
gsap.to(".about-text", {
  duration: 4.25,
  text: {
      value: "Name: Eriza <br>Hobby: Game, Music, Do Something Stupid <br>Live In: Indonesia<br>",
      delimiter: ""
  }
});
// Typing
let typed = new Typed("#axf", {
  strings: ["Friendly Guy", "Game Lover", "Tech Lover", "Not An Anime Lover", "Not A Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})