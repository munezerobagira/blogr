let dropdowns = document.querySelectorAll(".nav-dropdown");
let allBtns = document.querySelectorAll(".btn");

// Prevent use from clicking other link
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    //     // Create the toast
    //     let toast = document.createElement("div");
    //     toast.innerHTML = "Sorry this  is challenge, there are no links";
    //     //create style object
    //     let styles = {
    //       width: "200px",
    //       height: "100px",
    //       border: "1px solid red",
    //       padding: "20px",
    //       position: "Fixed",
    //       top: "20px",
    //       left: "10px",
    //       background: "rgba(0,0,0,0.7)",
    //       zIndex: "20",
    //       display: "flex",
    //     };
    //     for (style in styles) {
    //       toast.style[style] = styles[style];
    //     }
    //     let parent = document.querySelector("header");
    //     // parent.appendChild(toast);
    //     setTimeout(
    //       (parent, toast) => {
    //         parent.removeChild(toast);
    //       },
    //       3000,
    //       parent,
    //       toast
    //     );
  });
});
console.log(dropdowns);
dropdowns.forEach((element) => {
  element.style.display = "none";
  element.parentNode.addEventListener("click", (event) => {
    element.style.display = element.style.display == "flex" ? "none" : "flex";
  });
});
