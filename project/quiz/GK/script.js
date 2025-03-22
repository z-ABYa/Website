const quizzes = [
    {
        title: "Quiz-1",
        questions: [
            { question: "Fathometer is used to measure ?", options: ["Earthquakes", "Rainfall", "Ocean depth","Sound intensity"], answer: "Ocean depth" },
            { question: "Fastest Shorthand Writer was ?", options: ["Dr.G.D.Bist", "J.R.D. Tata", "J.M. Tagore","Khudada Khan"], answer: "Dr.G.D.Bist" },
            { question: "Epsom(England) is the place associated with ?", options: ["Snooker", "Shooting", "Polo","Horse racing"], answer: "Horse racing" },
            { question: "Golf player Vijay Singh belongs to which country ?", options: ["USA", "Fiji", " India","UK"], answer: "Fiji" },
            { question: "One People, One State, One leader” was the policy of ?", options: ["Stalin", "Hitler", "Lenin","Mussolin"], answer: "Hitler" },
            { question: "6 months day and 6 months night - Country Name? ?", options: ["Nepal", "Tibet", "Norway","Iceland"], answer: "Norway" },
            { question: "Who will inaugurate the 6th Asia Pacific Ministerial Conference ?", options: ["Venkaiah Naidu", "Sushma Swaraj", "Narendra Modi","Menaka Gandhi"], answer: "Narendra Modi" },
            { question: "Which of the following has no Skeleton at all ?", options: ["Star fish", "Sponge", "Jelly fish","Silver fish"], answer: "Sponge" },
            { question: "What animal has the worst memory ?", options: ["Dog", "Rat", "Elephant","Dolphin"], answer: "Rat" },
            { question: "The Bhindawas Bird Sanctuary (BBS) is located in which state  ?", options: ["Madhya Pradesh", "Bihar", "Odisha","Haryana"], answer: "Haryana" }
        ]
    },
    {
        title:"QUIZ-2",
        questions: [
            { question: "What is the capital of France ?", options: ["Berlin", "Madrid", "Paris","Madras"], answer: "Paris" },
            { question: "Which animal can create the loudest sound among any living creature ?", options: ["Whale shark", "Gibbon", "Humpback Whales","Howler monkey"], answer: "Humpback Whales" },
            { question: "Who is the author of the book 'Freedom Behind Bars ?", options: ["Kiran Bedi", "Jawaharlal Nehru", "Nelson Mandela","Sheikh Abdullah"], answer: "Kiran Bedi" },
            { question: "Which of the following is not written by Munshi Premchand ?", options: ["Gaban", "Godan", "Manasorovar","Guide"], answer: "Guide" },
            { question: "Who is the author of the book New India ?", options: ["Manik Bandopadhyay", "Annie Besant", "John Milton","None"], answer: "Annie Besant" },
            { question: "Ankara is the capital of which country ?", options: ["Uruguay", "Turkey", "Uganda","Vanuatu"], answer: "Turkey" },
            { question: "What is the capital of Finland ?", options: ["Conakry", "Prague", "Helsinki","None of the above"], answer: "Helsinki" },
            { question: "Feroz Gandhi Award is associated with ?", options: ["Medical Research", "Journalism", "reservation of worldlife","Parlimentory debate"], answer: "Journalism" },
            { question: "Who among the following is not a recipient of Bharat Ratna ?", options: ["Dr. S. Radhakrishnan", "Sardar Vallabhbhai Patel", "Mrs. Indira Gandhi","Lal Bahadur Shastri"], answer: "Lal Bahadur Shastri" },
            { question: "Which continent is Australia in ?", options: ["Asia", "Australia", "Africa","Europe"], answer: "Australia" }
        ]
    },
    {
        title: "Quiz-3",
        questions: [
            { question: "Global 500 ' awards are given for the outstanding achievement in which of the following fields ?", options: ["Population Control", "campaign against drugs", "Elimination of illiteracy","Protection of environment"], answer: "Protection of environment" },
            { question: "The journalist who refused to accept Padma Bhushan was ?", options: ["Shekharan Nair", "Khushwant Singh", "Arun Shourie","Ratan Thiyam"], answer: "Khushwant Singh" },
            { question: "Saraswati Samman is given annually for outstanding contribution to ?", options: ["Literature", "Education", "Fine arts","Classical Music"], answer: "Literature" },
            { question: "B.C.Roy Award is given in the field of ?", options: ["Journalism", "Medicine", "Music","Environment"], answer: "Medicine" },
            { question: "The blue colour of the clear sky is due to ?", options: ["Diffraction of light", "Dispersion of light", "Reflection of light","Refraction of light"], answer: "Diffraction of light" },
            { question: "What color does yellow and green make ?", options: ["Lime", "Ocean mist", "Maroon","Tangerine"], answer: "Lime" },
            { question: "As you go down into a well, your weight ?", options: [" Increases slightly", "Decreases slightly", "Remains exactly the same","None of the above"], answer: "Decreases slightly" },
            { question: "Which of the following is used in pencils ?", options: ["Charcoal", "Graphite", "Phosphorous","Silicon"], answer: "Graphite" },
            { question: "Who proposed the Preamble before the Drafting Committee of the Constitution ?", options: ["Mahatma Gandhi", " B.N.Rau", "B.R. Ambedkar","Jawaharlal Nehru"], answer: "Jawaharlal Nehru" },
            { question: "Union Budget is always presented first in ____ ?", options: ["Meeting of the Union Cabinet", "Joint session of the Parliament", "The Rajya Sabha","The Lok Sabha"], answer: "The Lok Sabha" },
            { question: "Who is the guardian of fundamental Rights enumerated in Indian Constitution ?", options: ["Supreme Court", "Parliament", "Constitution","President"], answer: "Supreme Court" }
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
