const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const questions = [
    { id: 1, question: "What is 5 + 3?", options: ["5", "6", "7", "8"], answer: "8" },
    { id: 2, question: "What is the capital of Italy?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: "Rome" },
    { id: 3, question: "Which number comes next in 2, 4, 8, 16?", options: ["32", "20", "24", "30"], answer: "32" },
    { id: 4, question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: "Da Vinci" },
    { id: 5, question: "What is 25% of 200?", options: ["40", "50", "60", "70"], answer: "50" },
    { id: 6, question: "What is the smallest prime number?", options: ["1", "2", "3", "5"], answer: "2" },
    { id: 7, question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { id: 8, question: "What is 15 x 2 - 10?", options: ["10", "20", "30", "40"], answer: "20" },
    { id: 9, question: "Who wrote '1984'?", options: ["Orwell", "Huxley", "Shakespeare", "Dickens"], answer: "Orwell" },
    { id: 10, question: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { id: 11, question: "Solve: 9 + 3 x 2", options: ["24", "15", "13", "18"], answer: "15" },
    { id: 12, question: "What is the capital of Canada?", options: ["Toronto", "Montreal", "Ottawa", "Vancouver"], answer: "Ottawa" },
    { id: 13, question: "What is the boiling point of water in Celsius?", options: ["50", "100", "150", "200"], answer: "100" },
    { id: 14, question: "Which shape has 8 sides?", options: ["Pentagon", "Hexagon", "Octagon", "Decagon"], answer: "Octagon" },
    { id: 15, question: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: "Newton" },
    { id: 16, question: "Which is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
    { id: 17, question: "What is 8 squared?", options: ["48", "56", "64", "72"], answer: "64" },
    { id: 18, question: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { id: 19, question: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger", "Horse"], answer: "Cheetah" },
    { id: 20, question: "What is 144 divided by 12?", options: ["10", "12", "14", "16"], answer: "12" },
    { id: 21, question: "Who wrote 'Pride and Prejudice'?", options: ["Austen", "Bronte", "Dickens", "Hemingway"], answer: "Austen" },
    { id: 22, question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Shark", "Giraffe"], answer: "Blue Whale" },
    { id: 23, question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { id: 24, question: "What is 50% of 80?", options: ["30", "35", "40", "45"], answer: "40" },
    { id: 25, question: "Which gas is essential for breathing?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Oxygen" },
    { id: 26, question: "What is the capital of Germany?", options: ["Munich", "Frankfurt", "Berlin", "Hamburg"], answer: "Berlin" },
    { id: 27, question: "What is 11 x 11?", options: ["99", "110", "121", "132"], answer: "121" },
    { id: 28, question: "Which metal is used in thermometers?", options: ["Iron", "Copper", "Mercury", "Silver"], answer: "Mercury" },
    { id: 29, question: "What is 30 divided by 6?", options: ["3", "4", "5", "6"], answer: "5" },
    { id: 30, question: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: "9" },
    { id: 31, question: "What is the missing number in the series? 3, 6, 11, 18, ?", options: ["27", "26", "25", "24"], answer: "27" },
    { id: 32, question: "Which word does NOT belong? Apple, Banana, Carrot, Orange", options: ["Apple", "Banana", "Carrot", "Orange"], answer: "Carrot" },
    { id: 33, question: "If 2 + 3 = 13, 4 + 5 = 41, then 6 + 7 = ?", options: ["79", "85", "81", "77"], answer: "85" },
    { id: 34, question: "Which shape has the most sides?", options: ["Triangle", "Square", "Pentagon", "Hexagon"], answer: "Hexagon" },
    { id: 35, question: "Which number comes next? 121, 144, 169, ?", options: ["196", "200", "190", "185"], answer: "196" },
    { id: 36, question: "Which planet is closest to the Sun?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: "Mercury" }, 
    { id: 37, question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo" },
    { id: 38, question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Lion", "Elephant", "Cheetah"], answer: "Lion" },
    { id: 39, question: "What is 7 x 8?", options: ["54", "56", "64", "72"], answer: "56" },
    { id: 40, question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Hawking"], answer: "Einstein" },
    { id: 41, question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { id: 42, question: "What is 10²?", options: ["20", "50", "100", "200"], answer: "100" },
    { id: 43, question: "Which country is famous for the Great Wall?", options: ["India", "China", "Japan", "Russia"], answer: "China" },
    { id: 44, question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8" },
    { id: 45, question: "What is the capital of France?", options: ["Rome", "Madrid", "Berlin", "Paris"], answer: "Paris" },
    { id: 46, question: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { id: 47, question: "What is 3³?", options: ["6", "9", "27", "81"], answer: "27" },
    { id: 48, question: "Who painted 'The Starry Night'?", options: ["Van Gogh", "Da Vinci", "Picasso", "Monet"], answer: "Van Gogh" },
    { id: 49, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { id: 50, question: "What is 12 x 12?", options: ["120", "132", "144", "156"], answer: "144" },
    { id: 51, question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { id: 52, question: "How many bones are in the adult human body?", options: ["206", "210", "180", "220"], answer: "206" },
    { id: 53, question: "Who discovered penicillin?", options: ["Newton", "Darwin", "Fleming", "Einstein"], answer: "Fleming" },
    { id: 54, question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
    { id: 55, question: "What is the national flower of Japan?", options: ["Lily", "Rose", "Cherry Blossom", "Tulip"], answer: "Cherry Blossom" },
    { id: 56, question: "Which element has the symbol 'O'?", options: ["Oxygen", "Gold", "Iron", "Helium"], answer: "Oxygen" },
    { id: 57, question: "How many sides does a hexagon have?", options: ["4", "5", "6", "8"], answer: "6" },
    { id: 58, question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: "Shakespeare" },
    { id: 59, question: "What is 1000 divided by 10?", options: ["10", "50", "100", "200"], answer: "100" },
    { id: 60, question: "Which country has the most population?", options: ["USA", "India", "China", "Russia"], answer: "China" },
    { id: 61, question: "What is 5 factorial (5!)?", options: ["25", "60", "120", "150"], answer: "120" },
    { id: 62, question: "Who invented the light bulb?", options: ["Edison", "Tesla", "Newton", "Bell"], answer: "Edison" },
    { id: 63, question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { id: 64, question: "What is the capital of Russia?", options: ["Moscow", "Kiev", "Warsaw", "Prague"], answer: "Moscow" },
    { id: 65, question: "Which ocean is the deepest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { id: 66, question: "What is the chemical symbol for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O" },
    { id: 67, question: "What is 4²?", options: ["8", "12", "16", "20"], answer: "16" },
    { id: 68, question: "Which continent is the largest?", options: ["Europe", "North America", "Asia", "Africa"], answer: "Asia" },
    { id: 69, question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { id: 70, question: "How many months have 31 days?", options: ["5", "6", "7", "8"], answer: "7" },
    { id: 71, question: "Which is the closest star to Earth?", options: ["Sirius", "Alpha Centauri", "Sun", "Polaris"], answer: "Sun" },
    { id: 72, question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: "3" },
    { id: 73, question: "What is the chemical symbol for silver?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Ag" },
    { id: 74, question: "Which is the largest desert in the world?", options: ["Gobi", "Sahara", "Antarctica", "Kalahari"], answer: "Antarctica" },
    { id: 75, question: "Who was the first person to step on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
    { id: 76, question: "What is the largest island in the world?", options: ["Australia", "Greenland", "Madagascar", "Borneo"], answer: "Greenland" },
    { id: 77, question: "What is the longest bone in the human body?", options: ["Humerus", "Tibia", "Femur", "Radius"], answer: "Femur" },
    { id: 78, question: "What is 20% of 200?", options: ["20", "30", "40", "50"], answer: "40" },
    { id: 79, question: "Which gas is used in balloons?", options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"], answer: "Helium" },
    { id: 80, question: "What is the freezing point of water in Fahrenheit?", options: ["0", "32", "50", "100"], answer: "32" },
    { id: 81, question: "How many chambers are in the human heart?", options: ["2", "3", "4", "5"], answer: "4" },
    { id: 82, question: "Which is the only mammal that can fly?", options: ["Squirrel", "Bat", "Eagle", "Pigeon"], answer: "Bat" }, 
        { id: 83, question: "Which planet is known for its rings?", options: ["Mars", "Venus", "Saturn", "Neptune"], answer: "Saturn" },
        { id: 84, question: "What is the largest mammal?", options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
        { id: 85, question: "Who wrote 'The Odyssey'?", options: ["Plato", "Aristotle", "Homer", "Socrates"], answer: "Homer" },
        { id: 86, question: "How many players are on a soccer team?", options: ["9", "10", "11", "12"], answer: "11" },
        { id: 87, question: "Which gas do humans breathe in the most?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
        { id: 88, question: "What is 9 x 9?", options: ["72", "81", "90", "99"], answer: "81" },
        { id: 89, question: "What does 'HTTP' stand for?", options: ["Hyper Text Transfer Protocol", "High Tech Transfer Process", "Hyperlink Transfer Protocol", "Hyper Transfer Text Protocol"], answer: "Hyper Text Transfer Protocol" },
        { id: 90, question: "Who discovered gravity?", options: ["Einstein", "Galileo", "Newton", "Kepler"], answer: "Newton" },
        { id: 91, question: "Which organ pumps blood in the body?", options: ["Liver", "Lungs", "Heart", "Brain"], answer: "Heart" },
        { id: 92, question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
        { id: 93, question: "Which country gifted the Statue of Liberty to the USA?", options: ["Germany", "France", "Italy", "Spain"], answer: "France" },
        { id: 94, question: "What is the smallest unit of matter?", options: ["Atom", "Molecule", "Proton", "Electron"], answer: "Atom" },
        { id: 95, question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci" },
        { id: 96, question: "How many grams are in a kilogram?", options: ["10", "100", "500", "1000"], answer: "1000" },
        { id: 97, question: "Which planet is closest to the Sun?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: "Mercury" },
        { id: 98, question: "What is the boiling point of water in Celsius?", options: ["90", "100", "110", "120"], answer: "100" },
        { id: 99, question: "Which continent is the Sahara Desert in?", options: ["Asia", "Africa", "South America", "Australia"], answer: "Africa" },
        { id: 100, question: "Which metal is liquid at room temperature?", options: ["Iron", "Gold", "Mercury", "Silver"], answer: "Mercury" }
    
];

// API endpoint to fetch all questions
app.get("/", (req, res) => {
    res.json(questions);
});

// API endpoint to fetch a specific question by ID
app.get("/questions/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const question = questions.find(q => q.id === id);          
    if (question) {
        res.json(question);
    } else {
        res.status(404).json({ message: "Question not found" });
    }
});

// API endpoint to submit an answer
app.post("/submit", (req, res) => {
    const { id, answer } = req.body;
    const question = questions.find(q => q.id === id);
    if (question) {
        const isCorrect = question.answer === answer;
        res.json({ correct: isCorrect });
    } else {
        res.status(404).json({ message: "Question not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
                                                                        