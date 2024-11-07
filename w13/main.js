document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      output.innerHTML = "<h2>Start</h2>";
    
      setTimeout(() => {
          output.innerHTML = "<h2>Stop</h2>";
      }, 5000); 
  });
});