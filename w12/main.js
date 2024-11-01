document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Display "Start" message as a heading
      output.innerHTML = "<h2>Start</h2>";

      // Set delay for "Stop" message (5 seconds for demo)
      setTimeout(() => {
          output.innerHTML = "<h2>Stop</h2>";
      }, 5000); // Adjust delay time if needed
  });
});