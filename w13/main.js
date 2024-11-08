document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      const exercise = document.getElementById("exercise").value;
      const reps = parseInt(document.getElementById("reps").value);
      const intensity = document.getElementById("intensity").value;
      const time = parseInt(document.getElementById("time").value);

      startWorkout(exercise, reps, intensity, time)
          .then((startMessage) => {
              renderMessage(startMessage);
              return endWorkout(exercise, reps, intensity, time);
          })
          .then((endMessage) => {
              renderMessage(endMessage);
          })
          .catch(onError);
  });
});

function renderMessage(message) {
    output.innerHTML = "";
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add("fs-4", "text-center");

    output.appendChild(messageElement);
}

function startWorkout(exercise, reps, intensity, time) {
  return new Promise((resolve, reject) => {
      if (exercise === null || exercise === "") {
          reject("Please select an exercise.");
      } else if (isNaN(reps) || reps <= 0) {
          reject("Please enter a valid number of reps (greater than 0).");
      } else if (intensity === null || intensity === "") {
          reject("Please select an intensity level.");
      } else if (time === null || isNaN(time) || time <= 0) {
          reject("Please enter a valid time (greater than 0).");
      } else {
          resolve(`Let's get moving! Starting your ${intensity} intensity ${exercise} workout for ${time} minutes!`);
      }
  });
}

function endWorkout(exercise, reps, intensity, time) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(`Workout complete! You completed ${reps} reps of ${exercise} at ${intensity} intensity in ${time} minutes.`);
      }, 5000);
  });
}

function onError(errorMessage) {
    renderMessage(`ERROR: ${errorMessage}`);
    output.querySelector("p").style.color = "red";
}