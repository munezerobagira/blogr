let dropdowns = document.querySelectorAll(".nav-dropdown");
let allBtns = document.querySelectorAll(".btn");
let toggler = document.querySelector("#toggler");
//
/**
 * handles the navbar toggling event for mobile
 * @param {object} event-  click event
 * @returns {none}
 */
const tooglerHandler = (event) => {
  //Prevent the default click events
  event.preventDefault();
  //
  let navbar = document.querySelector("#main-nav"); // get navbar element
  let toggerBtn = document.querySelector("#togger-btn"); //Button to toggle navbar
  //a
  let attrib = toggerBtn.getAttribute("src");
  attrib == "./images/icon-hamburger.svg"
    ? navbar.classList.add("not-hidden")
    : navbar.classList.remove("not-hidden");

  toggerBtn.setAttribute(
    "src",
    attrib == "./images/icon-hamburger.svg"
      ? "./images/icon-close.svg"
      : "./images/icon-hamburger.svg"
  );
};
toggler.addEventListener("click", tooglerHandler);
// Prevent use from clicking other link
dropdowns.forEach((element) => {
  element.style.display = "none";
  let parent = element.parentNode;

  console.log(parent);
  parent.addEventListener("click", (event) => {
    dropdowns.forEach((el) => {
      if (el != element) el.style.display = "none";
      console.log(el);
      el.parentNode.childNodes.forEach((child) => {
        if (child.nodeName == "IMG") child.classList.remove("inverted");
      });
    });
    element.style.display = element.style.display == "flex" ? "none" : "flex";
    let dropdownIcons = [];
    parent.childNodes.forEach((child) => {
      if (child.nodeName == "IMG")
        element.style.display == "flex"
          ? child.classList.add("inverted")
          : child.classList.remove("inverted");
    });
  });
});
