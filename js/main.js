let dropdowns = document.querySelectorAll(".nav-dropdown");
console.log(dropdowns);
dropdowns.forEach((element) => {
  element.style.display = "none";
  element.parentNode.addEventListener("click", (event) => {
    element.style.display = element.style.display == "flex" ? "none" : "flex";
  });
});
