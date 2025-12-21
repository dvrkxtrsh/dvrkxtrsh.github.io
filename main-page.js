const titleAbyss = document.getElementById("titleAbyss");

function randomTransform() {
  const maxMove = 3;
  const maxRotate = 3;
  const maxScale = 0.05;

  const movex = (Math.random() * 2 - 1) * maxMove;
  const movey = (Math.random() * 2 - 1) * maxMove;
  const rotate = (Math.random() * 2 - 1) * maxRotate;
  const scale = (Math.random() * 2 - 1) * maxScale + 1;

  return "translate(" + movex + "px, " + movey + "px) rotate(" + rotate + "deg) scale(" + scale + ")";
}

function animateText(text) {
  for (let char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    titleAbyss.appendChild(span);
  }

  setInterval(() => {
    const spans = titleAbyss.querySelectorAll("span");
    spans.forEach(span => {
      span.style.transform = randomTransform();
  })}, 500);
}

animateText("the \xa0 abyss.");