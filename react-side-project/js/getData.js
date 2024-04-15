// getData.js

function getData() {
  const url = "http://127.0.0.1:1522/html/sendData.html"; // The same endpoint if it supports GET or another endpoint

  fetch(url)
    .then((response) => response.json()) // Parse the JSON from the response
    .then((data) => {
      console.log("Received data:", data);
      // You can also manipulate the DOM here to display the data
      document.getElementById("name").textContent = data.name;
      document.getElementById("phone").textContent = data.phone;
    })
    .catch((error) => console.error("Error:", error));
}
