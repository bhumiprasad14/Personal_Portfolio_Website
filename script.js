let toggleMenu=document.getElementById("toggle-btn");
let navlinks=document.querySelector(".nav_links")
toggleMenu.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
})
let proj1=document.getElementById("card1");
proj1.addEventListener("click",()=>{
    window.open("https://weather-app-puce-zeta-20.vercel.app/")
});
let proj2=document.getElementById("card2");
proj2.addEventListener("click",()=>{
    window.open("https://rock-paper-scissors-game-seven-sigma.vercel.app/")
});
let proj3=document.getElementById("card3");
proj3.addEventListener("click",()=>{
    window.open("https://tic-tac-toe-gilt-theta.vercel.app/")
});
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Fill all the details');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent to Bhumi.`);
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}