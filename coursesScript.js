document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');
    const courseData = {
        "Computer": {
            "Semester 1": [
                {
                    name: "Engineering Mathematics-I",
                    chapters: [
                        { name: "Differential Calculus", difficulty: 2 },
                        { name: "Integral Calculus", difficulty: 2 },
                        { name: "Linear Algebra", difficulty: 3 },
                        { name: "Complex Numbers", difficulty: 2 },
                        { name: "Ordinary Differential Equations", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Physics",
                    chapters: [
                        { name: "Mechanics and Waves", difficulty: 2 },
                        { name: "Optics", difficulty: 3 },
                        { name: "Thermodynamics", difficulty: 2 },
                        { name: "Electromagnetism", difficulty: 3 },
                        { name: "Modern Physics", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Chemistry",
                    chapters: [
                        { name: "Atomic Structure", difficulty: 2 },
                        { name: "Chemical Bonding", difficulty: 2 },
                        { name: "Thermodynamics in Chemistry", difficulty: 3 },
                        { name: "Electrochemistry", difficulty: 3 },
                        { name: "Polymers and Corrosion", difficulty: 2 }
                    ]
                },
                {
                    name: "Systems in Mechanical Engineering",
                    chapters: [
                        { name: "Thermodynamics Basics", difficulty: 2 },
                        { name: "Fluid Mechanics", difficulty: 3 },
                        { name: "Material Properties", difficulty: 2 },
                        { name: "Kinematics and Dynamics", difficulty: 3 },
                        { name: "Energy Systems", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electrical Engineering",
                    chapters: [
                        { name: "Circuit Analysis", difficulty: 3 },
                        { name: "Electromagnetic Fields", difficulty: 3 },
                        { name: "AC and DC Machines", difficulty: 3 },
                        { name: "Power Systems", difficulty: 3 },
                        { name: "Electrical Measurements", difficulty: 2 }
                    ]
                },
                {
                    name: "Basic Electronics Engineering",
                    chapters: [
                        { name: "Semiconductors", difficulty: 3 },
                        { name: "Diodes and Transistors", difficulty: 3 },
                        { name: "Operational Amplifiers", difficulty: 2 },
                        { name: "Digital Electronics Basics", difficulty: 3 },
                        { name: "Electronic Instrumentation", difficulty: 2 }
                    ]
                },
                {
                    name: "Programming and Problem Solving",
                    chapters: [
                        { name: "Programming Fundamentals", difficulty: 2 },
                        { name: "Control Structures", difficulty: 2 },
                        { name: "Data Structures", difficulty: 3 },
                        { name: "Algorithms", difficulty: 3 },
                        { name: "Software Engineering Principles", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Mechanics",
                    chapters: [
                        { name: "Statics", difficulty: 3 },
                        { name: "Dynamics", difficulty: 3 },
                        { name: "Strength of Materials", difficulty: 3 },
                        { name: "Fluid Mechanics", difficulty: 3 },
                        { name: "Thermodynamics", difficulty: 2 }
                    ]
                }
            ],
            "Semester 2": [
                {
                    name: "Engineering Mathematics-II",
                    chapters: [
                        { name: "Vector Calculus", difficulty: 3 },
                        { name: "Partial Differential Equations", difficulty: 3 },
                        { name: "Laplace Transforms", difficulty: 3 },
                        { name: "Fourier Transforms", difficulty: 3 },
                        { name: "Numerical Methods", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Physics",
                    chapters: [
                        { name: "Quantum Physics", difficulty: 3 },
                        { name: "Solid State Physics", difficulty: 3 },
                        { name: "Nuclear Physics", difficulty: 2 },
                        { name: "Electronics and Photonics", difficulty: 3 },
                        { name: "Nanotechnology", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Chemistry",
                    chapters: [
                        { name: "Organic Chemistry", difficulty: 2 },
                        { name: "Analytical Chemistry", difficulty: 2 },
                        { name: "Electrochemistry and Corrosion", difficulty: 3 },
                        { name: "Environmental Chemistry", difficulty: 2 },
                        { name: "Polymer Science", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electrical Engineering",
                    chapters: [
                        { name: "Power Electronics", difficulty: 3 },
                        { name: "Electrical Machines", difficulty: 3 },
                        { name: "Control Systems", difficulty: 3 },
                        { name: "Instrumentation", difficulty: 2 },
                        { name: "Power Systems and Protection", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electronics Engineering",
                    chapters: [
                        { name: "Integrated Circuits", difficulty: 3 },
                        { name: "Microprocessors and Microcontrollers", difficulty: 3 },
                        { name: "Communication Systems", difficulty: 3 },
                        { name: "Signal Processing", difficulty: 3 },
                        { name: "VLSI Design", difficulty: 4 }
                    ]
                },
                {
                    name: "Programming and Problem Solving",
                    chapters: [
                        { name: "Object-Oriented Programming", difficulty: 3 },
                        { name: "Data Abstraction", difficulty: 2 },
                        { name: "File Handling and I/O", difficulty: 2 },
                        { name: "Exception Handling", difficulty: 2 },
                        { name: "GUI Programming", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Mechanics",
                    chapters: [
                        { name: "Kinematics of Rigid Bodies", difficulty: 3 },
                        { name: "Kinetics of Rigid Bodies", difficulty: 3 },
                        { name: "Energy Methods", difficulty: 3 },
                        { name: "Vibration and Dynamics", difficulty: 3 },
                        { name: "Friction and Wear", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Graphics",
                    chapters: [
                        { name: "Engineering Drawing Basics", difficulty: 2 },
                        { name: "Projections and Views", difficulty: 3 },
                        { name: "Dimensioning and Tolerancing", difficulty: 3 },
                        { name: "Sectional Views and Isometric Projection", difficulty: 3 },
                        { name: "CAD Fundamentals", difficulty: 3 }
                    ]
                }
            ],
            "Semester 3": [
                {
                    name: "Discrete Mathematics",
                    chapters: [
                        { name: "Set Theory", difficulty: 2 },
                        { name: "Logic and Proofs", difficulty: 3 },
                        { name: "Functions and Relations", difficulty: 2 },
                        { name: "Graph Theory", difficulty: 3 },
                        { name: "Combinatorics", difficulty: 3 }
                    ]
                },
                {
                    name: "Fundamentals of Data Structures",
                    chapters: [
                        { name: "Trees and Graphs", difficulty: 3 },
                        { name: "Hashing", difficulty: 2 },
                        { name: "Advanced Sorting and Searching", difficulty: 2 },
                        { name: "Memory Management", difficulty: 2 }
                    ]
                },
                {
                    name: "Object Oriented Programming (OOP)",
                    chapters: [
                        { name: "Classes and Objects", difficulty: 2 },
                        { name: "Inheritance", difficulty: 2 },
                        { name: "Polymorphism", difficulty: 3 },
                        { name: "Exception Handling", difficulty: 2 },
                        { name: "File I/O", difficulty: 2 }
                    ]
                },
                {
                    name: "Computer Graphics",
                    chapters: [
                        { name: "Introduction to Graphics Systems", difficulty: 2 },
                        { name: "2D and 3D Transformations", difficulty: 3 },
                        { name: "Clipping and Viewing", difficulty: 3 },
                        { name: "Lighting and Shading", difficulty: 3 },
                        { name: "Computer Animation", difficulty: 3 }
                    ]
                },
                {
                    name: "Digital Electronics and Logic Design",
                    chapters: [
                        { name: "Number Systems and Codes", difficulty: 2 },
                        { name: "Boolean Algebra and Logic Gates", difficulty: 2 },
                        { name: "Sequential Circuits", difficulty: 3 },
                        { name: "Digital Integrated Circuits", difficulty: 2 },
                        { name: "Memory and Storage", difficulty: 2 }
                    ]
                }
            ],
            "Semester 4": [
                {
                    name: "Engineering Mathematics III",
                    chapters: [
                        { name: "Linear Differential Equations", difficulty: 3 },
                        { name: "Fourier Series", difficulty: 3 },
                        { name: "Complex Analysis", difficulty: 2 },
                        { name: "Vector Calculus", difficulty: 2 },
                        { name: "Probability and Statistics", difficulty: 3 }
                    ]
                },
                {
                    name: "Data Structures and Algorithms",
                    chapters: [
                        { name: "Advanced Tree Structures", difficulty: 3 },
                        { name: "Graph Algorithms", difficulty: 3 },
                        { name: "Dynamic Programming", difficulty: 3 },
                        { name: "Greedy Algorithms", difficulty: 2 },
                        { name: "Algorithm Analysis and Complexity", difficulty: 3 }
                    ]
                },
                {
                    name: "Software Engineering",
                    chapters: [
                        { name: "Software Development Life Cycle", difficulty: 2 },
                        { name: "Requirements Engineering", difficulty: 2 },
                        { name: "Design Patterns", difficulty: 3 },
                        { name: "Software Testing and Quality Assurance", difficulty: 3 },
                        { name: "Agile Methodologies", difficulty: 2 }
                    ]
                },
                {
                    name: "Microprocessor",
                    chapters: [
                        { name: "Microprocessor Architecture", difficulty: 3 },
                        { name: "Assembly Language Programming", difficulty: 3 },
                        { name: "Interfacing and Applications", difficulty: 3 },
                        { name: "Microcontroller Fundamentals", difficulty: 2 },
                        { name: "Interrupts and Timers", difficulty: 2 }
                    ]
                },
                {
                    name: "Principles of Programming Languages",
                    chapters: [
                        { name: "Syntax and Semantics", difficulty: 2 },
                        { name: "Data Types and Control Structures", difficulty: 2 },
                        { name: "Scoping and Binding", difficulty: 2 },
                        { name: "Functional Programming", difficulty: 3 },
                        { name: "Logic Programming", difficulty: 3 }
                    ]
                }
            ],
            "Semester 5": [
                {
                    name: "Database Management Systems",
                    chapters: [
                        { name: "Introduction to Databases", difficulty: 2 },
                        { name: "Entity-Relationship Model", difficulty: 2 },
                        { name: "Normalization", difficulty: 3 },
                        { name: "SQL and Query Optimization", difficulty: 3 },
                        { name: "Transactions and Concurrency Control", difficulty: 3 },
                        { name: "NoSQL Databases", difficulty: 2 }
                    ]
                },
                {
                    name: "Theory of Computation",
                    chapters: [
                        { name: "Automata Theory", difficulty: 3 },
                        { name: "Context-Free Grammars", difficulty: 3 },
                        { name: "Turing Machines", difficulty: 4 },
                        { name: "Decidability", difficulty: 4 },
                        { name: "Complexity Classes", difficulty: 4 }
                    ]
                },
                {
                    name: "Systems Programming and Operating System",
                    chapters: [
                        { name: "Operating System Principles", difficulty: 3 },
                        { name: "Process Management", difficulty: 3 },
                        { name: "Memory Management", difficulty: 3 },
                        { name: "File Systems", difficulty: 3 },
                        { name: "System Programming Basics", difficulty: 2 },
                        { name: "Concurrency and Synchronization", difficulty: 4 }
                    ]
                },
                {
                    name: "Computer Networks and Security",
                    chapters: [
                        { name: "Network Models and Protocols", difficulty: 3 },
                        { name: "Routing and Switching", difficulty: 3 },
                        { name: "Network Security Fundamentals", difficulty: 3 },
                        { name: "Cryptography", difficulty: 4 },
                        { name: "Firewalls and Intrusion Detection Systems", difficulty: 3 },
                        { name: "Wireless and Mobile Security", difficulty: 2 }
                    ]
                }
            ],
            "Semester 6": [
        {
            name: "Data Science and Big Data Analytics",
            chapters: [
                { name: "Introduction to Data Science", difficulty: 2 },
                { name: "Data Analysis and Visualization", difficulty: 3 },
                { name: "Big Data Technologies", difficulty: 3 },
                { name: "Machine Learning for Big Data", difficulty: 4 },
                { name: "Data Mining Techniques", difficulty: 3 },
                { name: "Predictive Analytics", difficulty: 4 }
            ]
        },
        {
            name: "Web Technology",
            chapters: [
                { name: "HTML and CSS Fundamentals", difficulty: 2 },
                { name: "Client-Side Scripting with JavaScript", difficulty: 3 },
                { name: "Server-Side Programming", difficulty: 3 },
                { name: "Web Services and APIs", difficulty: 3 },
                { name: "Responsive Web Design", difficulty: 3 },
                { name: "Web Security Basics", difficulty: 3 }
            ]
        },
        {
            name: "Artificial Intelligence",
            chapters: [
                { name: "Foundations of AI", difficulty: 3 },
                { name: "Search Algorithms", difficulty: 3 },
                { name: "Knowledge Representation", difficulty: 3 },
                { name: "Machine Learning Basics", difficulty: 4 },
                { name: "Natural Language Processing", difficulty: 4 },
                { name: "Robotics and Perception", difficulty: 4 }
            ]
        }
            ],
            "Semester 7": [
                {
                    name: "Design and Analysis of Algorithms",
                    chapters: [
                        { name: "Divide and Conquer Algorithms", difficulty: 3 },
                        { name: "Dynamic Programming", difficulty: 4 },
                        { name: "Greedy Algorithms", difficulty: 3 },
                        { name: "Graph Algorithms", difficulty: 4 },
                        { name: "Complexity Analysis", difficulty: 3 },
                        { name: "Approximation Algorithms", difficulty: 4 }
                    ]
                },
                {
                    name: "Machine Learning",
                    chapters: [
                        { name: "Supervised Learning", difficulty: 3 },
                        { name: "Unsupervised Learning", difficulty: 3 },
                        { name: "Deep Learning", difficulty: 4 },
                        { name: "Reinforcement Learning", difficulty: 4 },
                        { name: "Model Evaluation and Tuning", difficulty: 3 },
                        { name: "Ethical Implications of ML", difficulty: 2 }
                    ]
                },
                {
                    name: "Blockchain Technology",
                    chapters: [
                        { name: "Introduction to Blockchain", difficulty: 2 },
                        { name: "Cryptography in Blockchain", difficulty: 3 },
                        { name: "Blockchain Platforms", difficulty: 3 },
                        { name: "Smart Contracts and DApps", difficulty: 4 },
                        { name: "Blockchain for Business", difficulty: 3 },
                        { name: "Current Trends and Challenges", difficulty: 3 }
                    ]
                },
                {
                    name: "Pervasive Computing",
                    chapters: [
                        { name: "Pervasive Computing Principles", difficulty: 2 },
                        { name: "Sensors and Actuators", difficulty: 3 },
                        { name: "Context-Aware Computing", difficulty: 3 },
                        { name: "Wearable Computing", difficulty: 3 },
                        { name: "Ubiquitous Communication", difficulty: 3 },
                        { name: "Security and Privacy", difficulty: 3 }
                    ]
                },
                {
                    name: "Multimedia Techniques",
                    chapters: [
                        { name: "Fundamentals of Multimedia", difficulty: 2 },
                        { name: "Image Processing Basics", difficulty: 3 },
                        { name: "Video Processing", difficulty: 3 },
                        { name: "Audio Processing and Compression", difficulty: 3 },
                        { name: "Multimedia Authoring and Data Integration", difficulty: 3 },
                        { name: "Virtual Reality and 3D Graphics", difficulty: 4 }
                    ]
                }
            ],
            "Semester 8": [
                {
                    name: "High Performance Computing",
                    chapters: [
                        { name: "Parallel Computing Fundamentals", difficulty: 3 },
                        { name: "High-Performance Architectures", difficulty: 4 },
                        { name: "Distributed Computing Models", difficulty: 3 },
                        { name: "Performance Optimization", difficulty: 4 },
                        { name: "GPU Programming", difficulty: 4 },
                        { name: "Case Studies and Applications", difficulty: 3 }
                    ]
                },
                {
                    name: "Deep Learning",
                    chapters: [
                        { name: "Neural Network Basics", difficulty: 3 },
                        { name: "Convolutional Neural Networks", difficulty: 4 },
                        { name: "Recurrent Neural Networks", difficulty: 4 },
                        { name: "Generative Adversarial Networks", difficulty: 4 },
                        { name: "Deep Reinforcement Learning", difficulty: 4 },
                        { name: "Advanced Topics in Deep Learning", difficulty: 4 }
                    ]
                },
                {
                    name: "Natural Language Processing",
                    chapters: [
                        { name: "Language Modeling", difficulty: 3 },
                        { name: "Syntax and Parsing", difficulty: 3 },
                        { name: "Semantics and Pragmatics", difficulty: 4 },
                        { name: "Machine Translation", difficulty: 4 },
                        { name: "Speech Recognition", difficulty: 3 },
                        { name: "NLP Applications", difficulty: 3 }
                    ]
                },
                {
                    name: "Image Processing",
                    chapters: [
                        { name: "Digital Image Fundamentals", difficulty: 3 },
                        { name: "Image Enhancement Techniques", difficulty: 3 },
                        { name: "Image Restoration", difficulty: 4 },
                        { name: "Morphological Image Processing", difficulty: 3 },
                        { name: "Image Segmentation", difficulty: 4 },
                        { name: "Feature Extraction and Recognition", difficulty: 4 }
                    ]
                },
                {
                    name: "Software Defined Networks",
                    chapters: [
                        { name: "SDN Fundamentals", difficulty: 3 },
                        { name: "SDN Architectures and Protocols", difficulty: 3 },
                        { name: "Network Function Virtualization", difficulty: 3 },
                        { name: "SDN Security", difficulty: 4 },
                        { name: "SDN in Cloud Computing", difficulty: 3 },
                        { name: "Emerging Trends in SDN", difficulty: 3 }
                    ]
                }
            ],   
        },
        "AI&DS": {
            "Semester 1": [
                {
                    name: "Engineering Mathematics-I",
                    chapters: [
                        { name: "Differential Calculus", difficulty: 2 },
                        { name: "Integral Calculus", difficulty: 2 },
                        { name: "Linear Algebra", difficulty: 3 },
                        { name: "Complex Numbers", difficulty: 2 },
                        { name: "Ordinary Differential Equations", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Physics",
                    chapters: [
                        { name: "Mechanics and Waves", difficulty: 2 },
                        { name: "Optics", difficulty: 3 },
                        { name: "Thermodynamics", difficulty: 2 },
                        { name: "Electromagnetism", difficulty: 3 },
                        { name: "Modern Physics", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Chemistry",
                    chapters: [
                        { name: "Atomic Structure", difficulty: 2 },
                        { name: "Chemical Bonding", difficulty: 2 },
                        { name: "Thermodynamics in Chemistry", difficulty: 3 },
                        { name: "Electrochemistry", difficulty: 3 },
                        { name: "Polymers and Corrosion", difficulty: 2 }
                    ]
                },
                {
                    name: "Systems in Mechanical Engineering",
                    chapters: [
                        { name: "Thermodynamics Basics", difficulty: 2 },
                        { name: "Fluid Mechanics", difficulty: 3 },
                        { name: "Material Properties", difficulty: 2 },
                        { name: "Kinematics and Dynamics", difficulty: 3 },
                        { name: "Energy Systems", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electrical Engineering",
                    chapters: [
                        { name: "Circuit Analysis", difficulty: 3 },
                        { name: "Electromagnetic Fields", difficulty: 3 },
                        { name: "AC and DC Machines", difficulty: 3 },
                        { name: "Power Systems", difficulty: 3 },
                        { name: "Electrical Measurements", difficulty: 2 }
                    ]
                },
                {
                    name: "Basic Electronics Engineering",
                    chapters: [
                        { name: "Semiconductors", difficulty: 3 },
                        { name: "Diodes and Transistors", difficulty: 3 },
                        { name: "Operational Amplifiers", difficulty: 2 },
                        { name: "Digital Electronics Basics", difficulty: 3 },
                        { name: "Electronic Instrumentation", difficulty: 2 }
                    ]
                },
                {
                    name: "Programming and Problem Solving",
                    chapters: [
                        { name: "Programming Fundamentals", difficulty: 2 },
                        { name: "Control Structures", difficulty: 2 },
                        { name: "Data Structures", difficulty: 3 },
                        { name: "Algorithms", difficulty: 3 },
                        { name: "Software Engineering Principles", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Mechanics",
                    chapters: [
                        { name: "Statics", difficulty: 3 },
                        { name: "Dynamics", difficulty: 3 },
                        { name: "Strength of Materials", difficulty: 3 },
                        { name: "Fluid Mechanics", difficulty: 3 },
                        { name: "Thermodynamics", difficulty: 2 }
                    ]
                }
            ],
            "Semester 2": [
                {
                    name: "Engineering Mathematics-II",
                    chapters: [
                        { name: "Vector Calculus", difficulty: 3 },
                        { name: "Partial Differential Equations", difficulty: 3 },
                        { name: "Laplace Transforms", difficulty: 3 },
                        { name: "Fourier Transforms", difficulty: 3 },
                        { name: "Numerical Methods", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Physics",
                    chapters: [
                        { name: "Quantum Physics", difficulty: 3 },
                        { name: "Solid State Physics", difficulty: 3 },
                        { name: "Nuclear Physics", difficulty: 2 },
                        { name: "Electronics and Photonics", difficulty: 3 },
                        { name: "Nanotechnology", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Chemistry",
                    chapters: [
                        { name: "Organic Chemistry", difficulty: 2 },
                        { name: "Analytical Chemistry", difficulty: 2 },
                        { name: "Electrochemistry and Corrosion", difficulty: 3 },
                        { name: "Environmental Chemistry", difficulty: 2 },
                        { name: "Polymer Science", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electrical Engineering",
                    chapters: [
                        { name: "Power Electronics", difficulty: 3 },
                        { name: "Electrical Machines", difficulty: 3 },
                        { name: "Control Systems", difficulty: 3 },
                        { name: "Instrumentation", difficulty: 2 },
                        { name: "Power Systems and Protection", difficulty: 3 }
                    ]
                },
                {
                    name: "Basic Electronics Engineering",
                    chapters: [
                        { name: "Integrated Circuits", difficulty: 3 },
                        { name: "Microprocessors and Microcontrollers", difficulty: 3 },
                        { name: "Communication Systems", difficulty: 3 },
                        { name: "Signal Processing", difficulty: 3 },
                        { name: "VLSI Design", difficulty: 4 }
                    ]
                },
                {
                    name: "Programming and Problem Solving",
                    chapters: [
                        { name: "Object-Oriented Programming", difficulty: 3 },
                        { name: "Data Abstraction", difficulty: 2 },
                        { name: "File Handling and I/O", difficulty: 2 },
                        { name: "Exception Handling", difficulty: 2 },
                        { name: "GUI Programming", difficulty: 3 }
                    ]
                },
                {
                    name: "Engineering Mechanics",
                    chapters: [
                        { name: "Kinematics of Rigid Bodies", difficulty: 3 },
                        { name: "Kinetics of Rigid Bodies", difficulty: 3 },
                        { name: "Energy Methods", difficulty: 3 },
                        { name: "Vibration and Dynamics", difficulty: 3 },
                        { name: "Friction and Wear", difficulty: 2 }
                    ]
                },
                {
                    name: "Engineering Graphics",
                    chapters: [
                        { name: "Engineering Drawing Basics", difficulty: 2 },
                        { name: "Projections and Views", difficulty: 3 },
                        { name: "Dimensioning and Tolerancing", difficulty: 3 },
                        { name: "Sectional Views and Isometric Projection", difficulty: 3 },
                        { name: "CAD Fundamentals", difficulty: 3 }
                    ]
                }
            ],
            "Semester 3": [
                {
                    name: "Discrete Mathematics",
                    chapters: [
                        { name: "Sets, Relations, and Functions", difficulty: 2 },
                        { name: "Graph Theory", difficulty: 3 },
                        { name: "Combinatorics", difficulty: 3 },
                        { name: "Boolean Algebra", difficulty: 2 },
                        { name: "Number Theory and Cryptography", difficulty: 3 }
                    ]
                },
                {
                    name: "Fundamentals of Data Structures",
                    chapters: [
                        { name: "Introduction to Data Structures", difficulty: 2 },
                        { name: "Stacks and Queues", difficulty: 2 },
                        { name: "Linked Lists", difficulty: 2 },
                        { name: "Trees", difficulty: 3 },
                        { name: "Graphs", difficulty: 3 }
                    ]
                },
                {
                    name: "Object Oriented Programming (OOP)",
                    chapters: [
                        { name: "Classes and Objects", difficulty: 2 },
                        { name: "Inheritance", difficulty: 3 },
                        { name: "Polymorphism", difficulty: 3 },
                        { name: "Encapsulation and Abstraction", difficulty: 2 },
                        { name: "Exception Handling and File I/O", difficulty: 3 }
                    ]
                },
                {
                    name: "Computer Graphics",
                    chapters: [
                        { name: "Introduction to Graphics and Graphics Systems", difficulty: 2 },
                        { name: "2D and 3D Transformations", difficulty: 3 },
                        { name: "Clipping and Viewing", difficulty: 3 },
                        { name: "Lighting and Shading", difficulty: 3 },
                        { name: "Graphics Programming (OpenGL/DirectX)", difficulty: 3 }
                    ]
                },
                {
                    name: "Operating Systems",
                    chapters: [
                        { name: "Introduction to Operating Systems", difficulty: 2 },
                        { name: "Processes and Threads", difficulty: 3 },
                        { name: "Memory Management", difficulty: 3 },
                        { name: "File Systems", difficulty: 3 },
                        { name: "Synchronization and Deadlocks", difficulty: 3 }
                    ]
                },
                {
                    name: "Data Structures Laboratory",
                    chapters: [
                        { name: "Implementation of Stacks and Queues", difficulty: 2 },
                        { name: "Linked List Operations", difficulty: 2 },
                        { name: "Tree Traversals and Operations", difficulty: 3 },
                        { name: "Graph Algorithms Implementation", difficulty: 3 },
                        { name: "Sorting and Searching Algorithms", difficulty: 2 }
                    ]
                }
            ],
            "Semester 4": [
                {
                    name: "Statistics",
                    chapters: [
                        { name: "Descriptive Statistics", difficulty: 2 },
                        { name: "Probability Theory", difficulty: 3 },
                        { name: "Random Variables and Distributions", difficulty: 3 },
                        { name: "Inferential Statistics", difficulty: 3 },
                        { name: "Regression Analysis", difficulty: 3 },
                        { name: "Hypothesis Testing", difficulty: 3 }
                    ]
                },
                {
                    name: "Internet of Things (IoT)",
                    chapters: [
                        { name: "IoT Concepts and Architectures", difficulty: 2 },
                        { name: "IoT Protocols and Communication Models", difficulty: 3 },
                        { name: "Sensors and Actuators", difficulty: 2 },
                        { name: "IoT Security and Privacy", difficulty: 3 },
                        { name: "IoT Applications and Case Studies", difficulty: 3 },
                        { name: "IoT Platforms and Tools", difficulty: 3 }
                    ]
                },
                {
                    name: "Data Structures and Algorithms",
                    chapters: [
                        { name: "Advanced Data Structures", difficulty: 3 },
                        { name: "Sorting and Searching Algorithms", difficulty: 3 },
                        { name: "Graph Algorithms", difficulty: 4 },
                        { name: "Algorithm Design Techniques", difficulty: 4 },
                        { name: "Complexity and Computability", difficulty: 4 },
                        { name: "Dynamic Programming", difficulty: 4 }
                    ]
                },
                {
                    name: "Software Engineering",
                    chapters: [
                        { name: "Software Development Life Cycle (SDLC)", difficulty: 2 },
                        { name: "Requirements Engineering", difficulty: 3 },
                        { name: "Software Design and Architecture", difficulty: 3 },
                        { name: "Software Testing and Quality Assurance", difficulty: 3 },
                        { name: "Software Project Management", difficulty: 3 },
                        { name: "Emerging Trends in Software Engineering", difficulty: 2 }
                    ]
                },
                {
                    name: "Management Information System (MIS)",
                    chapters: [
                        { name: "Introduction to Information Systems", difficulty: 2 },
                        { name: "Information System Components", difficulty: 2 },
                        { name: "Strategic Role of Information Systems", difficulty: 3 },
                        { name: "Decision Support and Expert Systems", difficulty: 3 },
                        { name: "Information Systems Planning and Management", difficulty: 3 },
                        { name: "Emerging Trends in MIS", difficulty: 2 }
                    ]
                }
            ],
            
        },
        };
    
    const selectedCourse = localStorage.getItem('selectedCourse');
    const selectedSemester = localStorage.getItem('selectedSemester');
    const subjects = courseData[selectedCourse][selectedSemester];

    subjects.forEach(subject => {
        // Subject Container
        const subjectContainer = document.createElement('div');
        subjectContainer.classList.add('subject-container');
        
        // Subject Name (Toggle Button)
        const subjectName = document.createElement('h2');
        subjectName.classList.add('subject-name');
        subjectName.textContent = subject.name;
        subjectName.style.cursor = 'pointer'; // Make it appear clickable

        // Chapters Container (Initially Hidden)
        const chaptersContainer = document.createElement('div');
        chaptersContainer.classList.add('chapters-container');
        chaptersContainer.style.display = 'none';

        // Populate Chapters
        subject.chapters.forEach(chapter => {
            const chapterElement = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = chapter.name;
            checkbox.value = JSON.stringify(chapter); // Store chapter data
            
            const label = document.createElement('label');
            label.setAttribute('for', chapter.name);
            // label.textContent = `${chapter.name} (Difficulty: ${chapter.difficulty})`;
            label.textContent = `${chapter.name} `;
            chapterElement.appendChild(checkbox);
            chapterElement.appendChild(label);
            chaptersContainer.appendChild(chapterElement);
        });

        // Append Elements
        subjectContainer.appendChild(subjectName);
        subjectContainer.appendChild(chaptersContainer);
        container.appendChild(subjectContainer);
        
        // Toggle Functionality
        subjectName.addEventListener('click', () => {
            const isDisplayed = chaptersContainer.style.display !== 'none';
            chaptersContainer.style.display = isDisplayed ? 'none' : 'block';
        });
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Selection';
    submitButton.addEventListener('click', handleSubmit);
    container.appendChild(submitButton);
    
});

function handleSubmit() {
    const selectedChapters = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedChapters.push(JSON.parse(checkbox.value));
    });
    
    localStorage.setItem('selectedChapters', JSON.stringify(selectedChapters));
    window.location.href = 'UnitsandTime.html'; // Navigate to the next page
}
