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
    },

// ==================== ORIGINAL 34 PROGRAMS (KEPT AS-IS) ====================
    
    // (Keeping all your original 27 majors, 4 minors, 3 certificates here - I'll add them at the end)
    
    // ==================== NEW ADDITIONS - 40+ PROGRAMS ====================
    
    // ===== ENGINEERING PROGRAMS =====
    {
        id: 'aeronautical-astronautical-engineering',
        name: 'Aeronautical and Astronautical Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Design, test and operate aircraft, spacecraft and related systems with focus on mechanics, propulsion, avionics and control systems.',
        url: 'https://www.ncat.edu/coe/',
        attributes: {
            math: 9,
            science: 8,
            technology: 9,
            design: 7,
            problem_solving: 10,
            hands_on: 8,
            teamwork: 7,
            creativity: 6,
            communication: 5,
            business: 4
        },
        tags: ['Aerospace', 'Engineering', 'Aviation', 'Space', 'STEM']
    },
    {
        id: 'bioengineering',
        name: 'Bioengineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Apply engineering principles to medicine and healthcare. Design prosthetics, implants, biomaterials and medical devices.',
        url: 'https://www.ncat.edu/coe/departments/cbbe/index.php',
        attributes: {
            math: 8,
            science: 9,
            technology: 8,
            design: 7,
            problem_solving: 9,
            hands_on: 7,
            teamwork: 7,
            creativity: 7,
            communication: 6,
            business: 4
        },
        tags: ['Medical', 'Healthcare', 'Engineering', 'Biomedical', 'STEM']
    },
    {
        id: 'chemical-engineering',
        name: 'Chemical Engineering',
        type: 'Major',
        college: 'College of Engineering',
        description: 'Develop processes for manufacturing plastics, pharmaceuticals, food, energy and materials through chemistry and engineering.',
        url: 'https://www.ncat.edu/coe/departments/cbbe/index.php',
        attributes: {
            math: 9,
            science: 10,
            technology: 7,
            design: 5,
            problem_solving: 10,
            hands_on: 7,
            teamwork: 6,
            creativity: 6,
            communication: 5,
            business: 5
        },
        tags: ['Chemistry', 'Engineering', 'Manufacturing', 'Energy', 'STEM']
    },
    
    // ===== AGRICULTURE & ENVIRONMENTAL PROGRAMS =====
    {
        id: 'agricultural-environmental-systems',
        name: 'Agricultural and Environmental Systems',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Prepare for careers in food and agribusiness firms with knowledge of business, sustainability and agricultural systems.',
        url: 'https://www.ncat.edu/caes/departments/natural-resources-and-environmental-design/index.php',
        attributes: {
            math: 5,
            science: 7,
            technology: 6,
            design: 4,
            problem_solving: 7,
            hands_on: 8,
            teamwork: 7,
            creativity: 5,
            communication: 6,
            business: 8
        },
        tags: ['Agriculture', 'Business', 'Sustainability', 'Environment', 'Food Industry']
    },
    {
        id: 'biological-engineering',
        name: 'Biological Engineering',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Integrate engineering with biological and agricultural sciences for sustainable food production and natural resource use.',
        url: 'https://www.ncat.edu/caes/departments/natural-resources-and-environmental-design/bs-biological-engineering.php',
        attributes: {
            math: 8,
            science: 9,
            technology: 8,
            design: 6,
            problem_solving: 9,
            hands_on: 8,
            teamwork: 7,
            creativity: 6,
            communication: 5,
            business: 4
        },
        tags: ['Engineering', 'Agriculture', 'Sustainability', 'Environment', 'STEM']
    },
    {
        id: 'child-development-family-studies',
        name: 'Child Development and Family Studies',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Prepare for careers working with children, youth and families from diverse backgrounds in education and social services.',
        url: 'https://www.ncat.edu/caes/departments/family-and-consumer-sciences/child-development-early-education-and-family-studies.php',
        attributes: {
            math: 3,
            science: 5,
            technology: 4,
            design: 4,
            problem_solving: 6,
            hands_on: 7,
            teamwork: 9,
            creativity: 6,
            communication: 9,
            business: 4
        },
        tags: ['Education', 'Children', 'Family Services', 'Social Work', 'Teaching']
    },
    {
        id: 'family-consumer-science',
        name: 'Family and Consumer Science',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Study consumerism, family financial planning, nutrition and help individuals and families lead satisfying lives.',
        url: 'https://www.ncat.edu/caes/departments/family-and-consumer-sciences/family-and-consumer-sciences.php',
        attributes: {
            math: 4,
            science: 5,
            technology: 5,
            design: 5,
            problem_solving: 6,
            hands_on: 6,
            teamwork: 7,
            creativity: 6,
            communication: 8,
            business: 7
        },
        tags: ['Family Services', 'Education', 'Nutrition', 'Consumer Affairs', 'Teaching']
    },
    {
        id: 'food-nutritional-sciences',
        name: 'Food and Nutritional Sciences',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Prepare for careers in food science, nutrition, dietetics and food production with strong science foundation.',
        url: 'https://www.ncat.edu/caes/',
        attributes: {
            math: 6,
            science: 9,
            technology: 6,
            design: 4,
            problem_solving: 7,
            hands_on: 7,
            teamwork: 6,
            creativity: 5,
            communication: 7,
            business: 5
        },
        tags: ['Nutrition', 'Healthcare', 'Food Science', 'Dietetics', 'STEM']
    },
    {
        id: 'laboratory-animal-science',
        name: 'Laboratory Animal Science',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Pre-vet and pre-med path focusing on animal health, welfare and biomedical research with hands-on experience.',
        url: 'https://www.ncat.edu/caes/departments/animal-sciences/',
        attributes: {
            math: 6,
            science: 10,
            technology: 6,
            design: 3,
            problem_solving: 8,
            hands_on: 9,
            teamwork: 7,
            creativity: 4,
            communication: 6,
            business: 3
        },
        tags: ['Pre-Med', 'Pre-Vet', 'Animal Science', 'Research', 'Healthcare']
    },
    {
        id: 'landscape-architecture',
        name: 'Landscape Architecture',
        type: 'Major',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Design outdoor spaces, parks and landscapes with focus on ecological and social challenges in urban and rural areas.',
        url: 'https://www.ncat.edu/caes/',
        attributes: {
            math: 5,
            science: 6,
            technology: 7,
            design: 10,
            problem_solving: 8,
            hands_on: 8,
            teamwork: 7,
            creativity: 9,
            communication: 7,
            business: 5
        },
        tags: ['Design', 'Architecture', 'Environment', 'Urban Planning', 'Creative']
    },
    
    // ===== SCIENCE & TECHNOLOGY PROGRAMS =====
    {
        id: 'computer-graphics-technology',
        name: 'Computer Graphics Technology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Create digital media, video games, websites and interactive applications combining design with technology management.',
        url: 'https://www.ncat.edu/cost/departments/applied-engineering-technology/bs-computer-graphics-technology.php',
        attributes: {
            math: 4,
            science: 3,
            technology: 9,
            design: 10,
            problem_solving: 7,
            hands_on: 8,
            teamwork: 7,
            creativity: 10,
            communication: 7,
            business: 5
        },
        tags: ['Design', 'Technology', 'Video Games', 'Web Design', 'Creative']
    },
    {
        id: 'applied-engineering-technology',
        name: 'Applied Engineering Technology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Hands-on technical training in engineering principles for careers in manufacturing, quality control and production.',
        url: 'https://www.ncat.edu/cost/departments/applied-engineering-technology/bs-applied-engineering.php',
        attributes: {
            math: 7,
            science: 6,
            technology: 9,
            design: 6,
            problem_solving: 8,
            hands_on: 10,
            teamwork: 7,
            creativity: 5,
            communication: 5,
            business: 6
        },
        tags: ['Engineering', 'Manufacturing', 'Technology', 'Hands-On', 'STEM']
    },
    {
        id: 'atmospheric-sciences-meteorology',
        name: 'Atmospheric Sciences and Meteorology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Study weather, climate and atmospheric processes to predict weather, flooding and climate change impacts.',
        url: 'https://www.ncat.edu/cost/departments/physics/index.php',
        attributes: {
            math: 8,
            science: 10,
            technology: 8,
            design: 3,
            problem_solving: 9,
            hands_on: 6,
            teamwork: 6,
            creativity: 5,
            communication: 7,
            business: 3
        },
        tags: ['Science', 'Weather', 'Climate', 'Environment', 'STEM']
    },
    {
        id: 'automotive-engineering-technology',
        name: 'Automotive Engineering Technology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Design, manufacture and test self-propelled vehicles and automotive systems with hands-on experience.',
        url: 'https://www.ncat.edu/cost/departments/applied-engineering-technology/bs-automotive-engineering-technology.php',
        attributes: {
            math: 7,
            science: 6,
            technology: 9,
            design: 7,
            problem_solving: 8,
            hands_on: 10,
            teamwork: 6,
            creativity: 6,
            communication: 5,
            business: 6
        },
        tags: ['Automotive', 'Engineering', 'Technology', 'Manufacturing', 'Hands-On']
    },
    {
        id: 'construction-management',
        name: 'Construction Management',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Manage construction projects, people and materials with focus on estimating, scheduling and project management.',
        url: 'https://www.ncat.edu/cost/departments/built-environment/academic-programs/construction-management/index.php',
        attributes: {
            math: 7,
            science: 4,
            technology: 7,
            design: 6,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 9,
            creativity: 5,
            communication: 8,
            business: 9
        },
        tags: ['Management', 'Construction', 'Business', 'Project Management', 'Leadership']
    },
    {
        id: 'electronics-technology',
        name: 'Electronics Technology',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Design, install and maintain computer and electrical systems including embedded systems and telecommunications.',
        url: 'https://www.ncat.edu/cost/departments/computer-systems-technology/electronics-technology.php',
        attributes: {
            math: 7,
            science: 7,
            technology: 10,
            design: 5,
            problem_solving: 9,
            hands_on: 9,
            teamwork: 6,
            creativity: 5,
            communication: 5,
            business: 4
        },
        tags: ['Technology', 'Electronics', 'Engineering', 'Hands-On', 'STEM']
    },
    {
        id: 'environmental-health-safety',
        name: 'Environmental Health and Safety',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Manage workplace safety, environmental hazards and occupational health in industrial and corporate settings.',
        url: 'https://www.ncat.edu/cost/departments/built-environment/academic-programs/environmental-health-and-safety/index.php',
        attributes: {
            math: 6,
            science: 8,
            technology: 7,
            design: 4,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 7,
            creativity: 4,
            communication: 7,
            business: 8
        },
        tags: ['Safety', 'Environment', 'Healthcare', 'Management', 'Compliance']
    },
    {
        id: 'geomatics',
        name: 'Geomatics',
        type: 'Major',
        college: 'College of Science and Technology',
        description: 'Use measurements and surveying technology for mapping, navigation systems, urban planning and land management.',
        url: 'https://www.ncat.edu/cost/departments/built-environment/academic-programs/geomatics/index.php',
        attributes: {
            math: 8,
            science: 7,
            technology: 9,
            design: 5,
            problem_solving: 8,
            hands_on: 8,
            teamwork: 6,
            creativity: 5,
            communication: 6,
            business: 5
        },
        tags: ['Surveying', 'Technology', 'Mapping', 'Engineering', 'GIS']
    },
    
    // ===== BUSINESS PROGRAMS =====
    {
        id: 'business-analytics',
        name: 'Business Analytics',
        type: 'Major',
        college: 'College of Business and Economics',
        description: 'Analyze data to inform business decisions using descriptive, predictive and prescriptive analytics.',
        url: 'https://www.ncat.edu/cobe/academic-departments/bisa/bs-business-analytics.php',
        attributes: {
            math: 8,
            science: 4,
            technology: 9,
            design: 4,
            problem_solving: 10,
            hands_on: 6,
            teamwork: 7,
            creativity: 6,
            communication: 7,
            business: 10
        },
        tags: ['Data', 'Business', 'Analytics', 'Technology', 'Decision Making']
    },
    {
        id: 'business-information-technology',
        name: 'Business Information Technology',
        type: 'Major',
        college: 'College of Business and Economics',
        description: 'Combine business knowledge with IT skills in e-commerce, web design, systems and technology management.',
        url: 'https://www.ncat.edu/cobe/academic-departments/bisa/bs-business-information-technology.php',
        attributes: {
            math: 6,
            science: 3,
            technology: 9,
            design: 5,
            problem_solving: 8,
            hands_on: 6,
            teamwork: 7,
            creativity: 6,
            communication: 7,
            business: 9
        },
        tags: ['Business', 'Technology', 'IT', 'E-Commerce', 'Management']
    },
    {
        id: 'economics',
        name: 'Economics',
        type: 'Major',
        college: 'College of Business and Economics',
        description: 'Analyze economic systems, policy and markets to understand how economies function and make decisions.',
        url: 'https://www.ncat.edu/cobe/academic-departments/economics/index.php',
        attributes: {
            math: 9,
            science: 3,
            technology: 5,
            design: 3,
            problem_solving: 10,
            hands_on: 3,
            teamwork: 6,
            creativity: 6,
            communication: 8,
            business: 10
        },
        tags: ['Economics', 'Policy', 'Business', 'Analysis', 'Pre-Law']
    },
    {
        id: 'management',
        name: 'Management',
        type: 'Major',
        college: 'College of Business and Economics',
        description: 'Lead organizations with skills in organizational behavior, human resources, operations and strategic management.',
        url: 'https://www.ncat.edu/cobe/academic-departments/management/bs-management.php',
        attributes: {
            math: 5,
            science: 2,
            technology: 5,
            design: 3,
            problem_solving: 8,
            hands_on: 4,
            teamwork: 10,
            creativity: 6,
            communication: 9,
            business: 10
        },
        tags: ['Management', 'Leadership', 'Business', 'Human Resources', 'Strategy']
    },
    
    // ===== ARTS, HUMANITIES & SOCIAL SCIENCES =====
    {
        id: 'criminal-justice',
        name: 'Criminal Justice',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Study criminology and the criminal justice system to prepare for careers in law enforcement and forensic science.',
        url: 'https://www.ncat.edu/cahss/departments/criminal-justice/criminal-justice-program.php',
        attributes: {
            math: 4,
            science: 5,
            technology: 6,
            design: 3,
            problem_solving: 9,
            hands_on: 6,
            teamwork: 8,
            creativity: 5,
            communication: 8,
            business: 6
        },
        tags: ['Law Enforcement', 'Justice', 'Criminology', 'Forensics', 'Public Service']
    },
    {
        id: 'history',
        name: 'History',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Study the past to understand the present through critical thinking, research and written communication.',
        url: 'https://www.ncat.edu/cahss/departments/history-and-political-science/index.php',
        attributes: {
            math: 3,
            science: 3,
            technology: 4,
            design: 3,
            problem_solving: 8,
            hands_on: 3,
            teamwork: 5,
            creativity: 7,
            communication: 10,
            business: 4
        },
        tags: ['Humanities', 'Research', 'Writing', 'Teaching', 'Pre-Law']
    },
    {
        id: 'liberal-studies',
        name: 'Liberal Studies',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Interdisciplinary program with concentrations in African-American Studies, Applied Cultural Thought or Pre-Law.',
        url: 'https://www.ncat.edu/cahss/departments/liberal-studies/index.php',
        attributes: {
            math: 4,
            science: 4,
            technology: 5,
            design: 5,
            problem_solving: 8,
            hands_on: 4,
            teamwork: 7,
            creativity: 8,
            communication: 10,
            business: 6
        },
        tags: ['Liberal Arts', 'Interdisciplinary', 'Humanities', 'Critical Thinking', 'Pre-Law']
    },
    {
        id: 'music',
        name: 'Music',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Study music performance, music education or general music with focus on performance and creativity.',
        url: 'https://www.ncat.edu/cahss/departments/visual-and-performing-arts/music-program/index.php',
        attributes: {
            math: 3,
            science: 2,
            technology: 5,
            design: 6,
            problem_solving: 6,
            hands_on: 8,
            teamwork: 7,
            creativity: 10,
            communication: 8,
            business: 4
        },
        tags: ['Music', 'Performance', 'Creative', 'Education', 'Arts']
    },
    {
        id: 'political-science',
        name: 'Political Science',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Study governments, politics, policy and social transformation to understand power and governance.',
        url: 'https://www.ncat.edu/cahss/departments/history-and-political-science/ba-political-science.php',
        attributes: {
            math: 4,
            science: 3,
            technology: 5,
            design: 3,
            problem_solving: 9,
            hands_on: 3,
            teamwork: 6,
            creativity: 7,
            communication: 10,
            business: 7
        },
        tags: ['Government', 'Policy', 'Politics', 'Pre-Law', 'Public Service']
    },
    {
        id: 'professional-theatre',
        name: 'Professional Theatre',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'BFA program in acting, directing, design and technical theatre with focus on professional performance.',
        url: 'https://www.ncat.edu/cahss/departments/visual-and-performing-arts/theatre-arts/bfa-professional-theatre.php',
        attributes: {
            math: 2,
            science: 2,
            technology: 6,
            design: 8,
            problem_solving: 7,
            hands_on: 9,
            teamwork: 10,
            creativity: 10,
            communication: 10,
            business: 5
        },
        tags: ['Theatre', 'Performance', 'Acting', 'Creative', 'Arts']
    },
    {
        id: 'visual-arts-design',
        name: 'Visual Arts, Design',
        type: 'Major',
        college: 'College of Arts, Humanities and Social Sciences',
        description: 'Study drawing, design, color theory, computer graphic design, painting and art history for creative careers.',
        url: 'https://www.ncat.edu/cahss/departments/visual-and-performing-arts/visual-arts-program/index.php',
        attributes: {
            math: 3,
            science: 2,
            technology: 7,
            design: 10,
            problem_solving: 7,
            hands_on: 9,
            teamwork: 6,
            creativity: 10,
            communication: 7,
            business: 4
        },
        tags: ['Visual Arts', 'Design', 'Creative', 'Painting', 'Fine Arts']
    },
    
    // ===== HEALTH & HUMAN SCIENCES =====
    {
        id: 'health-services-management',
        name: 'Health Services Management',
        type: 'Major',
        college: 'College of Health and Human Sciences',
        description: 'Manage healthcare systems, operations and administration with focus on leadership and healthcare technology.',
        url: 'https://www.ncat.edu/chhs/departments/health-services-management/index.php',
        attributes: {
            math: 6,
            science: 7,
            technology: 7,
            design: 3,
            problem_solving: 8,
            hands_on: 5,
            teamwork: 9,
            creativity: 5,
            communication: 9,
            business: 10
        },
        tags: ['Healthcare', 'Management', 'Administration', 'Leadership', 'Business']
    },
    {
        id: 'kinesiology',
        name: 'Kinesiology',
        type: 'Major',
        college: 'College of Health and Human Sciences',
        description: 'Study sport science, fitness management, training and recreation for careers in health and wellness.',
        url: 'https://www.ncat.edu/chhs/departments/kinesiology/',
        attributes: {
            math: 5,
            science: 8,
            technology: 5,
            design: 4,
            problem_solving: 7,
            hands_on: 10,
            teamwork: 9,
            creativity: 6,
            communication: 8,
            business: 6
        },
        tags: ['Sports', 'Fitness', 'Health', 'Training', 'Wellness']
    },
    {
        id: 'social-work',
        name: 'Social Work',
        type: 'Major',
        college: 'College of Health and Human Sciences',
        description: 'Prepare for careers in advocacy, social justice, mental health and community organizing to improve lives.',
        url: 'https://www.ncat.edu/chhs/departments/social-work-and-sociology/bs-social-work.php',
        attributes: {
            math: 3,
            science: 5,
            technology: 5,
            design: 3,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 10,
            creativity: 6,
            communication: 10,
            business: 5
        },
        tags: ['Social Work', 'Community Service', 'Mental Health', 'Advocacy', 'Human Services']
    },
    {
        id: 'speech',
        name: 'Speech',
        type: 'Major',
        college: 'College of Health and Human Sciences',
        description: 'Study communication or speech-language pathology for careers in business communication or healthcare.',
        url: 'https://www.ncat.edu/chhs/',
        attributes: {
            math: 3,
            science: 6,
            technology: 6,
            design: 4,
            problem_solving: 7,
            hands_on: 7,
            teamwork: 8,
            creativity: 7,
            communication: 10,
            business: 6
        },
        tags: ['Communication', 'Speech Pathology', 'Healthcare', 'Business', 'Therapy']
    },
    
    // ===== EDUCATION PROGRAMS =====
    {
        id: 'elementary-education-special-education',
        name: 'Elementary Education and Special Education',
        type: 'Major',
        college: 'College of Education',
        description: 'Become a licensed teacher for elementary or special education with dual licensure options.',
        url: 'https://www.ncat.edu/ced/departments/educator-preparation/index.php',
        attributes: {
            math: 5,
            science: 5,
            technology: 6,
            design: 5,
            problem_solving: 7,
            hands_on: 8,
            teamwork: 10,
            creativity: 8,
            communication: 10,
            business: 4
        },
        tags: ['Teaching', 'Education', 'Special Education', 'Elementary', 'Children']
    },
    {
        id: 'secondary-education',
        name: 'Secondary Education',
        type: 'Major',
        college: 'College of Education',
        description: 'Prepare to teach at the secondary level in biology, mathematics, English or other subject areas.',
        url: 'https://www.ncat.edu/ced/departments/educator-preparation/',
        attributes: {
            math: 6,
            science: 7,
            technology: 6,
            design: 4,
            problem_solving: 7,
            hands_on: 7,
            teamwork: 9,
            creativity: 7,
            communication: 10,
            business: 4
        },
        tags: ['Teaching', 'Education', 'Secondary', 'High School', 'Subject Specialist']
    },
    
    // ===== CERTIFICATE PROGRAMS =====
    {
        id: 'data-analytics-cert',
        name: 'Data Analytics',
        type: 'Certificate',
        college: 'College of Science and Technology',
        description: 'Post-baccalaureate certificate in data analysis, visualization and data-driven decision making.',
        url: 'https://online.ncat.edu/cert-data-analytics.html',
        attributes: {
            math: 8,
            science: 4,
            technology: 10,
            design: 4,
            problem_solving: 10,
            hands_on: 6,
            teamwork: 6,
            creativity: 5,
            communication: 6,
            business: 9
        },
        tags: ['Data', 'Analytics', 'Technology', 'Business Intelligence', 'Certificate']
    },
    {
        id: 'cybersecurity-cert',
        name: 'Cybersecurity',
        type: 'Certificate',
        college: 'College of Engineering',
        description: 'Post-baccalaureate certificate in cybersecurity concepts, network security and threat management.',
        url: 'http://online.ncat.edu/cert-cybersecurity.html',
        attributes: {
            math: 6,
            science: 4,
            technology: 10,
            design: 3,
            problem_solving: 10,
            hands_on: 7,
            teamwork: 6,
            creativity: 5,
            communication: 5,
            business: 7
        },
        tags: ['Cybersecurity', 'IT Security', 'Technology', 'Network Security', 'Certificate']
    },
    {
        id: 'supply-chain-management-cert',
        name: 'Supply Chain Management',
        type: 'Certificate',
        college: 'College of Business and Economics',
        description: 'Post-baccalaureate certificate in logistics, operations and supply chain analysis.',
        url: 'https://www.ncat.edu/academics/graduate-programs/cobe/supply-chain-management-certificate.php',
        attributes: {
            math: 6,
            science: 3,
            technology: 7,
            design: 3,
            problem_solving: 8,
            hands_on: 5,
            teamwork: 8,
            creativity: 5,
            communication: 7,
            business: 10
        },
        tags: ['Business', 'Logistics', 'Operations', 'Supply Chain', 'Certificate']
    },
    {
        id: 'environmental-cert',
        name: 'Interdisciplinary Environmental Certificate',
        type: 'Certificate',
        college: 'College of Agriculture and Environmental Sciences',
        description: 'Certificate in environmental justice, health and safety for sustainable solutions.',
        url: 'http://online.ncat.edu/cert-enviro.html',
        attributes: {
            math: 5,
            science: 9,
            technology: 7,
            design: 4,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 7,
            creativity: 6,
            communication: 7,
            business: 6
        },
        tags: ['Environment', 'Sustainability', 'Justice', 'Safety', 'Certificate']
    },
    {
        id: 'gis-cert',
        name: 'Geographic Information Systems',
        type: 'Certificate',
        college: 'College of Science and Technology',
        description: 'Certificate in GIS analysis, mapping and geospatial technology applications.',
        url: 'https://www.ncat.edu/academics/graduate-programs/cost/gis-certificate.php',
        attributes: {
            math: 7,
            science: 6,
            technology: 10,
            design: 5,
            problem_solving: 8,
            hands_on: 7,
            teamwork: 6,
            creativity: 5,
            communication: 6,
            business: 6
        },
        tags: ['GIS', 'Mapping', 'Technology', 'Geospatial', 'Certificate']
    }
];