 function calculate() {
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="radio"]:checked').id;

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("Please enter valid numeric values for all fields.");
    return;
}

    const bmi = weight / (height * height);
    let comment = "";

    if (bmi < 18.5) {
    comment = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    comment = "Normal weight";
} else if (bmi >= 25 && bmi < 30) {
    comment = "Overweight";
} else {
    comment = "Obese";
}

    const resultElement = document.getElementById("result");
    const commentElement = document.querySelector(".comment");
    resultElement.textContent = bmi.toFixed(2);
    commentElement.textContent = "You are " + comment.toLowerCase() + ".";
    commentElement.style.display = "block";
}


