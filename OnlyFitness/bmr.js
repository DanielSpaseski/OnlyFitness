// Function to calculate BMR based on user input
function calculateBMR() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.querySelector('input[name="radio"]:checked').id;

  if (isNaN(height) || isNaN(weight) || isNaN(age)) {
    alert("Please enter valid numeric values for all fields.");
    return;
  }

  let bmr = 0;

  if (gender === "m") {
    // BMR calculation for males
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "f") {
    // BMR calculation for females
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  return bmr.toFixed(2);
}

// Function to update BMR result and comment
function updateBMRResult() {
  const resultElement = document.getElementById("result");
  const commentElement = document.querySelector(".comment");

  const calculatedBMR = calculateBMR();

  resultElement.textContent = calculatedBMR;

  // Add a comment based on BMR value
  if (calculatedBMR < 1200) {
    commentElement.textContent = "Your BMR is very low.";
  } else if (calculatedBMR > 2500) {
    commentElement.textContent = "Your BMR is quite high.";
  } else {
    commentElement.textContent = "";
  }
}

// Add event listener to the "Calculate BMR" button
const calculateButton = document.getElementById("submit");
calculateButton.addEventListener("click", updateBMRResult);
