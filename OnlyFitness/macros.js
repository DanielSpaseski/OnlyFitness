 function calculate() {
    // Get user input
    let age = parseInt(document.getElementById('age').value);
    var height = parseInt(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);
    var activityLevel = document.getElementsByName('activitylevel')[0].value;

    // Gender
    var gender = document.getElementById('m').checked ? 'male' : 'female';

    // Goal
    var goal = document.querySelector('input[name="radio"]:checked').nextElementSibling.textContent.toLowerCase();

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    var bmr;
    if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
} else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
}

    // Adjust BMR based on activity level
    var tdee;
    switch (activityLevel) {
    case 'sedentary':
    tdee = bmr * 1.2;
    break;
    case 'lightActivity':
    tdee = bmr * 1.375;
    break;
    case 'moderateActivity':
    tdee = bmr * 1.55;
    break;
    case 'veryActive':
    tdee = bmr * 1.725;
    break;
    default:
    tdee = bmr;
}

    // Adjust TDEE based on goal
    switch (goal) {
    case 'lose':
    tdee -= 500; // Create a caloric deficit for weight loss
    break;
    case 'gain':
    tdee += 500; // Create a caloric surplus for weight gain
    break;
    default:
}

    // Calculate macronutrient distribution (standard percentages)
    var protein = Math.round(0.3 * tdee / 4); // 30% of calories from protein
    var fat = Math.round(0.3 * tdee / 9); // 30% of calories from fat
    var carbs = Math.round(0.4 * tdee / 4); // 40% of calories from carbs

    // Display results on the webpage
    document.getElementById('calc-target-gain').innerHTML = 'Protein: ' + protein + 'g';
    document.getElementById('calc-target-maintain').innerHTML = 'Fat: ' + fat + 'g';
    document.getElementById('calc-target-lose').innerHTML = 'Carbs: ' + carbs + 'g';
}
