// Quiz Questions
const questions = [
    // ==================== INTERESTS ====================
    {
        id: 1,
        type: 'multiple-choice',
        category: 'interests',
        question: 'Which activity sounds most exciting to you?',
        description: 'Choose the one that appeals to you most',
        options: [
            {
                text: 'Building or designing physical things',
                description: 'Robots, machines, buildings, products',
                weights: { hands_on: 3, design: 3, technology: 2 }
            },
            {
                text: 'Analyzing data and finding patterns',
                description: 'Statistics, trends, insights',
                weights: { math: 3, problem_solving: 3, technology: 2 }
            },
            {
                text: 'Creating visual content or art',
                description: 'Graphics, videos, photography, brands',
                weights: { design: 3, creativity: 3, communication: 2 }
            },
            {
                text: 'Working with people and communities',
                description: 'Teaching, counseling, organizing',
                weights: { communication: 3, teamwork: 3, creativity: 1 }
            },
            {
                text: 'Conducting experiments and research',
                description: 'Lab work, scientific discovery',
                weights: { science: 3, problem_solving: 2, hands_on: 2 }
            }
        ]
    },
    {
        id: 2,
        type: 'multiple-choice',
        category: 'interests',
        question: 'What type of problem do you enjoy solving?',
        options: [
            {
                text: 'Technical challenges',
                description: 'Fixing systems, debugging code, troubleshooting',
                weights: { technology: 3, problem_solving: 3, math: 1 }
            },
            {
                text: 'Creative challenges',
                description: 'Design problems, artistic expression',
                weights: { creativity: 3, design: 3, communication: 1 }
            },
            {
                text: 'Strategic challenges',
                description: 'Business decisions, planning, optimization',
                weights: { business: 3, problem_solving: 2, teamwork: 2 }
            },
            {
                text: 'Scientific questions',
                description: 'Why things work, how nature operates',
                weights: { science: 3, problem_solving: 2, math: 2 }
            },
            {
                text: 'People problems',
                description: 'Conflicts, motivation, organization',
                weights: { communication: 3, teamwork: 2, creativity: 1 }
            }
        ]
    },
    {
        id: 3,
        type: 'multi-select',
        category: 'interests',
        question: 'Which subjects did you enjoy most in school?',
        description: 'Select all that apply',
        options: [
            { text: 'Mathematics', weights: { math: 2 } },
            { text: 'Science (Biology, Chemistry, Physics)', weights: { science: 2 } },
            { text: 'Computer Science / Technology', weights: { technology: 2 } },
            { text: 'Art / Design', weights: { design: 2, creativity: 2 } },
            { text: 'English / Writing', weights: { communication: 2, creativity: 1 } },
            { text: 'History / Social Studies', weights: { communication: 1 } },
            { text: 'Business / Economics', weights: { business: 2 } }
        ]
    },

    // ==================== SKILLS ====================
    {
        id: 4,
        type: 'scale',
        category: 'skills',
        question: 'How comfortable are you with advanced math?',
        description: 'Calculus, statistics, algebra',
        min: 1,
        max: 10,
        labels: ['Not comfortable', 'Very comfortable'],
        attribute: 'math',
        multiplier: 1
    },
    {
        id: 5,
        type: 'scale',
        category: 'skills',
        question: 'How strong are your communication skills?',
        description: 'Writing, speaking, presenting',
        min: 1,
        max: 10,
        labels: ['Need improvement', 'Excellent'],
        attribute: 'communication',
        multiplier: 1
    },
    {
        id: 6,
        type: 'scale',
        category: 'skills',
        question: 'How comfortable are you with technology?',
        description: 'Software, coding, digital tools',
        min: 1,
        max: 10,
        labels: ['Not comfortable', 'Very comfortable'],
        attribute: 'technology',
        multiplier: 1
    },
    {
        id: 7,
        type: 'multiple-choice',
        category: 'skills',
        question: 'Which skill do you want to develop most?',
        options: [
            {
                text: 'Technical expertise',
                description: 'Programming, engineering, systems',
                weights: { technology: 3, problem_solving: 2 }
            },
            {
                text: 'Leadership & management',
                description: 'Leading teams, making decisions',
                weights: { teamwork: 3, communication: 2, business: 2 }
            },
            {
                text: 'Creative abilities',
                description: 'Design, innovation, artistry',
                weights: { creativity: 3, design: 3 }
            },
            {
                text: 'Analytical thinking',
                description: 'Data analysis, research, critical thinking',
                weights: { problem_solving: 3, math: 2, science: 2 }
            },
            {
                text: 'Business acumen',
                description: 'Strategy, finance, entrepreneurship',
                weights: { business: 3, problem_solving: 2 }
            }
        ]
    },

    // ==================== WORK STYLE ====================
    {
        id: 8,
        type: 'multiple-choice',
        category: 'work_style',
        question: 'How do you prefer to work?',
        options: [
            {
                text: 'Independently on focused tasks',
                description: 'Solo work, deep concentration',
                weights: { problem_solving: 2, creativity: 1 }
            },
            {
                text: 'In collaborative teams',
                description: 'Group projects, brainstorming',
                weights: { teamwork: 3, communication: 2 }
            },
            {
                text: 'Mix of both',
                description: 'Sometimes alone, sometimes with others',
                weights: { teamwork: 1, problem_solving: 1 }
            }
        ]
    },
    {
        id: 9,
        type: 'multiple-choice',
        category: 'work_style',
        question: 'What kind of work environment appeals to you?',
        options: [
            {
                text: 'Lab or workshop',
                description: 'Hands-on experimentation, building',
                weights: { hands_on: 3, science: 2, technology: 1 }
            },
            {
                text: 'Office with computer work',
                description: 'Desk work, digital tools',
                weights: { technology: 2, business: 2, communication: 1 }
            },
            {
                text: 'Creative studio',
                description: 'Design space, artistic work',
                weights: { creativity: 3, design: 3 }
            },
            {
                text: 'Field work',
                description: 'Outdoors, on-site, varied locations',
                weights: { hands_on: 2, teamwork: 2, science: 1 }
            },
            {
                text: 'Client-facing roles',
                description: 'Meeting people, presentations',
                weights: { communication: 3, teamwork: 2, business: 2 }
            }
        ]
    },
    {
        id: 10,
        type: 'scale',
        category: 'work_style',
        question: 'How important is hands-on, physical work to you?',
        description: 'Building, creating, manipulating materials',
        min: 1,
        max: 10,
        labels: ['Not important', 'Very important'],
        attribute: 'hands_on',
        multiplier: 1
    },

    // ==================== CAREER VALUES ====================
    {
        id: 11,
        type: 'multiple-choice',
        category: 'values',
        question: 'What matters most to you in a career?',
        options: [
            {
                text: 'High earning potential',
                description: 'Salary, financial stability',
                weights: { business: 2, technology: 2, math: 1 }
            },
            {
                text: 'Making a difference',
                description: 'Social impact, helping others',
                weights: { communication: 2, teamwork: 2, science: 1 }
            },
            {
                text: 'Creative expression',
                description: 'Innovation, artistic freedom',
                weights: { creativity: 3, design: 2 }
            },
            {
                text: 'Job stability',
                description: 'Secure, predictable career path',
                weights: { business: 1, technology: 1, science: 1 }
            },
            {
                text: 'Continuous learning',
                description: 'Always growing, new challenges',
                weights: { problem_solving: 2, technology: 2, science: 1 }
            }
        ]
    },
    {
        id: 12,
        type: 'multi-select',
        category: 'values',
        question: 'Which industries interest you?',
        description: 'Select all that apply',
        options: [
            { text: 'Technology / Software', weights: { technology: 2, problem_solving: 1 } },
            { text: 'Healthcare / Medicine', weights: { science: 2, communication: 1 } },
            { text: 'Finance / Banking', weights: { business: 2, math: 1 } },
            { text: 'Education / Training', weights: { communication: 2, teamwork: 1 } },
            { text: 'Engineering / Manufacturing', weights: { math: 1, hands_on: 2, technology: 1 } },
            { text: 'Media / Entertainment', weights: { creativity: 2, communication: 1 } },
            { text: 'Environmental / Sustainability', weights: { science: 2, hands_on: 1 } },
            { text: 'Business / Consulting', weights: { business: 2, communication: 1 } }
        ]
    },

    // ==================== LEARNING PREFERENCES ====================
    {
        id: 13,
        type: 'multiple-choice',
        category: 'learning',
        question: 'How do you learn best?',
        options: [
            {
                text: 'Reading and studying theory',
                description: 'Books, articles, concepts',
                weights: { math: 2, science: 2, problem_solving: 1 }
            },
            {
                text: 'Hands-on practice',
                description: 'Doing, experimenting, building',
                weights: { hands_on: 3, technology: 1 }
            },
            {
                text: 'Visual demonstrations',
                description: 'Videos, diagrams, examples',
                weights: { design: 2, creativity: 1 }
            },
            {
                text: 'Discussion and collaboration',
                description: 'Talking through ideas with others',
                weights: { communication: 2, teamwork: 2 }
            }
        ]
    },
    {
        id: 14,
        type: 'scale',
        category: 'learning',
        question: 'How comfortable are you with theoretical/abstract concepts?',
        description: 'Philosophy, advanced theory, conceptual thinking',
        min: 1,
        max: 10,
        labels: ['Prefer concrete', 'Love abstract'],
        attribute: 'math',
        multiplier: 0.5
    },

    // ==================== SPECIFIC SCENARIOS ====================
    {
        id: 15,
        type: 'multiple-choice',
        category: 'scenarios',
        question: 'You have a free Saturday. What sounds most appealing?',
        options: [
            {
                text: 'Learning a new programming language or tech skill',
                weights: { technology: 3, problem_solving: 2 }
            },
            {
                text: 'Working on a creative project (art, design, writing)',
                weights: { creativity: 3, design: 2 }
            },
            {
                text: 'Reading about science or conducting experiments',
                weights: { science: 3, problem_solving: 1 }
            },
            {
                text: 'Organizing an event or leading a group activity',
                weights: { teamwork: 3, communication: 2, business: 1 }
            },
            {
                text: 'Building or fixing something physical',
                weights: { hands_on: 3, problem_solving: 2 }
            }
        ]
    },
    {
        id: 16,
        type: 'multiple-choice',
        category: 'scenarios',
        question: 'In a group project, what role do you naturally take?',
        options: [
            {
                text: 'The leader/organizer',
                weights: { teamwork: 3, communication: 2, business: 2 }
            },
            {
                text: 'The technical expert',
                weights: { technology: 3, problem_solving: 2 }
            },
            {
                text: 'The creative visionary',
                weights: { creativity: 3, design: 2 }
            },
            {
                text: 'The researcher/analyst',
                weights: { problem_solving: 3, math: 2, science: 1 }
            },
            {
                text: 'The communicator/presenter',
                weights: { communication: 3, teamwork: 2 }
            }
        ]
    },

    // ==================== FINAL CLARIFICATIONS ====================
    {
        id: 17,
        type: 'scale',
        category: 'clarification',
        question: 'How important is creativity in your ideal career?',
        min: 1,
        max: 10,
        labels: ['Not important', 'Essential'],
        attribute: 'creativity',
        multiplier: 1
    },
    {
        id: 18,
        type: 'scale',
        category: 'clarification',
        question: 'How important is working with people vs. working with things/systems?',
        min: 1,
        max: 10,
        labels: ['Things/Systems', 'People'],
        attribute: 'teamwork',
        multiplier: 0.8
    },
    {
        id: 19,
        type: 'multiple-choice',
        category: 'final',
        question: 'Which achievement would make you most proud?',
        options: [
            {
                text: 'Inventing a new technology',
                weights: { technology: 3, problem_solving: 2, creativity: 2 }
            },
            {
                text: 'Creating a successful business',
                weights: { business: 3, teamwork: 2, communication: 2 }
            },
            {
                text: 'Making a scientific discovery',
                weights: { science: 3, problem_solving: 2, math: 1 }
            },
            {
                text: 'Designing something beautiful and functional',
                weights: { design: 3, creativity: 3 }
            },
            {
                text: 'Helping people or improving communities',
                weights: { communication: 3, teamwork: 2 }
            }
        ]
    },
    {
        id: 20,
        type: 'multi-select', 
        category: 'final',
        question: 'What type of program are you most interested in?',
        description: 'Select all that apply - this helps us show the most relevant results',
         options: [
        { 
            text: 'Bachelor\'s Degree (Major)', 
            weights: {},
            programTypePreference: 'Major'
        },
        { 
            text: 'Minor to complement my major', 
            weights: {},
            programTypePreference: 'Minor'
        },
        { 
            text: 'Certificate for specific skills', 
            weights: {},
            programTypePreference: 'Certificate'
        }
    ]
    },
    
    // ==================== NEW QUESTIONS FOR DIFFERENTIATION ====================
    {
        id: 21,
        type: 'multiple-choice',
        category: 'career',
        question: 'What type of work environment appeals to you most?',
        description: 'Think about where you see yourself thriving',
        options: [
            {
                text: 'Large corporations and industry',
                description: 'Fortune 500 companies, established organizations',
                weights: { technology: 2, business: 3, teamwork: 2, problem_solving: 2 }
            },
            {
                text: 'Creative studios and agencies',
                description: 'Design firms, media companies, creative agencies',
                weights: { design: 3, creativity: 3, technology: 2, communication: 2 }
            },
            {
                text: 'Government and public service',
                description: 'Federal, state or local government agencies',
                weights: { communication: 2, teamwork: 2, problem_solving: 2, science: 1 }
            },
            {
                text: 'Healthcare and social services',
                description: 'Hospitals, clinics, non-profits, community organizations',
                weights: { science: 2, communication: 3, teamwork: 3, hands_on: 2 }
            },
            {
                text: 'Education and research',
                description: 'Schools, universities, research labs',
                weights: { science: 2, communication: 3, problem_solving: 2, creativity: 1 }
            },
            {
                text: 'Startups and entrepreneurship',
                description: 'Fast-paced, innovative, self-directed work',
                weights: { creativity: 3, business: 3, problem_solving: 2, technology: 2 }
            }
        ]
    },
    {
        id: 22,
        type: 'multiple-choice',
        category: 'workstyle',
        question: 'Which work style describes you best?',
        description: 'How do you prefer to approach tasks and projects?',
        options: [
            {
                text: 'Building and making things',
                description: 'Physical creation, construction, hands-on work',
                weights: { hands_on: 3, design: 2, creativity: 2, technology: 1 }
            },
            {
                text: 'Analyzing data and solving problems',
                description: 'Research, data analysis, strategic thinking',
                weights: { problem_solving: 3, math: 2, technology: 2, science: 1 }
            },
            {
                text: 'Creating visual or artistic work',
                description: 'Design, art, media, creative expression',
                weights: { creativity: 3, design: 3, communication: 2, technology: 1 }
            },
            {
                text: 'Working directly with people',
                description: 'Teaching, counseling, helping, serving others',
                weights: { communication: 3, teamwork: 3, creativity: 1, hands_on: 1 }
            },
            {
                text: 'Managing projects and teams',
                description: 'Leadership, coordination, organization',
                weights: { business: 3, teamwork: 3, communication: 2, problem_solving: 2 }
            },
            {
                text: 'Conducting research and experiments',
                description: 'Scientific investigation, testing hypotheses',
                weights: { science: 3, problem_solving: 2, hands_on: 2, math: 1 }
            }
        ]
    },
    {
        id: 23,
        type: 'multi-select',
        category: 'subjects',
        question: 'Which subject areas interest you most?',
        description: 'Select up to 3 that appeal to you',
        options: [
            {
                text: 'Arts and Creative Expression',
                weights: { creativity: 2, design: 2, communication: 1 }
            },
            {
                text: 'Health and Human Services',
                weights: { science: 2, communication: 2, teamwork: 1 }
            },
            {
                text: 'Technology and Innovation',
                weights: { technology: 2, problem_solving: 2, math: 1 }
            },
            {
                text: 'Business and Economics',
                weights: { business: 2, math: 1, communication: 1 }
            },
            {
                text: 'Law and Public Policy',
                weights: { communication: 2, problem_solving: 2, teamwork: 1 }
            },
            {
                text: 'Education and Teaching',
                weights: { communication: 2, teamwork: 2, creativity: 1 }
            },
            {
                text: 'Environment and Sustainability',
                weights: { science: 2, problem_solving: 1, hands_on: 1 }
            },
            {
                text: 'Engineering and Manufacturing',
                weights: { math: 2, science: 1, hands_on: 2 }
            },
            {
                text: 'Sports and Fitness',
                weights: { hands_on: 2, teamwork: 1, science: 1 }
            },
            {
                text: 'Agriculture and Food Systems',
                weights: { science: 2, hands_on: 2, business: 1 }
            }
        ]
    },
    
    // ==================== PERFORMING ARTS FILTER ====================
    {
        id: 24,
        type: 'multiple-choice',
        category: 'filter',
        question: 'Do you have experience or interest in performing arts?',
        description: 'This helps us show relevant creative programs',
        options: [
            {
                text: 'Music performance or composition',
                description: 'Playing instruments, singing, music production',
                weights: { creativity: 2, communication: 1 },
                performingArtsInterest: ['music']
            },
            {
                text: 'Theater, acting, or stage performance',
                description: 'Acting, directing, stage design, drama',
                weights: { creativity: 2, communication: 2, teamwork: 1 },
                performingArtsInterest: ['theatre']
            },
            {
                text: 'Both music and theater',
                description: 'I enjoy multiple performing arts',
                weights: { creativity: 3, communication: 2, teamwork: 1 },
                performingArtsInterest: ['music', 'theatre']
            },
            {
                text: 'Neither - not interested in performing arts',
                description: 'I prefer other creative or academic paths',
                weights: {},
                performingArtsInterest: []
            }
        ]
    }
];

// ==================== STATE MANAGEMENT ====================
let currentQuestionIndex = 0;
let userResponses = [];
let userScores = {
    math: 0,
    science: 0,
    technology: 0,
    design: 0,
    problem_solving: 0,
    hands_on: 0,
    teamwork: 0,
    creativity: 0,
    communication: 0,
    business: 0
};
let programTypePreference = null;
let performingArtsInterest = [];

// ==================== QUIZ FUNCTIONS ====================
function startQuiz() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    document.getElementById('total-questions').textContent = questions.length;
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    
    let html = `
        <div class="question-card">
            <h3 class="question-title">${question.question}</h3>
            ${question.description ? `<p class="question-description">${question.description}</p>` : ''}
    `;
    
    if (question.type === 'multiple-choice') {
        html += `<div class="options-grid">`;
        question.options.forEach((option, index) => {
            html += `
                <div class="option-card" onclick="selectOption(${index})">
                    <div class="option-title">${option.text}</div>
                    ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                </div>
            `;
        });
        html += `</div>`;
    }
    
    if (question.type === 'multi-select') {
        html += `<div class="multi-select-options">`;
        question.options.forEach((option, index) => {
            html += `
                <div class="multi-option" onclick="toggleMultiSelect(${index})">
                    <input type="checkbox" id="option-${index}" onclick="event.stopPropagation()">
                    <label for="option-${index}">${option.text}</label>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    if (question.type === 'scale') {
        html += `
            <div class="slider-container">
                <div class="slider-labels">
                    <span>${question.labels[0]}</span>
                    <span>${question.labels[1]}</span>
                </div>
                <input type="range" min="${question.min}" max="${question.max}" value="5" 
                       class="slider" id="scale-slider" oninput="updateSliderValue(this.value)">
                <div class="slider-value" id="slider-value">5</div>
            </div>
        `;
    }
    
    html += `</div>`;
    container.innerHTML = html;
    
    updateProgress();
    updateNavButtons();
}

function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.option-card')[index].classList.add('selected');
    
    // Store response
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[index];
    
    userResponses[currentQuestionIndex] = {
        questionId: question.id,
        type: question.type,
        answer: selectedOption,
        weights: selectedOption.weights || {}
    };
    
    // Store program type preference if this is the final question
    if (selectedOption.programTypePreference !== undefined) {
        programTypePreference = selectedOption.programTypePreference;
    }
    
    // Store performing arts interest if provided (Q24)
    if (selectedOption.performingArtsInterest !== undefined) {
        performingArtsInterest = selectedOption.performingArtsInterest;
    }
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function toggleMultiSelect(index) {
    const checkbox = document.getElementById(`option-${index}`);
    const optionDiv = checkbox.parentElement;
    
    checkbox.checked = !checkbox.checked;
    optionDiv.classList.toggle('selected', checkbox.checked);
    
    // Store responses
    const question = questions[currentQuestionIndex];
    const selectedOptions = [];
    const selectedPreferences = [];
    
    document.querySelectorAll('.multi-option input:checked').forEach((cb) => {
        const optionIndex = parseInt(cb.id.split('-')[1]);
        selectedOptions.push(question.options[optionIndex]);
        
        // Collect program type preferences if this is question 20
        if (question.options[optionIndex].programTypePreference) {
            selectedPreferences.push(question.options[optionIndex].programTypePreference);
        }
    });
    
    // Store program type preferences for question 20
    if (selectedPreferences.length > 0) {
        programTypePreference = selectedPreferences; // Now an array
    }
    
    userResponses[currentQuestionIndex] = {
        questionId: question.id,
        type: question.type,
        answers: selectedOptions,
        weights: selectedOptions.reduce((acc, opt) => {
            Object.keys(opt.weights).forEach(key => {
                acc[key] = (acc[key] || 0) + opt.weights[key];
            });
            return acc;
        }, {})
    };
    
    // FIXED: Enable next button if AT LEAST ONE option selected (not all)
    document.getElementById('next-btn').disabled = selectedOptions.length === 0;
}

function updateSliderValue(value) {
    document.getElementById('slider-value').textContent = value;
    
    const question = questions[currentQuestionIndex];
    userResponses[currentQuestionIndex] = {
        questionId: question.id,
        type: question.type,
        value: parseInt(value),
        attribute: question.attribute,
        multiplier: question.multiplier
    };
    
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        calculateResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function updateNavButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = !userResponses[currentQuestionIndex];
    document.getElementById('next-btn').textContent = 
        currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next';
}

// ==================== RESULTS CALCULATION ====================
function calculateResults() {
    // Calculate scores from all responses
    userResponses.forEach(response => {
        if (response.weights) {
            Object.keys(response.weights).forEach(attribute => {
                userScores[attribute] += response.weights[attribute];
            });
        }
        
        if (response.type === 'scale') {
            // FIXED: Scale questions were too powerful - reduce weight but not too much
            userScores[response.attribute] += (response.value * response.multiplier) * 0.6;
        }
    });
    
    // FIXED: Better normalization based on actual max possible scores
    const normalizedUserScores = {};
    const maxScores = {
        math: 34,           // Updated for 23 questions
        science: 30,        // Updated for 23 questions
        technology: 36,     // Updated for 23 questions
        design: 40,         // Updated for 23 questions
        problem_solving: 32,// Updated for 23 questions
        hands_on: 32,       // Updated for 23 questions
        teamwork: 32,       // Updated for 23 questions
        creativity: 42,     // Updated for 23 questions
        communication: 36,  // Updated for 23 questions
        business: 28        // Updated for 23 questions
    };
    
    Object.keys(userScores).forEach(attribute => {
        const rawScore = userScores[attribute];
        const maxScore = maxScores[attribute] || 20;
        // Normalize to 0-10 scale, cap at 10
        normalizedUserScores[attribute] = Math.min((rawScore / maxScore) * 10, 10);
    });
    
    console.log('User Scores (normalized):', normalizedUserScores); // Debug
    
    // Calculate match scores for each program
    const programMatches = programs.map(program => {
        let matchScore = 0;
        let totalWeight = 0;
        
        // FIXED: Completely new matching algorithm
        Object.keys(program.attributes).forEach(attribute => {
            const programValue = program.attributes[attribute]; // 0-10 (how important to program)
            const userValue = normalizedUserScores[attribute] || 0; // 0-10 (user's strength)
            
            // Only count attributes that matter to the program (>= 5)
            if (programValue >= 5) {
                const difference = Math.abs(programValue - userValue);
                
                // Calculate match score for this attribute
                let attributeMatch = 0;
                
                if (difference <= 2) {
                    // Great match: user score is very close to requirement
                    attributeMatch = 10;
                } else if (difference <= 4) {
                    // Good match: user score is reasonably close
                    attributeMatch = 7;
                } else if (difference <= 6) {
                    // Fair match: some gap
                    attributeMatch = 4;
                } else {
                    // Poor match: large gap
                    attributeMatch = 1;
                }
                
                // Bonus if user exceeds requirement
                if (userValue > programValue && programValue >= 7) {
                    attributeMatch += 2; // Bonus for exceeding high requirements
                }
                
                // Weight by how important this attribute is to the program
                // High importance (8-10) = 3x weight
                // Medium importance (6-7) = 2x weight  
                // Low importance (5) = 1x weight
                let importance = 1;
                if (programValue >= 8) importance = 3;
                else if (programValue >= 6) importance = 2;
                
                matchScore += attributeMatch * importance;
                totalWeight += 10 * importance;
            }
        });
        
        const matchPercentage = totalWeight > 0 ? (matchScore / totalWeight) * 100 : 0;
        
        return {
            program: program,
            matchPercentage: Math.min(matchPercentage, 100),
            matchScore: matchScore,
            userScores: normalizedUserScores // Store for debugging
        };
    });
    
    console.log('Top 10 matches:', programMatches.sort((a,b) => b.matchPercentage - a.matchPercentage).slice(0,10)); // Debug
    
    // FIXED: Filter by program type preferences (can be multiple types now)
    let filteredMatches = programMatches;
    if (programTypePreference && Array.isArray(programTypePreference) && programTypePreference.length > 0) {
        filteredMatches = programMatches.filter(m => 
            programTypePreference.includes(m.program.type)
        );
    } else if (programTypePreference && typeof programTypePreference === 'string') {
        // Fallback for old single-selection format
        filteredMatches = programMatches.filter(m => m.program.type === programTypePreference);
    }
    
    // Filter out Music and Professional Theatre if user has no interest in performing arts
    if (performingArtsInterest !== null && Array.isArray(performingArtsInterest)) {
        filteredMatches = filteredMatches.filter(match => {
            const programId = match.program.id;
            
            // If program is Music, only show if user selected music interest
            if (programId === 'music' && !performingArtsInterest.includes('music')) {
                return false;
            }
            
            // If program is Professional Theatre, only show if user selected theatre interest
            if (programId === 'professional-theatre' && !performingArtsInterest.includes('theatre')) {
                return false;
            }
            
            return true;
        });
    }
    
    // Sort by match percentage and get top 5
    const topMatches = filteredMatches
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, 5);
    
    displayResults(topMatches);
}

function displayResults(matches) {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    const container = document.getElementById('results-container');
    let html = '';
    
    matches.forEach((match, index) => {
        const program = match.program;
        const percentage = Math.round(match.matchPercentage);
        
        // Get top matching attributes
        const matchReasons = getMatchReasons(program);
        
        html += `
            <div class="result-card">
                <div class="result-rank">${index + 1}</div>
                
                <div class="result-header">
                    <h3 class="result-title">${program.name}</h3>
                    <span class="result-type">${program.type}</span>
                </div>
                
                <div class="result-match">
                    <div class="match-percentage">${percentage}%</div>
                    <div class="match-label">Match Score</div>
                </div>
                
                <p class="result-description">${program.description}</p>
                
                <div class="match-reasons">
                    <h4>Why this matches you:</h4>
                    ${matchReasons.map(reason => `<span class="reason-tag">${reason}</span>`).join('')}
                </div>
                
                <a href="${program.url}" target="_blank" class="result-link">
                    Learn More About ${program.name} →
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Scroll to top of results
    window.scrollTo(0, 0);
}

// Add this at the very end of displayResults() function
// Right before window.scrollTo(0, 0);

// Confetti celebration!
createConfetti();

function createConfetti() {
    const colors = ['#004684', '#fdb927', '#00A651', '#ffffff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                opacity: 1;
                pointer-events: none;
                z-index: 9999;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            `;
            
            document.body.appendChild(confetti);
            
            const duration = 3000 + Math.random() * 2000;
            const rotation = Math.random() * 360;
            
            confetti.animate([
                { 
                    transform: `translateY(0) rotate(0deg)`,
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight + 20}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), duration);
        }, i * 30);
    }
}

function getMatchReasons(program) {
    const reasons = [];
    const strongAttributes = [];
    
    // FIXED: Use same normalization as calculateResults (23 questions)
    const maxScores = {
        math: 34,
        science: 30,
        technology: 36,
        design: 40,
        problem_solving: 32,
        hands_on: 32,
        teamwork: 32,
        creativity: 42,
        communication: 36,
        business: 28
    };
    
    const normalizedUserScores = {};
    Object.keys(userScores).forEach(attribute => {
        const rawScore = userScores[attribute];
        const maxScore = maxScores[attribute] || 20;
        normalizedUserScores[attribute] = Math.min((rawScore / maxScore) * 10, 10);
    });
    
    // Find user's strongest attributes (normalized score >= 7 out of 10)
    Object.keys(normalizedUserScores).forEach(attribute => {
        if (normalizedUserScores[attribute] >= 7) {
            strongAttributes.push(attribute);
        }
    });
    
    // Match with program's important attributes (>= 7)
    Object.keys(program.attributes).forEach(attribute => {
        if (program.attributes[attribute] >= 7 && strongAttributes.includes(attribute)) {
            reasons.push(getAttributeLabel(attribute));
        }
    });
    
    // Add program tags as reasons if not enough
    if (reasons.length < 3) {
        program.tags.slice(0, 3 - reasons.length).forEach(tag => {
            if (!reasons.includes(tag)) {
                reasons.push(tag);
            }
        });
    }
    
    return reasons.slice(0, 4);
}

function getAttributeLabel(attribute) {
    const labels = {
        math: 'Strong in Math',
        science: 'Science Interest',
        technology: 'Tech Savvy',
        design: 'Design Skills',
        problem_solving: 'Problem Solver',
        hands_on: 'Hands-on Work',
        teamwork: 'Team Player',
        creativity: 'Creative Thinking',
        communication: 'Great Communicator',
        business: 'Business Minded'
    };
    return labels[attribute] || attribute;
}

// ==================== UTILITY FUNCTIONS ====================
function restartQuiz() {
    currentQuestionIndex = 0;
    userResponses = [];
    userScores = {
        math: 0,
        science: 0,
        technology: 0,
        design: 0,
        problem_solving: 0,
        hands_on: 0,
        teamwork: 0,
        creativity: 0,
        communication: 0,
        business: 0
    };
    programTypePreference = null;
    performingArtsInterest = [];
    
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

function shareResults() {
    const resultCards = document.querySelectorAll('.result-card');
    const topPrograms = Array.from(resultCards).slice(0, 3).map(card => {
        return card.querySelector('.result-title').textContent;
    }).join(', ');
    
    const shareText = `I just took the NC A&T Major Finder Quiz! My top matches are: ${topPrograms}. Find your path at NC A&T!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'NC A&T Major Finder Results',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Results copied to clipboard! Share with your friends.');
        });
    }

    // ==================== PDF DOWNLOAD ====================
function downloadResultsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    
    let yPosition = 20;
    
    // ===== HEADER WITH AGGIE COLORS =====
    // Blue header bar
    doc.setFillColor(0, 70, 132); // #004684
    doc.rect(0, 0, pageWidth, 35, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('NC A&T Major Finder', pageWidth / 2, 15, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Your Personalized Program Matches', pageWidth / 2, 25, { align: 'center' });
    
    yPosition = 45;
    
    // ===== INTRO TEXT =====
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const introText = 'Based on your interests, skills, and career goals, here are your top program matches:';
    doc.text(introText, margin, yPosition, { maxWidth: contentWidth });
    
    yPosition += 15;
    
    // ===== GET RESULTS DATA =====
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach((card, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 60) {
            doc.addPage();
            yPosition = 20;
        }
        
        const programName = card.querySelector('.result-title').textContent;
        const programType = card.querySelector('.result-type').textContent;
        const matchPercentage = card.querySelector('.match-percentage').textContent;
        const description = card.querySelector('.result-description').textContent;
        const programLink = card.querySelector('.result-link').href;
        
        // Get match reasons
        const reasonTags = card.querySelectorAll('.reason-tag');
        const reasons = Array.from(reasonTags).map(tag => tag.textContent);
        
        // === RANK CIRCLE ===
        const rankCircleX = margin + 10;
        const rankCircleY = yPosition + 5;
        
        // Gradient effect using gold color
        doc.setFillColor(253, 185, 39); // #fdb927
        doc.circle(rankCircleX, rankCircleY, 8, 'F');
        
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}`, rankCircleX, rankCircleY + 1, { align: 'center' });
        
        // === PROGRAM NAME ===
        doc.setTextColor(0, 70, 132); // #004684
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(programName, margin + 22, yPosition + 6);
        
        // === PROGRAM TYPE BADGE ===
        const typeWidth = doc.getTextWidth(programType) + 8;
        doc.setFillColor(253, 185, 39); // #fdb927
        doc.roundedRect(margin + 22, yPosition + 8, typeWidth, 6, 2, 2, 'F');
        
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text(programType, margin + 26, yPosition + 12);
        
        yPosition += 20;
        
        // === MATCH PERCENTAGE BOX ===
        doc.setFillColor(240, 240, 240); // Light gray background
        doc.roundedRect(margin, yPosition, 50, 16, 2, 2, 'F');
        
        doc.setTextColor(0, 70, 132);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text(matchPercentage, margin + 25, yPosition + 8, { align: 'center' });
        
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text('Match Score', margin + 25, yPosition + 13, { align: 'center' });
        
        // === DESCRIPTION ===
        doc.setTextColor(50, 50, 50);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const descLines = doc.splitTextToSize(description, contentWidth - 55);
        doc.text(descLines, margin + 55, yPosition + 5);
        
        yPosition += Math.max(16, descLines.length * 5) + 5;
        
        // === MATCH REASONS ===
        doc.setTextColor(0, 70, 132);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Why this matches you:', margin, yPosition);
        
        yPosition += 6;
        
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        
        reasons.forEach(reason => {
            // Reason tag background
            const reasonWidth = doc.getTextWidth(reason) + 6;
            doc.setFillColor(230, 240, 250); // Light blue
            doc.roundedRect(margin, yPosition - 3, reasonWidth, 5, 1, 1, 'F');
            
            doc.setTextColor(0, 70, 132);
            doc.text(reason, margin + 3, yPosition);
            
            yPosition += 7;
        });
        
        // === PROGRAM LINK ===
        yPosition += 2;
        doc.setTextColor(0, 70, 132);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.textWithLink('Learn more >', margin, yPosition, { url: programLink });
        
        // === DIVIDER LINE ===
        yPosition += 8;
        doc.setDrawColor(194, 194, 194); // #c2c2c2
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        
        yPosition += 12;
    });
    
    // ===== FOOTER =====
    const footerY = pageHeight - 15;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    
    const currentDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    doc.text(`Generated on ${currentDate}`, margin, footerY);
    doc.text('NC A&T State University', pageWidth - margin, footerY, { align: 'right' });
    
    // Add page numbers if multiple pages
    const pageCount = doc.internal.getNumberOfPages();
    if (pageCount > 1) {
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, footerY, { align: 'center' });
        }
    }
    
    // ===== SAVE PDF =====
    const fileName = `NC-AT-Major-Finder-Results-${currentDate.replace(/\s/g, '-')}.pdf`;
    doc.save(fileName);
    }

}