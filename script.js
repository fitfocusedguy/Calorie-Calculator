// 🔐 Simple password protection
const correctPassword = "coachonly647";  // Change this as needed

function checkPassword() {
    let inputPassword = document.getElementById("password-input").value;
    if (inputPassword === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("calculator-container").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again.";
    }
}

// 🔢 Calorie & Macro Calculation
function calculate() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activity = document.getElementById("activity").value;
    let goal = document.getElementById("goal").value;

    if (!age || !height || !weight) {
        alert("Please fill all fields.");
        return;
    }

    // 📌 BMR Calculation
    let bmr = (gender === "male")
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    // 📌 Maintenance Calculation
    let maintenance;
    switch (goal) {
        case "kino": maintenance = weight * 15; break;
        case "muscle": maintenance = (activity === "low") ? weight * 15 : weight * 16; break;
        case "athlete": maintenance = (activity === "low") ? weight * 16 : (activity === "moderate") ? weight * 17 : weight * 18; break;
        case "lowcarb": maintenance = (activity === "low") ? weight * 14 : weight * 15; break;
        case "keto": maintenance = (activity === "low") ? weight * 13 : (activity === "moderate") ? weight * 14 : weight * 15; break;
        default: maintenance = weight * 15;
    }

    // 📌 Macro Split
    const macroSplits = {
        "kino": [0.25, 0.40, 0.35],
        "muscle": [0.40, 0.40, 0.20],
        "athlete": [0.30, 0.50, 0.20],
        "lowcarb": [0.50, 0.20, 0.30],
        "keto": [0.40, 0.10, 0.50]
    };

    let [proteinRatio, carbRatio, fatRatio] = macroSplits[goal];

    let protein = ((maintenance * proteinRatio) / 4).toFixed(1);
    let carbs = ((maintenance * carbRatio) / 4).toFixed(1);
    let fats = ((maintenance * fatRatio) / 9).toFixed(1);

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Maintenance Calories: ${maintenance} kcal</p>
        <p>Protein: ${protein}g | Carbs: ${carbs}g | Fats: ${fats}g</p>
    `;
}
