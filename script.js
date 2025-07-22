function changeBackground() {
  const colors = ['#ffadad', '#ffd6a5', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
// window.onload = function() {
//   alert("Welcome to my Portfolio! 👋");
// }

const toggleBtn = document.getElementById('theme-toggle');

// Load saved theme on page load
window.onload = function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// When the button is clicked
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
const typewriterTexts = ["Hello, I'm Meghna 👋", "Aspiring Developer", "Tech Enthusiast", "Fast Learner"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // Lower = faster

function typeEffect() {
  const target = document.getElementById("typewriter");

  if (textIndex === typewriterTexts.length) {
    textIndex = 0; // Restart after last text
  }

  const currentText = typewriterTexts[textIndex];
  const visibleText = currentText.substring(0, charIndex + 1);
  target.innerText = visibleText;
  charIndex++;

  if (visibleText === currentText) {
    // Pause before deleting or switching
    setTimeout(() => {
      charIndex = 0;
      textIndex++;
      setTimeout(typeEffect, 500); // Next string after short pause
    }, 1500);
  } else {
    setTimeout(typeEffect, typingSpeed);
  }
}

// Start the effect
typeEffect();

// Scroll-triggered fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
