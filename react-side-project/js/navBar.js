function loadNavbar() {
  fetch("../html/navBar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav3-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the navbar:", error));
}

// Call the function when the window loads
window.onload = function () {
  loadNavbar();
};
