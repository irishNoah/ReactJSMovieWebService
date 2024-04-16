// footer.js
function loadFooter() {
  fetch("../html/footer.html") // Adjust the path as necessary
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading the footer:", error);
    });
}

// 페이지 로드 시 footer를 불러오도록 설정
document.addEventListener("DOMContentLoaded", function () {
  loadFooter();
});
