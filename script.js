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
