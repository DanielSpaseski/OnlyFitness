// Get DOM elements
const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const genderInputs = document.querySelectorAll('input[name="radio"]');
const resultElement = document.getElementById("result");
const commentElement = document.querySelector(".comment");

// Calculate IBW when the "Calculate IBW" button is clicked
document.getElementById("submit").addEventListener("click", calculate);

// Function to calculate IBW
function calculate() {
    const age = parseFloat(ageInput.value);
    const height = parseFloat(heightInput.value);
    let gender = "";

    // Get the selected gender
    genderInputs.forEach((input) => {
        if (input.checked) {
            gender = input.id;
        }
    });

    // Check if age and height are valid numbers
    if (isNaN(age) || isNaN(height)) {
        alert("Please enter valid age and height.");
        return;
    }

    // Calculate IBW based on gender
    let ibw = 0;

    if (gender === "m") {
        ibw = 48 + 2.7 * (height - 152.4)/2.54;
    } else if (gender === "f") {
        ibw = 45.5 + 2.2 * (height - 152.4)/2.54;
    }

    // Display the result
    resultElement.textContent = ibw.toFixed(2) + " kg";
    commentElement.textContent = "This is your Ideal Body Weight.";
}

