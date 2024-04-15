// sendData.js

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
    };

    sendData(formData);
  });

function sendData(data) {
  const url = "http://example.com/api/data"; // Your API endpoint or server URL

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
