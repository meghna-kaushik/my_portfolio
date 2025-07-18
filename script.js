function changeBackground() {
  const colors = ['#ffadad', '#ffd6a5', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
// window.onload = function() {
//   alert("Welcome to my Portfolio! 👋");
// }

