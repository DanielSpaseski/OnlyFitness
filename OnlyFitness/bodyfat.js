function calculate() {
    // Get gender selection
    const gender = document.querySelector('input[name="radio"]:checked');

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Get input values
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value/2.54);
    const weight = parseFloat(document.getElementById('weight').value);
    const waist = parseFloat(document.getElementById('waist').value/2.54);

    if (isNaN(age) || isNaN(height) || isNaN(weight) || isNaN(waist)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }

    // Calculate Body Fat Percentage
    let bodyFatPercentage;

    if (gender.id === 'm') {
        // Male formula
        bodyFatPercentage = 0.29288 * waist + 0.15845 * weight - 0.00024 * weight * waist - 0.73333;
    } else if (gender.id === 'f') {
        // Female formula
        bodyFatPercentage = 0.29669 * waist + 0.02963 * age + 0.40795 * weight - 0.00043 * weight * waist - 10.1266;
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = bodyFatPercentage.toFixed(2) + " %";

    // Provide a comment based on the result
    const commentElement = document.querySelector('.comment');
    if (bodyFatPercentage < 8) {
        commentElement.textContent = "Very lean";
    } else if (bodyFatPercentage >= 8 && bodyFatPercentage < 19) {
        commentElement.textContent = "Lean";
    } else if (bodyFatPercentage >= 19 && bodyFatPercentage < 25) {
        commentElement.textContent = "Moderate";
    } else {
        commentElement.textContent = "Obese";
    }

}


