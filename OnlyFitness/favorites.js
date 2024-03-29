 // Function to create an exercise card element with favorite functionality
function createExerciseCard(exercise) {
    const exerciseCard = document.createElement("div");
    exerciseCard.className = "exercise-card";
  
    const gifElement = document.createElement("img");
    gifElement.src = exercise.gifUrl;
    gifElement.alt = exercise.name;
    exerciseCard.appendChild(gifElement);

    const nameElement = document.createElement("h3");
    nameElement.textContent = exercise.name;
    exerciseCard.appendChild(nameElement);

    const bodyPartElement = document.createElement("p");
    bodyPartElement.textContent = "Body Part: " + exercise.bodyPart;
    exerciseCard.appendChild(bodyPartElement);

    const targetElement = document.createElement("p");
    targetElement.textContent = "Target: " + exercise.target;
    exerciseCard.appendChild(targetElement);

/* Create a dropdown element
    const dropdown = document.createElement("select");
    dropdown.className = "difficulty-dropdown";

// Add options to the dropdown
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < days.length; i++) {
        const option = document.createElement("option");
        option.value = days[i].toLowerCase();
        option.textContent = days[i];
        dropdown.appendChild(option);
    }

// Append the dropdown to the exercise card
    exerciseCard.appendChild(dropdown);

// Add event listener for dropdown change
    dropdown.addEventListener("change", function () {
        const selectedOption = dropdown.value;
        // Store the selected difficulty level in localStorage
        localStorage.setItem("selectedDifficulty", selectedOption);
    });

// Retrieve and set the selected option from localStorage
    const storedOption = localStorage.getItem("selectedDifficulty");
    if (storedOption) {
        dropdown.value = storedOption;
    }

 */




    const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  exerciseCard.appendChild(removeButton);
  
    removeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        exerciseCard.remove();
        // Get the exercise ID or a unique identifier for the exercise
        const exerciseId = exercise.id; // Adjust this based on your exercise object structure
      
        // Retrieve the list of favorite exercises from the local storage
        let favoriteExercises = JSON.parse(localStorage.getItem("favoriteExercises")) || [];
      
        // Check if the exercise is already in the favorite list
        const index = favoriteExercises.findIndex((favExercise) => favExercise.id === exerciseId);
      
        if (index === -1) {
          // Add the exercise to the favorite list
          favoriteExercises.push(exercise);
        } else {
          // Remove the exercise from the favorite list
          favoriteExercises.splice(index, 1);
        }
      
        // Store the updated favorite list in the local storage
        localStorage.setItem("favoriteExercises", JSON.stringify(favoriteExercises));
      });
      
  
    return exerciseCard;
  }

  // Retrieve the favorite exercises from the local storage
const favoriteExercises = JSON.parse(localStorage.getItem("favoriteExercises")) || [];

// Get a reference to the favorites container element
const favoritesContainer = document.getElementById("favorites-container");

// Check if there are any favorite exercises
if (favoriteExercises.length === 0) {
  // Display a message if no favorite exercises are found
  favoritesContainer.innerHTML = "<p>No favorite exercises found.</p>";
} else {
  // Render the favorite exercises on the page
  favoriteExercises.forEach((exercise) => {
    const exerciseCard = createExerciseCard(exercise);
    favoritesContainer.appendChild(exerciseCard);
  });
}

