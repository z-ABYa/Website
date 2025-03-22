const quizzes = [
    {
        title: "Quiz-1",
        questions: [
            { question: "For some integer 'm' every odd integer is of form ?", options: ["m+1", "2m", "m","2m+1"], answer: "2m+1" },
            { question: "From among a minimum of how many integers can you say that one is divisible by 3 ?", options: ["5", "1", "4","3"], answer: "4" },
            { question: "H. C. F. of 96 and 404 is ?", options: ["8", "4696", "96","4"], answer: "4" },
            { question: "Write the HCF of the smallest composite number and the smallest even number ?", options: ["4", "0", "1","2"], answer: "2" },
            { question: "If n is a positive integer , then n^2 - n is always ?", options: ["multiple of 2 and 4", "even", "odd or even","odd"], answer: "even" },
            { question: "One of the roots of the quadratic equation 6x^2 - x - 2 = 0 is: ?", options: ["-2/3", "-1/2", "1/2","-1"], answer: "1/2" },
            { question: "The solution of 5z^2 = 3z is ?", options: ["0,3/5", "0,-3/5", "3/5","0"], answer: "0,3/5" },
            { question: "Which of the following equations has 2 as a root ?", options: ["2x^2-7x+6=0", "x^2+3x-12=0", "3x^2-6x-2=0","x^2-4x+5=0"], answer: "2x^2-7x+6=0" },
            { question: "For an A.P. the third and the fifth terms are given as 10 and 16 .What is the fourth term and the common difference? ?", options: ["22,4", "4,6", "13,3","22,6"], answer: "13,3" },
            { question: "In an A.P. the two consecutive terms are (2n+3) and (2n+5). Find the common difference of the A.P. ?", options: ["2n+2", "2n+3", "2n","2n+15"], answer: "2n" }
        ]
    },
    {
        title:"QUIZ-2",
        questions: [
            { question: "If p, q, r, s, t are the terms of an A.P. with common difference -1 the relation between p and t is: ?", options: ["t=p-5", "t=p-4", "t=p-6","t=p+4"], answer: "t=p-4" },
            { question: "Is the sequence, whose general term is 5n2 + 2n + 3 an AP ?", options: ["No", "Insufficent Information", "Yes","Depends on n"], answer: "No" },
            { question: "Find the next two terms of the A.P.:- -10, -6,-2… ?", options: ["4,8", "-4,-8", "2,6","6,10"], answer: "2,6" },
            { question: "If a + 1, 2a + 1, 4a - 1 are in A.P., then value of 'a' is: ?", options: ["4", "3", "2","1"], answer: "2" },
            { question: "Give that an A.P. has term as 5 and common differences as 2. What is the A.p. ?", options: ["5,7,9,11,13", "5,7,9,10,11,12", "5,6,8,10,12","5,6,7,8,9,10"], answer: "5,7,9,11,13" },
            { question: "One end of a line of length 10 units is at the point (-3, 2). If the ordinate of the other end be 10, then the abscissa will be ?", options: ["9 or -3", "-9 or -3", "3 or -9","3 or 9"], answer: "3 or -9" },
            { question: "If a right angled triangle is revolved about one of the sides containing the right angle it forms a ?", options: ["Right circular cone", "Right triangle", "Prism","pyramid"], answer: "Right circular cone" },
            { question: "For some integer m every odd integer is of the form ?", options: ["m+1", "2m", "m","2m+1"], answer: "2m+1" },
            { question: "If the radius of the base of a right circular cylinder is halved keeping the height same, then the ratio of the volume of the cylinder thus obtained to the volume of original cylinder is ?", options: ["1:2", "2:1", "4:1","1:4"], answer: "1:4" },
            { question: "A right circular cylinder of radius r cm and height h cm (h>2r) just enclosed a sphere of diameter ?", options: ["r cm", "h cm", "2h cm","2r cm"], answer: "2r cm" }
        ]
    },
    {
        title: "Quiz-3",
        questions: [
            { question: "the curved surface area of a right circular cylinder is 1760 cm2 and its radius is 10 cm, then what is its height ?", options: ["7 cm", "24 cm^2", "28 cm","14 cm"], answer: "28 cm" },
            { question: "If two identical solid cubes each of volume 64 cm3 are joined end to end, then the total surface area of the resulting cuboid is: ?", options: ["210 cm^2", "200 cm^2", "160 cm^2","180 cm^2"], answer: "160 cm^2" },
            { question: "A golf ball has diameter equal to 4.2 cm. Its surface has 200 dimples each of radius 2 mm. Assuming that the dimples are hemispherical, total surface area which is exposed to the surroundings is ?", options: ["85.82 cm^2", "100 cm^2", "90 cm^2","80.58 cm^2"], answer: "80.58 cm^2" },
            { question: "circular tent is cylinder to a height of 4 m and conical above it. If its diameter is 105 m and its slant height is 40 m, then the area of canvas required is ?", options: ["1760 m^2", "3960 m^2", "7920 m^2","2640 m^2"], answer: "7920 m^2" },
            { question: "There are two cones. The curved surface area of one is twice that of the other. The slant height of the latter is twice that of the former. The ratio of their radii is ?", options: ["4:1", "1:3", "2:5","2:1"], answer: "2:1" },
            { question: "A toy is in the form of a cone mounted on a hemisphere of diameter 7 cm. The total height of the toy is 14.5 cm. The total surface area of the toy will be ?", options: ["304.5 cm^2", "400 cm^2", "203.94 cm^2","231 cm^2"], answer: "203.94 cm^2" },
            { question: "The area of the base of a cone is 616 sq. cm. If its height is 48 cm then its total surface area is: ?", options: ["8216 cm^2", "2861 cm^2", "2816 cm^2","2681 cm^2"], answer: "2816 cm^2" },
            { question: "A cylindrical pencil sharpened at one edge is the combination of ?", options: ["A hemisphere and a cylinder", "Two cylinder", "A cone and a cylinder","Frustum of a cone and a cylinder"], answer: "A cone and a cylinder" },
            { question: "The total surface area of an open pipe of length 50 cm, external diameter 20 cm and internal diameter 6 cm will be ?", options: ["4657.71 cm^2", "4757.71 cm^2", "4677.75 cm^2","4557.81 cm^2"], answer: "4757.71 cm^2" },
            { question: "If the probability of winning a game is 0.995, then the probability of losing is ?", options: ["0.05", "1", "0.005","0"], answer: "0.005" }
        ]
    }
];

let currentQuizIndex = -1;

function displayQuizSelection() {
    const quizList = document.getElementById('quiz-list');
    quizList.innerHTML = quizzes.map((quiz, index) => `
        <button class="quiz-btn" onclick="startQuiz(${index})">${quiz.title}</button>
    `).join('');
}

function startQuiz(index) {
    currentQuizIndex = index;
    document.getElementById('quiz-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    loadQuiz();
}

function loadQuiz() {
    const quiz = quizzes[currentQuizIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>${quiz.title}</h2>
        ${quiz.questions.map((q, index) => `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map((option, i) => `
                    <div>
                        <input type="radio" name="q${index}" id="q${index}a${i}" value="${option}">
                        <label for="q${index}a${i}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `).join('')}
        <button onclick="submitQuiz()">Submit</button>
    `;
}

function submitQuiz() {
    const quiz = quizzes[currentQuizIndex];
    let score = 0;

    quiz.questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your Score: ${score} out of ${quiz.questions.length}</p>`;

    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
}

document.getElementById('back-to-quiz-selection').addEventListener('click', () => {
    document.getElementById('quiz-selection').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
    displayQuizSelection();
});

// Initialize the quiz selection view on page load
window.onload = displayQuizSelection;
