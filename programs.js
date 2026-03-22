// NC A&T Programs Database
// Data sourced from: https://www.ncat.edu/academics/majors-minors-and-programs/index.php

const programs = [
    // ==================== ENGINEERING ====================
    {
        id: 'mechanical-engineering',
        name: 'Mechanical Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Design, analyze, and manufacture mechanical systems. Work on everything from robotics to aerospace technology.',
        url: 'https://www.ncat.edu/coe/departments/mae/index.php',
        attributes: {
            math: 9,
            science: 9,
            technology: 8,
            design: 7,
            problem_solving: 9,
            hands_on: 8,
            teamwork: 7,
            creativity: 6,
            communication: 5,
            business: 3
        },
        tags: ['STEM', 'Engineering', 'Design', 'Technology', 'Hands-on']
    },
    {
        id: 'electrical-engineering',
        name: 'Electrical Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Study power systems, electronics, telecommunications, and computer hardware. Shape the future of technology.',
        url: 'https://www.ncat.edu/coe/departments/ece/index.php',
        attributes: {
            math: 9,
            science: 9,
            technology: 10,
            design: 6,
            problem_solving: 9,
            hands_on: 7,
            teamwork: 6,
            creativity: 5,
            communication: 5,
            business: 3
        },
        tags: ['STEM', 'Engineering', 'Technology', 'Electronics', 'Innovation']
    },
    {
        id: 'civil-engineering',
        name: 'Civil Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Design and build infrastructure projects like bridges, roads, and water systems that serve communities.',
        url: 'https://www.ncat.edu/coe/departments/cae/index.php',
        attributes: {
            math: 8,
            science: 8,
            technology: 7,
            design: 8,
            problem_solving: 9,
            hands_on: 7,
            teamwork: 8,
            creativity: 6,
            communication: 7,
            business: 5
        },
        tags: ['STEM', 'Engineering', 'Infrastructure', 'Design', 'Community Impact']
    },
    {
        id: 'computer-engineering',
        name: 'Computer Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Combine hardware and software expertise to create cutting-edge computing systems and embedded devices.',
        url: 'https://www.ncat.edu/coe/departments/ece/index.php',
        attributes: {
            math: 9,
            science: 7,
            technology: 10,
            design: 7,
            problem_solving: 10,
            hands_on: 6,
            teamwork: 7,
            creativity: 7,
            communication: 5,
            business: 4
        },
        tags: ['STEM', 'Engineering', 'Computing', 'Technology', 'Innovation']
    },
    {
        id: 'industrial-systems-engineering',
        name: 'Industrial & Systems Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Optimize processes, improve efficiency, and design systems that integrate people, materials, and technology.',
        url: 'https://www.ncat.edu/coe/departments/ise/index.php',
        attributes: {
            math: 8,
            science: 6,
            technology: 7,
            design: 7,
            problem_solving: 9,
            hands_on: 5,
            teamwork: 8,
            creativity: 7,
            communication: 7,
            business: 8
        },
        tags: ['STEM', 'Engineering', 'Optimization', 'Business', 'Systems']
    },

    // ==================== COMPUTER SCIENCE & IT ====================
    {
        id: 'computer-science',
        name: 'Computer Science',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Learn programming, algorithms, artificial intelligence, and software development. Build the apps of tomorrow.',
        url: 'https://www.ncat.edu/cost/departments/comp-sci/index.php',
        attributes: {
            math: 9,
            science: 6,
            technology: 10,
            design: 5,
            problem_solving: 10,
            hands_on: 6,
            teamwork: 6,
            creativity: 8,
            communication: 5,
            business: 4
        },
        tags: ['STEM', 'Technology', 'Programming', 'AI', 'Software']
    },
    {
        id: 'information-technology',
        name: 'Information Technology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Manage networks, databases, and IT infrastructure. Keep organizations running smoothly and securely.',
        url: 'https://www.ncat.edu/cost/departments/comp-systems/index.php',
        attributes: {
            math: 6,
            science: 4,
            technology: 9,
            design: 5,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 8,
            creativity: 5,
            communication: 7,
            business: 7
        },
        tags: ['STEM', 'Technology', 'Networking', 'Security', 'Systems']
    },
    {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Protect digital assets, prevent cyber attacks, and secure critical information systems.',
        url: 'https://www.ncat.edu/cost/departments/comp-systems/index.php',
        attributes: {
            math: 7,
            science: 5,
            technology: 10,
            design: 4,
            problem_solving: 10,
            hands_on: 7,
            teamwork: 7,
            creativity: 7,
            communication: 6,
            business: 6
        },
        tags: ['STEM', 'Technology', 'Security', 'Protection', 'High-Demand']
    },

    // ==================== SCIENCES ====================
    {
        id: 'biology',
        name: 'Biology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Study living organisms, conduct research, and prepare for careers in medicine, research, or biotechnology.',
        url: 'https://www.ncat.edu/cost/departments/biology/index.php',
        attributes: {
            math: 6,
            science: 10,
            technology: 5,
            design: 3,
            problem_solving: 8,
            hands_on: 9,
            teamwork: 7,
            creativity: 6,
            communication: 7,
            business: 3
        },
        tags: ['STEM', 'Science', 'Research', 'Healthcare', 'Lab Work']
    },
    {
        id: 'chemistry',
        name: 'Chemistry',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Explore chemical reactions, synthesize new compounds, and solve real-world problems through chemistry.',
        url: 'https://www.ncat.edu/cost/departments/chemistry/index.php',
        attributes: {
            math: 8,
            science: 10,
            technology: 6,
            design: 4,
            problem_solving: 9,
            hands_on: 9,
            teamwork: 6,
            creativity: 7,
            communication: 6,
            business: 3
        },
        tags: ['STEM', 'Science', 'Research', 'Lab Work', 'Innovation']
    },
    {
        id: 'physics',
        name: 'Physics',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Understand the fundamental laws of nature, from quantum mechanics to astrophysics.',
        url: 'https://www.ncat.edu/cost/departments/physics/index.php',
        attributes: {
            math: 10,
            science: 10,
            technology: 6,
            design: 4,
            problem_solving: 10,
            hands_on: 7,
            teamwork: 5,
            creativity: 7,
            communication: 5,
            business: 2
        },
        tags: ['STEM', 'Science', 'Research', 'Theory', 'Advanced Math']
    },
    {
        id: 'mathematics',
        name: 'Mathematics',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Master advanced mathematics, statistics, and computational methods for diverse career paths.',
        url: 'https://www.ncat.edu/cost/departments/math/index.php',
        attributes: {
            math: 10,
            science: 6,
            technology: 7,
            design: 3,
            problem_solving: 10,
            hands_on: 3,
            teamwork: 5,
            creativity: 7,
            communication: 6,
            business: 5
        },
        tags: ['STEM', 'Mathematics', 'Analysis', 'Problem Solving', 'Theory']
    },

    // ==================== BUSINESS ====================
    {
        id: 'business-administration',
        name: 'Business Administration',
        type: 'Major',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Develop leadership skills, learn management principles, and prepare for diverse business careers.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 5,
            science: 2,
            technology: 5,
            design: 4,
            problem_solving: 7,
            hands_on: 4,
            teamwork: 9,
            creativity: 6,
            communication: 9,
            business: 10
        },
        tags: ['Business', 'Management', 'Leadership', 'Communication', 'Versatile']
    },
    {
        id: 'accounting',
        name: 'Accounting',
        type: 'Major',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Master financial reporting, auditing, and taxation. Become a trusted financial advisor.',
        url: 'https://www.ncat.edu/cobe/departments/acc/index.php',
        attributes: {
            math: 8,
            science: 2,
            technology: 6,
            design: 3,
            problem_solving: 8,
            hands_on: 4,
            teamwork: 6,
            creativity: 4,
            communication: 7,
            business: 10
        },
        tags: ['Business', 'Finance', 'Numbers', 'Analysis', 'CPA']
    },
    {
        id: 'marketing',
        name: 'Marketing',
        type: 'Major',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Create campaigns, analyze consumer behavior, and build brands that resonate with audiences.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 4,
            science: 2,
            technology: 6,
            design: 7,
            problem_solving: 7,
            hands_on: 5,
            teamwork: 9,
            creativity: 9,
            communication: 10,
            business: 9
        },
        tags: ['Business', 'Creative', 'Communication', 'Strategy', 'Digital']
    },
    {
        id: 'finance',
        name: 'Finance',
        type: 'Major',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Analyze investments, manage portfolios, and guide financial decision-making.',
        url: 'https://www.ncat.edu/cobe/departments/finance/index.php',
        attributes: {
            math: 8,
            science: 2,
            technology: 7,
            design: 3,
            problem_solving: 9,
            hands_on: 4,
            teamwork: 7,
            creativity: 5,
            communication: 7,
            business: 10
        },
        tags: ['Business', 'Finance', 'Analysis', 'Investment', 'High-Earning']
    },
    {
        id: 'supply-chain-management',
        name: 'Supply Chain Management',
        type: 'Major',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Coordinate global logistics, optimize operations, and keep products moving efficiently.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 6,
            science: 3,
            technology: 7,
            design: 4,
            problem_solving: 8,
            hands_on: 5,
            teamwork: 8,
            creativity: 6,
            communication: 7,
            business: 9
        },
        tags: ['Business', 'Logistics', 'Operations', 'Global', 'Problem Solving']
    },

    // ==================== DESIGN & CREATIVE ====================
    {
        id: 'graphic-design',
        name: 'Graphic Design',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Create visual communications, design brands, and bring ideas to life through digital and print media.',
        url: 'https://www.ncat.edu/cost/departments/vpa/programs/graphic-design.php',
        attributes: {
            math: 3,
            science: 2,
            technology: 7,
            design: 10,
            problem_solving: 6,
            hands_on: 8,
            teamwork: 7,
            creativity: 10,
            communication: 8,
            business: 5
        },
        tags: ['Creative', 'Design', 'Visual Arts', 'Technology', 'Communication']
    },
    {
        id: 'architecture',
        name: 'Architecture',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Design buildings and spaces that are functional, sustainable, and beautiful.',
        url: 'https://www.ncat.edu/cost/departments/built/programs/architecture.php',
        attributes: {
            math: 7,
            science: 6,
            technology: 7,
            design: 10,
            problem_solving: 8,
            hands_on: 8,
            teamwork: 8,
            creativity: 10,
            communication: 8,
            business: 5
        },
        tags: ['Design', 'Creative', 'Technical', 'Visual', 'Building']
    },
    {
        id: 'interior-design',
        name: 'Interior Design',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Transform interior spaces to be aesthetic, functional, and enhance quality of life.',
        url: 'https://www.ncat.edu/cost/departments/fcs/programs/interior-design.php',
        attributes: {
            math: 4,
            science: 3,
            technology: 6,
            design: 10,
            problem_solving: 7,
            hands_on: 8,
            teamwork: 7,
            creativity: 10,
            communication: 8,
            business: 6
        },
        tags: ['Design', 'Creative', 'Visual', 'Spatial', 'Aesthetic']
    },

    // ==================== SOCIAL SCIENCES & HUMANITIES ====================
    {
        id: 'psychology',
        name: 'Psychology',
        type: 'Major',
        college: 'College of Health and Human Sciences',
        description: 'Study human behavior, mental processes, and apply psychological principles to help others.',
        url: 'https://www.ncat.edu/chhs/departments/psychology/index.php',
        attributes: {
            math: 5,
            science: 7,
            technology: 4,
            design: 3,
            problem_solving: 8,
            hands_on: 5,
            teamwork: 7,
            creativity: 6,
            communication: 9,
            business: 4
        },
        tags: ['Social Science', 'Research', 'Healthcare', 'Communication', 'Helping']
    },
    {
        id: 'sociology',
        name: 'Sociology',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Analyze social patterns, understand cultural dynamics, and address social issues.',
        url: 'https://www.ncat.edu/cahss/departments/history/programs/sociology.php',
        attributes: {
            math: 4,
            science: 5,
            technology: 4,
            design: 3,
            problem_solving: 7,
            hands_on: 4,
            teamwork: 8,
            creativity: 6,
            communication: 9,
            business: 4
        },
        tags: ['Social Science', 'Research', 'Community', 'Analysis', 'Impact']
    },
    {
        id: 'journalism',
        name: 'Journalism and Mass Communication',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Tell stories, report news, and shape public discourse through various media platforms.',
        url: 'https://www.ncat.edu/cahss/departments/journalism/index.php',
        attributes: {
            math: 3,
            science: 2,
            technology: 6,
            design: 6,
            problem_solving: 6,
            hands_on: 6,
            teamwork: 8,
            creativity: 9,
            communication: 10,
            business: 5
        },
        tags: ['Communication', 'Writing', 'Media', 'Creative', 'Current Events']
    },
    {
        id: 'english',
        name: 'English',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Develop strong writing, critical thinking, and analytical skills through literature and composition.',
        url: 'https://www.ncat.edu/cahss/departments/english/index.php',
        attributes: {
            math: 2,
            science: 2,
            technology: 4,
            design: 5,
            problem_solving: 7,
            hands_on: 3,
            teamwork: 6,
            creativity: 9,
            communication: 10,
            business: 4
        },
        tags: ['Humanities', 'Writing', 'Literature', 'Communication', 'Critical Thinking']
    },

    // ==================== AGRICULTURE & ENVIRONMENTAL ====================
    {
        id: 'agricultural-education',
        name: 'Agricultural Education',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Combine agriculture knowledge with teaching skills to educate the next generation of farmers and food scientists.',
        url: 'https://www.ncat.edu/caes/academic-departments/agribusiness/index.php',
        attributes: {
            math: 5,
            science: 8,
            technology: 6,
            design: 4,
            problem_solving: 7,
            hands_on: 9,
            teamwork: 8,
            creativity: 6,
            communication: 8,
            business: 6
        },
        tags: ['Agriculture', 'Education', 'Science', 'Hands-on', 'Sustainability']
    },
    {
        id: 'animal-science',
        name: 'Animal Science',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Study animal biology, nutrition, and management for careers in veterinary science, research, or agriculture.',
        url: 'https://www.ncat.edu/caes/academic-departments/natural-resources/programs/animal-science.php',
        attributes: {
            math: 6,
            science: 9,
            technology: 5,
            design: 3,
            problem_solving: 7,
            hands_on: 10,
            teamwork: 7,
            creativity: 5,
            communication: 6,
            business: 5
        },
        tags: ['Science', 'Animals', 'Hands-on', 'Research', 'Veterinary']
    },
    {
        id: 'environmental-science',
        name: 'Environmental Science',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Address environmental challenges, promote sustainability, and protect natural resources.',
        url: 'https://www.ncat.edu/caes/academic-departments/natural-resources/programs/environmental-science.php',
        attributes: {
            math: 6,
            science: 9,
            technology: 6,
            design: 4,
            problem_solving: 8,
            hands_on: 8,
            teamwork: 7,
            creativity: 6,
            communication: 7,
            business: 4
        },
        tags: ['Science', 'Environment', 'Sustainability', 'Research', 'Impact']
    },

    // ==================== MINORS ====================
    {
        id: 'data-science-minor',
        name: 'Data Science',
        type: 'Minor',
        college: 'College of Science and Technology',
        description: 'Learn to analyze big data, build predictive models, and extract insights from complex datasets.',
        url: 'https://www.ncat.edu/cost/departments/comp-sci/index.php',
        attributes: {
            math: 9,
            science: 5,
            technology: 9,
            design: 4,
            problem_solving: 10,
            hands_on: 5,
            teamwork: 6,
            creativity: 7,
            communication: 6,
            business: 7
        },
        tags: ['STEM', 'Technology', 'Analysis', 'High-Demand', 'Versatile']
    },
    {
        id: 'entrepreneurship-minor',
        name: 'Entrepreneurship',
        type: 'Minor',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Develop business acumen, learn to launch startups, and turn ideas into ventures.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 4,
            science: 2,
            technology: 6,
            design: 6,
            problem_solving: 8,
            hands_on: 6,
            teamwork: 8,
            creativity: 9,
            communication: 9,
            business: 10
        },
        tags: ['Business', 'Innovation', 'Leadership', 'Creative', 'Versatile']
    },
    {
        id: 'web-development-minor',
        name: 'Web Development',
        type: 'Minor',
        college: 'College of Science and Technology',
        description: 'Build modern websites and web applications using the latest technologies and frameworks.',
        url: 'https://www.ncat.edu/cost/departments/comp-systems/index.php',
        attributes: {
            math: 5,
            science: 3,
            technology: 10,
            design: 8,
            problem_solving: 8,
            hands_on: 8,
            teamwork: 6,
            creativity: 8,
            communication: 6,
            business: 5
        },
        tags: ['Technology', 'Creative', 'Design', 'Coding', 'High-Demand']
    },
    {
        id: 'leadership-minor',
        name: 'Leadership Studies',
        type: 'Minor',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Develop leadership skills, ethical decision-making, and the ability to inspire and guide teams.',
        url: 'https://www.ncat.edu/cahss/index.php',
        attributes: {
            math: 2,
            science: 2,
            technology: 4,
            design: 4,
            problem_solving: 7,
            hands_on: 5,
            teamwork: 10,
            creativity: 6,
            communication: 10,
            business: 8
        },
        tags: ['Leadership', 'Communication', 'Teamwork', 'Versatile', 'Career Boost']
    },

    // ==================== CERTIFICATES ====================
    {
        id: 'project-management-cert',
        name: 'Project Management',
        type: 'Certificate',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Learn to plan, execute, and manage projects efficiently across industries.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 5,
            science: 2,
            technology: 6,
            design: 4,
            problem_solving: 8,
            hands_on: 5,
            teamwork: 9,
            creativity: 6,
            communication: 8,
            business: 9
        },
        tags: ['Business', 'Management', 'Versatile', 'Career Boost', 'High-Demand']
    },
    {
        id: 'digital-marketing-cert',
        name: 'Digital Marketing',
        type: 'Certificate',
        college: 'Willie A. Deese College of Business and Economics',
        description: 'Master social media, SEO, content marketing, and analytics to drive business growth online.',
        url: 'https://www.ncat.edu/cobe/academics/index.php',
        attributes: {
            math: 3,
            science: 2,
            technology: 8,
            design: 7,
            problem_solving: 6,
            hands_on: 6,
            teamwork: 7,
            creativity: 9,
            communication: 9,
            business: 9
        },
        tags: ['Business', 'Technology', 'Creative', 'High-Demand', 'Versatile']
    },
    {
        id: 'ai-machine-learning-cert',
        name: 'Artificial Intelligence & Machine Learning',
        type: 'Certificate',
        college: 'College of Science and Technology',
        description: 'Dive into AI algorithms, neural networks, and machine learning applications.',
        url: 'https://www.ncat.edu/cost/departments/comp-sci/index.php',
        attributes: {
            math: 9,
            science: 6,
            technology: 10,
            design: 4,
            problem_solving: 10,
            hands_on: 6,
            teamwork: 6,
            creativity: 8,
            communication: 5,
            business: 6
        },
        tags: ['STEM', 'Technology', 'Innovation', 'High-Demand', 'Future']
    }
];