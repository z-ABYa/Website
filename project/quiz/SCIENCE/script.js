const quizzes = [
    {
        title: "Quiz-1",
        questions: [
            { question: "Which part of the Central Nervous System controls “reflex Actions”  ?", options: ["Mesencephalon", "Rhombencephalon", "Medulla oblongata","Spinal Chord"], answer: "Spinal Chord" },
            { question: "Whch among the following are called scavengers of ecosystems ?", options: ["Bacteria", "Fungi & Bacteria", "Algae, Fungi & Bacteria","None of the above"], answer: "Fungi & Bacteria" },
            { question: "The cultivation of which of the plants on wastelands has a potential to generate biofuel in large quantities ?", options: ["Jatropha curcas", "Copaifera langsdorffii", "Camelina sativa","None of the above"], answer: "Jatropha curcas" },
            { question: "Lepidopterology is a branch of biology, which deals with the following ?", options: ["Ferns", "animals in stagnant waters", "Lipids and Fats","Moths & Butterflies"], answer: "Moths & Butterflies" },
            { question: "Lacrimal apparatus, Lacrimal artery, Lacrimal bone, Lacrimal ducts, Lacrimal fossa, Lacrimal fluid & Lacrimal gland are parts of which organ of the body ?", options: ["Ear", "Nose", "Eye","Throat"], answer: "Eye" },
            { question: "Due to which of the processes in plants the Radiocarbon dating is possible to estimate their age ?", options: ["Growth", "Chemosynthesis", "Photosynthesis","Assimilation"], answer: "Photosynthesis" },
            { question: "Which of the following branches of biology studies the Joint of bones is ?", options: ["Autecology", "Araneology", "Arthrology","Anthropology"], answer: "Arthrology" },
            { question: "What is the force that is required to produce unit elongation in a wire known as ?", options: ["Bulk modulus", "Thermal strain", "Thermal stress","Force constant"], answer: "Force constant" },
            { question: "Which of the following factors affect the Surface Tension ?", options: ["Nature of liquid", "Area of Surface", "Both a and b","None of the above"], answer: "Nature of liquid" },
            { question: "Which of the following represents angular frequency of a body ?", options: ["twice the frequency of the body", "product of frequency of the body with π", "half the frequency of the body","product of frequency of the body with 3 π"], answer: "twice the frequency of the body" }
        ]
    },
    {
        title:"QUIZ-2",
        questions: [
            { question: "When does a saturated hydrocarbon gives a sooty flame on burning ?", options: ["When the supply of oxygen is limited", "When the supply of oxygen is full", "A saturated hydrocarbon never gives a sooty flame on burning","None of the above"], answer: "When the supply of oxygen is limited" },
            { question: "Which of the metals is most reactive out of the given options ?", options: ["Potassium", "Sodium", "Calcium","Magnesium"], answer: "Potassium" },
            { question: "Which branch of biology is known for the study of internal body structure ?", options: ["Anatomy", "Biometrics", "Pathology","None of these"], answer: "Anatomy" },
            { question: "Which of the following is a characteristic of the plant kingdom ?", options: ["contains cell walls and cellulose", "are microscopic", "heterotrophic and multicellular organisms","none of the above"], answer: "contains cell walls and cellulose" },
            { question: "In which of the following cells are chloroplasts present ?", options: ["plants", "algae", "Both 1 & 2","Neither 1 nor 2"], answer: "Both 1 & 2" },
            { question: "Which of the following is a characteristic of angiosperms ?", options: ["Seed-bearing plants", "Seeds are enclosed within fruits", "Both 1 & 2","Neither 1 nor 2"], answer: "Seeds are enclosed within fruits" },
            { question: "The importance of day length in plants was first shown in__ ?", options: ["Barley", "Lettuce", "Tobacco","Tomato"], answer: "Lettuce" },
            { question: "Which two elements were discovered by Marie Curie ?", options: ["Polonium and Radium", "Radium and Strontium", "Strontium and Radon","Radon and Polonium"], answer: "Polonium and Radium" },
            { question: "What percentage of carbon is present in steel ?", options: ["0.0 to 2.5", "2.5 to 5.0", "5.0 to 7.5","7.5 to 10.0"], answer: "0.0 to 2.5" },
            { question: "Which of the following comprise plant decomposers ?", options: ["Monera and fungi", "Plantae and fungi", "Monera and Animalia","Animalia and Protista"], answer: "Monera and fungi" }
        ]
    },
    {
        title: "Quiz-3",
        questions: [
            { question: "Who discovered nucleus of cell wall ?", options: ["Theodor Boveri", "Robert Brown", "Albert von Kolliker","Robert Hooke"], answer: "Robert Brown" },
            { question: "What is the arrangement of ovules inside the ovary called ?", options: ["Aestivation", "Placentation", "Hibernation"," Fragmentation"], answer: "Placentation" },
            { question: "The patterns of arrangement of leaves on the stem are called__ ?", options: ["Scale Leaves", "Leaf Roots", "Phyllode","Phyllotaxy"], answer: "Phyllotaxy" },
            { question: "What percentage of sunlight falls on the earth's surface trapped by plants ?", options: ["4%", "3%", "2%","1%"], answer: "1%" },
            { question: "What is the function of chlorophyll ?", options: ["Attract water", "Trap Light energy", "Stores starch in leaves","Emits green light"], answer: "Trap Light energy" },
            { question: "Fruits like seedless cucumbers can be induced to produce fruit by treating the flowers of uninfected plants with which hormone ?", options: ["Cytokinins", "Auxins", "Abscisic Acid","Ethylene"], answer: "Auxins" },
            { question: "What diseases can we get in the large intestine ?", options: ["Diverticulitis", "Appendicitis", "Hemorrhoids","All of the above"], answer: "All of the above" },
            { question: "Which of these statements is not true regarding the function of hormones ?", options: ["Reproduction and sexual differentiation", "Maintenance of internal environment", "Maintain body temperature","Development and growth"], answer: "Maintain body temperature" },
            { question: "Which of the following diseases is caused by protozoa ?", options: ["Whooping cough", "Amoebic dysentery", "Measles","Athlete's foot"], answer: "Amoebic dysentery" },
            { question: "The wing of a bat and the wing of a bird are the examples of __ limbs: ?", options: ["Heterogeneous", "Homogenous", "Homologous","Analogous"], answer: "Analogous" }
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
