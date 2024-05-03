// Arrays of zodiac signs, predictions, and timings
const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const predictions = ["you will have a great day", "you will discover something new", "you will meet someone special", "challenges are ahead", "success is within your reach", "be cautious today"];
const timings = ["today", "this week", "this month", "this year"];

// Function to generate a random message
function generateRandomMessage() {
    // Randomly select a zodiac sign, prediction, and timing
    const sign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    const prediction = predictions[Math.floor(Math.random() * predictions.length)];
    const timing = timings[Math.floor(Math.random() * timings.length)];

    // Construct the message
    return `Your zodiac sign is ${sign}: ${prediction} ${timing}.`;
}

console.log(generateRandomMessage());

