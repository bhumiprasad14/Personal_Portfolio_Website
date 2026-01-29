// Toggle mobile menu
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.querySelector('.nav_links');

if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav_links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('http')) return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

let proj1=document.getElementById("card1");
proj1.addEventListener("click",()=>{
    window.open("https://weather-app-puce-zeta-20.vercel.app/")
});
let proj2=document.getElementById("card2");
if (proj2) {
    proj2.addEventListener("click",()=>{
        window.open("https://chatbot-app-bay-alpha.vercel.app/")
    });
}
let proj3=document.getElementById("card3");
proj3.addEventListener("click",()=>{
    window.open("https://tic-tac-toe-gilt-theta.vercel.app/")
});

// Prevent clicks on the inner project links from bubbling up to the card
document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation();
        // let the anchor's default behavior (opening href) continue
    });
});

// Mail link handler: offer to open mail client or copy address (prevents automatic webmail tab)
document.querySelectorAll('.mail-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const email = this.dataset.email || (this.getAttribute('href') || '').replace(/^mailto:/i, '');

        const openMail = confirm('Open your mail client?\n\nOK = Open mail client / Cancel = Copy email address');
        if (openMail) {
            // attempt to open the system mail client (browser may still route to webmail if configured)
            window.location.href = 'mailto:' + email;
            return;
        }

        // Copy to clipboard fallback
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                alert('Email address copied to clipboard: ' + email);
            }).catch(() => {
                window.prompt('Copy this email address:', email);
            });
        } else {
            window.prompt('Copy this email address:', email);
        }
    });
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