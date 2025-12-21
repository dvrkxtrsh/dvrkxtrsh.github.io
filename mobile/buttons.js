const closeBtn = document.getElementById("closeBtnId");
const errorWindow = document.getElementById("errorWindow");

closeBtn.addEventListener("click", closeWindow);

function closeWindow() {
  errorWindow.style.display = "none";
}