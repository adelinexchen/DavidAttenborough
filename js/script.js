// This javascript file is used for all pages, as it adds functionality to components 
// consistent on all pages e.g. side navigation bar

// retrieve user's balance. Default is $250
if (localStorage.getItem("balance") == null) {
  localStorage.setItem("balance", "250");
}

document.getElementById("balance").textContent =
  localStorage.getItem("balance");

// add functionality to side bar
document.querySelectorAll(".side_bar_buttons").forEach((sidebar_button) => {
  sidebar_button.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("closed_sidebar");
    document.querySelector(".sidebar").classList.add("opened_sidebar");
  });
});

// add functionality to close buttons
document.querySelectorAll(".exit").forEach((close_button) => {
  close_button.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.add("closed_sidebar");
    document.querySelector(".sidebar").classList.remove("opened_sidebar");
    document
      .querySelector(".insufficient")
      .classList.add("insufficient_closed");
    document
      .querySelector(".insufficient")
      .classList.remove("insufficient_opened");
      document.getElementById("popup").style.zIndex = "-1";
  });
});
