document.querySelector("#toggleNav").addEventListener("click", () => {
  document.querySelector("#sidebar").style.width = "200px";
});

document.querySelector("#closeBtn").addEventListener("click", () => {
  document.querySelector("#sidebar").style.width = "0";
});
