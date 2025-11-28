let attendanceData = {
  algorithms: {
    name: "Algorithms",
    code: "GL303",
    credits: 4,
    currentWeek: 6,
    meetings: [
      {
        id: 1,
        date: "Jan 15, 2024",
        topic: "Introduction to Algorithms",
        status: "present",
      },
      {
        id: 2,
        date: "Jan 22, 2024",
        topic: "Sorting Algorithms",
        status: "present",
      },
      {
        id: 3,
        date: "Jan 29, 2024",
        topic: "Search Algorithms",
        status: "present",
      },
      {
        id: 4,
        date: "Feb 5, 2024",
        topic: "Graph Algorithms - Part 1",
        status: "present",
      },
      {
        id: 5,
        date: "Feb 12, 2024",
        topic: "Graph Algorithms - Part 2",
        status: "present",
      },
      {
        id: 6,
        date: "Feb 19, 2024",
        topic: "Dynamic Programming",
        status: "pending",
      },
      {
        id: 7,
        date: "Feb 26, 2024",
        topic: "Greedy Algorithms",
        status: "not_started",
      },
      {
        id: 8,
        date: "Mar 4, 2024",
        topic: "Divide and Conquer",
        status: "not_started",
      },
      {
        id: 9,
        date: "Mar 11, 2024",
        topic: "Backtracking",
        status: "not_started",
      },
      {
        id: 10,
        date: "Mar 18, 2024",
        topic: "String Algorithms",
        status: "not_started",
      },
      {
        id: 11,
        date: "Mar 25, 2024",
        topic: "Advanced Data Structures",
        status: "not_started",
      },
      {
        id: 12,
        date: "Apr 1, 2024",
        topic: "Algorithm Analysis",
        status: "not_started",
      },
      {
        id: 13,
        date: "Apr 8, 2024",
        topic: "Review and Practice",
        status: "not_started",
      },
      {
        id: 14,
        date: "Apr 15, 2024",
        topic: "Final Assessment",
        status: "not_started",
      },
    ],
    tasks: [
      {
        id: 1,
        meetingId: 1,
        title: "Algorithm Analysis Exercise",
        description:
          "Analyze time complexity of given algorithms and provide Big O notation for each. Submit your analysis in PDF format.",
        deadline: "Jan 20, 2024",
        status: "submitted",
        score: 85,
        maxScore: 100,
        submissionDate: "Jan 18, 2024",
        file: "algorithm_analysis.pdf",
      },
      {
        id: 2,
        meetingId: 2,
        title: "Sorting Algorithms Implementation",
        description:
          "Implement bubble sort and merge sort algorithms in Python. Compare their performance on different input sizes.",
        deadline: "Jan 27, 2024",
        status: "submitted",
        score: 90,
        maxScore: 100,
        submissionDate: "Jan 25, 2024",
        file: "sorting_algorithms.zip",
      },
      {
        id: 3,
        meetingId: 3,
        title: "Search Algorithms Assignment",
        description:
          "Compare linear search vs binary search efficiency. Implement both and test with various datasets.",
        deadline: "Feb 3, 2024",
        status: "late",
        score: 75,
        maxScore: 100,
        submissionDate: "Feb 4, 2024",
        file: "search_algorithms.py",
      },
      {
        id: 4,
        meetingId: 4,
        title: "Graph Algorithms Problem Set",
        description:
          "Solve BFS and DFS traversal problems. Implement both algorithms and apply them to given graph structures.",
        deadline: "Feb 10, 2024",
        status: "pending",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
      {
        id: 5,
        meetingId: 5,
        title: "Dynamic Programming Exercises",
        description:
          "Solve Fibonacci sequence and knapsack problems using dynamic programming approach.",
        deadline: "Feb 17, 2024",
        status: "not_submitted",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
      {
        id: 6,
        meetingId: 6,
        title: "Greedy Algorithms Assignment",
        description:
          "Implement activity selection problem and Huffman coding using greedy approach.",
        deadline: "Feb 24, 2024",
        status: "not_started",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
    ],
    materials: [
      {
        id: 1,
        meetingId: 1,
        title: "Introduction to Algorithms Slides",
        type: "slides",
        file: "algorithms_intro.pdf",
        uploadDate: "Jan 14, 2024",
        size: "2.4 MB",
      },
      {
        id: 2,
        meetingId: 1,
        title: "Algorithm Complexity Cheatsheet",
        type: "document",
        file: "complexity_cheatsheet.pdf",
        uploadDate: "Jan 14, 2024",
        size: "1.1 MB",
      },
      {
        id: 3,
        meetingId: 2,
        title: "Sorting Algorithms Visualization",
        type: "video",
        file: "sorting_visualization.mp4",
        uploadDate: "Jan 21, 2024",
        size: "15.2 MB",
      },
      {
        id: 4,
        meetingId: 2,
        title: "Bubble Sort Implementation Guide",
        type: "document",
        file: "bubble_sort_guide.pdf",
        uploadDate: "Jan 21, 2024",
        size: "0.8 MB",
      },
      {
        id: 5,
        meetingId: 3,
        title: "Search Algorithms Lecture Notes",
        type: "document",
        file: "search_algorithms_notes.pdf",
        uploadDate: "Jan 28, 2024",
        size: "3.2 MB",
      },
      {
        id: 6,
        meetingId: 4,
        title: "Graph Theory Fundamentals",
        type: "slides",
        file: "graph_theory.pdf",
        uploadDate: "Feb 4, 2024",
        size: "4.1 MB",
      },
      {
        id: 7,
        meetingId: 5,
        title: "Advanced Graph Algorithms",
        type: "slides",
        file: "advanced_graphs.pdf",
        uploadDate: "Feb 11, 2024",
        size: "3.8 MB",
      },
      {
        id: 8,
        meetingId: 6,
        title: "Dynamic Programming Introduction",
        type: "video",
        file: "dynamic_programming_intro.mp4",
        uploadDate: "Feb 18, 2024",
        size: "22.5 MB",
      },
    ],
  },
  databases: {
    name: "Databases",
    code: "DB204",
    credits: 3,
    currentWeek: 6,
    meetings: [
      {
        id: 1,
        date: "Jan 17, 2024",
        topic: "Database Design Principles",
        status: "present",
      },
      { id: 2, date: "Jan 24, 2024", topic: "ER Diagrams", status: "present" },
      { id: 3, date: "Jan 31, 2024", topic: "SQL Basics", status: "present" },
      { id: 4, date: "Feb 7, 2024", topic: "SQL Queries", status: "present" },
      {
        id: 5,
        date: "Feb 14, 2024",
        topic: "Joins and Subqueries",
        status: "present",
      },
      {
        id: 6,
        date: "Feb 21, 2024",
        topic: "Normalization",
        status: "pending",
      },
      { id: 7, date: "Feb 28, 2024", topic: "Indexing", status: "not_started" },
      {
        id: 8,
        date: "Mar 6, 2024",
        topic: "Transactions",
        status: "not_started",
      },
      {
        id: 9,
        date: "Mar 13, 2024",
        topic: "Stored Procedures",
        status: "not_started",
      },
      {
        id: 10,
        date: "Mar 20, 2024",
        topic: "Database Security",
        status: "not_started",
      },
      {
        id: 11,
        date: "Mar 27, 2024",
        topic: "NoSQL Databases",
        status: "not_started",
      },
      {
        id: 12,
        date: "Apr 3, 2024",
        topic: "Database Optimization",
        status: "not_started",
      },
      {
        id: 13,
        date: "Apr 10, 2024",
        topic: "Cloud Databases",
        status: "not_started",
      },
      {
        id: 14,
        date: "Apr 17, 2024",
        topic: "Final Project",
        status: "not_started",
      },
    ],
    tasks: [
      {
        id: 1,
        meetingId: 1,
        title: "Database Design Document",
        description:
          "Create a complete database design document for a library management system including entities, attributes, and relationships.",
        deadline: "Jan 24, 2024",
        status: "submitted",
        score: 88,
        maxScore: 100,
        submissionDate: "Jan 23, 2024",
        file: "database_design.pdf",
      },
      {
        id: 2,
        meetingId: 2,
        title: "ER Diagram Creation",
        description:
          "Design ER diagrams for an e-commerce platform. Include all entities, relationships, and cardinalities.",
        deadline: "Jan 31, 2024",
        status: "submitted",
        score: 92,
        maxScore: 100,
        submissionDate: "Jan 30, 2024",
        file: "er_diagrams.vsd",
      },
      {
        id: 3,
        meetingId: 3,
        title: "Basic SQL Queries",
        description:
          "Write SQL queries for basic CRUD operations on a sample database. Include SELECT, INSERT, UPDATE, DELETE statements.",
        deadline: "Feb 7, 2024",
        status: "submitted",
        score: 85,
        maxScore: 100,
        submissionDate: "Feb 6, 2024",
        file: "sql_queries.sql",
      },
      {
        id: 4,
        meetingId: 4,
        title: "Advanced SQL Assignment",
        description:
          "Create complex SQL queries using JOINs, subqueries, and aggregate functions for business intelligence reporting.",
        deadline: "Feb 14, 2024",
        status: "pending",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
      {
        id: 5,
        meetingId: 5,
        title: "Normalization Exercise",
        description:
          "Normalize a given database schema to 3NF. Identify functional dependencies and create normalized tables.",
        deadline: "Feb 21, 2024",
        status: "not_submitted",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
    ],
    materials: [
      {
        id: 1,
        meetingId: 1,
        title: "Database Design Principles",
        type: "slides",
        file: "db_design_principles.pdf",
        uploadDate: "Jan 16, 2024",
        size: "2.8 MB",
      },
      {
        id: 2,
        meetingId: 2,
        title: "ER Diagram Tutorial",
        type: "video",
        file: "er_diagram_tutorial.mp4",
        uploadDate: "Jan 23, 2024",
        size: "18.3 MB",
      },
      {
        id: 3,
        meetingId: 3,
        title: "SQL Basics Cheatsheet",
        type: "document",
        file: "sql_basics_cheatsheet.pdf",
        uploadDate: "Jan 30, 2024",
        size: "1.2 MB",
      },
      {
        id: 4,
        meetingId: 4,
        title: "Advanced SQL Queries Guide",
        type: "document",
        file: "advanced_sql_guide.pdf",
        uploadDate: "Feb 6, 2024",
        size: "2.1 MB",
      },
    ],
  },
  webdev: {
    name: "Web Development",
    code: "WD305",
    credits: 3,
    currentWeek: 6,
    meetings: [
      {
        id: 1,
        date: "Jan 18, 2024",
        topic: "HTML & CSS Fundamentals",
        status: "present",
      },
      {
        id: 2,
        date: "Jan 25, 2024",
        topic: "Responsive Design",
        status: "present",
      },
      {
        id: 3,
        date: "Feb 1, 2024",
        topic: "JavaScript Basics",
        status: "absent",
      },
      {
        id: 4,
        date: "Feb 8, 2024",
        topic: "DOM Manipulation",
        status: "present",
      },
      {
        id: 5,
        date: "Feb 15, 2024",
        topic: "Event Handling",
        status: "present",
      },
      {
        id: 6,
        date: "Feb 22, 2024",
        topic: "Frontend Frameworks",
        status: "pending",
      },
      {
        id: 7,
        date: "Mar 1, 2024",
        topic: "React Basics",
        status: "not_started",
      },
      {
        id: 8,
        date: "Mar 8, 2024",
        topic: "State Management",
        status: "not_started",
      },
      {
        id: 9,
        date: "Mar 15, 2024",
        topic: "Backend with Node.js",
        status: "not_started",
      },
      {
        id: 10,
        date: "Mar 22, 2024",
        topic: "RESTful APIs",
        status: "not_started",
      },
      {
        id: 11,
        date: "Mar 29, 2024",
        topic: "Authentication",
        status: "not_started",
      },
      {
        id: 12,
        date: "Apr 5, 2024",
        topic: "Deployment",
        status: "not_started",
      },
      { id: 13, date: "Apr 12, 2024", topic: "Testing", status: "not_started" },
      {
        id: 14,
        date: "Apr 19, 2024",
        topic: "Final Project Presentation",
        status: "not_started",
      },
    ],
    tasks: [
      {
        id: 1,
        meetingId: 1,
        title: "Personal Portfolio Website",
        description:
          "Create a personal portfolio website using HTML and CSS. Include responsive design and modern styling.",
        deadline: "Jan 25, 2024",
        status: "submitted",
        score: 78,
        maxScore: 100,
        submissionDate: "Jan 24, 2024",
        file: "portfolio.zip",
      },
      {
        id: 2,
        meetingId: 2,
        title: "Responsive Layout Challenge",
        description:
          "Build a responsive website layout that works on mobile, tablet, and desktop using CSS Grid and Flexbox.",
        deadline: "Feb 1, 2024",
        status: "late",
        score: 65,
        maxScore: 100,
        submissionDate: "Feb 2, 2024",
        file: "responsive_layout.zip",
      },
      {
        id: 3,
        meetingId: 4,
        title: "DOM Manipulation Exercise",
        description:
          "Create interactive web pages using JavaScript DOM manipulation. Include form validation and dynamic content.",
        deadline: "Feb 15, 2024",
        status: "pending",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
      {
        id: 4,
        meetingId: 5,
        title: "Event Handling Project",
        description:
          "Build a interactive web application with comprehensive event handling for user interactions.",
        deadline: "Feb 22, 2024",
        status: "not_submitted",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
    ],
    materials: [
      {
        id: 1,
        meetingId: 1,
        title: "HTML5 & CSS3 Complete Guide",
        type: "document",
        file: "html5_css3_guide.pdf",
        uploadDate: "Jan 17, 2024",
        size: "3.5 MB",
      },
      {
        id: 2,
        meetingId: 2,
        title: "Responsive Design Workshop",
        type: "video",
        file: "responsive_design_workshop.mp4",
        uploadDate: "Jan 24, 2024",
        size: "25.1 MB",
      },
      {
        id: 3,
        meetingId: 3,
        title: "JavaScript Fundamentals Slides",
        type: "slides",
        file: "javascript_fundamentals.pdf",
        uploadDate: "Jan 31, 2024",
        size: "2.9 MB",
      },
    ],
  },
  softwareeng: {
    name: "Software Engineering",
    code: "SE401",
    credits: 4,
    currentWeek: 6,
    meetings: [
      {
        id: 1,
        date: "Jan 16, 2024",
        topic: "Software Development Life Cycle",
        status: "present",
      },
      {
        id: 2,
        date: "Jan 23, 2024",
        topic: "Agile Methodology",
        status: "present",
      },
      {
        id: 3,
        date: "Jan 30, 2024",
        topic: "Requirements Analysis",
        status: "absent",
      },
      { id: 4, date: "Feb 6, 2024", topic: "System Design", status: "present" },
      { id: 5, date: "Feb 13, 2024", topic: "UML Diagrams", status: "late" },
      {
        id: 6,
        date: "Feb 20, 2024",
        topic: "Design Patterns",
        status: "pending",
      },
      {
        id: 7,
        date: "Feb 27, 2024",
        topic: "Code Quality",
        status: "not_started",
      },
      {
        id: 8,
        date: "Mar 5, 2024",
        topic: "Testing Strategies",
        status: "not_started",
      },
      {
        id: 9,
        date: "Mar 12, 2024",
        topic: "Version Control",
        status: "not_started",
      },
      { id: 10, date: "Mar 19, 2024", topic: "CI/CD", status: "not_started" },
      {
        id: 11,
        date: "Mar 26, 2024",
        topic: "Project Management",
        status: "not_started",
      },
      {
        id: 12,
        date: "Apr 2, 2024",
        topic: "Software Maintenance",
        status: "not_started",
      },
      {
        id: 13,
        date: "Apr 9, 2024",
        topic: "Ethics in Software",
        status: "not_started",
      },
      {
        id: 14,
        date: "Apr 16, 2024",
        topic: "Final Exam",
        status: "not_started",
      },
    ],
    tasks: [
      {
        id: 1,
        meetingId: 1,
        title: "SDLC Documentation",
        description:
          "Document the Software Development Life Cycle for a hypothetical project. Compare different methodologies.",
        deadline: "Jan 23, 2024",
        status: "submitted",
        score: 82,
        maxScore: 100,
        submissionDate: "Jan 22, 2024",
        file: "sdlc_documentation.pdf",
      },
      {
        id: 2,
        meetingId: 2,
        title: "Agile Project Plan",
        description:
          "Create an Agile project plan with user stories, sprints, and backlog for a software project.",
        deadline: "Jan 30, 2024",
        status: "submitted",
        score: 88,
        maxScore: 100,
        submissionDate: "Jan 29, 2024",
        file: "agile_plan.pdf",
      },
      {
        id: 3,
        meetingId: 3,
        title: "Requirements Specification",
        description:
          "Write a complete requirements specification document for a mobile application.",
        deadline: "Feb 6, 2024",
        status: "late",
        score: 70,
        maxScore: 100,
        submissionDate: "Feb 7, 2024",
        file: "requirements_spec.docx",
      },
      {
        id: 4,
        meetingId: 4,
        title: "System Architecture Design",
        description:
          "Design system architecture for a web application including components, interfaces, and data flow.",
        deadline: "Feb 13, 2024",
        status: "pending",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
      {
        id: 5,
        meetingId: 5,
        title: "UML Diagrams Set",
        description:
          "Create a complete set of UML diagrams (class, sequence, use case) for a given system.",
        deadline: "Feb 20, 2024",
        status: "not_submitted",
        score: null,
        maxScore: 100,
        submissionDate: null,
        file: null,
      },
    ],
    materials: [
      {
        id: 1,
        meetingId: 1,
        title: "Software Engineering Introduction",
        type: "slides",
        file: "se_introduction.pdf",
        uploadDate: "Jan 15, 2024",
        size: "3.2 MB",
      },
      {
        id: 2,
        meetingId: 2,
        title: "Agile Methodology Handbook",
        type: "document",
        file: "agile_handbook.pdf",
        uploadDate: "Jan 22, 2024",
        size: "4.5 MB",
      },
      {
        id: 3,
        meetingId: 3,
        title: "Requirements Engineering Guide",
        type: "document",
        file: "requirements_engineering.pdf",
        uploadDate: "Jan 29, 2024",
        size: "2.8 MB",
      },
    ],
  },
};

// Tambahkan objek ini di dekat attendanceData, atau di global scope:
// Financial Data
const financialData = {
  studentInfo: {
    name: "Kharis Destian Maulana",
    nim: "2023001",
    semester: 4,
    academicYear: "2024/2025",
  },

  summary: {
    totalTagihan: 12500000,
    totalBayar: 8500000,
    sisaTagihan: 4000000,
    status: "paid", // paid, partially_paid, unpaid
  },

  tuitionFees: [
    {
      id: 1,
      semester: "Semester 4 (2024/2025)",
      type: "Uang Kuliah Semester",
      amount: 6500000,
      dueDate: "2025-01-15",
      status: "paid",
      paidDate: "2025-01-10",
      paymentMethod: "Transfer Bank",
      receiptNumber: "RCP2025010001",
    },
    {
      id: 2,
      semester: "Semester 4 (2024/2025)",
      type: "Biaya Praktikum",
      amount: 1500000,
      dueDate: "2025-02-01",
      status: "paid",
      paidDate: "2025-01-28",
      paymentMethod: "Virtual Account",
      receiptNumber: "RCP2025010002",
    },
    {
      id: 3,
      semester: "Semester 4 (2024/2025)",
      type: "Biaya SKS Tambahan",
      amount: 500000,
      dueDate: "2025-02-15",
      status: "overdue",
      paidDate: null,
      paymentMethod: null,
      receiptNumber: null,
    },
    {
      id: 4,
      semester: "Semester 4 (2024/2025)",
      type: "Biaya Kegiatan Mahasiswa",
      amount: 750000,
      dueDate: "2025-03-01",
      status: "pending",
      paidDate: null,
      paymentMethod: null,
      receiptNumber: null,
    },
    {
      id: 5,
      semester: "Semester 4 (2024/2025)",
      type: "Biaya Wisuda (Cicilan)",
      amount: 2750000,
      dueDate: "2025-06-15",
      status: "pending",
      paidDate: null,
      paymentMethod: null,
      receiptNumber: null,
    },
  ],

  paymentHistory: [
    {
      id: 1,
      date: "2025-01-10",
      description: "Uang Kuliah Semester 4",
      amount: 6500000,
      method: "Transfer Bank",
      receiptNumber: "RCP2025010001",
      status: "verified",
    },
    {
      id: 2,
      date: "2025-01-28",
      description: "Biaya Praktikum Semester 4",
      amount: 1500000,
      method: "Virtual Account",
      receiptNumber: "RCP2025010002",
      status: "verified",
    },
    {
      id: 3,
      date: "2024-08-15",
      description: "Uang Kuliah Semester 3",
      amount: 6500000,
      method: "Transfer Bank",
      receiptNumber: "RCP2024080001",
      status: "verified",
    },
    {
      id: 4,
      date: "2024-08-20",
      description: "Biaya Praktikum Semester 3",
      amount: 1500000,
      method: "Virtual Account",
      receiptNumber: "RCP2024080002",
      status: "verified",
    },
  ],

  paymentMethods: [
    {
      id: 1,
      type: "qris",
      name: "QRIS (Scan)",
      icon: "qr",
    },
    {
      id: 2,
      type: "bank_transfer",
      name: "Transfer Bank",
      bank: "Bank Mandiri",
      accountNumber: "1234567890",
      accountName: "Universitas CIC",
      icon: "bank",
    },
    {
      id: 3,
      type: "virtual_account",
      name: "Virtual Account",
      bank: "Bank BCA",
      accountNumber: "8012023001",
      accountName: "Kharis Destian",
      icon: "card",
    },
    {
      id: 4,
      type: "e_wallet",
      name: "E-Wallet",
      providers: ["GoPay", "OVO", "Dana"],
      icon: "wallet",
    },
  ],

  scholarships: [
    {
      id: 1,
      name: "Beasiswa Prestasi Akademik",
      type: "Full Tuition",
      amount: 6500000,
      semester: "Semester 3",
      status: "received",
      date: "2024-08-01",
    },
  ],

  installmentPlans: [
    {
      id: 1,
      description: "Cicilan UKS Semester 4",
      totalAmount: 6500000,
      paidAmount: 6500000,
      remainingAmount: 0,
      installments: [
        {
          number: 1,
          amount: 2166667,
          dueDate: "2025-01-10",
          status: "paid",
          paidDate: "2025-01-10",
        },
        {
          number: 2,
          amount: 2166667,
          dueDate: "2025-02-10",
          status: "paid",
          paidDate: "2025-02-08",
        },
        {
          number: 3,
          amount: 2166666,
          dueDate: "2025-03-10",
          status: "paid",
          paidDate: "2025-03-05",
        },
      ],
    },
  ],
};

// Valid attendance codes for each course (simulated)
const validCodes = {
  algorithms: "ALG123",
  databases: "DB2024",
  webdev: "WEB456",
  softwareeng: "SE7890",
};

const campusInfoData = {
  events: [
    {
      id: 1,
      title: "Seminar Nasional AI",
      date: "2025-11-25",
      time: "10:00",
      location: "Aula Gedung Rektorat",
      organizer: "HIMA TI",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Pekan Olahraga Mahasiswa (POM)",
      date: "2025-11-28",
      time: "08:00",
      location: "Stadion Kampus",
      organizer: "FPO",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Pameran DKV 'Pixelation'",
      date: "2025-12-01",
      time: "09:00",
      location: "Galeri FTI",
      organizer: "Prodi DKV",
      status: "upcoming",
    },
  ],
  announcements: [
    {
      id: 1,
      title: "Pendaftaran Beasiswa 2026 Dibuka",
      excerpt:
        "Pendaftaran beasiswa prestasi akademik dan non-akademik telah dibuka mulai 15 November hingga 15 Desember 2025.",
      date: "2025-11-16",
      tag: "Akademik",
      tagKey: "info.tag.academic",
    },
    {
      id: 2,
      title: "Perubahan Jadwal Libur Akhir Semester",
      excerpt:
        "Libur akhir semester dimajukan menjadi tanggal 20 Januari 2026. Harap perhatikan jadwal ujian akhir Anda.",
      date: "2025-11-15",
      tag: "Umum",
      tagKey: "info.tag.general",
    },
    {
      id: 3,
      title: "Pendaftaran KKN 2026",
      excerpt:
        "Bagi mahasiswa semester 6, pendaftaran Kuliah Kerja Nyata (KKN) akan dibuka pada tanggal 1 Desember 2025.",
      date: "2025-11-14",
      tag: "Akademik",
      tagKey: "info.tag.academic",
    },
  ],
};

// Language System - COMPREHENSIVE TRANSLATIONS
const translations = {
  en: {
    "nav.dashboard": "Dashboard",
    "nav.profile": "Profile",
    "nav.grades": "Grades",
    "nav.attendance": "Attendance",
    "nav.ai_assistant": "AIDA AI",
    "nav.settings": "Settings",
    "nav.logout": "Logout",
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome back, ",
    "dashboard.gpa": "GPA",
    "dashboard.weighted_average": "Weighted Average",
    "dashboard.credits": "Credits",
    "dashboard.this_semester": "This Semester",
    "dashboard.attendance": "Attendance",
    "dashboard.overall": "Overall",
    "dashboard.active_courses": "Active Courses",
    "dashboard.now": "Now",
    "dashboard.learning_progress": "Learning Progress",
    "dashboard.courses_grades": "Courses & Grades",
    "profile.title": "Profile",
    "profile.name": "Name",
    "profile.nim": "Student ID",
    "profile.program": "Program",
    "profile.year": "Year",
    "profile.semester": "Semester",
    "profile.email": "Email",
    "grades.title": "Grades",
    "attendance.title": "Attendance",
    "attendance.select_course": "Select Course",
    "attendance.course_description":
      "Choose a course to view attendance records, tasks, and learning materials",
    "attendance.attendance": "Attendance",
    "attendance.tasks": "Tasks",
    "attendance.materials": "Materials",
    "attendance.attendance_rate": "Attendance Rate",
    "attendance.present": "Present",
    "attendance.absent": "Absent",
    "attendance.late": "Late",
    "attendance.meeting_history": "Meeting History",
    "attendance.meeting": "Meeting",
    "attendance.date": "Date",
    "attendance.topic": "Topic",
    "attendance.status": "Status",
    "attendance.action": "Action",
    "attendance.not_started": "Not Yet Started",
    "attendance.enter_code": "Enter Attendance Code",
    "attendance.code_description":
      "Please enter the unique code provided by your lecturer",
    "attendance.code_case_sensitive": "The attendance code is case-sensitive",
    "attendance.code_expires":
      "The code expires after 4 hours from the time the code was created",
    "attendance.submit_attendance": "Submit Attendance",
    "attendance.absent_now": "Absen Now",
    "attendance.not_available": "Not Available",
    "tasks.title": "Tasks",
    "tasks.completion": "Tasks Completed",
    "tasks.submitted": "Submitted",
    "tasks.pending": "Pending",
    "tasks.late": "Late",
    "tasks.course_tasks": "Course Tasks",
    "tasks.due": "Due",
    "tasks.submit": "Submit",
    "tasks.view": "View",
    "tasks.submitted_status": "Submitted",
    "tasks.late_status": "Late",
    "tasks.pending_review": "Pending Review",
    "tasks.not_submitted": "Not Submitted",
    "tasks.not_started": "Not Started",
    "tasks.task_submission": "Task Submission",
    "tasks.description": "Description",
    "tasks.submit_work": "Submit Your Work",
    "tasks.upload_file": "Upload File",
    "tasks.accepted_formats":
      "Accepted formats: PDF, DOC, DOCX, ZIP, RAR (Max: 10MB)",
    "tasks.additional_notes": "Additional Notes (Optional)",
    "tasks.submit_task": "Submit Task",
    "tasks.cancel": "Cancel",
    "materials.title": "Materials",
    "materials.learning_materials": "Learning Materials",
    "materials.download": "Download",
    "quick.download_transcript": "Download Transcript",
    "quick.request_leave": "Request Leave",
    "quick.contact_advisor": "Contact Advisor",
    "quick.view_schedule": "View Schedule",
    "common.back": "Back",
    "common.back_to_courses": "Back to Courses",
    "common.back_to_course": "Back to Course",
    "common.credits": "credits",
    "nav.schedule": "Class Schedule",
    "schedule.title": "Class Schedule",
    "schedule.subtitle": "Your weekly class schedule for Semester 4",
    "schedule.filter_by_day": "Filter by Day:",
    "schedule.all_days": "All Days",
    "schedule.monday": "Monday",
    "schedule.tuesday": "Tuesday",
    "schedule.wednesday": "Wednesday",
    "schedule.thursday": "Thursday",
    "schedule.friday": "Friday",
    "schedule.current_week": "Current Week:",
    "schedule.ongoing": "Ongoing",
    "schedule.upcoming": "Upcoming",
    "schedule.finished": "Finished",
    "schedule.total_classes": "Total Classes This Week",
    "schedule.completed": "Completed",
    "schedule.hours_week": "Hours/Week",
    "settings.title": "Settings",
    "settings.account": "Account Settings",
    "settings.email_notifications": "Email Notifications",
    "settings.dark_mode": "Dark Mode",
    "settings.language": "Language Settings",
    "settings.select_language": "Select Language",
    "settings.english": "English",
    "settings.indonesian": "Indonesian",
    "settings.privacy": "Privacy Settings",
    "settings.profile_visibility": "Profile Visibility",
    "settings.public": "Public",
    "settings.students_only": "Students Only",
    "settings.private": "Private",
    "settings.save": "Save Settings",
    "settings.quick_settings": "Quick Settings",
    "settings.saved": "Settings saved successfully!",
    "leave.title": "Request Leave of Absence",
    "leave.date": "Date",
    "leave.reason": "Reason",
    "leave.reason_placeholder": "Please state your reason...",
    "leave.cancel": "Cancel",
    "leave.submit": "Submit Request",
    "gpa.calculate": "Calculate GPA/IPS",
    "gpa.your_ips": "This Semester's IPS",
    "gpa.your_ipk": "Cumulative GPA (Est.)",
    "gpa.select_grade": "-- Predict --",
    "gpa.calculated": "GPA/IPS calculation complete!",
    "chat.greeting": "Hello! Ask me about your dashboard. Try typing 'help'.",

    "chat.hello": "Hello, {name}! How can I help you with your dashboard?",
    "chat.welcome": "You're welcome! Happy to help.",
    "chat.help": `I can answer a lot! Here is a complete list of what you can ask:
        <br><br>
        <b>1. General & Help</b>
        <ul>
          <li><b>Greeting:</b> "hello", "hi"</li>
          <li><b>Help:</b> "help", "what can you do"</li>
          <li><b>Profile:</b> "who am i", "my name"</li>
          <li><b>Thanks:</b> "thanks", "thank you"</li>
        </ul>
        <b>2. Summary & Performance</b>
        <ul>
          <li><b>Daily Briefing:</b> "agenda for today"</li>
          <li><b>Grade Performance:</b> "how's my performance"</li>
          <li><b>GPA:</b> "what's my gpa"</li>
          <li><b>Total Credits:</b> "how many credits"</li>
        </ul>
        <b>3. Schedule & Attendance</b>
        <ul>
          <li><b>Schedule by Day:</b> "schedule for today", "schedule for tuesday"</li>
          <li><b>Attendance Warning:</b> "attendance warning"</li>
          <li><b>Attendance Info:</b> "my attendance in algorithms"</li>
        </ul>
        <b>4. Tasks & Materials</b>
        <ul>
          <li><b>All Remaining Tasks:</b> "what tasks do i have"</li>
          <li><b>Tasks per Course:</b> "algorithms tasks"</li>
          <li><b>Urgent Task:</b> "most urgent task"</li>
          <li><b>Count Remaining Tasks:</b> "how many tasks are left"</li>
          <li><b>Tasks by Status:</b> "what tasks are late"</li>
          <li><b>Task Description:</b> "description for software task"</li>
          <li><b>Material List:</b> "database materials"</li>
        </ul>
        <b>5. Specific Course Info</b>
        <ul>
          <li><b>List All Courses:</b> "list my courses"</li>
          <li><b>Course Details:</b> "tell me about algorithms"</li>
          <li><b>Lecturer Info:</b> "who is the lecturer for algorithms"</li>
          <li><b>Room Info:</b> "where is the algorithms class"</li>
          <li><b>Credits per Course:</b> "how many credits is algorithms"</li>
          <li><b>Grades per Course:</b> "my grades in algorithms"</li>
          <li><b>Topics This Week:</b> "topics for this week"</li>
        </ul>
        <b>6. Reports & Updates</b>
        <ul>
          <li><b>Missed Items:</b> "what did i miss"</li>
          <li><b>Latest Updates:</b> "what's the latest update"</li>
        </ul>`,
    "chat.gpa": "Your current GPA is <b>{gpa}</b>.",
    "chat.credits": "You are taking <b>{sks} credits</b> this semester.",
    "chat.whoami":
      "You are <b>Kharis Destian Maulana</b> (NIM: 2023001) from the Informatics Engineering program.",
    "chat.fallback":
      "Sorry, I don't understand that question. Try asking 'help' to see what I can do.",
    "chat.schedule.today_off":
      "Looks like there are no classes scheduled for today. Enjoy your day!",
    "chat.schedule.not_found": "The schedule for that day wasn't found.",
    "chat.schedule.header": "Schedule for <b>{dayName}</b>:<ul>",
    "chat.schedule.item": "<li><b>{time}</b>: {course} (at {room})</li>",
    "chat.schedule.prompt":
      "Which day's schedule would you like to know? (e.g., 'schedule for monday')",
    "chat.courselist.header": "You are enrolled in the following courses:<ul>",
    "chat.coursedetails.info":
      "Info for <b>{name}</b> ({code}):<ul><li>Credits: {credits}</li><li>Total Meetings: {meetings}</li><li>Total Tasks: {tasks}</li><li>Total Materials: {materials}</li></ul>",
    "chat.coursedetails.prompt":
      "You can ask more specific questions like 'tasks for {courseKey}' or 'grades for {courseKey}'.",
    "chat.tasks.none_specific":
      "Great! There are no pending tasks for <b>{courseName}</b>.",
    "chat.tasks.none_all":
      "Excellent! All your tasks are complete or there are no new tasks.",
    "chat.tasks.header": "Here are your upcoming or unfinished tasks:<ul>",
    "chat.tasks.item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "chat.grades.prompt":
      "Which course's grades would you like to know? (e.g., 'webdev grades')",
    "chat.grades.none":
      "There are no grades entered yet for <b>{courseName}</b>.",
    "chat.grades.header":
      "List of grades for <b>{courseName}</b> that have been assessed:<ul>",
    "chat.grades.item": "<li><b>{title}</b>: {score} / {maxScore}</li>",
    "chat.grades.item_pending": "<li><b>{title}</b>: (Being graded)</li>",
    "chat.attendance.overall":
      "Your overall attendance is <b>{attendance}%</b>.",
    "chat.attendance.specific":
      "Attendance stats for <b>{name}</b>:<ul><li>Present: {present}</li><li>Absent: {absent}</li><li>Late: {late}</li></ul>Total attendance rate: <b>{rate}%</b>",
    "chat.perf.no_scores":
      "No grades have been entered yet. I can't calculate your performance.",
    "chat.perf.summary":
      "Your performance summary so far (based on task averages):<ul><li>Overall Average: <b>{avg}%</b></li><li>Best Performance: <b>{bestCourse}</b> ({bestScore}%)</li><li>Needs Improvement: <b>{worstCourse}</b> ({worstScore}%)</li></ul>",
    "chat.missed.header": "Report of missed items: <br>",
    "chat.missed.tasks_header": "<b>Tasks Not Submitted:</b><ul>",
    "chat.missed.task_item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "chat.missed.tasks_none": "<p>👍 Great! No tasks missed.</p>",
    "chat.missed.meetings_header": "<b>Meetings You Missed (Absent):</b><ul>",
    "chat.missed.meeting_item":
      "<li><b>{courseName}</b>: Meeting {id} - {topic}</li>",
    "chat.missed.meetings_none":
      "<p>👍 Your attendance is 100% (or no absences recorded).</p>",
    "chat.updates.header": "Latest updates for you:<ul>",
    "chat.updates.next_task": "<b>Closest Task:</b> {task}",
    "chat.updates.no_task": "<b>Closest Task:</b> No new tasks.",
    "chat.updates.latest_material": "<b>Latest Material:</b> {material}",
    "chat.updates.no_material": "<b>Latest Material:</b> No new materials.",
    "chat.desc.prompt":
      "Please specify the course. (e.g., 'description for latest algorithms task')",
    "chat.desc.none": "There are no tasks I can describe for {courseName}.",
    "chat.desc.response":
      'Description for task <b>{title}</b> ({courseName}):<br><p>"<i>{description}</i>"</p>',
    "chat.topics.header": "Topics for this week:<ul>",
    "chat.topics.item": "<li><b>{courseName}</b>: {topic} (Meeting {id})</li>",
    "chat.topics.none":
      "It seems the 'current week' data isn't set. But you can ask for the schedule by day.",
    "lecturer.info":
      "The lecturer for <b>{courseName}</b> is <b>{lecturer}</b>.",
    "lecturer.room": "The <b>{courseName}</b> class is held in <b>{room}</b>.",
    "lecturer.not_found":
      "Sorry, I couldn't find the lecturer or room info for {courseName} in the schedule.",
    "lecturer.prompt":
      "Which course's lecturer or room do you want to know about?",
    "credits.info":
      "The course <b>{courseName}</b> is worth <b>{credits} credits</b>.",
    "credits.prompt":
      "Please specify which course you're asking about, e.g., 'how many credits for algorithms?'",
    "urgent.header": "Here is your most urgent upcoming task:",
    "urgent.item": "<b>{courseName}</b>: {title} (Deadline: {deadline})",
    "urgent.none":
      "👍 Great job! You have no urgent tasks with an upcoming deadline.",
    "tasks_status.header":
      "Here are the tasks with the status '<b>{status}</b>':<ul>",
    "tasks_status.item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "tasks_status.none": "You have no tasks with the status '<b>{status}</b>'.",
    "motivation.response":
      "Your best performance is in <b>{bestCourse}</b>, keep it up! You might want to focus a bit more on <b>{worstCourse}</b>. You can do it!",
    "chat.briefing.header":
      "Here's your daily briefing for <b>{dayName}, {date}</b>:<ul>",
    "chat.briefing.no_class": "<li>You have no classes scheduled today.</li>",
    "chat.briefing.class_item": "<li><b>{time}</b>: {course} ({topic})</li>",
    "chat.briefing.deadline_header": "<b>Deadlines Today:</b>",
    "chat.briefing.deadline_item":
      "<li>Watch out! The task '<b>{taskTitle}</b>' ({courseName}) is due today.</li>",
    "chat.briefing.deadline_none": "<li>👍 No tasks are due today.</li></ul>",
    "chat.attendance_warn.header":
      "I've checked your attendance. Here's the warning list:<ul>",
    "chat.attendance_warn.item":
      "<li><b>{courseName}</b>: You have <b>{absentCount}</b> absences. Be careful.</li></ul>",
    "chat.attendance_warn.none":
      "👍 Your attendance is looking great. No courses are at risk right now.",
    "chat.task_count.item":
      "You have <b>{count}</b> tasks remaining for <b>{courseName}</b>.",
    "chat.task_count.none":
      "You have <b>0</b> tasks remaining for <b>{courseName}</b>. Great job!",
    "chat.task_count.all":
      "Across all courses, you have a total of <b>{count}</b> remaining tasks.",
    "chat.task_count.all_none":
      "You have <b>0</b> remaining tasks in total. You're all caught up!",
    "chat.task_count.prompt": "Which course do you want me to count tasks for?",

    "nav.codeplayground": "Code Editor",
    "playground.title": "Code Playground",
    "playground.run": "Run Code",
    "playground.save": "Save",
    "playground.load": "Load",
    "playground.clear": "Clear",
    "playground.dark_theme": "Dark Theme",
    "playground.output_title": "Output",
    "playground.welcome_h3": "Welcome to Code Playground!",
    "playground.welcome_p":
      'Write your code and click "Run Code" to see the output here.',
    "playground.html_preview": "Live Preview",
    "playground.execution_success": "Code executed successfully (no output)",
    "playground.execution_api_simulation": "Execution service",
    "playground.simulation_notes":
      "This would normally execute your code via a backend service. This is currently a simulation.",
    "playground.loaded_file": "File loaded successfully!",
    "playground.no_saved": "No saved code found for this language",
    "playground.saved": "Code saved successfully!",
    "playground.loaded": "Saved code loaded!",

    "nav.finance": "Finance",
    "finance.title": "Finance",
    "finance.subtitle": "Manage your tuition and payment information",
    "finance.summary": "Payment Summary",
    "finance.total_bill": "Total Bill",
    "finance.total_paid": "Total Paid",
    "finance.remaining_bill": "Remaining Bill",
    "finance.payment_status": "Payment Status",
    "finance.status.paid": "Paid Off",
    "finance.status.partially_paid": "Partially Paid",
    "finance.status.unpaid": "Unpaid",
    "finance.tuition_fees": "Tuition & Fees",
    "finance.payment_history": "Payment History",
    "finance.payment_methods": "Payment Methods",
    "finance.scholarships": "Scholarships",
    "finance.semester": "Semester",
    "finance.type": "Type",
    "finance.amount": "Amount",
    "finance.due_date": "Due Date",
    "finance.status": "Status",
    "finance.action": "Action",
    "finance.pay_now": "Pay Now",
    "finance.view_receipt": "View Receipt",
    "finance.download_receipt": "Download Receipt",
    "finance.date": "Date",
    "finance.description": "Description",
    "finance.method": "Payment Method",
    "finance.receipt_number": "Receipt Number",
    "finance.verified": "Verified",
    "finance.pending": "Pending",
    "finance.overdue": "Overdue",
    "finance.bank_transfer": "Bank Transfer",
    "finance.virtual_account": "Virtual Account",
    "finance.e_wallet": "E-Wallet",
    "finance.credit_card": "Credit/Debit Card",
    "finance.scholarship_name": "Scholarship Name",
    "finance.scholarship_type": "Type",
    "finance.scholarship_amount": "Amount",
    "finance.scholarship_status": "Status",
    "finance.received": "Received",
    "finance.total": "Total",
    "finance.installment_plan": "Installment Plan",
    "finance.paid_amount": "Paid Amount",
    "finance.remaining_amount": "Remaining Amount",
    "finance.installment": "Installment",
    "finance.quick_pay": "Quick Pay",
    "finance.upcoming_bills": "Upcoming Bills",
    "finance.no_bills": "No upcoming bills",

    "chat.group_chat": "Group Chat",
    "chat.subtitle": "Chat with all online students",
    "chat.group_name": "Classroom Group",
    "chat.online_count": "online",
    "chat.welcome_title": "Welcome to Classroom Group!",
    "chat.welcome_subtitle": "Start chatting with everyone online",
    "chat.placeholder": "Type a message to everyone...",
    "chat.online_now": "Online Now",
    "chat.refresh": "Refresh",
    "chat.search_messages": "Search messages",
    "chat.group_info": "Group info",
    "chat.emoji": "Emoji",
    "chat.attach_file": "Attach file",
    "chat.joined_chat": "joined the chat",
    "chat.left_chat": "left the chat",
    "chat.typing": "is typing...",
    "chat.no_online_users": "No one online",
    "chat.you": "You",

    // Navigation
    "nav.messages": "Messages",

    "nav.notes": "Notes",
    "nav.kanban": "My Tasks",
    "notes.title": "Lecture Notes",
    "notes.subtitle": "Write down key points here (auto-saved).",
    "kanban.title": "Personal Task Board",
    "kanban.subtitle": "Manage your personal tasks to stay organized.",
    "kanban.todo": "To Do",
    "kanban.progress": "In Progress",
    "kanban.done": "Done",

    "nav.exams": "Exam Center",
    "exams.title": "Exam Center (Midterms & Finals)",
    "exams.subtitle":
      "View schedules, statuses, and start your online exams here.",
    "exams.midterm": "Midterm Exams (UTS)",
    "exams.final": "Final Exams (UAS)",
    "exams.room": "Room:",
    "exams.typeOnline": "Online Test",
    "exams.typeOffline": "Offline Exam",
    "exams.typeProject": "Take-Home Project",
    "exams.notStarted": "Not Started",
    "exams.viewScore": "View Score",
    "exams.startExam": "Start Exam",
    "exams.timeLeft": "Time Left:",
    "exams.timeUp": "Time's Up!",
    "exams.q1title": "Question 1 (Multiple Choice)",
    "exams.q1text":
      "Which of the following is the worst-case time complexity of the Bubble Sort algorithm?",
    "exams.q2title": "Question 2 (Essay)",
    "exams.q2text":
      "Explain the main difference between 'Queue' and 'Stack' data structures, along with an example of their use.",
    "exams.q2placeholder": "Type your essay answer here...",
    "exams.q3title": "Question 3 (Coding)",
    "exams.q3text":
      "Create a simple JavaScript function that accepts one parameter (a number) and returns the string 'Even' if the number is even, or 'Odd' if the number is odd.",
    "exams.runTest": "Run Code Test",
    "exams.testOutput": "Test Output",
    "exams.runTestPrompt": "Run the test to see the results...",
    "exams.submitExam": "Submit Exam Answers",

    "nav.feb": "FEB Tools",
    "feb.title": "Faculty of Economics & Business Tools",
    "feb.subtitle": "Your financial calculators and accounting utilities.",
    "feb.tab.accounting": "Accounting Journal",
    "feb.tab.compound": "Compound Interest",
    "feb.tab.npv": "NPV Calculator",
    "feb.accounting.title": "General Journal",
    "feb.accounting.desc":
      "Enter transactions below. The status will update to 'Balance' if total Debit and Credit are equal.",
    "feb.accounting.account": "Account",
    "feb.accounting.descShort": "Description",
    "feb.accounting.debit": "Debit ($)",
    "feb.accounting.credit": "Credit ($)",
    "feb.accounting.addRow": "+ Add Row",
    "feb.accounting.totalDebit": "Total Debit",
    "feb.accounting.totalCredit": "Total Credit",
    "feb.accounting.status": "Status",
    "feb.accounting.statusBalance": "Balance",
    "feb.accounting.statusImbalance": "Imbalance",
    "feb.compound.title": "Compound Interest Calculator",
    "feb.compound.principal": "Initial Principal ($)",
    "feb.compound.monthly": "Monthly Contribution ($)",
    "feb.compound.rateAnnum": "Annual Interest Rate (%)",
    "feb.compound.period": "Period (Years)",
    "feb.compound.calculate": "Calculate Future Value",
    "feb.compound.futureValue": "Future Value",
    "feb.compound.totalPrincipal": "Total Principal Invested",
    "feb.compound.totalInterest": "Total Interest Earned",
    "feb.npv.title": "Project Viability (NPV) Calculator",
    "feb.npv.investment": "Initial Investment ($)",
    "feb.npv.rate": "Discount Rate (%)",
    "feb.npv.cashflow": "Cash Flow (per Year)",
    "feb.npv.calculate": "Calculate NPV",
    "feb.npv.netValue": "Net Present Value (NPV)",
    "feb.npv.statusPrompt": "Enter data to see viability",
    "feb.npv.statusGood": "Project is Viable (NPV is Positive)",
    "feb.npv.statusBad": "Project is Not Viable (NPV is Negative)",
    "feb.npv.statusEven": "Project Breaks Even (NPV is 0)",

    "nav.dkv": "Pixel Pad",
    "dkv.title": "Pixel Pad",
    "dkv.subtitle": "A simple pixel art tool for DKV.",
    "dkv.color": "Color:",
    "dkv.tools": "Tool:",
    "dkv.tool.pencil": "Pencil",
    "dkv.tool.eraser": "Eraser",
    "dkv.tool.picker": "Picker",
    "dkv.gridSize": "Grid Size:",
    "dkv.toggleGrid": "Toggle Grid",
    "dkv.clear": "Clear",
    "dkv.download": "Download PNG",

    "nav.fpo": "Fitness Tools",
    "fpo.title": "Fitness Analysis Center",
    "fpo.subtitle":
      "Calculators for Anthropometry, Energy Needs, and Training Zones.",
    "fpo.tab.bmi": "BMI Calculator",
    "fpo.tab.tdee": "Energy Calculator (TDEE)",
    "fpo.tab.hr": "Training Zones (Heart Rate)",
    "fpo.calculate": "Calculate",
    "fpo.bmi.title": "Anthropometry Calculator (BMI)",
    "fpo.bmi.height": "Height (cm)",
    "fpo.bmi.weight": "Weight (kg)",
    "fpo.bmi.yourBmi": "Your Body Mass Index (BMI)",
    "fpo.bmi.prompt": "Enter your data",
    "fpo.bmi.underweight": "Underweight",
    "fpo.bmi.normal": "Normal Weight",
    "fpo.bmi.overweight": "Overweight",
    "fpo.bmi.obese": "Obese",
    "fpo.tdee.title": "Energy Needs Calculator",
    "fpo.tdee.age": "Age",
    "fpo.tdee.gender": "Gender",
    "fpo.tdee.male": "Male",
    "fpo.tdee.female": "Female",
    "fpo.tdee.activity": "Activity Level",
    "fpo.tdee.sedentary": "Sedentary (Rarely)",
    "fpo.tdee.light": "Light (1-3x / week)",
    "fpo.tdee.moderate": "Moderate (3-5x / week)",
    "fpo.tdee.heavy": "Heavy (6-7x / week)",
    "fpo.tdee.athlete": "Athlete (2x / day)",
    "fpo.tdee.tdee": "Daily Calorie Needs (TDEE)",
    "fpo.tdee.bmr": "Resting Calories (BMR)",
    "fpo.hr.title": "Training Zone Calculator (Heart Rate)",
    "fpo.hr.mhr": "Max Heart Rate (MHR)",
    "fpo.hr.zone1": "Zone 1 (50-60%)",
    "fpo.hr.zone2": "Zone 2 (60-70%)",
    "fpo.hr.zone3": "Zone 3 (70-80%)",
    "fpo.hr.zone4": "Zone 4 (80-90%)",
    "fpo.hr.zone5": "Zone 5 (90-100%)",

    "nav.si": "ERD Designer",
    "si.title": "Database Schema Designer",
    "si.subtitle": "Create tables, add columns, and design your simple ERD.",
    "si.tableName": "Table Name:",
    "si.addTable": "+ Add Table",
    "si.clearAll": "Clear Canvas",
    "si.addField": "Add Field",
    "si.fieldName": "Field Name",
    "si.fieldType": "Data Type",

    "nav.mi": "Flowchart",
    "mi.title": "Flowchart Designer",
    "mi.subtitle": "Design business process flows or simple flowcharts.",
    "mi.addShape": "Add Shape:",
    "mi.terminator": "Start / End",
    "mi.process": "Process",
    "mi.decision": "Decision",
    "mi.decision": "Decision",
    "mi.data": "Data (I/O)",
    "mi.document": "Document",
    "mi.subroutine": "Subroutine",
    "mi.terminator": "Terminator",
    "mi.process": "Process",
    "mi.decision": "Decision",
    "mi.inputOutput": "Input/Output",
    "mi.predefinedProcess": "Predefined Process",
    "mi.document": "Document",
    "mi.onpageref": "On-Page Ref",
    "mi.offpageref": "Off-Page Ref",
    "mi.manualop": "Manual Operation",
    "mi.display": "Display",
    "mi.subroutine": "Subroutine",
    "mi.alternateProcess": "Alternate Process",
    "mi.internalStorage": "Internal Storage",
    "mi.multiDocument": "Multi-Document",
    "mi.manualInput": "Manual Input",
    "mi.card": "Card",
    "mi.punchedTape": "Punched Tape",
    "mi.summingJunction": "Summing Junction",
    "mi.or": "Or",
    "mi.collate": "Collate",
    "mi.sort": "Sort",
    "mi.extract": "Extract",
    "mi.merge": "Merge",
    "mi.storageData": "Storage Data",
    "mi.delay": "Delay",
    "mi.sequentialStorage": "Sequential Storage",
    "mi.directStorage": "Direct Storage",
    "mi.display": "Display",
    "mi.preparation": "Preparation",

    "mi.download": "Download PNG",

    "chat.clearHistory": "Clear History",

    "nav.info": "Campus Info",
    "info.title": "Campus Information Center",
    "info.subtitle": "Events, announcements, and the latest news from campus.",
    "info.tab.events": "Event Calendar",
    "info.tab.announcements": "Announcement Board",
    "info.location": "Location:",
    "info.organizer": "Organizer:",
    "info.tag.academic": "Academic",
    "info.tag.general": "General",
    "info.tab.map": "Campus Map",
    "info.map.k1.title": "Campus 1",
    "info.map.k2.title": "Campus 2",
    "info.map.open": "Open in Google Maps",

    "nav.pomodoro": "Study Center",
    "pomodoro.title": "Study Center (Pomodoro Timer)",
    "pomodoro.subtitle": "Use the Pomodoro technique to study with more focus.",
    "pomodoro.mode.pomodoro": "Focus Time",
    "pomodoro.mode.shortBreak": "Short Break",
    "pomodoro.mode.longBreak": "Long Break",
    "pomodoro.start": "Start",
    "pomodoro.pause": "Pause",
    "pomodoro.reset": "Reset",
    "pomodoro.alarm.pomodoro": "Focus time is over! Time for a short break.",
    "pomodoro.alarm.break": "Break time is over! Time to get back to focus.",

    "nav.roomfinder": "Room",
    "roomfinder.title": "Classroom Finder",
    "roomfinder.subtitle":
      "See which classrooms are available or in use right now.",
    "roomfinder.available": "Available Rooms",
    "roomfinder.inuse": "In-Use Rooms",
    "roomfinder.until": "Available until",
    "roomfinder.occupied": "Occupied by",
    "roomfinder.untilTime": "until",

    "nav.ktm": "Digital Student ID",
    "ktm.title": "Digital Student ID (KTM)",
    "ktm.subtitle": "Your virtual student card. Click to flip.",
    "ktm.download": "Download Card",

    "ktm.terms_title": "TERMS OF USE",
    "ktm.rule1": "This card is the property of CIC University.",
    "ktm.rule2": "Please carry during academic activities.",
    "ktm.rule3": "Report lost cards to Academic Administration.",
    "ktm.type": "STUDENT CARD",

    "nav.marketplace": "Marketplace",
    "market.title": "Student Marketplace",
    "market.subtitle": "Buy and sell items, services, and food within campus.",
    "market.sell": "+ Sell Item",
    "market.cat.all": "All",
    "market.cat.book": "Books",
    "market.cat.elec": "Electronics",
    "market.cat.food": "Food",
    "market.cat.service": "Services",
    "market.chat": "Chat Seller",
    "market.sellTitle": "Sell Item/Service",
    "market.form.name": "Product Name",
    "market.form.price": "Price (Rp)",
    "market.form.category": "Category",
    "market.form.wa": "WhatsApp Number",
    "market.form.submit": "Post Ad",
    "market.success": "Item posted successfully!",

    "nav.career": "Career Center",
    "career.title": "Career & Internship Center",
    "career.subtitle": "Find the best internships and jobs for your future.",
    "career.filter.all": "All",
    "career.filter.intern": "Internship",
    "career.filter.full": "Full-time",
    "career.filter.part": "Part-time",
    "career.apply": "Quick Apply",
    "career.applyTitle": "Apply for Job",
    "career.form.cv": "Upload CV (PDF)",
    "career.form.cover": "Cover Letter (Optional)",
    "career.form.submit": "Submit Application",
    "career.success": "Application sent successfully!",

    "nav.help": "Help Center",
    "help.title": "Student Help Center",
    "help.subtitle": "Submit aspirations or report lost items on campus.",
    "help.tab.voice": "Student Voice",
    "help.tab.lf": "Lost & Found",
    "help.voice.formTitle": "Submit Report/Aspiration",
    "help.voice.type": "Report Type",
    "help.voice.desc": "Description",
    "help.voice.submit": "Submit Report",
    "help.voice.history": "Your History",
    "help.voice.success": "Report submitted successfully!",
    "help.lf.post": "+ Post Item",
    "help.lf.modalTitle": "Post Lost/Found Item",
    "help.lf.type": "Status",
    "help.lf.item": "Item Name",
    "help.lf.location": "Location",

    "nav.krs": "Online KRS",
    "krs.title": "Online Study Plan (KRS)",
    "krs.subtitle": "Select courses for the upcoming semester. Max 24 credits.",
    "krs.ipk_last": "Last GPA",
    "krs.max_sks": "Max Credits",
    "krs.selected_sks": "Selected Credits",
    "krs.code": "Code",
    "krs.course": "Course Name",
    "krs.sks": "Credits",
    "krs.class": "Class",
    "krs.schedule": "Schedule",
    "krs.quota": "Quota",
    "krs.reset": "Reset Selection",
    "krs.submit": "Submit KRS",
    "krs.edit": "Edit KRS",
    "krs.download": "Download KSM (PDF)",
    "krs.success": "KRS successfully submitted!",
    "krs.status_draft": "Draft (Not Sent)",
    "krs.status_submitted": "Submitted (Waiting Approval)",

    "nav.citation": "Citation Gen",
    "citation.title": "Citation Generator",
    "citation.subtitle":
      "Automatically generate citations for your papers (APA Style).",
    "citation.sourceType": "Source Type",
    "citation.type.book": "Book",
    "citation.type.journal": "Journal Article",
    "citation.type.website": "Website",
    "citation.authorLast": "Author Last Name",
    "citation.authorFirst": "First Name Initial",
    "citation.year": "Year",
    "citation.contentTitle": "Title",
    "citation.publisher": "Publisher",
    "citation.journalName": "Journal Name & Volume",
    "citation.generate": "Generate Citation",
    "citation.result": "Result:",
    "citation.copy": "Copy to Clipboard",
    "citation.copied": "Copied!",

    "nav.skkm": "SKKM",
    "skkm.title": "Student Activity Points (SKKM)",
    "skkm.subtitle": "Collect 100 points for your thesis requirement.",
    "skkm.upload": "+ Upload Certificate",
    "skkm.status": "Status: Insufficient",
    "skkm.history": "Activity History",
    "skkm.form.title": "Input Activity",
    "skkm.form.name": "Activity Name",
    "skkm.form.type": "Type",
    "skkm.form.level": "Level",
    "skkm.form.points": "Points (Est.)",
    "skkm.form.file": "Certificate Proof",
    "skkm.form.submit": "Save Activity",
    "skkm.validate": "Validate to DPA",
    "skkm.success": "Activity added! Please contact DPA for validation.",

    "nav.library": "E-Library",
    "library.title": "Digital Library",
    "library.subtitle": "Browse books, journals, and academic resources.",
    "library.cat.all": "All",
    "library.cat.textbook": "Textbooks",
    "library.cat.journal": "Journals",
    "library.cat.thesis": "Thesis",
    "library.status.available": "Available",
    "library.status.borrowed": "Borrowed",
    "library.borrow": "Borrow Book",
    "library.return": "Return Book",
    "library.success_borrow": "Book borrowed successfully!",
    "library.success_return": "Book returned successfully!",

    "library.borrowForm.title": "Book Borrowing Form",
    "library.borrowForm.phone": "Phone Number (WhatsApp)",
    "library.borrowForm.duration": "Loan Duration",
    "library.borrow_success": "Borrowing request submitted successfully!",

    "nav.thesis": "Final Project",
    "thesis.title": "Final Project & Thesis System",
    "thesis.subtitle":
      "Management portal for thesis registration, guidance, and defense.",

    "nav.music": "Music Player",
    "music.title": "Music Player",
    "music.subtitle": "Upload your favorite songs and listen while studying.",

    "nav.letters": "E-Services",
    "letters.title": "Academic Letter Services",
    "letters.subtitle":
      "Request and download official university letters digitally.",
    "letters.request": "+ New Request",
    "letters.total": "Total Requests",
    "letters.processing": "Processing",
    "letters.ready": "Ready to Download",
    "letters.type": "Letter Type",
    "letters.date": "Date",
    "letters.purpose": "Purpose",
    "letters.status": "Status",
    "letters.action": "Action",
    "letters.formTitle": "Request Letter",
    "letters.submit": "Submit Request",
    "letters.status_pending": "Processing by Admin",
    "letters.status_approved": "Approved (Signed)",
    "letters.download": "Download PDF",

    "edom.subtitle":
      "Mandatory for viewing final grades. Your identity is anonymous.",
    "edom.progress": "Progress:",
    "edom.fill": "Fill Survey",
    "edom.completed": "Completed",
    "edom.pending": "Pending",
    "edom.success": "Evaluation submitted successfully!",

    "nav.dpa": "DPA",
    "profile.dpa_title": "Academic Supervisor",
    "profile.dpa_desc":
      "View your status and contact your academic advisor for guidance.",
    "dpa.empty_state":
      "You don't have an Academic Advisor yet. The system will assign one randomly.",
    "dpa.btn_gacha": "Find My Advisor",
    "dpa.loading": "Processing academic data...",
    "dpa.status_active": "Active Advisor",
    "dpa.success_msg":
      "Academic Advisor assigned. Please contact them for KRS validation.",
    "dpa.btn_whatsapp": "Contact Advisor via WhatsApp",

    "nav.queue": "Smart Queue",
    "queue.title": "Integrated Service Queue",
    "queue.subtitle": "Get your queue number online and skip the wait.",

    "nav.facility": "Facility Booking",
    "facility.title": "Facility & Equipment Booking",
    "facility.subtitle":
      "Request permission to use campus buildings, labs, or tools.",

    "settings.security": "Account Security",
    "settings.new_password": "New Password",
    "settings.confirm_password": "Confirm New Password",
    "settings.btn_change_pass": "Update Password",
    "settings.data_mgmt": "Data Management",
    "settings.data_desc":
      "Download a copy of your data or reset the application to start fresh.",
    "settings.btn_export": "Backup Data (JSON)",
    "settings.btn_reset": "Reset App (Delete All)",

    "nav.history": "Study History",
    "history.title": "Academic History",
    "history.subtitle": "View your grades archive and GPA progress.",
    "history.ipk": "Cumulative GPA",
    "history.select_sem": "Select Semester:",
    "history.print_khs": "Print Grade Card (KHS)",

    "nav.language": "Language Center",
    "language.title": "Language Center",
    "language.subtitle": "Proficiency tests and language courses.",
    "language.best_score": "Best Score",
    "language.register": "Register",
    "language.download_cert": "Download Cert",

    "nav.notifications": "Notifications",
    "notif.page_title": "Notification Center",
    "notif.page_subtitle": "Your recent activities and alerts.",
    "notif.clear_all": "Clear All",
    "notif.empty": "You have no notifications.",
  },
  id: {
    "nav.dashboard": "Dashboard",
    "nav.profile": "Profil",
    "nav.grades": "Nilai",
    "nav.attendance": "Kehadiran",
    "nav.ai_assistant": "AIDA AI",
    "nav.settings": "Pengaturan",
    "nav.logout": "Keluar",
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Selamat datang kembali, ",
    "dashboard.gpa": "IPK",
    "dashboard.weighted_average": "Rata-rata Tertimbang",
    "dashboard.credits": "SKS",
    "dashboard.this_semester": "Semester Ini",
    "dashboard.attendance": "Kehadiran",
    "dashboard.overall": "Keseluruhan",
    "dashboard.active_courses": "Mata Kuliah Aktif",
    "dashboard.now": "Sekarang",
    "dashboard.learning_progress": "Progress Pembelajaran",
    "dashboard.courses_grades": "Mata Kuliah & Nilai",
    "profile.title": "Profil",
    "profile.name": "Nama",
    "profile.nim": "NIM",
    "profile.program": "Program Studi",
    "profile.year": "Tahun",
    "profile.semester": "Semester",
    "profile.email": "Email",
    "grades.title": "Nilai",
    "attendance.title": "Kehadiran",
    "attendance.select_course": "Pilih Mata Kuliah",
    "attendance.course_description":
      "Pilih mata kuliah untuk melihat catatan kehadiran, tugas, dan materi pembelajaran",
    "attendance.attendance": "Kehadiran",
    "attendance.tasks": "Tugas",
    "attendance.materials": "Materi",
    "attendance.attendance_rate": "Tingkat Kehadiran",
    "attendance.present": "Hadir",
    "attendance.absent": "Tidak Hadir",
    "attendance.late": "Terlambat",
    "attendance.meeting_history": "Riwayat Pertemuan",
    "attendance.meeting": "Pertemuan",
    "attendance.date": "Tanggal",
    "attendance.topic": "Topik",
    "attendance.status": "Status",
    "attendance.action": "Aksi",
    "attendance.not_started": "Belum Dimulai",
    "attendance.enter_code": "Masukkan Kode Kehadiran",
    "attendance.code_description":
      "Silakan masukkan kode unik yang diberikan oleh dosen Anda",
    "attendance.code_case_sensitive": "Kode kehadiran bersifat case-sensitive",
    "attendance.code_expires":
      "Kode berlaku selama 4 jam dari waktu pembuatan kode",
    "attendance.submit_attendance": "Kirim Kehadiran",
    "attendance.absent_now": "Absen Sekarang",
    "attendance.not_available": "Tidak Tersedia",
    "tasks.title": "Tugas",
    "tasks.completion": "Tugas Diselesaikan",
    "tasks.submitted": "Terkirim",
    "tasks.pending": "Tertunda",
    "tasks.late": "Terlambat",
    "tasks.course_tasks": "Tugas Mata Kuliah",
    "tasks.due": "Batas Waktu",
    "tasks.submit": "Kirim",
    "tasks.view": "Lihat",
    "tasks.submitted_status": "Terkirim",
    "tasks.late_status": "Terlambat",
    "tasks.pending_review": "Menunggu Review",
    "tasks.not_submitted": "Belum Dikirim",
    "tasks.not_started": "Belum Dimulai",
    "tasks.task_submission": "Pengumpulan Tugas",
    "tasks.description": "Deskripsi",
    "tasks.submit_work": "Kirim Pekerjaan Anda",
    "tasks.upload_file": "Unggah File",
    "tasks.accepted_formats":
      "Format yang diterima: PDF, DOC, DOCX, ZIP, RAR (Maks: 10MB)",
    "tasks.additional_notes": "Catatan Tambahan (Opsional)",
    "tasks.submit_task": "Kirim Tugas",
    "tasks.cancel": "Batal",
    "materials.title": "Materi",
    "materials.learning_materials": "Materi Pembelajaran",
    "materials.download": "Unduh",
    "quick.download_transcript": "Unduh Transkrip",
    "quick.request_leave": "Ajukan Cuti",
    "quick.contact_advisor": "Hubungi Pembimbing",
    "quick.view_schedule": "Lihat Jadwal",
    "common.back": "Kembali",
    "common.back_to_courses": "Kembali ke Mata Kuliah",
    "common.back_to_course": "Kembali ke Mata Kuliah",
    "common.credits": "SKS",
    "nav.schedule": "Jadwal Kelas",
    "schedule.title": "Jadwal Kelas",
    "schedule.subtitle": "Jadwal kelas mingguan Anda untuk Semester 4",
    "schedule.filter_by_day": "Filter per Hari:",
    "schedule.all_days": "Semua Hari",
    "schedule.monday": "Senin",
    "schedule.tuesday": "Selasa",
    "schedule.wednesday": "Rabu",
    "schedule.thursday": "Kamis",
    "schedule.friday": "Jumat",
    "schedule.current_week": "Minggu Ini:",
    "schedule.ongoing": "Berlangsung",
    "schedule.upcoming": "Akan Datang",
    "schedule.finished": "Selesai",
    "schedule.total_classes": "Total Kelas Minggu Ini",
    "schedule.completed": "Selesai",
    "schedule.hours_week": "Jam/Minggu",
    "settings.title": "Pengaturan",
    "settings.account": "Pengaturan Akun",
    "settings.email_notifications": "Notifikasi Email",
    "settings.dark_mode": "Mode Gelap",
    "settings.language": "Pengaturan Bahasa",
    "settings.select_language": "Pilih Bahasa",
    "settings.english": "Inggris",
    "settings.indonesian": "Indonesia",
    "settings.privacy": "Pengaturan Privasi",
    "settings.profile_visibility": "Visibilitas Profil",
    "settings.public": "Publik",
    "settings.students_only": "Hanya Mahasiswa",
    "settings.private": "Pribadi",
    "settings.save": "Simpan Pengaturan",
    "settings.quick_settings": "Pengaturan Cepat",
    "settings.saved": "Pengaturan berhasil disimpan!",
    "leave.title": "Pengajuan Cuti/Izin",
    "leave.date": "Tanggal",
    "leave.reason": "Alasan",
    "leave.reason_placeholder": "Tuliskan alasan Anda...",
    "leave.cancel": "Batal",
    "leave.submit": "Kirim Pengajuan",
    "gpa.calculate": "Hitung IPK/IPS",
    "gpa.your_ips": "IPS Semester Ini",
    "gpa.your_ipk": "IPK (Estimasi Total)",
    "gpa.select_grade": "-- Prediksi --",
    "gpa.calculated": "Perhitungan IPK/IPS selesai!",
    "chat.greeting":
      "Halo! Tanya saya seputar dashboard Anda. Coba ketik 'bantuan'.",

    "chat.hello":
      "Halo, {name}! Ada yang bisa saya bantu terkait dashboard Anda?",
    "chat.welcome": "Sama-sama! Senang bisa membantu.",
    "chat.help": `Saya bisa menjawab banyak hal! Ini adalah daftar lengkap yang bisa Anda tanyakan:
        <br><br>
        <b>1. Umum & Bantuan</b>
        <ul>
          <li><b>Sapaan:</b> "halo", "hai"</li>
          <li><b>Bantuan:</b> "bantuan", "bisa apa saja"</li>
          <li><b>Profil:</b> "siapa saya", "NIM saya"</li>
          <li><b>Terima Kasih:</b> "makasih"</li>
        </ul>
        <b>2. Rangkuman & Performa</b>
        <ul>
          <li><b>Rangkuman Harian:</b> "agenda hari ini"</li>
          <li><b>Performa Nilai:</b> "gimana performa saya"</li>
          <li><b>IPK:</b> "IPK saya berapa"</li>
          <li><b>Total SKS:</b> "berapa sks saya"</li>
        </ul>
        <b>3. Jadwal & Kehadiran</b>
        <ul>
          <li><b>Jadwal per Hari:</b> "jadwal hari ini", "jadwal selasa"</li>
          <li><b>Peringatan Absen:</b> "absen yang rawan"</li>
          <li><b>Info Absen:</b> "absen saya di algoritma"</li>
        </ul>
        <b>4. Tugas & Materi</b>
        <ul>
          <li><b>Semua Sisa Tugas:</b> "ada tugas apa saja", "sisa tugas"</li>
          <li><b>Tugas per Matkul:</b> "tugas algoritma"</li>
          <li><b>Tugas Mendesak:</b> "deadline terdekat"</li>
          <li><b>Hitung Sisa Tugas:</b> "berapa sisa tugas saya"</li>
          <li><b>Tugas per Status:</b> "tugas yang terlambat"</li>
          <li><b>Deskripsi Tugas:</b> "deskripsi tugas software"</li>
          <li><b>Daftar Materi:</b> "materi database"</li>
        </ul>
        <b>5. Info Spesifik Mata Kuliah</b>
        <ul>
          <li><b>Daftar Matkul:</b> "daftar mata kuliah"</li>
          <li><b>Detail Matkul:</b> "info algoritma"</li>
          <li><b>Info Dosen:</b> "dosen algoritma siapa"</li>
          <li><b>Info Ruangan:</b> "ruangan algoritma dimana"</li>
          <li><b>SKS per Matkul:</b> "berapa sks algoritma"</li>
          <li><b>Nilai per Matkul:</b> "nilai saya di algoritma"</li>
          <li><b>Topik Minggu Ini:</b> "topik minggu ini"</li>
        </ul>
        <b>6. Laporan & Update</b>
        <ul>
          <li><b>Item Terlewat:</b> "saya kelewat apa aja"</li>
          <li><b>Update Terbaru:</b> "ada info terbaru"</li>
        </ul>`,
    "chat.gpa": "IPK (GPA) Anda saat ini adalah <b>{gpa}</b>.",
    "chat.credits": "Anda mengambil <b>{sks} SKS</b> semester ini.",
    "chat.whoami":
      "Anda adalah <b>Kharis Destian Maulana</b> (NIM: 2023001) dari program Teknik Informatika.",
    "chat.fallback":
      "Maaf, saya tidak mengerti pertanyaan itu. Coba tanya 'bantuan' untuk melihat apa yang bisa saya lakukan.",
    "chat.schedule.today_off":
      "Sepertinya tidak ada jadwal kelas untuk hari ini. Selamat berlibur!",
    "chat.schedule.not_found": "Jadwal untuk hari itu tidak ditemukan.",
    "chat.schedule.header": "Jadwal untuk <b>{dayName}</b>:<ul>",
    "chat.schedule.item": "<li><b>{time}</b>: {course} (di {room})</li>",
    "chat.schedule.prompt":
      "Jadwal hari apa yang ingin Anda tahu? (Contoh: 'jadwal hari senin')",
    "chat.courselist.header": "Anda terdaftar di mata kuliah berikut:<ul>",
    "chat.coursedetails.info":
      "Info <b>{name}</b> ({code}):<ul><li>SKS: {credits}</li><li>Total Pertemuan: {meetings}</li><li>Total Tugas: {tasks}</li><li>Total Materi: {materials}</li></ul>",
    "chat.coursedetails.prompt":
      "Anda bisa tanya lebih spesifik seperti 'tugas {courseKey}' atau 'nilai {courseKey}'.",
    "chat.tasks.none_specific":
      "Selamat! Tidak ada tugas yang tertunda untuk <b>{courseName}</b>.",
    "chat.tasks.none_all":
      "Luar biasa! Semua tugas Anda sudah selesai atau belum ada tugas baru.",
    "chat.tasks.header":
      "Berikut adalah tugas yang akan datang atau belum selesai:<ul>",
    "chat.tasks.item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "chat.grades.prompt":
      "Nilai mata kuliah apa yang ingin Anda tahu? (Contoh: 'nilai webdev')",
    "chat.grades.none": "Belum ada nilai yang masuk untuk <b>{courseName}</b>.",
    "chat.grades.header":
      "Daftar nilai <b>{courseName}</b> yang sudah dinilai:<ul>",
    "chat.grades.item": "<li><b>{title}</b>: {score} / {maxScore}</li>",
    "chat.grades.item_pending": "<li><b>{title}</b>: (Sedang dinilai)</li>",
    "chat.attendance.overall":
      "Kehadiran total Anda (Overall) adalah <b>{attendance}%</b>.",
    "chat.attendance.specific":
      "Statistik kehadiran <b>{name}</b>:<ul><li>Hadir: {present}</li><li>Tidak Hadir: {absent}</li><li>Terlambat: {late}</li></ul>Total tingkat kehadiran: <b>{rate}%</b>",
    "chat.perf.no_scores":
      "Belum ada nilai yang dimasukkan. Saya belum bisa menghitung performa Anda.",
    "chat.perf.summary":
      "Ringkasan performa Anda sejauh ini (berdasarkan rata-rata nilai tugas):<ul><li>Rata-rata keseluruhan: <b>{avg}%</b></li><li>Performa terbaik: <b>{bestCourse}</b> ({bestScore}%)</li><li>Perlu ditingkatkan: <b>{worstCourse}</b> ({worstScore}%)</li></ul>",
    "chat.missed.header": "Laporan item yang terlewat: <br>",
    "chat.missed.tasks_header": "<b>Tugas yang Belum Dikumpulkan:</b><ul>",
    "chat.missed.task_item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "chat.missed.tasks_none": "<p>👍 Bagus! Tidak ada tugas yang terlewat.</p>",
    "chat.missed.meetings_header":
      "<b>Pertemuan yang Anda Lewatkan (Alpa):</b><ul>",
    "chat.missed.meeting_item":
      "<li><b>{courseName}</b>: Pertemuan {id} - {topic}</li>",
    "chat.missed.meetings_none":
      "<p>👍 Kehadiran Anda 100% (atau tidak ada alpa).</p>",
    "chat.updates.header": "Update terbaru untuk Anda:<ul>",
    "chat.updates.next_task": "<b>Tugas Terdekat:</b> {task}",
    "chat.updates.no_task": "<b>Tugas Terdekat:</b> Tidak ada tugas baru.",
    "chat.updates.latest_material": "<b>Materi Terbaru:</b> {material}",
    "chat.updates.no_material": "<b>Materi Terbaru:</b> Tidak ada materi baru.",
    "chat.desc.prompt":
      "Tolong sebutkan mata kuliahnya. (Contoh: 'deskripsi tugas terbaru algoritma')",
    "chat.desc.none":
      "Tidak ada tugas yang bisa saya deskripsikan untuk {courseName}.",
    "chat.desc.response":
      'Deskripsi untuk tugas <b>{title}</b> ({courseName}):<br><p>"<i>{description}</i>"</p>',
    "chat.topics.header": "Topik yang sedang berjalan (Minggu ini):<ul>",
    "chat.topics.item":
      "<li><b>{courseName}</b>: {topic} (Pertemuan {id})</li>",
    "chat.topics.none":
      "Sepertinya data 'minggu ini' belum di-set. Tapi Anda bisa tanya jadwal per hari.",
    "lecturer.info":
      "Dosen untuk <b>{courseName}</b> adalah <b>{lecturer}</b>.",
    "lecturer.room": "Kelas <b>{courseName}</b> diadakan di <b>{room}</b>.",
    "lecturer.not_found":
      "Maaf, saya tidak dapat menemukan info dosen atau ruangan untuk {courseName} di jadwal.",
    "lecturer.prompt":
      "Dosen atau ruangan mata kuliah apa yang ingin Anda ketahui?",
    "credits.info":
      "Mata kuliah <b>{courseName}</b> memiliki <b>{credits} SKS</b>.",
    "credits.prompt":
      "Tolong sebutkan mata kuliahnya, cth: 'berapa sks algoritma?'",
    "urgent.header": "Ini adalah tugas Anda yang paling mendesak:",
    "urgent.item": "<b>{courseName}</b>: {title} (Deadline: {deadline})",
    "urgent.none": "👍 Kerja bagus! Tidak ada tugas mendesak yang akan datang.",
    "tasks_status.header":
      "Berikut adalah tugas-tugas dengan status '<b>{status}</b>':<ul>",
    "tasks_status.item":
      "<li><b>{courseName}</b>: {title} (Deadline: {deadline})</li>",
    "tasks_status.none":
      "Anda tidak memiliki tugas dengan status '<b>{status}</b>'.",
    "motivation.response":
      "Performa terbaik Anda ada di <b>{bestCourse}</b>, pertahankan! Anda mungkin perlu sedikit lebih fokus pada <b>{worstCourse}</b>. Anda pasti bisa!",
    "chat.briefing.header":
      "Ini rangkuman harian Anda untuk <b>{dayName}, {date}</b>:<ul>",
    "chat.briefing.no_class": "<li>Anda tidak ada jadwal kelas hari ini.</li>",
    "chat.briefing.class_item": "<li><b>{time}</b>: {course} ({topic})</li>",
    "chat.briefing.deadline_header": "<b>Deadline Hari Ini:</b>",
    "chat.briefing.deadline_item":
      "<li>Awas! Tugas '<b>{taskTitle}</b>' ({courseName}) harus dikumpulkan hari ini.</li>",
    "chat.briefing.deadline_none":
      "<li>👍 Tidak ada tugas yang deadline-nya hari ini.</li></ul>",
    "chat.attendance_warn.header":
      "Saya sudah periksa absensi Anda. Berikut daftar peringatannya:<ul>",
    "chat.attendance_warn.item":
      "<li><b>{courseName}</b>: Anda memiliki <b>{absentCount}</b> alpa. Harap berhati-hati.</li></ul>",
    "chat.attendance_warn.none":
      "👍 Absensi Anda terlihat bagus. Tidak ada mata kuliah yang rawan saat ini.",
    "chat.task_count.item":
      "Anda memiliki <b>{count}</b> sisa tugas di <b>{courseName}</b>.",
    "chat.task_count.none":
      "Anda memiliki <b>0</b> sisa tugas di <b>{courseName}</b>. Kerja bagus!",
    "chat.task_count.all":
      "Di semua mata kuliah, Anda memiliki total <b>{count}</b> sisa tugas.",
    "chat.task_count.all_none":
      "Anda memiliki <b>0</b> sisa tugas. Semuanya sudah beres!",
    "chat.task_count.prompt":
      "Mata kuliah mana yang ingin Anda hitung sisa tugasnya?",

    "nav.codeplayground": "Kode Editor",
    "playground.title": "Code Playground",
    "playground.run": "Jalankan Kode",
    "playground.save": "Simpan",
    "playground.load": "Muat",
    "playground.clear": "Bersihkan",
    "playground.dark_theme": "Tema Gelap",
    "playground.output_title": "Hasil",
    "playground.welcome_h3": "Selamat Datang di Code Playground!",
    "playground.welcome_p":
      'Tulis kode Anda dan klik "Jalankan Kode" untuk melihat hasilnya di sini.',
    "playground.html_preview": "Pratinjau Langsung",
    "playground.execution_success": "Kode berhasil dieksekusi (tanpa output)",
    "playground.execution_api_simulation": "Layanan Eksekusi",
    "playground.simulation_notes":
      "Ini biasanya akan mengeksekusi kode Anda melalui layanan backend. Saat ini, ini adalah simulasi.",
    "playground.loaded_file": "File berhasil dimuat!",
    "playground.no_saved": "Tidak ada kode tersimpan untuk bahasa ini",
    "playground.saved": "Kode berhasil disimpan!",
    "playground.loaded": "Kode tersimpan dimuat!",

    // Tambahkan di translations.id
    "nav.finance": "Keuangan",
    "finance.title": "Keuangan",
    "finance.subtitle": "Kelola informasi pembayaran dan tagihan Anda",
    "finance.summary": "Ringkasan Pembayaran",
    "finance.total_bill": "Total Tagihan",
    "finance.total_paid": "Total Dibayar",
    "finance.remaining_bill": "Sisa Tagihan",
    "finance.payment_status": "Status Pembayaran",
    "finance.status.paid": "Lunas",
    "finance.status.partially_paid": "Sebagian Lunas",
    "finance.status.unpaid": "Belum Dibayar",
    "finance.tuition_fees": "Tagihan & Biaya",
    "finance.payment_history": "Riwayat Pembayaran",
    "finance.payment_methods": "Metode Pembayaran",
    "finance.scholarships": "Beasiswa",
    "finance.semester": "Semester",
    "finance.type": "Jenis",
    "finance.amount": "Jumlah",
    "finance.due_date": "Jatuh Tempo",
    "finance.status": "Status",
    "finance.action": "Aksi",
    "finance.pay_now": "Bayar Sekarang",
    "finance.view_receipt": "Lihat Bukti",
    "finance.download_receipt": "Unduh Bukti",
    "finance.date": "Tanggal",
    "finance.description": "Deskripsi",
    "finance.method": "Metode Pembayaran",
    "finance.receipt_number": "No. Bukti",
    "finance.verified": "Terverifikasi",
    "finance.pending": "Tertunda",
    "finance.overdue": "Terlambat",
    "finance.bank_transfer": "Transfer Bank",
    "finance.virtual_account": "Virtual Account",
    "finance.e_wallet": "E-Wallet",
    "finance.credit_card": "Kartu Kredit/Debit",
    "finance.scholarship_name": "Nama Beasiswa",
    "finance.scholarship_type": "Jenis",
    "finance.scholarship_amount": "Nominal",
    "finance.scholarship_status": "Status",
    "finance.received": "Diterima",
    "finance.total": "Total",
    "finance.installment_plan": "Rencana Cicilan",
    "finance.paid_amount": "Jumlah Dibayar",
    "finance.remaining_amount": "Sisa Tagihan",
    "finance.installment": "Cicilan",
    "finance.quick_pay": "Bayar Cepat",
    "finance.upcoming_bills": "Tagihan Mendatang",
    "finance.no_bills": "Tidak ada tagihan mendatang",

    "chat.group_chat": "Chat Grup",
    "chat.subtitle": "Chat dengan semua siswa yang online",
    "chat.group_name": "Grup Kelas",
    "chat.online_count": "online",
    "chat.welcome_title": "Selamat datang di Grup Kelas!",
    "chat.welcome_subtitle": "Mulai chat dengan semua yang online",
    "chat.placeholder": "Ketik pesan untuk semua orang...",
    "chat.online_now": "Sedang Online",
    "chat.refresh": "Muat Ulang",
    "chat.search_messages": "Cari pesan",
    "chat.group_info": "Info grup",
    "chat.emoji": "Emoji",
    "chat.attach_file": "Lampirkan file",
    "chat.joined_chat": "bergabung ke chat",
    "chat.left_chat": "keluar dari chat",
    "chat.typing": "sedang mengetik...",
    "chat.no_online_users": "Tidak ada yang online",
    "chat.you": "Anda",

    // Navigation
    "nav.messages": "Pesan",

    "nav.notes": "Catatan",
    "nav.kanban": "Tugas Saya",
    "notes.title": "Catatan Kuliah",
    "notes.subtitle":
      "Catat poin penting perkuliahan di sini (tersimpan otomatis).",
    "kanban.title": "Papan Tugas Pribadi",
    "kanban.subtitle": "Kelola tugas pribadi Anda agar tetap terorganisir.",
    "kanban.todo": "Akan Dikerjakan",
    "kanban.progress": "Sedang Dikerjakan",
    "kanban.done": "Selesai",

    "nav.exams": "Pusat Ujian",
    "exams.title": "Pusat Ujian (UTS & UAS)",
    "exams.subtitle":
      "Lihat jadwal, status, dan mulai ujian online Anda di sini.",
    "exams.midterm": "Ujian Tengah Semester (UTS)",
    "exams.final": "Ujian Akhir Semester (UAS)",
    "exams.room": "Ruang:",
    "exams.typeOnline": "Tes Online",
    "exams.typeOffline": "Ujian Offline (Luring)",
    "exams.typeProject": "Projek Take-Home",
    "exams.notStarted": "Belum Mulai",
    "exams.viewScore": "Lihat Nilai",
    "exams.startExam": "Mulai Ujian",
    "exams.timeLeft": "Sisa Waktu:",
    "exams.timeUp": "Waktu Habis!",
    "exams.q1title": "Soal 1 (Pilihan Ganda)",
    "exams.q1text":
      "Manakah dari berikut ini yang merupakan kompleksitas waktu terburuk (worst-case) dari algoritma Bubble Sort?",
    "exams.q2title": "Soal 2 (Esai)",
    "exams.q2text":
      "Jelaskan perbedaan utama antara struktur data 'Queue' dan 'Stack' beserta contoh penggunaannya masing-masing!",
    "exams.q2placeholder": "Ketik jawaban esai Anda di sini...",
    "exams.q3title": "Soal 3 (Coding)",
    "exams.q3text":
      "Buatlah sebuah fungsi JavaScript sederhana yang menerima satu parameter (angka) dan mengembalikan string 'Genap' jika angka tersebut genap, atau 'Ganjil' jika angka tersebut ganjil.",
    "exams.runTest": "Jalankan Tes Kode",
    "exams.testOutput": "Output Tes",
    "exams.runTestPrompt": "Jalankan tes untuk melihat hasil...",
    "exams.submitExam": "Kumpulkan Jawaban Ujian",

    "nav.feb": "Pusat Alat FEB",
    "feb.title": "Pusat Alat Fakultas Ekonomi Bisnis",
    "feb.subtitle": "Kalkulator finansial dan alat bantu akuntansi Anda.",
    "feb.tab.accounting": "Jurnal Akuntansi",
    "feb.tab.compound": "Bunga Majemuk",
    "feb.tab.npv": "Kalkulator NPV",
    "feb.accounting.title": "Jurnal Umum",
    "feb.accounting.desc":
      "Masukkan transaksi di bawah ini. Status akan berubah menjadi 'Balance' jika total Debit dan Kredit seimbang.",
    "feb.accounting.account": "Akun",
    "feb.accounting.descShort": "Deskripsi",
    "feb.accounting.debit": "Debit (Rp)",
    "feb.accounting.credit": "Kredit (Rp)",
    "feb.accounting.addRow": "+ Tambah Baris",
    "feb.accounting.totalDebit": "Total Debit",
    "feb.accounting.totalCredit": "Total Kredit",
    "feb.accounting.status": "Status",
    "feb.accounting.statusBalance": "Seimbang",
    "feb.accounting.statusImbalance": "Tidak Seimbang",
    "feb.compound.title": "Kalkulator Bunga Majemuk",
    "feb.compound.principal": "Modal Awal (Rp)",
    "feb.compound.monthly": "Setoran per Bulan (Rp)",
    "feb.compound.rateAnnum": "Suku Bunga Tahunan (%)",
    "feb.compound.period": "Periode (Tahun)",
    "feb.compound.calculate": "Hitung Nilai Masa Depan",
    "feb.compound.futureValue": "Nilai Masa Depan",
    "feb.compound.totalPrincipal": "Total Modal Disetor",
    "feb.compound.totalInterest": "Total Bunga Didapat",
    "feb.npv.title": "Kalkulator Kelayakan (NPV)",
    "feb.npv.investment": "Investasi Awal (Rp)",
    "feb.npv.rate": "Suku Bunga Diskon (%)",
    "feb.npv.cashflow": "Aliran Kas (per Tahun)",
    "feb.npv.calculate": "Hitung NPV",
    "feb.npv.netValue": "Net Present Value (NPV)",
    "feb.npv.statusPrompt": "Masukkan data untuk melihat kelayakan",
    "feb.npv.statusGood": "Investasi Layak (NPV Positif)",
    "feb.npv.statusBad": "Investasi Tidak Layak (NPV Negatif)",
    "feb.npv.statusEven": "Investasi Impas (NPV 0)",

    "nav.dkv": "Pixel Pad",
    "dkv.title": "Pixel Pad",
    "dkv.subtitle": "Alat gambar pixel art sederhana untuk DKV.",
    "dkv.color": "Warna:",
    "dkv.tools": "Alat:",
    "dkv.tool.pencil": "Pensil",
    "dkv.tool.eraser": "Penghapus",
    "dkv.tool.picker": "Pipet",
    "dkv.gridSize": "Ukuran Grid:",
    "dkv.toggleGrid": "Toggle Grid",
    "dkv.clear": "Bersihkan",
    "dkv.download": "Download PNG",

    "nav.fpo": "Alat Kebugaran",
    "fpo.title": "Pusat Analisis Kebugaran",
    "fpo.subtitle":
      "Kalkulator untuk Antropometri, Kebutuhan Energi, dan Zona Latihan.",
    "fpo.tab.bmi": "Kalkulator BMI",
    "fpo.tab.tdee": "Kalkulator Energi (TDEE)",
    "fpo.tab.hr": "Zona Latihan (Denyut Nadi)",
    "fpo.calculate": "Hitung",
    "fpo.bmi.title": "Kalkulator Antropometri (BMI)",
    "fpo.bmi.height": "Tinggi Badan (cm)",
    "fpo.bmi.weight": "Berat Badan (kg)",
    "fpo.bmi.yourBmi": "Body Mass Index (BMI) Anda",
    "fpo.bmi.prompt": "Masukkan data Anda",
    "fpo.bmi.underweight": "Berat Badan Kurang",
    "fpo.bmi.normal": "Berat Badan Normal",
    "fpo.bmi.overweight": "Berat Badan Berlebih",
    "fpo.bmi.obese": "Obesitas",
    "fpo.tdee.title": "Kalkulator Kebutuhan Energi",
    "fpo.tdee.age": "Usia",
    "fpo.tdee.gender": "Jenis Kelamin",
    "fpo.tdee.male": "Laki-laki",
    "fpo.tdee.female": "Perempuan",
    "fpo.tdee.activity": "Tingkat Aktivitas",
    "fpo.tdee.sedentary": "Sedentary (Jarang)",
    "fpo.tdee.light": "Ringan (1-3x / minggu)",
    "fpo.tdee.moderate": "Sedang (3-5x / minggu)",
    "fpo.tdee.heavy": "Berat (6-7x / minggu)",
    "fpo.tdee.athlete": "Atlet (2x / hari)",
    "fpo.tdee.tdee": "Kebutuhan Kalori Harian (TDEE)",
    "fpo.tdee.bmr": "Kalori Istirahat (BMR)",
    "fpo.hr.title": "Kalkulator Zona Latihan (Denyut Nadi)",
    "fpo.hr.mhr": "Denyut Nadi Maksimal (MHR)",
    "fpo.hr.zone1": "Zona 1 (50-60%)",
    "fpo.hr.zone2": "Zona 2 (60-70%)",
    "fpo.hr.zone3": "Zona 3 (70-80%)",
    "fpo.hr.zone4": "Zona 4 (80-90%)",
    "fpo.hr.zone5": "Zona 5 (90-100%)",

    "nav.si": "Desainer ERD",
    "si.title": "Desainer Skema Database",
    "si.subtitle":
      "Buat tabel, tambahkan kolom, dan rancang ERD sederhana Anda.",
    "si.tableName": "Nama Tabel:",
    "si.addTable": "+ Tambah Tabel",
    "si.clearAll": "Bersihkan Kanvas",
    "si.addField": "Tambah Kolom",
    "si.fieldName": "Nama Kolom",
    "si.fieldType": "Tipe Data",

    "nav.mi": "Flowchart",
    "mi.title": "Desainer Flowchart",
    "mi.subtitle": "Rancang alur proses bisnis atau flowchart sederhana.",
    "mi.addShape": "Tambah Bentuk:",
    "mi.terminator": "Mulai / Selesai",
    "mi.process": "Proses",
    "mi.decision": "Keputusan",
    "mi.decision": "Keputusan",
    "mi.data": "Data (I/O)",
    "mi.document": "Dokumen",
    "mi.subroutine": "Subroutine",
    "mi.terminator": "Terminator",
    "mi.process": "Proses",
    "mi.decision": "Keputusan",
    "mi.inputOutput": "Input/Output",
    "mi.predefinedProcess": "Predefined Process",
    "mi.document": "Dokumen",
    "mi.onpageref": "Ref. Halaman Sama",
    "mi.offpageref": "Ref. Halaman Beda",
    "mi.manualop": "Operasi Manual",
    "mi.display": "Tampilan",
    "mi.subroutine": "Subroutine",
    "mi.alternateProcess": "Proses Pilihan",
    "mi.internalStorage": "Internal Storage",
    "mi.multiDocument": "Multi-Dokumen",
    "mi.manualInput": "Manual Input",
    "mi.card": "Card",
    "mi.punchedTape": "Punched Tape",
    "mi.summingJunction": "Summing Junction",
    "mi.or": "Or",
    "mi.collate": "Collate",
    "mi.sort": "Sort",
    "mi.extract": "Extract",
    "mi.merge": "Merge",
    "mi.storageData": "Storage Data",
    "mi.delay": "Delay",
    "mi.sequentialStorage": "Sequential Storage",
    "mi.directStorage": "Direct Storage",
    "mi.display": "Tampilan",
    "mi.preparation": "Persiapan",

    "mi.download": "Unduh PNG",

    "chat.clearHistory": "Bersihkan Riwayat",

    "nav.info": "Info Kampus",
    "info.title": "Pusat Informasi Kampus",
    "info.subtitle": "Acara, pengumuman, dan berita terbaru dari kampus.",
    "info.tab.events": "Kalender Acara",
    "info.tab.announcements": "Papan Pengumuman",
    "info.location": "Lokasi:",
    "info.organizer": "Penyelenggara:",
    "info.tag.academic": "Akademik",
    "info.tag.general": "Umum",
    "info.tab.map": "Peta Kampus",
    "info.map.k1.title": "Kampus 1",
    "info.map.k2.title": "Kampus 2",
    "info.map.open": "Buka di Google Maps",

    "nav.pomodoro": "Pusat Studi",
    "pomodoro.title": "Pusat Studi (Timer Pomodoro)",
    "pomodoro.subtitle": "Gunakan teknik Pomodoro untuk belajar lebih fokus.",
    "pomodoro.mode.pomodoro": "Waktu Fokus",
    "pomodoro.mode.shortBreak": "Istirahat Pendek",
    "pomodoro.mode.longBreak": "Istirahat Panjang",
    "pomodoro.start": "Mulai",
    "pomodoro.pause": "Jeda",
    "pomodoro.reset": "Reset",
    "pomodoro.alarm.pomodoro": "Waktu fokus habis! Saatnya istirahat pendek.",
    "pomodoro.alarm.break": "Waktu istirahat habis! Saatnya kembali fokus.",

    "nav.roomfinder": "Ruangan",
    "roomfinder.title": "Ruang Kelas",
    "roomfinder.subtitle":
      "Lihat ruangan kelas yang sedang kosong atau dipakai saat ini.",
    "roomfinder.available": "Ruangan Kosong",
    "roomfinder.inuse": "Ruangan Dipakai",
    "roomfinder.until": "Kosong sampai",
    "roomfinder.occupied": "Dipakai oleh",
    "roomfinder.untilTime": "sampai",

    "nav.ktm": "KTM Digital",
    "ktm.title": "KTM Digital",
    "ktm.subtitle":
      "Kartu Tanda Mahasiswa Virtual Anda. Klik kartu untuk membalik.",
    "ktm.download": "Unduh KTM",

    "ktm.terms_title": "KETENTUAN PENGGUNAAN",
    "ktm.rule1": "Kartu ini adalah milik Universitas CIC.",
    "ktm.rule2": "Harap dibawa saat mengikuti kegiatan akademik.",
    "ktm.rule3": "Kehilangan kartu harap lapor ke BAAK.",
    "ktm.type": "KARTU MAHASISWA",

    "nav.marketplace": "Marketplace",
    "market.title": "Marketplace Mahasiswa",
    "market.subtitle":
      "Jual beli barang bekas, jasa, dan makanan antar mahasiswa.",
    "market.sell": "+ Jual Barang",
    "market.cat.all": "Semua",
    "market.cat.book": "Buku",
    "market.cat.elec": "Elektronik",
    "market.cat.food": "Makanan",
    "market.cat.service": "Jasa",
    "market.chat": "Chat Penjual",
    "market.sellTitle": "Jual Barang/Jasa",
    "market.form.name": "Nama Produk",
    "market.form.price": "Harga (Rp)",
    "market.form.category": "Kategori",
    "market.form.wa": "Nomor WhatsApp",
    "market.form.submit": "Pasang Iklan",
    "market.success": "Iklan berhasil dipasang!",

    "nav.career": "Pusat Karir",
    "career.title": "Pusat Karir & Magang",
    "career.subtitle":
      "Temukan peluang magang dan kerja terbaik untuk masa depanmu.",
    "career.filter.all": "Semua",
    "career.filter.intern": "Magang",
    "career.filter.full": "Penuh Waktu",
    "career.filter.part": "Paruh Waktu",
    "career.apply": "Lamar Cepat",
    "career.applyTitle": "Lamar Pekerjaan",
    "career.form.cv": "Unggah CV (PDF)",
    "career.form.cover": "Cover Letter (Opsional)",
    "career.form.submit": "Kirim Lamaran",
    "career.success": "Lamaran berhasil dikirim!",

    "nav.help": "Pusat Bantuan",
    "help.title": "Pusat Bantuan & Aspirasi",
    "help.subtitle":
      "Sampaikan aspirasi Anda atau cari barang yang hilang di area kampus.",
    "help.tab.voice": "Suara Mahasiswa",
    "help.tab.lf": "Barang Hilang/Temu",
    "help.voice.formTitle": "Sampaikan Aspirasi / Laporan",
    "help.voice.type": "Jenis Laporan",
    "help.voice.desc": "Deskripsi",
    "help.voice.submit": "Kirim Laporan",
    "help.voice.history": "Riwayat Laporan Anda",
    "help.voice.success": "Laporan berhasil dikirim!",
    "help.lf.post": "+ Post Barang",
    "help.lf.modalTitle": "Info Barang Hilang/Temu",
    "help.lf.type": "Status",
    "help.lf.item": "Nama Barang",
    "help.lf.location": "Lokasi",

    "nav.krs": "KRS Online",
    "krs.title": "KRS Online",
    "krs.subtitle":
      "Pilih mata kuliah untuk semester depan. Batas pengambilan 24 SKS.",
    "krs.ipk_last": "IPK Lalu",
    "krs.max_sks": "Jatah SKS",
    "krs.selected_sks": "SKS Dipilih",
    "krs.code": "Kode",
    "krs.course": "Mata Kuliah",
    "krs.sks": "SKS",
    "krs.class": "Kelas",
    "krs.schedule": "Jadwal",
    "krs.quota": "Kuota",
    "krs.reset": "Reset Pilihan",
    "krs.submit": "Ajukan KRS",
    "krs.edit": "Ubah KRS",
    "krs.download": "Unduh KSM (PDF)",
    "krs.success": "KRS berhasil diajukan!",
    "krs.status_draft": "Draft (Belum Dikirim)",
    "krs.status_submitted": "Diajukan (Menunggu Persetujuan)",

    "nav.citation": "Generator Sitasi",
    "citation.title": "Generator Daftar Pustaka",
    "citation.subtitle":
      "Buat sitasi otomatis untuk tugas dan makalah Anda (Format APA).",
    "citation.sourceType": "Jenis Sumber",
    "citation.type.book": "Buku",
    "citation.type.journal": "Jurnal Ilmiah",
    "citation.type.website": "Website",
    "citation.authorLast": "Nama Belakang Penulis",
    "citation.authorFirst": "Inisial Nama Depan",
    "citation.year": "Tahun Terbit",
    "citation.contentTitle": "Judul",
    "citation.publisher": "Penerbit",
    "citation.journalName": "Nama Jurnal & Volume",
    "citation.generate": "Buat Sitasi",
    "citation.result": "Hasil:",
    "citation.copy": "Salin Teks",
    "citation.copied": "Tersalin!",

    "nav.skkm": "SKKM",
    "skkm.title": "Pelacak Poin SKKM",
    "skkm.subtitle":
      "Kumpulkan poin keaktifan hingga 100 untuk syarat sidang skripsi.",
    "skkm.upload": "+ Upload Sertifikat",
    "skkm.status": "Status: Belum Mencukupi",
    "skkm.history": "Riwayat Kegiatan",
    "skkm.form.title": "Input Kegiatan SKKM",
    "skkm.form.name": "Nama Kegiatan",
    "skkm.form.type": "Jenis",
    "skkm.form.level": "Tingkat",
    "skkm.form.points": "Poin (Estimasi)",
    "skkm.form.file": "Bukti Sertifikat",
    "skkm.form.submit": "Simpan Kegiatan",
    "skkm.validate": "Validasi ke DPA",
    "skkm.success": "Kegiatan disimpan! Silakan hubungi DPA untuk validasi.",

    "nav.library": "E-Perpustakaan",
    "library.title": "Perpustakaan Digital",
    "library.subtitle":
      "Cari buku, jurnal, dan referensi akademik untuk studi Anda.",
    "library.cat.all": "Semua",
    "library.cat.textbook": "Buku Ajar",
    "library.cat.journal": "Jurnal",
    "library.cat.thesis": "Skripsi",
    "library.status.available": "Tersedia",
    "library.status.borrowed": "Dipinjam",
    "library.borrow": "Pinjam Buku",
    "library.return": "Kembalikan Buku",
    "library.success_borrow": "Buku berhasil dipinjam!",
    "library.success_return": "Buku berhasil dikembalikan!",

    "library.borrowForm.title": "Formulir Peminjaman Buku",
    "library.borrowForm.phone": "Nomor Telepon (WhatsApp)",
    "library.borrowForm.duration": "Durasi Peminjaman",
    "library.borrow_success": "Permintaan peminjaman berhasil diajukan!",

    "nav.thesis": "Tugas Akhir",
    "thesis.title": "Sistem Tugas Akhir & Skripsi",
    "thesis.subtitle":
      "Portal manajemen pendaftaran, bimbingan, dan sidang tugas akhir.",

    "nav.music": "Pemutar Musik",
    "music.title": "Pemutar Musik",
    "music.subtitle": "Upload lagu favoritmu dan dengarkan sambil belajar.",

    "nav.letters": "Layanan Surat",
    "letters.title": "Layanan Persuratan Akademik",
    "letters.subtitle":
      "Ajukan dan unduh surat keterangan resmi universitas secara digital.",
    "letters.request": "+ Buat Pengajuan",
    "letters.total": "Total Pengajuan",
    "letters.processing": "Diproses",
    "letters.ready": "Siap Unduh",
    "letters.type": "Jenis Surat",
    "letters.date": "Tanggal",
    "letters.purpose": "Keperluan",
    "letters.status": "Status",
    "letters.action": "Aksi",
    "letters.formTitle": "Buat Pengajuan Surat",
    "letters.submit": "Ajukan",
    "letters.status_pending": "Diproses TU",
    "letters.status_approved": "Disetujui (Tertanda)",
    "letters.download": "Unduh PDF",

    "nav.edom": "EDOM",
    "edom.title": "Evaluasi Dosen (EDOM)",
    "edom.subtitle":
      "Wajib diisi untuk melihat Kartu Hasil Studi (KHS). Identitas dirahasiakan.",
    "edom.progress": "Progres Pengisian:",
    "edom.fill": "Isi Kuesioner",
    "edom.completed": "Selesai",
    "edom.pending": "Belum Diisi",
    "edom.success": "Evaluasi berhasil dikirim!",

    "nav.dpa": "DPA",
    "profile.dpa_title": "Dosen Pendamping Akademik",
    "profile.dpa_desc":
      "Lihat status dan hubungi Dosen Wali Anda untuk bimbingan akademik.",
    "dpa.empty_state":
      "Anda belum memiliki Dosen Wali. Sistem akan menentukan DPA Anda secara acak.",
    "dpa.btn_gacha": "Tentukan DPA Saya",
    "dpa.loading": "Sedang memproses data akademik...",
    "dpa.status_active": "Dosen Wali Aktif",
    "dpa.success_msg":
      "Dosen Wali telah ditetapkan. Silakan hubungi beliau untuk validasi KRS.",
    "dpa.btn_whatsapp": "Hubungi DPA via WhatsApp",

    "nav.queue": "Antrian Online",
    "queue.title": "Antrian Layanan Terpadu",
    "queue.subtitle":
      "Ambil nomor antrian untuk layanan administrasi tanpa perlu menunggu di lokasi.",

    "nav.facility": "Peminjaman Fasilitas",
    "facility.title": "Layanan Peminjaman Fasilitas",
    "facility.subtitle":
      "Ajukan izin penggunaan gedung, laboratorium, dan inventaris kampus.",

    "settings.security": "Keamanan Akun",
    "settings.new_password": "Password Baru",
    "settings.confirm_password": "Konfirmasi Password Baru",
    "settings.btn_change_pass": "Ubah Password",
    "settings.data_mgmt": "Manajemen Data",
    "settings.data_desc":
      "Unduh salinan data Anda atau reset aplikasi untuk mulai dari awal.",
    "settings.btn_export": "Backup Data (JSON)",
    "settings.btn_reset": "Reset Aplikasi (Hapus Semua)",

    "nav.history": "Riwayat Studi",
    "history.title": "Riwayat Studi & Transkrip",
    "history.subtitle":
      "Arsip nilai per semester dan grafik perkembangan IPK Anda.",
    "history.ipk": "IPK Kumulatif",
    "history.select_sem": "Pilih Semester:",
    "history.print_khs": "Cetak KHS",

    "nav.language": "Pusat Bahasa",
    "language.title": "Pusat Bahasa (Language Center)",
    "language.subtitle":
      "Layanan tes profisiensi bahasa dan kursus pengembangan diri.",
    "language.best_score": "Skor Terbaik",
    "language.register": "Daftar",
    "language.download_cert": "Unduh Sertifikat",

    "nav.notifications": "Notifikasi",
    "notif.page_title": "Pusat Notifikasi",
    "notif.page_subtitle": "Riwayat aktivitas dan pemberitahuan terbaru Anda.",
    "notif.clear_all": "Bersihkan Semua",
    "notif.empty": "Anda tidak memiliki notifikasi.",
  },
};

// Language Management
let currentLanguage = "en";

function setLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language '${lang}' not found, defaulting to 'en'`);
    lang = "en";
  }

  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);

  applyTranslations();
  updateLanguageSelect();

  // UPDATE HEADER SETELAH GANTI BAHASA
  const userJson = localStorage.getItem("currentUser");
  if (userJson) {
    const user = JSON.parse(userJson);
    const firstName = user.fullName.split(" ")[0];
    updateDashboardHeader(firstName);
  }

  // Update Chatbot Greeting
  const messagesContainer = document.getElementById("chatbotMessages");
  if (messagesContainer) {
    messagesContainer.innerHTML = "";
    const newGreeting = translations[currentLanguage]["chat.greeting"];
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-message bot chat-text";
    msgDiv.innerHTML = newGreeting;
    messagesContainer.appendChild(msgDiv);
  }
}

function applyTranslations() {
  // Safety check
  if (!currentLanguage || !translations[currentLanguage]) {
    console.warn("Language not initialized, using default 'en'");
    currentLanguage = "en";
  }

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    // Tambahkan pengecekan
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      if (element.tagName === "INPUT" && element.type === "placeholder") {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    } else {
      console.warn(
        `Translation missing for key: ${key} in language: ${currentLanguage}`
      );
    }
  });

  // Update dynamic content that doesn't have data-i18n attributes
  updateDynamicContent();
}

function updateDynamicContent() {
  // Update sidebar navigation
  const navLinks = document.querySelectorAll(
    ".sidebar nav a, .mobile-sidebar nav a"
  );
  navLinks.forEach((link) => {
    const section = link.dataset.section;
    const translationKey = `nav.${section}`;
    if (translations[currentLanguage][translationKey]) {
      link.textContent = translations[currentLanguage][translationKey];
    }
  });

  // Update quick actions
  const quickActions = document.querySelectorAll(
    ".quick-actions .actions button"
  );
  if (quickActions.length >= 4) {
    quickActions[0].textContent =
      translations[currentLanguage]["quick.download_transcript"];
    quickActions[1].textContent =
      translations[currentLanguage]["quick.request_leave"];
    quickActions[2].textContent =
      translations[currentLanguage]["quick.contact_advisor"];
    quickActions[3].textContent =
      translations[currentLanguage]["quick.view_schedule"];
  }
}

function updateLanguageSelect() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
}

function initLanguage() {
  const savedLanguage = localStorage.getItem("preferredLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    currentLanguage = "en";
  }

  applyTranslations();
  updateLanguageSelect();
}

// Current view state
let currentView = "courseList";
let currentCourse = null;
let currentMeeting = null;
let currentTask = null;
let currentTab = "attendance";

function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileSidebar = document.querySelector(".mobile-sidebar");

  if (!hamburger || !mobileMenuOverlay || !mobileSidebar) {
    console.error("Mobile menu elements not found!");
    return;
  }

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    hamburger.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    mobileSidebar.classList.toggle("active");

    if (isMenuOpen) {
      document.body.classList.add("menu-open");
      // Apply current language to mobile menu
      applyTranslations();
    } else {
      document.body.classList.remove("menu-open");
      // PERBAIKAN: Refresh header saat menu ditutup
      setTimeout(() => {
        loadUserProfile();
      }, 100);
    }
  }

  function closeMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      hamburger.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.classList.remove("menu-open");

      // PERBAIKAN: Refresh header saat menu ditutup
      setTimeout(() => {
        loadUserProfile();
      }, 100);
    }
  }

  // Event listener untuk hamburger button
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Event listener untuk overlay
  mobileMenuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking on links - PERBAIKAN: Refresh setelah navigasi
  const mobileLinks = document.querySelectorAll(
    ".mobile-sidebar nav a, .mobile-sidebar .actions button, .logout-btn-mobile"
  );
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.tagName === "A") {
        e.preventDefault();
        const section = this.dataset.section;
        switchSection(section);
      }

      // PERBAIKAN: Refresh header setelah navigasi mobile
      setTimeout(() => {
        loadUserProfile();
      }, 300);

      closeMenu();
    });
  });

  // Close menu with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  // Prevent clicks inside sidebar from closing menu
  mobileSidebar.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  console.log("Mobile menu initialized successfully!");
}

// ===== FLOATING ACTION BUTTON SYSTEM =====
function initFAB() {
  console.log("🔄 Initializing FAB...");

  const fabTrigger = document.getElementById("fabTrigger");
  const fabContainer = document.getElementById("fabContainer");

  console.log("🎯 FAB Trigger:", fabTrigger);
  console.log("🎯 FAB Container:", fabContainer);

  if (!fabTrigger || !fabContainer) {
    console.error("❌ FAB elements not found!");
    return;
  }

  // Event listener untuk FAB trigger
  fabTrigger.addEventListener("click", function (e) {
    console.log("🎪 FAB Trigger clicked");
    e.stopPropagation();
    fabContainer.classList.toggle("active");

    // Debug: cek state setelah click
    console.log(
      "FAB Container active:",
      fabContainer.classList.contains("active")
    );
  });

  // Close FAB ketika klik di luar
  document.addEventListener("click", function (e) {
    if (
      fabContainer.classList.contains("active") &&
      !fabContainer.contains(e.target)
    ) {
      console.log("🔒 Closing FAB (outside click)");
      fabContainer.classList.remove("active");
    }
  });

  // Event listener untuk setiap FAB item
  const fabItems = {
    chatbotFab: "chatbot",
    codeFab: "codeplayground",
    notesFab: "notes",
    kanbanFab: "kanban",
    febFab: "feb-center",
    dkvFab: "dkv-center",
    fpoFab: "fpo-center",
    siFab: "si-center",
    miFab: "mi-center",
    pomodoroFab: "study-center",
    marketFab: "marketplace",
    citationFab: "citation-center",
    musicFab: "music-center",
  };

  Object.keys(fabItems).forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      console.log(`✅ Found FAB item: ${id}`);
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        console.log(`🎯 FAB ${id} clicked, switching to: ${fabItems[id]}`);
        switchSection(fabItems[id]);
        fabContainer.classList.remove("active");
      });
    } else {
      console.warn(`❌ FAB item not found: ${id}`);
    }
  });

  console.log("✅ FAB initialization complete");
}

// Switch between main sections
function switchSection(sectionId) {
  const links = document.querySelectorAll(
    ".sidebar nav a, .mobile-sidebar nav a"
  );
  const sections = document.querySelectorAll(".section");
  const mainWrapper = document.querySelector(".main-wrapper");

  // 1. Update Navigasi Aktif
  links.forEach((link) => link.classList.remove("active"));

  const desktopLink = document.querySelector(
    `.sidebar nav a[data-section="${sectionId}"]`
  );
  const mobileLink = document.querySelector(
    `.mobile-sidebar nav a[data-section="${sectionId}"]`
  );

  if (desktopLink) desktopLink.classList.add("active");
  if (mobileLink) mobileLink.classList.add("active");

  // 2. Sembunyikan Semua Section
  sections.forEach((sec) => (sec.style.display = "none"));

  // 3. Atur Layout (Full Width untuk Chat/Code)
  const fullWidthSections = [
    "chatbot",
    "codeplayground",
    "chat",
    "feb-center",
    "dkv-center",
    "fpo-center",
    "si-center",
    "mi-center",
    "study-center",
    "marketplace",
    "citation-center",
    "music-center",
  ];

  if (fullWidthSections.includes(sectionId)) {
    document.body.classList.add("full-layout-active");
  } else {
    document.body.classList.remove("full-layout-active");
  }

  // 4. Tampilkan Section yang Dipilih
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "flex";

    // Inisialisasi Fitur Khusus
    if (sectionId === "attendance") showCourseListView();
    if (sectionId === "grades") populateGradesPage();
    if (sectionId === "finance") initFinanceSection();
    if (sectionId === "notes") initNotesSection();
    if (sectionId === "kanban") initKanbanBoard();
    if (sectionId === "ujian") initExamTabs();
    if (sectionId === "feb-center") initFebCenter();
    if (sectionId === "dkv-center") initDkvCenter();
    if (sectionId === "fpo-center") initFpoCenter();
    if (sectionId === "si-center") initSiCenter();
    if (sectionId === "mi-center") initMiCenter();
    if (sectionId === "info-center") initInfoCenter();
    if (sectionId === "study-center") initStudyCenter();
    if (sectionId === "room-finder") initRoomFinder();
    if (sectionId === "ktm-digital") initKTM();
    if (sectionId === "marketplace") initMarketplace();
    if (sectionId === "career-center") initCareerCenter();
    if (sectionId === "help-center") initHelpCenter();
    if (sectionId === "krs-online") initKRS();
    if (sectionId === "citation-center") initCitationCenter();
    if (sectionId === "library-center") initLibrary();
    if (sectionId === "thesis-center") initThesis();
    if (sectionId === "music-center") initMusicPlayer();
    if (sectionId === "edom-center") initEdom();
    if (sectionId === "dpa-center") initDPA();
    if (sectionId === "queue-center") initQueue();
    if (sectionId === "facility-center") initFacility();
    if (sectionId === "history-center") initHistory();
    if (sectionId === "language-center") initLanguageCenter();

    if (sectionId === "dashboard" && typeof chart !== "undefined") {
      setTimeout(() => {
        chart.resize();
      }, 100);
    }

    if (sectionId === "dashboard") {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      if (user) {
        const firstName = user.fullName.split(" ")[0];
        // Panggil fungsi update header yang baru kita perbaiki tadi
        updateDashboardHeader(firstName, user);
      }
    }

    if (sectionId === "codeplayground") {
      setTimeout(initCodePlayground, 50);
    }

    if (sectionId === "chat") {
      setTimeout(initGroupChat, 100);
    }

    if (sectionId === "notifications-center") {
      renderNotificationsPage();
      markAllAsRead();
      const titleEl = document.querySelector(".main-header h1");
      if (titleEl) titleEl.textContent = "Notifikasi";
    }

    if (sectionId === "studyroom") {
      loadVideoLearningCenter();
      document.getElementById("studyRoomVideoDetailView").style.display =
        "none";
      document.getElementById("studyRoomCourseListView").style.display =
        "block";
      updateBreadcrumb([
        translations[currentLanguage]["nav.studyroom"] || "Study Room",
      ]);
    }
    if (sectionId === "marketplace") {
      initMarketplace();
    }

    if (sectionId === "schedule") {
      updateClassScheduleFromKRS();
    }

    const links = document.querySelectorAll(
      ".sidebar nav a, .mobile-sidebar nav a"
    );

    const miniPlayer = document.getElementById("miniPlayer");
    if (sectionId === "music-center") {
      if (miniPlayer) miniPlayer.classList.remove("active");
      const fabContainer = document.getElementById("fabContainer");
      if (fabContainer) fabContainer.classList.remove("raised");
      const musicSec = document.getElementById("music-center");
      musicSec.classList.add("slide-up");
      setTimeout(() => musicSec.classList.remove("slide-up"), 300);
    } else {
      if (playlist.length > 0 && miniPlayer) {
        miniPlayer.style.display = "flex";
        setTimeout(() => miniPlayer.classList.add("active"), 50);

        const fabContainer = document.getElementById("fabContainer");
        if (fabContainer) fabContainer.classList.add("raised");
      }
    }
  }
}

// Initialize sidebar navigation
function initSidebar() {
  const links = document.querySelectorAll(".sidebar nav a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      switchSection(sectionId);
    });
  });
}

// Initialize chart
function initChart() {
  const ctx = document.getElementById("progressChart");

  if (!ctx) return;

  const courseData = {
    programming: [60, 72, 68, 80, 85, 88],
    math: [55, 63, 70, 74, 78, 78],
    algorithms: [70, 75, 82, 88, 92, 92],
    database: [65, 67, 73, 78, 81, 81],
  };

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Current"],
      datasets: [
        {
          label: "Score",
          data: courseData.programming,
          borderColor: "#6366F1",
          backgroundColor: "rgba(99,102,241,0.1)",
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#6366F1",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: "rgba(0,0,0,0.1)",
          },
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
        x: {
          grid: {
            color: "rgba(0,0,0,0.1)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          callbacks: {
            label: function (context) {
              return `Score: ${context.parsed.y}%`;
            },
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
        },
      },
    },
  });

  const courseSelect = document.getElementById("courseSelect");
  if (courseSelect) {
    courseSelect.addEventListener("change", (e) => {
      const selected = e.target.value;
      chart.data.datasets[0].data = courseData[selected];

      const colors = {
        programming: "#6366F1",
        math: "#10B981",
        algorithms: "#F59E0B",
        database: "#EF4444",
      };

      chart.data.datasets[0].borderColor = colors[selected] || "#6366F1";
      chart.data.datasets[0].backgroundColor = colors[selected]
        ? colors[selected].replace(")", ", 0.1)").replace("rgb", "rgba")
        : "rgba(99,102,241,0.1)";
      chart.data.datasets[0].pointBackgroundColor =
        colors[selected] || "#6366F1";

      chart.update();
    });
  }

  return chart;
}

// Attendance System Functions

// Update breadcrumb navigation
function updateBreadcrumb(items) {
  const breadcrumb = document.getElementById("attendanceBreadcrumb");
  if (!breadcrumb) return;

  breadcrumb.innerHTML = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      return `
      <span class="breadcrumb-item ${isLast ? "active" : ""}" ${
        !isLast ? `onclick="navigateBreadcrumb(${index})"` : ""
      }>
        ${item}
      </span>
      ${!isLast ? '<span class="breadcrumb-separator">›</span>' : ""}
    `;
    })
    .join("");
}

// Navigate using breadcrumb
function navigateBreadcrumb(index) {
  if (index === 0) {
    showCourseListView();
  } else if (index === 1 && currentCourse) {
    showCourseDetailView(currentCourse);
  } else if (index === 2 && currentCourse && currentTask) {
    showTaskSubmissionView(currentCourse, currentTask);
  }
}

// Show course list view
function showCourseListView() {
  currentView = "courseList";
  currentCourse = null;
  currentMeeting = null;
  currentTask = null;
  currentTab = "attendance";

  document.getElementById("courseListView").style.display = "block";
  document.getElementById("courseDetailView").style.display = "none";
  document.getElementById("codeInputView").style.display = "none";
  document.getElementById("taskSubmissionView").style.display = "none";

  updateBreadcrumb(["Attendance"]);
}

// Show course detail view
function showCourseDetailView(courseKey) {
  currentView = "courseDetail";
  currentCourse = courseKey;
  currentMeeting = null;
  currentTask = null;

  const course = attendanceData[courseKey];

  document.getElementById("courseListView").style.display = "none";
  document.getElementById("courseDetailView").style.display = "block";
  document.getElementById("codeInputView").style.display = "none";
  document.getElementById("taskSubmissionView").style.display = "none";

  // Update course info
  document.getElementById("currentCourseName").textContent = course.name;
  document.getElementById(
    "currentCourseCode"
  ).textContent = `${course.code} • ${course.credits} Credits`;

  // Reset tabs to attendance
  switchTab("attendance");

  // Load course data based on current tab
  loadCourseData(courseKey, currentTab);

  updateBreadcrumb(["Attendance", course.name]);
}

// Switch between tabs in course detail view
function switchTab(tabName) {
  currentTab = tabName;

  // Update tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    }
  });

  // Update tab content
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
    if (content.id === `${tabName}Tab`) {
      content.classList.add("active");
    }
  });

  // Load data for the selected tab
  if (currentCourse) {
    loadCourseData(currentCourse, tabName);
  }
}

// Load course data based on selected tab
function loadCourseData(courseKey, tabName) {
  const course = attendanceData[courseKey];

  switch (tabName) {
    case "attendance":
      // Calculate attendance stats
      const attendanceStats = calculateAttendanceStats(course.meetings);
      document.getElementById("detailAttendanceRate").textContent =
        attendanceStats.rate + "%";
      document.getElementById("detailPresentCount").textContent =
        attendanceStats.present;
      document.getElementById("detailAbsentCount").textContent =
        attendanceStats.absent;
      document.getElementById("detailLateCount").textContent =
        attendanceStats.late;

      // Populate attendance table
      populateAttendanceTable(courseKey, course.meetings);
      break;

    case "tasks":
      // Calculate task stats
      const taskStats = calculateTaskStats(course.tasks);
      document.getElementById("detailTaskCompletion").textContent =
        taskStats.completionRate + "%";
      document.getElementById("detailSubmittedCount").textContent =
        taskStats.submitted;
      document.getElementById("detailPendingCount").textContent =
        taskStats.pending;
      document.getElementById("detailLateTaskCount").textContent =
        taskStats.late;

      // Populate tasks list
      populateTasksList(courseKey, course.tasks);
      break;

    case "materials":
      // Populate materials list
      populateMaterialsList(courseKey, course.materials);
      break;
  }
}

// Show code input view
function showCodeInputView(courseKey, meetingId) {
  currentView = "codeInput";
  currentCourse = courseKey;
  currentMeeting = meetingId;
  currentTask = null;

  const course = attendanceData[courseKey];
  const meeting = course.meetings.find((m) => m.id === meetingId);

  document.getElementById("courseListView").style.display = "none";
  document.getElementById("courseDetailView").style.display = "none";
  document.getElementById("codeInputView").style.display = "block";
  document.getElementById("taskSubmissionView").style.display = "none";

  // Update header info
  document.getElementById("codeInputCourseName").textContent = course.name;
  document.getElementById(
    "codeInputMeeting"
  ).textContent = `Meeting ${meetingId} - ${meeting.topic}`;

  // Clear previous input and message
  document.getElementById("attendanceCode").value = "";
  const codeMessage = document.getElementById("codeMessage");
  codeMessage.style.display = "none";
  codeMessage.className = "code-message";

  updateBreadcrumb(["Attendance", course.name, "Enter Code"]);
}

// Show task submission view
function showTaskSubmissionView(courseKey, taskId) {
  currentView = "taskSubmission";
  currentCourse = courseKey;
  currentTask = taskId;

  const course = attendanceData[courseKey];
  const task = course.tasks.find((t) => t.id === taskId);

  document.getElementById("courseListView").style.display = "none";
  document.getElementById("courseDetailView").style.display = "none";
  document.getElementById("codeInputView").style.display = "none";
  document.getElementById("taskSubmissionView").style.display = "block";

  // Update header info
  document.getElementById("taskCourseName").textContent = course.name;
  document.getElementById("taskTitle").textContent = "Task Submission";

  // Update task details
  document.getElementById("submissionTaskTitle").textContent = task.title;
  document.getElementById(
    "submissionDeadline"
  ).textContent = `Deadline: ${task.deadline}`;
  document.getElementById(
    "submissionPoints"
  ).textContent = `Points: ${task.maxScore}`;
  document.getElementById("submissionDescription").textContent =
    task.description;

  // Update submission status
  updateSubmissionStatus(task);

  updateBreadcrumb(["Attendance", course.name, task.title]);
}

// Calculate attendance statistics
function calculateAttendanceStats(meetings) {
  let present = 0;
  let absent = 0;
  let late = 0;
  let total = 0;

  meetings.forEach((meeting) => {
    if (meeting.status === "present") {
      present++;
      total++;
    } else if (meeting.status === "absent") {
      absent++;
      total++;
    } else if (meeting.status === "late") {
      late++;
      total++;
    }
  });

  const totalMeetings = present + absent + late;
  const rate =
    totalMeetings > 0 ? Math.round((present / totalMeetings) * 100) : 0;

  return { present, absent, late, rate };
}

// Calculate task statistics
function calculateTaskStats(tasks) {
  let submitted = 0;
  let pending = 0;
  let late = 0;
  let notSubmitted = 0;
  let notStarted = 0;

  tasks.forEach((task) => {
    if (task.status === "submitted") {
      submitted++;
    } else if (task.status === "pending") {
      pending++;
    } else if (task.status === "late") {
      late++;
    } else if (task.status === "not_submitted") {
      notSubmitted++;
    } else if (task.status === "not_started") {
      notStarted++;
    }
  });

  const totalTasks = tasks.length;
  const completedTasks = submitted + late; // Late submissions are still completed
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return {
    submitted,
    pending,
    late,
    notSubmitted,
    notStarted,
    completionRate,
  };
}

// Populate attendance table
function populateAttendanceTable(courseKey, meetings) {
  const tableBody = document.getElementById("attendanceTableBody");
  if (!tableBody) return;

  const course = attendanceData[courseKey];

  tableBody.innerHTML = meetings
    .map((meeting) => {
      let statusBadge = "";
      let actionButton = "";

      if (meeting.status === "present") {
        statusBadge = '<span class="present">Present</span>';
        actionButton = "-";
      } else if (meeting.status === "absent") {
        statusBadge = '<span class="absent">Absent</span>';
        actionButton = "-";
      } else if (meeting.status === "late") {
        statusBadge = '<span class="late">Late</span>';
        actionButton = "-";
      } else if (meeting.status === "pending") {
        statusBadge = '<span class="pending">Pending</span>';
        actionButton = `<button class="attend-btn" onclick="openCodeInput('${courseKey}', ${meeting.id})">Absen Now</button>`;
      } else {
        statusBadge = '<span class="pending">Not Started</span>';
        actionButton =
          '<button class="attend-btn" disabled>Not Available</button>';
      }

      return `
      <div class="table-row">
        <div class="col-meeting">${meeting.id}</div>
        <div class="col-date">${meeting.date}</div>
        <div class="col-topic">${meeting.topic}</div>
        <div class="col-status">${statusBadge}</div>
        <div class="col-action">${actionButton}</div>
      </div>
    `;
    })
    .join("");
}

// Populate tasks list
function populateTasksList(courseKey, tasks) {
  const tasksList = document.getElementById("tasksList");
  if (!tasksList) return;

  const course = attendanceData[courseKey];

  tasksList.innerHTML = tasks
    .map((task) => {
      let statusBadge = "";
      let scoreDisplay = "";
      let actionButton = "";

      // Determine status badge
      if (task.status === "submitted") {
        statusBadge = '<span class="present">Submitted</span>';
        scoreDisplay = `<div class="task-score">Score: ${task.score}/${task.maxScore}</div>`;
        actionButton = `<button class="view-task-btn" onclick="viewTaskSubmission('${courseKey}', ${task.id})">View</button>`;
      } else if (task.status === "late") {
        statusBadge = '<span class="late">Late</span>';
        scoreDisplay = `<div class="task-score">Score: ${task.score}/${task.maxScore}</div>`;
        actionButton = `<button class="view-task-btn" onclick="viewTaskSubmission('${courseKey}', ${task.id})">View</button>`;
      } else if (task.status === "pending") {
        statusBadge = '<span class="pending">Pending Review</span>';
        scoreDisplay = `<div class="task-score">Awaiting grade</div>`;
        actionButton = `<button class="view-task-btn" onclick="viewTaskSubmission('${courseKey}', ${task.id})">View</button>`;
      } else if (task.status === "not_submitted") {
        statusBadge = '<span class="absent">Not Submitted</span>';
        scoreDisplay = `<div class="task-score">Due: ${task.deadline}</div>`;
        actionButton = `<button class="submit-task-btn" onclick="openTaskSubmission('${courseKey}', ${task.id})">Submit</button>`;
      } else {
        statusBadge = '<span class="pending">Not Started</span>';
        scoreDisplay = `<div class="task-score">Starts soon</div>`;
        actionButton =
          '<button class="attend-btn" disabled>Not Available</button>';
      }

      const meeting = course.meetings.find((m) => m.id === task.meetingId);
      const meetingInfo = meeting
        ? `Meeting ${task.meetingId}: ${meeting.topic}`
        : `Meeting ${task.meetingId}`;

      return `
      <div class="task-item">
        <div class="task-info">
          <div class="task-title">${task.title}</div>
          <div class="task-meta">
            <span class="task-meeting">${meetingInfo}</span>
            <span class="task-deadline">Due: ${task.deadline}</span>
          </div>
          ${scoreDisplay}
        </div>
        <div class="task-status">
          ${statusBadge}
          ${actionButton}
        </div>
      </div>
    `;
    })
    .join("");
}

// Populate materials list
function populateMaterialsList(courseKey, materials) {
  const materialsList = document.getElementById("materialsList");
  if (!materialsList) return;

  const course = attendanceData[courseKey];

  materialsList.innerHTML = materials
    .map((material) => {
      let typeIcon = "";
      switch (material.type) {
        case "slides":
          typeIcon = "📊";
          break;
        case "video":
          typeIcon = "🎥";
          break;
        case "document":
          typeIcon = "📄";
          break;
        default:
          typeIcon = "📁";
      }

      const meeting = course.meetings.find((m) => m.id === material.meetingId);
      const meetingInfo = meeting
        ? `Meeting ${material.meetingId}: ${meeting.topic}`
        : `Meeting ${material.meetingId}`;

      return `
      <div class="material-item">
        <div class="material-icon">${typeIcon}</div>
        <div class="material-info">
          <div class="material-title">${material.title}</div>
          <div class="material-meta">
            <span class="material-meeting">${meetingInfo}</span>
            <span class="material-file">${material.file}</span>
            <span class="material-size">${material.size}</span>
          </div>
          <div class="material-date">Uploaded: ${material.uploadDate}</div>
        </div>
        <div class="material-actions">
          <button class="download-btn" onclick="downloadMaterial('${courseKey}', ${material.id})">
            Download
          </button>
        </div>
      </div>
    `;
    })
    .join("");
}

// Update submission status display
function updateSubmissionStatus(task) {
  const statusElement = document.getElementById("submissionStatus");

  if (task.status === "submitted" || task.status === "late") {
    statusElement.innerHTML = `
      <div class="submission-status-card success">
        <h4>✅ Submission Received</h4>
        <p>Submitted on: ${task.submissionDate}</p>
        <p>File: ${task.file}</p>
        ${
          task.score
            ? `<p>Score: <strong>${task.score}/${task.maxScore}</strong></p>`
            : "<p>Status: Grading in progress</p>"
        }
      </div>
    `;
  } else if (task.status === "pending") {
    statusElement.innerHTML = `
      <div class="submission-status-card warning">
        <h4>⏳ Submission Under Review</h4>
        <p>Submitted on: ${task.submissionDate}</p>
        <p>File: ${task.file}</p>
        <p>Status: Awaiting grade from instructor</p>
      </div>
    `;
  } else {
    statusElement.innerHTML = `
      <div class="submission-status-card info">
        <h4>📝 Ready for Submission</h4>
        <p>Please upload your completed work before the deadline.</p>
        <p><strong>Deadline:</strong> ${task.deadline}</p>
      </div>
    `;
  }
}

// Open code input form
function openCodeInput(courseKey, meetingId) {
  showCodeInputView(courseKey, meetingId);
}

// Open task submission form
function openTaskSubmission(courseKey, taskId) {
  showTaskSubmissionView(courseKey, taskId);
}

// View task submission (read-only)
function viewTaskSubmission(courseKey, taskId) {
  showTaskSubmissionView(courseKey, taskId);
}

// Download material
function downloadMaterial(courseKey, materialId) {
  const course = attendanceData[courseKey];
  const material = course.materials.find((m) => m.id === materialId);
  alert(`Downloading: ${material.title}\nFile: ${material.file}`);
  // In real implementation, this would trigger actual file download
}

// Submit attendance code
function submitAttendanceCode() {
  const codeInput = document.getElementById("attendanceCode");
  const codeMessage = document.getElementById("codeMessage");
  const enteredCode = codeInput.value.trim().toUpperCase();

  if (!enteredCode) {
    codeMessage.textContent = "⚠️ Please enter an attendance code";
    codeMessage.className = "code-message error";
    codeMessage.style.display = "block";
    return;
  }

  const validCode = validCodes[currentCourse].toUpperCase();

  if (enteredCode === validCode) {
    // Update attendance status
    const course = attendanceData[currentCourse];
    const meeting = course.meetings.find((m) => m.id === currentMeeting);
    meeting.status = "present";

    // Show success message
    codeMessage.textContent = "✅ Attendance recorded successfully!";
    codeMessage.className = "code-message success";
    codeMessage.style.display = "block";

    // Redirect back to detail view after 2 seconds
    setTimeout(() => {
      showCourseDetailView(currentCourse);
    }, 2000);
  } else {
    // Show error message
    codeMessage.textContent = "❌ Invalid code. Please check and try again.";
    codeMessage.className = "code-message error";
    codeMessage.style.display = "block";
    codeInput.value = "";
    codeInput.focus();
  }
}

// Submit task
function submitTask() {
  const fileInput = document.getElementById("submissionFile");
  const notesInput = document.getElementById("submissionNotes");

  if (!fileInput.files || fileInput.files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }

  const file = fileInput.files[0];
  const notes = notesInput.value.trim();

  // Simulate file upload and submission
  const course = attendanceData[currentCourse];
  const task = course.tasks.find((t) => t.id === currentTask);

  // Update task status
  task.status = "pending";
  task.submissionDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  task.file = file.name;

  // Show success message
  alert("Task submitted successfully! Your submission is now under review.");

  // Return to course detail view
  showCourseDetailView(currentCourse);
}

// Initialize Quick Dark Mode - IMPROVED
function initQuickDarkMode() {
  const quickToggle = document.getElementById("quickDarkMode");
  const mobileToggle = document.getElementById("quickDarkModeMobile");

  function syncDarkModeToggle(isDark) {
    if (quickToggle) quickToggle.checked = isDark;
    if (mobileToggle) mobileToggle.checked = isDark;
  }

  // Load saved settings
  const savedSettings = localStorage.getItem("userSettings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    syncDarkModeToggle(settings.darkMode);
  }

  // Desktop toggle event
  if (quickToggle) {
    quickToggle.addEventListener("change", function () {
      const settings = {
        emailNotifications:
          document.getElementById("emailNotifications")?.checked || true,
        darkMode: this.checked,
        profileVisibility:
          document.getElementById("profileVisibility")?.value || "public",
        language: document.getElementById("languageSelect")?.value || "en",
      };

      localStorage.setItem("userSettings", JSON.stringify(settings));
      applySettings(settings);
      syncDarkModeToggle(this.checked);
    });
  }

  // Mobile toggle event is handled in initHamburgerMenu
}

// Initialize attendance system
function initAttendanceSystem() {
  // Course card click handlers
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    card.addEventListener("click", function () {
      const courseKey = this.dataset.course;
      showCourseDetailView(courseKey);
    });
  });

  // Tab button handlers
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });

  // Back button handlers
  const backToCourseList = document.getElementById("backToCourseList");
  if (backToCourseList) {
    backToCourseList.addEventListener("click", showCourseListView);
  }

  const backToDetail = document.getElementById("backToDetail");
  if (backToDetail) {
    backToDetail.addEventListener("click", function () {
      if (currentCourse) {
        showCourseDetailView(currentCourse);
      }
    });
  }

  const backToDetailFromTask = document.getElementById("backToDetailFromTask");
  if (backToDetailFromTask) {
    backToDetailFromTask.addEventListener("click", function () {
      if (currentCourse) {
        showCourseDetailView(currentCourse);
      }
    });
  }

  // Submit code button
  const submitCodeBtn = document.getElementById("submitCodeBtn");
  if (submitCodeBtn) {
    submitCodeBtn.addEventListener("click", submitAttendanceCode);
  }

  // Submit task button
  const submitTaskBtn = document.getElementById("submitTaskBtn");
  if (submitTaskBtn) {
    submitTaskBtn.addEventListener("click", submitTask);
  }

  // Cancel submission button
  const cancelSubmissionBtn = document.getElementById("cancelSubmissionBtn");
  if (cancelSubmissionBtn) {
    cancelSubmissionBtn.addEventListener("click", function () {
      if (currentCourse) {
        showCourseDetailView(currentCourse);
      }
    });
  }

  // Enter key in code input
  const codeInput = document.getElementById("attendanceCode");
  if (codeInput) {
    codeInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        submitAttendanceCode();
      }
    });
  }
}

// Initialize logout functionality
function initLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtnMobile = document.getElementById("logoutBtnMobile");

  function handleLogout() {
    if (confirm("Are you sure you want to logout?")) {
      window.location.href = "index.html";
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  if (logoutBtnMobile) {
    logoutBtnMobile.addEventListener("click", handleLogout);
  }
}

// Update progress bar
function updateProgressBar(percentage) {
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = percentage + "%";
  }
}

// Simulate data loading
function simulateDataLoading() {
  setTimeout(() => {
    updateProgressBar(72);
  }, 500);
}

// Initialize settings
function initSettings() {
  const saveSettingsBtn = document.querySelector(".save-settings");

  // Load saved settings
  loadSettings();

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", function () {
      const emailNotifications =
        document.getElementById("emailNotifications").checked;
      const darkMode = document.getElementById("darkMode").checked;
      const language = document.getElementById("languageSelect").value;
      const profileVisibility =
        document.getElementById("profileVisibility").value;

      const settings = {
        emailNotifications,
        darkMode,
        language,
        profileVisibility,
      };

      // Save to localStorage
      localStorage.setItem("userSettings", JSON.stringify(settings));

      // Apply settings
      applySettings(settings);

      // Apply language if changed
      if (language !== currentLanguage) {
        setLanguage(language);
      }

      showNotification(
        translations[currentLanguage]["settings.saved"] ||
          "Settings saved successfully!",
        "success"
      );
    });
  }
}

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem("userSettings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);

    // Update form inputs
    document.getElementById("emailNotifications").checked =
      settings.emailNotifications;
    document.getElementById("darkMode").checked = settings.darkMode;
    document.getElementById("languageSelect").value = settings.language || "en";
    document.getElementById("profileVisibility").value =
      settings.profileVisibility;

    // Apply settings
    applySettings(settings);

    // Apply language
    if (settings.language && settings.language !== currentLanguage) {
      setLanguage(settings.language);
    }
  }
}

// Apply settings
function applySettings(settings) {
  // Dark mode
  if (settings.darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // Sync dark mode toggles
  const quickToggle = document.getElementById("quickDarkMode");
  const mobileToggle = document.getElementById("quickDarkModeMobile");
  if (quickToggle) quickToggle.checked = settings.darkMode;
  if (mobileToggle) mobileToggle.checked = settings.darkMode;
}

// Utility function for notifications
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `ai-notification ${type}`;
  notification.innerHTML = `
    <span class="notification-message">${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">×</button>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 3000);
}

// Initialize AI Assistant
function initAIAssistant() {
  // Basic initialization - can be expanded
  console.log("AI Assistant initialized");
}

// Initialize Schedule Filter
function initScheduleFilter() {
  const dayFilter = document.getElementById("dayFilter");

  if (!dayFilter) {
    console.warn("Schedule filter select element not found.");
    return;
  }

  dayFilter.addEventListener("change", function () {
    const selectedDay = this.value; // Ini akan berisi "all", "monday", "tuesday", dll.
    const scheduleDays = document.querySelectorAll(".schedule-day"); // Ambil semua kontainer hari

    scheduleDays.forEach((dayElement) => {
      const dayData = dayElement.dataset.day; // Ambil data-day dari elemen

      if (selectedDay === "all") {
        // Jika pilih "All Days", tampilkan semua
        dayElement.style.display = "block";
      } else {
        // Jika tidak, periksa datanya
        if (dayData === selectedDay) {
          dayElement.style.display = "block"; // Tampilkan yang cocok
        } else {
          dayElement.style.display = "none"; // Sembunyikan yang tidak cocok
        }
      }
    });
  });
}

// Inisialisasi Quick Actions
function initQuickActions() {
  const actionsContainer = document.querySelector(".quick-actions .actions");
  if (!actionsContainer) return;

  const [transcriptBtn, leaveBtn, advisorBtn, scheduleBtn] =
    actionsContainer.querySelectorAll("button");

  // 1. Tombol Download Transcript
  transcriptBtn.addEventListener("click", downloadTranscriptPDF);

  // 2. Tombol Request Leave
  const leaveModal = document.getElementById("leaveModal");
  const cancelLeaveBtn = document.getElementById("cancelLeaveBtn");
  const leaveForm = document.getElementById("leaveForm");

  leaveBtn.addEventListener("click", () => {
    leaveModal.style.display = "flex";
    setTimeout(() => leaveModal.classList.add("active"), 10);
  });

  const closeLeaveModal = () => {
    leaveModal.classList.remove("active");
    setTimeout(() => (leaveModal.style.display = "none"), 300);
  };

  cancelLeaveBtn.addEventListener("click", closeLeaveModal);
  leaveModal.addEventListener("click", (e) => {
    if (e.target === leaveModal) closeLeaveModal();
  });

  leaveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("leaveDate").value;
    const reason = document.getElementById("leaveReason").value;
    alert(`Leave request submitted for ${date}.\nReason: ${reason}`);
    leaveForm.reset();
    closeLeaveModal();
  });

  // 3. Tombol Contact Advisor
  advisorBtn.addEventListener("click", () => {
    window.location.href =
      "mailto:dosen.pembimbing@kampus.ac.id?subject=Konsultasi Bimbingan";
    // Ganti email di atas dengan email dosen Anda
  });

  // 4. Tombol View Schedule
  scheduleBtn.addEventListener("click", () => {
    switchSection("schedule");
  });
}

// Data konversi nilai
const gradeToPoints = {
  A: 4.0,
  "A-": 3.75,
  "B+": 3.5,
  B: 3.0,
  "B-": 2.75,
  "C+": 2.5,
  C: 2.0,
  D: 1.0,
  E: 0.0,
  T: 0.0,
};

// Fungsi untuk mengisi halaman "Grades" secara dinamis
function populateGradesPage() {
  const gradesListContainer = document.getElementById("dynamicGradesList");
  if (!gradesListContainer) return;

  gradesListContainer.innerHTML = ""; // Kosongkan list

  const gradeOptions =
    `<option value="-" data-i18n="gpa.select_grade">-- Prediksi --</option>` +
    Object.keys(gradeToPoints)
      .map((grade) => `<option value="${grade}">${grade}</option>`)
      .join("");

  Object.entries(attendanceData).forEach(([courseKey, course]) => {
    // Hitung rata-rata nilai tugas saat ini
    let totalScore = 0;
    let taskCount = 0;
    course.tasks.forEach((task) => {
      if (task.score !== null) {
        totalScore += (task.score / task.maxScore) * 100;
        taskCount++;
      }
    });
    const currentAvg =
      taskCount > 0 ? (totalScore / taskCount).toFixed(1) : "-";

    const row = document.createElement("div");
    row.className = "grade-row";
    row.innerHTML = `
      <div class="grade-info">
        <div class="grade-course">${course.name}</div>
        <div class="grade-info-text">
          ${course.code} • ${course.credits} <span data-i18n="common.credits">credits</span>
        </div>
      </div>
      <div class="grade-score">${currentAvg} <small>(Tugas)</small></div>
      <div class="grade-prediction">
        <select class="grade-prediction-select" data-course-key="${courseKey}">
          ${gradeOptions}
        </select>
      </div>
    `;
    gradesListContainer.appendChild(row);
  });

  // Terapkan terjemahan ke elemen yang baru dibuat
  applyTranslations();
}

// Fungsi untuk menghitung IPK
function calculateGPA() {
  const predictionSelects = document.querySelectorAll(
    ".grade-prediction-select"
  );

  let totalSKS = 0;
  let totalBobot = 0;

  predictionSelects.forEach((select) => {
    const courseKey = select.dataset.courseKey;
    const selectedGrade = select.value;

    if (selectedGrade !== "-") {
      const course = attendanceData[courseKey];
      const sks = course.credits;
      const bobot = gradeToPoints[selectedGrade];

      totalSKS += sks;
      totalBobot += bobot * sks;
    }
  });

  const ips = totalSKS > 0 ? (totalBobot / totalSKS).toFixed(2) : 0.0;

  // Asumsi IPK lama 3.42 dan total SKS lama 110 (untuk simulasi IPK)
  const ipkLama = 3.42;
  const sksLama = 110;

  const totalBobotBaru = ipkLama * sksLama + totalBobot;
  const totalSKSBaru = sksLama + totalSKS;
  const ipk = (totalBobotBaru / totalSKSBaru).toFixed(2);

  // Tampilkan hasil
  document.getElementById("gpaValueIPS").textContent = ips;
  document.getElementById("gpaValueIPK").textContent = ipk;

  showNotification(
    translations[currentLanguage]["gpa.calculated"] ||
      "Perhitungan IPK/IPS selesai!",
    "success"
  );
}

function downloadTranscriptPDF() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || {
    fullName: "Mahasiswa",
    nim: "000000",
    programStudi: "Umum",
  };

  const element = document.createElement("div");
  element.style.width = "800px";
  element.style.padding = "40px";
  element.style.fontFamily = "Arial, sans-serif";
  element.style.color = "#333";
  element.style.background = "white";

  let htmlContent = `
    <div style="text-align: center; border-bottom: 3px solid #333; padding-bottom: 20px; margin-bottom: 30px;">
      <h1 style="margin: 0; font-size: 24px; color: #000;">TRANSKRIP NILAI SEMENTARA</h1>
      <p style="margin: 5px 0 0; font-size: 14px; color: #000;">Universitas Catur Insan Cendekia (UCIC)</p>
    </div>
    
    <table style="width: 100%; margin-bottom: 30px; font-size: 14px; color: #000;">
      <tr><td style="width: 150px; font-weight: bold;">Nama Mahasiswa</td><td>: ${user.fullName}</td></tr>
      <tr><td style="font-weight: bold;">NIM</td><td>: ${user.nim}</td></tr>
      <tr><td style="font-weight: bold;">Program Studi</td><td>: ${user.programStudi}</td></tr>
      <tr><td style="font-weight: bold;">Tahun Akademik</td><td>: 2024/2025</td></tr>
    </table>

    <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 10px; color: #000;">Hasil Studi Semester 4</h3>
    <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px; color: #000;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #999; padding: 10px; text-align: left;">Kode</th>
          <th style="border: 1px solid #999; padding: 10px; text-align: left;">Mata Kuliah</th>
          <th style="border: 1px solid #999; padding: 10px; text-align: center;">SKS</th>
          <th style="border: 1px solid #999; padding: 10px; text-align: center;">Nilai</th>
        </tr>
      </thead>
      <tbody>
  `;

  Object.values(attendanceData).forEach((course) => {
    const grade = ["A", "A-", "B+", "B"][Math.floor(Math.random() * 4)];

    htmlContent += `
      <tr>
        <td style="border: 1px solid #999; padding: 8px;">${course.code}</td>
        <td style="border: 1px solid #999; padding: 8px;">${course.name}</td>
        <td style="border: 1px solid #999; padding: 8px; text-align: center;">${course.credits}</td>
        <td style="border: 1px solid #999; padding: 8px; text-align: center;">${grade}</td>
      </tr>
    `;
  });

  htmlContent += `
      </tbody>
    </table>

    <div style="margin-top: 40px; text-align: right; color: #000;">
      <p>Cirebon, ${new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}</p>
      <p style="margin-top: 60px; font-weight: bold;">( Tanda Tangan Dosen Wali )</p>
    </div>
  `;

  element.innerHTML = htmlContent;

  const opt = {
    margin: [10, 10, 10, 10],
    filename: `Transkrip_${user.nim}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  showNotification("Sedang membuat PDF...", "info");

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      showNotification("Transkrip berhasil diunduh!", "success");
    })
    .catch((err) => {
      console.error(err);
      showNotification("Gagal membuat PDF", "error");
    });
}

// Inisialisasi Kalkulator
function initGpaCalculator() {
  const calculateBtn = document.getElementById("calculateGpaBtn");
  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateGPA);
  }
}

// Fungsi untuk menampilkan transkrip
function showTranscript() {
  const transcriptWindow = window.open(
    "",
    "Transcript",
    "width=600,height=700"
  );

  // Ambil data nilai dari HTML statis (untuk contoh ini)
  // Idealnya ini akan meng-loop data seperti di kalkulator IPK
  const grades = document.querySelectorAll("#grades .grade-row");

  let content = `
    <html>
      <head>
        <title>Transkrip Nilai (Sementara)</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 2rem; line-height: 1.6; }
          h1, h2 { color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
          h1 { font-size: 2rem; } h2 { font-size: 1.5rem; margin-top: 2rem; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { padding: 12px; border: 1px solid #e2e8f0; text-align: left; }
          th { background: #f8fafc; }
          .gpa { font-size: 1.25rem; font-weight: 600; background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <h1>Transkrip Nilai (Sementara)</h1>
        <p><strong>Nama:</strong> Kharis Destian Maulana</p>
        <p><strong>NIM:</strong> 2023001</p>
        
        <h2>Semester 4 (Berjalan)</h2>
        <table>
          <tr><th>Mata Kuliah</th><th>SKS</th><th>Nilai Angka</th></tr>
  `;

  // Loop data dari attendanceData (ini lebih baik)
  Object.values(attendanceData).forEach((course) => {
    content += `
      <tr>
        <td>${course.name}</td>
        <td>${course.credits}</td>
        <td>(Belum Selesai)</td>
      </tr>
    `;
  });

  content += `</table>`;

  // Ambil data IPK statis
  const gpa = document.querySelector(".cards .card-value").textContent;
  content += `<div class="gpa">IPK Saat Ini: ${gpa}</div>`;

  content += `</body></html>`;

  transcriptWindow.document.write(content);
  transcriptWindow.document.close();
}

document.addEventListener("DOMContentLoaded", function () {
  // 1. Ambil data Mata Kuliah dari Database API
  fetch("/api/get_courses_db")
    .then((response) => {
      if (!response.ok) throw new Error("API request failed");
      return response.json();
    })
    .then((data) => {
      // Update attendanceData dengan data dari database
      if (!data.error_message) {
        Object.keys(attendanceData).forEach((key) => {
          if (data[key]) {
            attendanceData[key] = {
              ...attendanceData[key], // Pertahankan data meetings/tasks statis
              ...data[key], // Timpa info course (name, credits) dari DB
            };
          }
        });
      }
      console.log("Data mata kuliah berhasil dimuat dari database.");
    })
    .catch((error) => {
      console.warn(
        "Gagal memuat data dari API. Menggunakan data statis.",
        error
      );
    })
    .finally(() => {
      // 2. Inisialisasi Semua Fitur (Setelah data siap)
      syncAllSystems();
      initLanguage();
      initHamburgerMenu();
      initFAB();
      initSidebar();
      let chart = initChart();
      initAttendanceSystem();
      initLogout();
      initSettings();
      initAIAssistant();
      initQuickDarkMode();
      initScheduleFilter();
      initQuickActions();
      initGpaCalculator();
      loadUserProfile();
      initAutoLogout();

      window.addEventListener("resize", function () {
        if (chart) {
          setTimeout(() => {
            chart.resize();
          }, 100);
        }
      });

      switchSection("dashboard");
      simulateDataLoading();

      // 3. Inisialisasi Chatbot & Event Listeners
      const chatbotFab = document.getElementById("chatbotFab");
      const messagesContainer = document.getElementById("chatbotMessages");
      const inputField = document.getElementById("chatbotInput");
      const sendBtn = document.getElementById("chatbotSendBtn");
      const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

      if (chatbotFab && messagesContainer && inputField && sendBtn) {
        chatbotFab.addEventListener("click", () => {
          switchSection("chatbot");
        });

        if (scrollToBottomBtn) {
          scrollToBottomBtn.addEventListener("click", () => {
            messagesContainer.scrollTo({
              top: messagesContainer.scrollHeight,
              behavior: "smooth",
            });
          });

          messagesContainer.addEventListener("scroll", () => {
            const scrollFromBottom =
              messagesContainer.scrollHeight -
              messagesContainer.scrollTop -
              messagesContainer.clientHeight;

            if (scrollFromBottom > 150) {
              scrollToBottomBtn.classList.add("visible");
            } else {
              scrollToBottomBtn.classList.remove("visible");
            }
          });
        }

        const sendMessage = () => {
          const query = inputField.value;
          if (query.trim() === "") return;

          addMessage(query, "user");
          inputField.value = "";

          const loadingMessageId = addMessage("...", "bot", true);

          const contextData = getContextForAI(query);

          fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: query,
              context: contextData,
              language: currentLanguage,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              removeMessage(loadingMessageId);

              if (data.choices && data.choices[0] && data.choices[0].message) {
                const aiResponse = data.choices[0].message.content;
                addMessage(aiResponse, "bot");
              } else if (data.error) {
                addMessage(`Error: ${data.error}`, "bot");
              } else {
                addMessage(
                  "Maaf, saya tidak menerima balasan yang valid.",
                  "bot"
                );
              }
            })
            .catch((error) => {
              removeMessage(loadingMessageId);
              console.error("Fetch error:", error);
              addMessage(
                "Maaf, terjadi masalah koneksi ke server. Coba lagi nanti.",
                "bot"
              );
            });
        };

        sendBtn.addEventListener("click", sendMessage);
        inputField.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        });

        const addMessage = (
          message,
          sender,
          isLoading = false,
          fromHistory = false
        ) => {
          const messagesContainer = document.getElementById("chatbotMessages");
          if (!messagesContainer) return null;

          const msgDiv = document.createElement("div");
          msgDiv.className = `chat-message ${sender}`;

          const messageId = "msg-" + Date.now();
          msgDiv.id = messageId;

          if (sender === "bot") {
            msgDiv.classList.add("chat-text");
            if (isLoading) {
              msgDiv.innerHTML =
                '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>';
              msgDiv.classList.add("loading");
            } else {
              const htmlMessage = convertMarkdownToHTML(message);
              msgDiv.innerHTML = htmlMessage;
            }
          } else {
            const textSpan = document.createElement("span");
            textSpan.className = "chat-text";
            textSpan.textContent = message;
            msgDiv.appendChild(textSpan);
          }

          messagesContainer.appendChild(msgDiv);

          if (!fromHistory) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }

          return messageId;
        };

        // Helper Markdown Converter
        function convertMarkdownToHTML(markdown) {
          if (!markdown) return "";
          let html = markdown;
          html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
          html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");
          html = html.replace(/_(.*?)_/g, "<em>$1</em>");
          html = html.replace(/\n/g, "<br>");
          html = html.replace(/^\s*[-*]\s+(.+)$/gm, "<li>$1</li>");
          html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");
          return html;
        }

        function removeMessage(messageId) {
          const messageElement = document.getElementById(messageId);
          if (messageElement) {
            messageElement.remove();
          }
        }

        const userData = JSON.parse(
          localStorage.getItem("currentUser") || "{}"
        );
        const firstName = userData.fullName
          ? userData.fullName.split(" ")[0]
          : "Student";

        const initialGreeting =
          currentLanguage === "id"
            ? `Halo ${firstName}! Ada yang bisa saya bantu?`
            : `Hello ${firstName}! How can I help you?`;

        messagesContainer.innerHTML = "";
        addMessage(initialGreeting, "bot");
      }

      // 4. Event Listeners Tambahan (Study Room, FABs)
      const backToStudyRoomList = document.getElementById(
        "backToStudyRoomList"
      );
      if (backToStudyRoomList) {
        backToStudyRoomList.addEventListener("click", function () {
          switchSection("studyroom");
        });
      }

      // Inisialisasi Notes FAB
      const notesFab = document.getElementById("notesFab");
      if (notesFab) {
        notesFab.addEventListener("click", () => {
          switchSection("notes");
        });
      }

      // Inisialisasi Kanban FAB
      const kanbanFab = document.getElementById("kanbanFab");
      if (kanbanFab) {
        kanbanFab.addEventListener("click", () => {
          switchSection("kanban");
        });
      }

      // Inisialisasi Code FAB (jika masih ada)
      const codeFab = document.getElementById("codeFab");
      if (codeFab) {
        codeFab.addEventListener("click", () => {
          switchSection("codeplayground");
        });
      }
      try {
        if ("serviceWorker" in navigator && "PushManager" in window) {
          // 1. Daftarkan file service-worker.js
          navigator.serviceWorker.register("service-worker.js").then(() => {
            console.log("Service Worker untuk Notifikasi terdaftar.");

            // 2. Inisialisasi Pusher Beams
            const beamsClient = new PusherPushNotifications.Client({
              instanceId: "INSTANCE_ID_ANDA", // <-- GANTI INI (Dapat dari dashboard Pusher Beams)
            });

            // 3. Ambil ID pengguna (misal: NIM) dari localStorage
            const user = JSON.parse(localStorage.getItem("currentUser"));
            const myUserId = user ? user.nim : null; // Gunakan NIM atau ID unik

            if (myUserId) {
              // 4. Minta izin notifikasi
              beamsClient
                .start()
                .then(() => beamsClient.requestPermission()) // Minta pop-up "Allow Notifications?"
                .then(() =>
                  beamsClient.setUserId(
                    myUserId,
                    new PusherPushNotifications.TokenProvider({
                      // Anda perlu membuat API baru ini di Vercel untuk otentikasi
                      url: "/api/pusher-auth-beams",
                    })
                  )
                )
                .then(() =>
                  console.log(
                    "Berhasil terdaftar ke Pusher Beams dengan ID:",
                    myUserId
                  )
                )
                .catch(console.error);
            }
          });
        }
      } catch (e) {
        console.error("Gagal mendaftarkan Push Notifications:", e);
      }
    });
});

// Global functions for HTML onclick events
window.openCodeInput = openCodeInput;
window.openTaskSubmission = openTaskSubmission;
window.viewTaskSubmission = viewTaskSubmission;
window.downloadMaterial = downloadMaterial;
window.navigateBreadcrumb = navigateBreadcrumb;
window.submitTask = submitTask;
window.switchTab = switchTab;

function getSchedule(input) {
  let dayToFind = "";
  if (input.includes("senin")) dayToFind = "monday";
  else if (input.includes("selasa")) dayToFind = "tuesday";
  else if (input.includes("rabu")) dayToFind = "wednesday";
  else if (input.includes("kamis")) dayToFind = "thursday";
  else if (input.includes("jumat")) dayToFind = "friday";
  else if (input.includes("hari ini")) {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    dayToFind = days[new Date().getDay()];
    if (dayToFind === "sunday" || dayToFind === "saturday") {
      return translations[currentLanguage]["chat.schedule.today_off"];
    }
  }

  if (dayToFind) {
    const scheduleEl = document.querySelector(
      `.schedule-day[data-day="${dayToFind}"]`
    );
    if (!scheduleEl)
      return translations[currentLanguage]["chat.schedule.not_found"];

    const dayName = scheduleEl.querySelector("h3").textContent;
    let response = translations[currentLanguage][
      "chat.schedule.header"
    ].replace("{dayName}", dayName);
    const classes = scheduleEl.querySelectorAll(
      ".class-item:not(.custom-event)"
    );

    if (classes.length === 0) {
      response += translations[currentLanguage]["chat.briefing.no_class"];
    } else {
      classes.forEach((item) => {
        const time = item.querySelector(".class-time .time-start").textContent;
        const course = item.querySelector(".class-name").textContent.trim();
        const room = item.querySelector(".class-room").textContent;
        response += translations[currentLanguage]["chat.schedule.item"]
          .replace("{time}", time)
          .replace("{course}", course)
          .replace("{room}", room);
      });
    }
    response += "</ul>";
    return response;
  }

  return translations[currentLanguage]["chat.schedule.prompt"];
}

function getCourseList() {
  const courseNames = Object.values(attendanceData).map(
    (course) => course.name
  );
  let response = translations[currentLanguage]["chat.courselist.header"];
  courseNames.forEach((name) => {
    response += `<li>${name}</li>`;
  });
  response += "</ul>";
  return response;
}

function getCourseDetails(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (courseKey) {
    const course = attendanceData[courseKey];
    let response = translations[currentLanguage]["chat.coursedetails.info"]
      .replace("{name}", course.name)
      .replace("{code}", course.code)
      .replace("{credits}", course.credits)
      .replace("{meetings}", course.meetings.length)
      .replace("{tasks}", course.tasks.length)
      .replace("{materials}", course.materials.length);
    response += translations[currentLanguage][
      "chat.coursedetails.prompt"
    ].replace(/{courseKey}/g, courseKey);
    return response;
  }
  return translations[currentLanguage]["chat.fallback"];
}

function getTasks(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  let coursesToSearch = [];
  if (courseKey) {
    coursesToSearch.push(attendanceData[courseKey]);
  } else {
    coursesToSearch = Object.values(attendanceData);
  }

  let pendingTasks = [];
  coursesToSearch.forEach((course) => {
    course.tasks.forEach((task) => {
      if (
        task.status === "not_submitted" ||
        task.status === "pending" ||
        task.status === "not_started"
      ) {
        pendingTasks.push(
          translations[currentLanguage]["chat.tasks.item"]
            .replace("{courseName}", course.name)
            .replace("{title}", task.title)
            .replace("{deadline}", task.deadline)
        );
      }
    });
  });

  if (pendingTasks.length === 0) {
    if (courseKey) {
      return translations[currentLanguage]["chat.tasks.none_specific"].replace(
        "{courseName}",
        attendanceData[courseKey].name
      );
    } else {
      return translations[currentLanguage]["chat.tasks.none_all"];
    }
  }

  let response = translations[currentLanguage]["chat.tasks.header"];
  response += pendingTasks.join("");
  response += "</ul>";
  return response;
}

function getGrades(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (!courseKey) {
    return translations[currentLanguage]["chat.grades.prompt"];
  }

  const course = attendanceData[courseKey];
  const gradedTasks = course.tasks.filter(
    (task) => task.status === "submitted" || task.status === "late"
  );

  if (gradedTasks.length === 0) {
    return translations[currentLanguage]["chat.grades.none"].replace(
      "{courseName}",
      course.name
    );
  }

  let response = translations[currentLanguage]["chat.grades.header"].replace(
    "{courseName}",
    course.name
  );
  gradedTasks.forEach((task) => {
    if (task.score !== null) {
      response += translations[currentLanguage]["chat.grades.item"]
        .replace("{title}", task.title)
        .replace("{score}", task.score)
        .replace("{maxScore}", task.maxScore);
    } else {
      response += translations[currentLanguage][
        "chat.grades.item_pending"
      ].replace("{title}", task.title);
    }
  });
  response += "</ul>";
  return response;
}

function getMaterials(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (!courseKey) {
    return translations[currentLanguage]["chat.grades.prompt"];
  }

  const course = attendanceData[courseKey];
  const latestMaterials = course.materials.slice(-3).reverse();

  let response =
    translations[currentLanguage]["chat.updates.latest_material"].replace(
      "{material}",
      ""
    ) + ` <b>${course.name}</b>:<ul>`;
  latestMaterials.forEach((material) => {
    response += `<li><b>${material.title}</b> (${material.type}) - ${material.file}</li>`;
  });
  response += "</ul>";
  return response;
}

function getAttendance(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (!courseKey) {
    const attendance =
      document.querySelectorAll(".cards .card-value")[2].textContent;
    return translations[currentLanguage]["chat.attendance.overall"].replace(
      "{attendance}",
      attendance
    );
  }

  const course = attendanceData[courseKey];
  const stats = calculateAttendanceStats(course.meetings);

  return translations[currentLanguage]["chat.attendance.specific"]
    .replace("{name}", course.name)
    .replace("{present}", stats.present)
    .replace("{absent}", stats.absent)
    .replace("{late}", stats.late)
    .replace("{rate}", stats.rate);
}

function getPerformanceSummary(addMotivation = false) {
  let courseScores = {};
  let totalAverage = 0;
  let totalCoursesWithScores = 0;

  Object.entries(attendanceData).forEach(([key, course]) => {
    let totalScore = 0;
    let taskCount = 0;
    course.tasks.forEach((task) => {
      if (task.score !== null) {
        totalScore += task.score / task.maxScore;
        taskCount++;
      }
    });

    if (taskCount > 0) {
      const avg = (totalScore / taskCount) * 100;
      courseScores[course.name] = avg;
      totalAverage += avg;
      totalCoursesWithScores++;
    } else {
      courseScores[course.name] = null;
    }
  });

  if (totalCoursesWithScores === 0) {
    return translations[currentLanguage]["chat.perf.no_scores"];
  }

  const sortedScores = Object.entries(courseScores)
    .filter(([name, score]) => score !== null)
    .sort((a, b) => a[1] - b[1]);

  const bestCourse = sortedScores[sortedScores.length - 1];
  const worstCourse = sortedScores[0];
  const overallAvg = (totalAverage / totalCoursesWithScores).toFixed(1);

  let response = translations[currentLanguage]["chat.perf.summary"]
    .replace("{avg}", overallAvg)
    .replace("{bestCourse}", bestCourse[0])
    .replace("{bestScore}", bestCourse[1].toFixed(1))
    .replace("{worstCourse}", worstCourse[0])
    .replace("{worstScore}", worstCourse[1].toFixed(1));

  if (addMotivation) {
    response +=
      "<br><br>" +
      translations[currentLanguage]["motivation.response"]
        .replace("{bestCourse}", bestCourse[0])
        .replace("{worstCourse}", worstCourse[0]);
  }

  return response;
}

function getMissedItems() {
  let missedTasks = [];
  let missedMeetings = [];

  Object.entries(attendanceData).forEach(([key, course]) => {
    course.tasks.forEach((task) => {
      if (task.status === "not_submitted") {
        missedTasks.push(
          translations[currentLanguage]["chat.missed.task_item"]
            .replace("{courseName}", course.name)
            .replace("{title}", task.title)
            .replace("{deadline}", task.deadline)
        );
      }
    });
    course.meetings.forEach((meeting) => {
      if (meeting.status === "absent") {
        missedMeetings.push(
          translations[currentLanguage]["chat.missed.meeting_item"]
            .replace("{courseName}", course.name)
            .replace("{id}", meeting.id)
            .replace("{topic}", meeting.topic)
        );
      }
    });
  });

  let response = translations[currentLanguage]["chat.missed.header"];

  if (missedTasks.length > 0) {
    response += translations[currentLanguage]["chat.missed.tasks_header"];
    response += missedTasks.join("");
    response += "</ul>";
  } else {
    response += translations[currentLanguage]["chat.missed.tasks_none"];
  }

  if (missedMeetings.length > 0) {
    response += translations[currentLanguage]["chat.missed.meetings_header"];
    response += missedMeetings.join("");
    response += "</ul>";
  } else {
    response += translations[currentLanguage]["chat.missed.meetings_none"];
  }

  return response;
}

function getLatestUpdates() {
  let nextTask = null;
  let latestMaterial = null;
  let soonestDeadline = Infinity;
  let latestUploadDate = 0;

  Object.values(attendanceData).forEach((course) => {
    course.tasks.forEach((task) => {
      if (task.status === "not_submitted" || task.status === "not_started") {
        const deadlineDate = Date.parse(task.deadline);
        if (deadlineDate > Date.now() && deadlineDate < soonestDeadline) {
          soonestDeadline = deadlineDate;
          nextTask = `<b>${course.name}</b>: ${task.title} (Deadline: ${task.deadline})`;
        }
      }
    });

    course.materials.forEach((material) => {
      const uploadDate = Date.parse(material.uploadDate);
      if (uploadDate > latestUploadDate) {
        latestUploadDate = uploadDate;
        latestMaterial = `<b>${course.name}</b>: ${material.title} (${material.file})`;
      }
    });
  });

  let response = translations[currentLanguage]["chat.updates.header"];

  const taskText = nextTask
    ? nextTask
    : translations[currentLanguage]["chat.updates.no_task"];
  response += translations[currentLanguage]["chat.updates.next_task"].replace(
    "{task}",
    taskText
  );

  const materialText = latestMaterial
    ? latestMaterial
    : translations[currentLanguage]["chat.updates.no_material"];
  response += translations[currentLanguage][
    "chat.updates.latest_material"
  ].replace("{material}", materialText);

  response += "</ul>";
  return response;
}

function getTaskDescription(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (!courseKey) {
    return translations[currentLanguage]["chat.desc.prompt"];
  }

  const course = attendanceData[courseKey];
  let taskToDescribe = null;

  taskToDescribe = course.tasks.find(
    (task) => task.status === "pending" || task.status === "not_submitted"
  );

  if (!taskToDescribe) {
    const gradedTasks = course.tasks.filter((task) => task.score !== null);
    if (gradedTasks.length > 0) {
      taskToDescribe = gradedTasks[gradedTasks.length - 1];
    }
  }

  if (!taskToDescribe) {
    return translations[currentLanguage]["chat.desc.none"].replace(
      "{courseName}",
      course.name
    );
  }

  return translations[currentLanguage]["chat.desc.response"]
    .replace("{title}", taskToDescribe.title)
    .replace("{courseName}", course.name)
    .replace("{description}", taskToDescribe.description);
}

function getTopicsForCurrentWeek() {
  let response = translations[currentLanguage]["chat.topics.header"];
  let foundAny = false;

  Object.values(attendanceData).forEach((course) => {
    const currentWeek = course.currentWeek;
    const meeting = course.meetings.find((m) => m.id === currentWeek);

    if (meeting) {
      response += translations[currentLanguage]["chat.topics.item"]
        .replace("{courseName}", course.name)
        .replace("{topic}", meeting.topic)
        .replace("{id}", meeting.id);
      foundAny = true;
    }
  });

  response += "</ul>";

  if (!foundAny) {
    return translations[currentLanguage]["chat.topics.none"];
  }
  return response;
}

function getLecturerInfo(input) {
  let courseKey = "";
  let i18nKey = "";
  let courseName = "";

  if (input.includes("algoritma")) {
    courseKey = "algorithms";
    i18nKey = "courses.algorithms";
    courseName = "Algorithms";
  } else if (input.includes("database")) {
    courseKey = "databases";
    i18nKey = "courses.databases";
    courseName = "Databases";
  } else if (input.includes("webdev")) {
    courseKey = "webdev";
    i18nKey = "courses.web_development";
    courseName = "Web Development";
  } else if (input.includes("software")) {
    courseKey = "softwareeng";
    i18nKey = "courses.software_engineering";
    courseName = "Software Engineering";
  }

  if (!courseKey) {
    return translations[currentLanguage]["lecturer.prompt"];
  }

  const courseEl = document.querySelector(`h4[data-i18n="${i18nKey}"]`);
  if (!courseEl) {
    return translations[currentLanguage]["lecturer.not_found"].replace(
      "{courseName}",
      courseName
    );
  }

  const classItem = courseEl.closest(".class-item");
  const lecturer = classItem.querySelector(".class-lecturer").textContent;
  const room = classItem.querySelector(".class-room").textContent;

  if (input.includes("dosen")) {
    return translations[currentLanguage]["lecturer.info"]
      .replace("{courseName}", courseName)
      .replace("{lecturer}", lecturer);
  } else {
    return translations[currentLanguage]["lecturer.room"]
      .replace("{courseName}", courseName)
      .replace("{room}", room);
  }
}

function getCourseCredits(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  if (!courseKey) {
    return translations[currentLanguage]["credits.prompt"];
  }

  const course = attendanceData[courseKey];
  return translations[currentLanguage]["credits.info"]
    .replace("{courseName}", course.name)
    .replace("{credits}", course.credits);
}

function getUrgentTask() {
  let urgentTask = null;
  let soonestDeadline = Infinity;

  Object.values(attendanceData).forEach((course) => {
    course.tasks.forEach((task) => {
      if (task.status === "not_submitted" || task.status === "not_started") {
        const deadlineDate = Date.parse(task.deadline);
        if (deadlineDate > Date.now() && deadlineDate < soonestDeadline) {
          soonestDeadline = deadlineDate;
          urgentTask = {
            courseName: course.name,
            title: task.title,
            deadline: task.deadline,
          };
        }
      }
    });
  });

  if (!urgentTask) {
    return translations[currentLanguage]["urgent.none"];
  }

  let response = translations[currentLanguage]["urgent.header"];
  response +=
    "<br>" +
    translations[currentLanguage]["urgent.item"]
      .replace("{courseName}", urgentTask.courseName)
      .replace("{title}", urgentTask.title)
      .replace("{deadline}", urgentTask.deadline);

  return response;
}

function getTasksByStatus(input) {
  let status = "";
  let statusKey = "";

  if (input.includes("terlambat")) {
    status = "late";
    statusKey = "late_status";
  } else if (input.includes("sedang dinilai")) {
    status = "pending";
    statusKey = "pending_review";
  } else {
    return translations[currentLanguage]["chat.fallback"];
  }

  let foundTasks = [];
  Object.values(attendanceData).forEach((course) => {
    course.tasks.forEach((task) => {
      if (task.status === status) {
        foundTasks.push(
          translations[currentLanguage]["tasks_status.item"]
            .replace("{courseName}", course.name)
            .replace("{title}", task.title)
            .replace("{deadline}", task.deadline)
        );
      }
    });
  });

  const statusText = translations[currentLanguage][`tasks.${statusKey}`];

  if (foundTasks.length === 0) {
    return translations[currentLanguage]["tasks_status.none"].replace(
      "{status}",
      statusText
    );
  }

  let response = translations[currentLanguage]["tasks_status.header"].replace(
    "{status}",
    statusText
  );
  response += foundTasks.join("");
  response += "</ul>";
  return response;
}

function getDailyBriefing() {
  const today = new Date();
  const todayDayName = today.toLocaleDateString(currentLanguage, {
    weekday: "long",
  });
  const todayDateStr = today.toLocaleDateString(currentLanguage, {
    day: "numeric",
    month: "short",
  });
  const todayKey = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  let response = translations[currentLanguage]["chat.briefing.header"]
    .replace("{dayName}", todayDayName)
    .replace("{date}", todayDateStr);

  const scheduleEl = document.querySelector(
    `.schedule-day[data-day="${todayKey}"]`
  );
  if (scheduleEl) {
    const classes = scheduleEl.querySelectorAll(
      ".class-item:not(.custom-event)"
    );
    if (classes.length === 0) {
      response += translations[currentLanguage]["chat.briefing.no_class"];
    } else {
      classes.forEach((item) => {
        const time = item.querySelector(".class-time .time-start").textContent;
        const courseName = item.querySelector(".class-name").textContent.trim();
        const i18nKey = item
          .querySelector(".class-name")
          .dataset.i18n.split(".")[1];
        const courseData = attendanceData[i18nKey];
        const topic = courseData
          ? courseData.meetings.find((m) => m.id === courseData.currentWeek)
              ?.topic || courseName
          : courseName;

        response += translations[currentLanguage]["chat.briefing.class_item"]
          .replace("{time}", time)
          .replace("{course}", courseName)
          .replace("{topic}", topic);
      });
    }
  } else {
    response += translations[currentLanguage]["chat.briefing.no_class"];
  }

  response += "</ul>";

  const deadlineTodayTasks = [];
  const todayDeadlineStr = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  Object.values(attendanceData).forEach((course) => {
    course.tasks.forEach((task) => {
      if (
        task.deadline === todayDeadlineStr &&
        (task.status === "not_submitted" || task.status === "not_started")
      ) {
        deadlineToTodayTasks.push(
          translations[currentLanguage]["chat.briefing.deadline_item"]
            .replace("{taskTitle}", task.title)
            .replace("{courseName}", course.name)
        );
      }
    });
  });

  response += translations[currentLanguage]["chat.briefing.deadline_header"];
  if (deadlineToTodayTasks.length > 0) {
    response += "<ul>" + deadlineTodayTasks.join("") + "</ul>";
  } else {
    response += translations[currentLanguage]["chat.briefing.deadline_none"];
  }

  return response;
}

function getAttendanceWarning() {
  let warningList = [];
  Object.values(attendanceData).forEach((course) => {
    const stats = calculateAttendanceStats(course.meetings);
    if (stats.absent > 0) {
      warningList.push(
        translations[currentLanguage]["chat.attendance_warn.item"]
          .replace("{courseName}", course.name)
          .replace("{absentCount}", stats.absent)
      );
    }
  });

  if (warningList.length === 0) {
    return translations[currentLanguage]["chat.attendance_warn.none"];
  }

  let response = translations[currentLanguage]["chat.attendance_warn.header"];
  response += warningList.join("");
  response += "</ul>";
  return response;
}

function getTaskCounter(input) {
  let courseKey = "";
  if (input.includes("algoritma")) courseKey = "algorithms";
  else if (input.includes("database")) courseKey = "databases";
  else if (input.includes("webdev")) courseKey = "webdev";
  else if (input.includes("software")) courseKey = "softwareeng";

  let totalCount = 0;

  if (courseKey) {
    const course = attendanceData[courseKey];
    course.tasks.forEach((task) => {
      if (task.status === "not_submitted" || task.status === "not_started") {
        totalCount++;
      }
    });

    if (totalCount === 0) {
      return translations[currentLanguage]["chat.task_count.none"].replace(
        "{courseName}",
        course.name
      );
    } else {
      return translations[currentLanguage]["chat.task_count.item"]
        .replace("{count}", totalCount)
        .replace("{courseName}", course.name);
    }
  } else {
    Object.values(attendanceData).forEach((course) => {
      course.tasks.forEach((task) => {
        if (task.status === "not_submitted" || task.status === "not_started") {
          totalCount++;
        }
      });
    });

    if (totalCount === 0) {
      return translations[currentLanguage]["chat.task_count.all_none"];
    } else {
      return translations[currentLanguage]["chat.task_count.all"].replace(
        "{count}",
        totalCount
      );
    }
  }
}

function getContextForAI(query) {
  let input = query.toLowerCase().trim();

  if (input.includes("hello") || input.includes("hi")) input += " halo";
  if (input.includes("thanks") || input.includes("thank you"))
    input += " terima kasih";
  if (input.includes("help")) input += " bantuan";
  if (input.includes("performance") || input.includes("how am i doing"))
    input += " performa";
  if (input.includes("missed") || input.includes("forgot")) input += " lewat";
  if (input.includes("update") || input.includes("latest")) input += " terbaru";
  if (input.includes("topic") || input.includes("topics")) input += " topik";
  if (input.includes("this week")) input += " minggu ini";
  if (input.includes("now")) input += " sekarang";
  if (input.includes("description")) input += " deskripsi";
  if (input.includes("gpa")) input += " ipk";
  if (input.includes("credits")) input += " sks";
  if (input.includes("who am i") || input.includes("my name"))
    input += " nama saya";
  if (input.includes("schedule")) input += " jadwal";
  if (input.includes("today")) input += " hari ini";
  if (input.includes("course") || input.includes("courses"))
    input += " mata kuliah";
  if (
    input.includes("task") ||
    input.includes("tasks") ||
    input.includes("assignment") ||
    input.includes("deadline")
  )
    input += " tugas";
  if (
    input.includes("grade") ||
    input.includes("grades") ||
    input.includes("score")
  )
    input += " nilai";
  if (input.includes("material") || input.includes("materials"))
    input += " materi";
  if (
    input.includes("attendance") ||
    input.includes("absence") ||
    input.includes("absen")
  )
    input += " absen";
  if (input.includes("lecturer")) input += " dosen";
  if (input.includes("room")) input += " ruang";
  if (
    input.includes("urgent") ||
    input.includes("closest") ||
    input.includes("nearest")
  )
    input += " mendesak";
  if (input.includes("late")) input += " terlambat";
  if (input.includes("pending")) input += " sedang dinilai";
  if (input.includes("monday")) input += " senin";
  if (input.includes("tuesday")) input += " selasa";
  if (input.includes("wednesday")) input += " rabu";
  if (input.includes("thursday")) input += " kamis";
  if (input.includes("friday")) input += " jumat";
  if (input.includes("algorithms") || input.includes("algorithm"))
    input += " algoritma";
  if (input.includes("databases") || input.includes("database"))
    input += " database";
  if (input.includes("web development") || input.includes("web dev"))
    input += " webdev";
  if (input.includes("software engineering") || input.includes("software"))
    input += " software";
  if (
    input.includes("agenda") ||
    input.includes("briefing") ||
    input.includes("rangkuman")
  )
    input += " rangkumanharian";
  if (
    input.includes("warning") ||
    input.includes("rawan") ||
    (input.includes("absen") && input.includes("jelek"))
  )
    input += " peringatanabsen";
  if (
    (input.includes("how many") || input.includes("berapa")) &&
    (input.includes("remaining") || input.includes("sisa"))
  )
    input += " hitungtugas";

  if (
    input.includes("halo") ||
    input.includes("hai") ||
    input.includes("selamat")
  ) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const firstName = user ? user.fullName.split(" ")[0] : "Student";

    let greeting = translations[currentLanguage]["chat.hello"];
    return greeting.replace("{name}", firstName);
  }
  if (input.includes("terima kasih") || input.includes("makasih")) {
    return translations[currentLanguage]["chat.welcome"];
  }
  if (input.includes("bantuan") || input.includes("bisa apa")) {
    return translations[currentLanguage]["chat.help"];
  }

  if (
    input.includes("rangkumanharian") ||
    (input.includes("jadwal") && input.includes("hari ini"))
  ) {
    return getDailyBriefing();
  }
  if (input.includes("peringatanabsen")) {
    return getAttendanceWarning();
  }
  if (input.includes("hitungtugas")) {
    return getTaskCounter(input);
  }

  if (input.includes("dosen") || input.includes("ruang")) {
    return getLecturerInfo(input);
  }
  if (
    input.includes("sks") &&
    (input.includes("algoritma") ||
      input.includes("database") ||
      input.includes("webdev") ||
      input.includes("software"))
  ) {
    return getCourseCredits(input);
  }
  if (
    input.includes("mendesak") ||
    (input.includes("tugas") && input.includes("terdekat"))
  ) {
    return getUrgentTask();
  }
  if (
    input.includes("tugas") &&
    (input.includes("terlambat") || input.includes("sedang dinilai"))
  ) {
    return getTasksByStatus(input);
  }

  if (
    input.includes("performa") ||
    (input.includes("nilai") &&
      (input.includes("bagus") ||
        input.includes("jelek") ||
        input.includes("gimana")))
  ) {
    return getPerformanceSummary(true);
  }
  if (
    input.includes("lupa") ||
    input.includes("lewat") ||
    input.includes("alpa")
  ) {
    return getMissedItems();
  }
  if (
    input.includes("terbaru") ||
    (input.includes("info") && input.includes("baru"))
  ) {
    return getLatestUpdates();
  }
  if (
    input.includes("topik") &&
    (input.includes("minggu ini") || input.includes("sekarang"))
  ) {
    return getTopicsForCurrentWeek();
  }
  if (input.includes("deskripsi") && input.includes("tugas")) {
    return getTaskDescription(input);
  }

  if (input.includes("ipk")) {
    const gpa = document.querySelector(".cards .card-value").textContent;
    return translations[currentLanguage]["chat.gpa"].replace("{gpa}", gpa);
  }

  if (input.includes("tugas")) {
    return getTasks(input);
  }
  if (input.includes("nilai") || input.includes("skor")) {
    return getGrades(input);
  }
  if (
    input.includes("materi") ||
    input.includes("slide") ||
    input.includes("pdf")
  ) {
    return getMaterials(input);
  }
  if (input.includes("absen") || input.includes("kehadiran")) {
    return getAttendance(input);
  }

  if (
    input.includes("sks") &&
    !(
      input.includes("algoritma") ||
      input.includes("database") ||
      input.includes("webdev") ||
      input.includes("software")
    )
  ) {
    const sks = document.querySelectorAll(".cards .card-value")[1].textContent;
    return translations[currentLanguage]["chat.credits"].replace("{sks}", sks);
  }
  if (
    input.includes("nama saya") ||
    input.includes("siapa saya") ||
    input.includes("nim")
  ) {
    return translations[currentLanguage]["chat.whoami"];
  }

  if (input.includes("jadwal")) {
    return getSchedule(input);
  }

  if (
    input.includes("mata kuliah") &&
    !input.includes("tugas") &&
    !input.includes("nilai") &&
    !input.includes("materi")
  ) {
    return getCourseList();
  }

  if (
    input.includes("algoritma") ||
    input.includes("database") ||
    input.includes("webdev") ||
    input.includes("software")
  ) {
    return getCourseDetails(input);
  }

  return null;
}

function loadUserProfile() {
  console.log("🚀 loadUserProfile() dipanggil");

  const userJson = localStorage.getItem("currentUser");
  console.log("📦 User data dari localStorage:", userJson);

  if (!userJson) {
    console.error("❌ Tidak ada data user, redirect ke login");
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(userJson);
  console.log("👤 User object:", user);

  const firstName = user.fullName.split(" ")[0];
  console.log("🎯 First name:", firstName);

  try {
    // 1. Update Dashboard Header - SIMPLIFIED VERSION
    const titleEl = document.querySelector('h1[data-i18n="dashboard.title"]');
    const welcomeEl = document.querySelector(
      'div[data-i18n="dashboard.welcome"]'
    );

    if (titleEl) {
      if (currentLanguage === "en") {
        titleEl.textContent = `${firstName}'s Dashboard`;
      } else {
        titleEl.textContent = `Dashboard ${firstName}`;
      }
    }

    if (welcomeEl) {
      welcomeEl.textContent =
        currentLanguage === "en"
          ? `Welcome back, ${firstName}`
          : `Selamat datang kembali, ${firstName}`;
    }

    // Update mobile header
    const mobileNameElement = document.querySelector(".mobile-name");
    const mobileAvatarElement = document.querySelector(".mobile-avatar");
    if (mobileNameElement) mobileNameElement.textContent = user.fullName;
    if (mobileAvatarElement) {
      const initials = user.fullName
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      mobileAvatarElement.textContent = initials;
    }
    console.log("✅ Dashboard header updated");

    // 2. Update Sidebars - SIMPLIFIED
    const desktopName = document.getElementById("desktopNameDisplay");
    const mobileName = document.getElementById("mobileNameDisplay");
    const desktopAvatar = document.getElementById("desktopAvatarDisplay");
    const mobileAvatar = document.getElementById("mobileAvatarDisplay");

    if (desktopName) desktopName.textContent = user.fullName;
    if (mobileName) mobileName.textContent = user.fullName;
    if (desktopAvatar) {
      const initials = user.fullName
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      desktopAvatar.textContent = initials;
    }
    if (mobileAvatar) {
      const initials = user.fullName
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      mobileAvatar.textContent = initials;
    }
    console.log("✅ Sidebar profiles updated");

    // 3. Update Profile Details
    document.getElementById("profileDetailName").textContent = user.fullName;
    document.getElementById("profileDetailNim").textContent = user.nim;
    document.getElementById("profileDetailProgram").textContent =
      user.programStudi;
    document.getElementById("profileDetailYear").textContent = user.year;
    document.getElementById("profileDetailSemester").textContent =
      user.semester;
    document.getElementById("profileDetailEmail").textContent = user.email;
    console.log("✅ Profile details updated");

    // 4. Update Right Sidebar
    document.getElementById("rightSidebarName").textContent = user.fullName;
    document.getElementById("rightSidebarNim").textContent = `NIM: ${user.nim}`;
    document.getElementById("rightSidebarProgram").textContent =
      user.programStudi;
    console.log("✅ Right sidebar updated");

    const chatbotHeaderGreeting = document.querySelector(
      '#chatbot .main-header div[data-i18n="chat.greeting"]'
    );

    const headerGreetingText =
      currentLanguage === "id"
        ? `Halo ${firstName}! Tanya saya seputar dashboard Anda.`
        : `Hello ${firstName}! Ask me about your dashboard.`;

    if (chatbotHeaderGreeting) {
      chatbotHeaderGreeting.textContent = headerGreetingText;
    }

    // Panggil fungsi update greeting (tanpa parameter)
    updateChatbotGreeting();

    const messagesContainer = document.getElementById("chatbotMessages");
    if (messagesContainer && messagesContainer.children.length <= 1) {
      const firstMessageText =
        currentLanguage === "id"
          ? `Halo ${firstName}! Ada yang bisa saya bantu? Coba ketik 'bantuan'.`
          : `Hello ${firstName}! How can I help you? Try typing 'help'.`;

      const botMsg = messagesContainer.querySelector(".chat-message.bot");
      if (botMsg && botMsg.querySelector(".chat-text")) {
        botMsg.querySelector(".chat-text").textContent = firstMessageText;
      }
    }

    console.log("✅ Chatbot greeting updated");

    console.log("🎉 Semua update selesai");
  } catch (error) {
    console.error("❌ Error dalam loadUserProfile:", error);
  }
}

function updateDashboardHeader(firstName, user) {
  const titleEl = document.querySelector('h1[data-i18n="dashboard.title"]');
  const welcomeEl = document.querySelector(
    'div[data-i18n="dashboard.welcome"]'
  );

  if (titleEl && user.fullName) {
    const baseTitle = translations[currentLanguage]["dashboard.title"];
    titleEl.textContent = `${baseTitle} ${user.fullName}`;
  }

  if (welcomeEl && firstName) {
    const baseWelcome = translations[currentLanguage]["dashboard.welcome"];
    welcomeEl.textContent = `${baseWelcome} ${firstName},`;
  }

  const mobileNameElement = document.querySelector(".mobile-name");
  if (mobileNameElement && user) {
    mobileNameElement.textContent = firstName;
  }

  const mobileAvatarElement = document.querySelector(".mobile-avatar");
  if (mobileAvatarElement && user) {
    const initials = user.fullName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    mobileAvatarElement.textContent = initials;
  }
}

function updateSidebarProfiles(user, firstName) {
  // Update Desktop Sidebar
  const desktopName = document.getElementById("desktopNameDisplay");
  const desktopAvatar = document.getElementById("desktopAvatarDisplay");
  const desktopProgram = document.getElementById("desktopProgramDisplay");

  if (desktopName) desktopName.textContent = user.fullName;
  if (desktopAvatar) {
    const initials = user.fullName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    desktopAvatar.textContent = initials;
  }
  if (desktopProgram) {
    desktopProgram.textContent = `${user.programStudi} • ${
      user.year || "2023"
    }`;
  }

  // Update Mobile Sidebar
  const mobileName = document.getElementById("mobileNameDisplay");
  const mobileAvatar = document.getElementById("mobileAvatarDisplay");

  if (mobileName) mobileName.textContent = user.fullName;
  if (mobileAvatar) {
    const initials = user.fullName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    mobileAvatar.textContent = initials;
  }
}

function updateProfileDetails(user) {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("profileDetailName", user.fullName);
  setText("profileDetailNim", user.nim);
  setText("profileDetailProgram", user.programStudi);
  setText("profileDetailYear", user.year || "2023");
  setText("profileDetailSemester", user.semester || "4");
  setText("profileDetailEmail", user.email);
}

function updateRightSidebar(user) {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("rightSidebarName", user.fullName);
  setText("rightSidebarNim", `NIM: ${user.nim}`);
  setText("rightSidebarProgram", user.programStudi);
}

function updateDashboardHeader(firstName) {
  const titleEl = document.querySelector('h1[data-i18n="dashboard.title"]');
  const welcomeEl = document.querySelector(
    'div[data-i18n="dashboard.welcome"]'
  );

  // Ambil teks dasar dari kamus bahasa saat ini
  const baseTitle = translations[currentLanguage]["dashboard.title"];
  const baseWelcome = translations[currentLanguage]["dashboard.welcome"];

  // Atur format sesuai bahasa
  if (titleEl) {
    if (currentLanguage === "en") {
      // Inggris: "Kharis's Dashboard"
      titleEl.textContent = `${firstName}'s ${baseTitle}`;
    } else {
      // Indonesia: "Dashboard Kharis"
      titleEl.textContent = `${baseTitle} ${firstName}`;
    }
  }

  if (welcomeEl) {
    // Format: "Welcome back, Kharis"
    welcomeEl.textContent = `${baseWelcome} ${firstName}`;
  }

  const mobileNameElement = document.querySelector(".mobile-name");
  if (mobileNameElement) {
    mobileNameElement.textContent = user.fullName;
  }

  // Update Mobile Avatar (Opsional, agar inisialnya juga update)
  const mobileAvatarElement = document.querySelector(".mobile-avatar");
  if (mobileAvatarElement) {
    // Ambil inisial dari 2 kata pertama (misal: Kharis Destian -> KD)
    const initials = user.fullName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    mobileAvatarElement.textContent = initials;
  }
}

function initLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtnMobile = document.getElementById("logoutBtnMobile");

  function handleLogout() {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");

      window.location.href = "index.html";
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  if (logoutBtnMobile) {
    logoutBtnMobile.addEventListener("click", handleLogout);
  }
}

function updateChatbotGreeting() {
  const messagesContainer = document.getElementById("chatbotMessages");
  if (!messagesContainer) return;

  // Ambil nama dari localStorage (BUKAN dari parameter)
  const userData = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const firstName = userData.fullName
    ? userData.fullName.split(" ")[0]
    : "Student";

  // Cek apakah pesan pertama adalah greeting default
  if (messagesContainer.children.length <= 1) {
    const greetingKey =
      currentLanguage === "id"
        ? `Halo ${firstName}! Ada yang bisa saya bantu?`
        : `Hello ${firstName}! How can I help you?`;

    // Update pesan jika elemen sudah ada
    const botMsg = messagesContainer.querySelector(".chat-message.bot");
    if (botMsg && botMsg.querySelector(".chat-text")) {
      botMsg.querySelector(".chat-text").textContent = greetingKey;
    } else {
      // Buat baru jika belum ada
      const msgDiv = document.createElement("div");
      msgDiv.className = "chat-message bot";
      msgDiv.innerHTML = `<span class="chat-text">${greetingKey}</span>`;
      messagesContainer.innerHTML = "";
      messagesContainer.appendChild(msgDiv);
    }
  }
}

// ===== CODE PLAYGROUND SYSTEM =====
let currentEditor = null;

// Default code templates
const codeTemplates = {
  python: `# Welcome to Python Playground!
print("Hello, World!")

# Write your Python code here
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(f"Factorial of 5 is: {factorial(5)}")`,

  javascript: `// Welcome to JavaScript Playground!
console.log("Hello, World!");

// Write your JavaScript code here
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log("Fibonacci of 10 is:", fibonacci(10));`,

  html: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #2b26b9 100%);
            color: white;
            text-align: center;
            padding: 50px;
        }
        .container {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, World! 🌍</h1>
        <p>Welcome to HTML/CSS/JS Playground</p>
        <button onclick="alert('Button clicked!')">Click Me</button>
    </div>
    
    <script>
        // JavaScript code here
        console.log("Page loaded successfully!");
    </script>
</body>
</html>`,

  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    // Write your C++ code here
    int n = 10;
    int sum = 0;
    
    for(int i = 1; i <= n; i++) {
        sum += i;
    }
    
    cout << "Sum of first " << n << " numbers is: " << sum << endl;
    return 0;
}`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Write your Java code here
        int number = 12345;
        int reversed = 0;
        
        while(number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }
        
        System.out.println("Reversed number: " + reversed);
    }
}`,

  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        
        // Write your C# code here
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        
        foreach(int num in numbers) {
            sum += num;
        }
        
        Console.WriteLine("Sum of array: " + sum);
    }
}`,
};

let isMonacoLoading = false;

// Initialize Code Playground
function initCodePlayground() {
  if (currentEditor) {
    currentEditor.focus();
    return;
  }

  if (!isMonacoLoading && !window.monaco) {
    loadMonacoEditor();
  } else if (window.monaco) {
    initializeEditor();
  }
}

// Load Monaco Editor dynamically
function loadMonacoEditor() {
  if (isMonacoLoading) return;
  isMonacoLoading = true;

  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
  script.onload = () => {
    require.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" },
    });
    require(["vs/editor/editor.main"], () => {
      isMonacoLoading = false;
      initializeEditor();
    });
  };
  document.head.appendChild(script);
}

// Initialize Monaco Editor
function initializeEditor() {
  if (currentEditor) {
    currentEditor.focus();
    return;
  }

  const editorContainer = document.getElementById("codeEditor");
  if (!editorContainer) return;

  try {
    currentEditor = monaco.editor.create(editorContainer, {
      value: codeTemplates.python,
      language: "python",
      theme: "vs-dark",
      fontSize: 14,
      mouseWheelZoom: true,
      minimap: { enabled: false },
      automaticLayout: true,
      scrollBeyondLastLine: false,
      roundedSelection: true,
      scrollbar: {
        vertical: "visible",
        horizontal: "visible",
        useShadows: false,
      },
      lineNumbers: "on",
      renderLineHighlight: "all",
      suggestOnTriggerCharacters: true,
      wordBasedSuggestions: true,
      parameterHints: { enabled: true },
    });

    currentEditor.focus();
    console.log("Monaco Editor initialized successfully");

    setupPlaygroundEvents();
    loadCodePlayground();
  } catch (error) {
    console.error("Failed to initialize Monaco Editor:", error);
    setupFallbackEditor();
  }
}

// Fallback to simple textarea if Monaco fails
function setupFallbackEditor() {
  const editorContainer = document.getElementById("codeEditor");
  if (!editorContainer) return;

  editorContainer.innerHTML = `
        <textarea id="fallbackEditor" style="width:100%; height:100%; border:none; padding:10px; font-family: 'Courier New', monospace; background:#1e1e1e; color:#d4d4d4; resize:none;">
${codeTemplates.python}
        </textarea>
    `;

  console.log("Fallback editor initialized");
}

// Setup playground event listeners
function setupPlaygroundEvents() {
  // Language selector
  const languageSelect = document.getElementById("codeLanguageSelect"); // <-- DIUBAH
  if (languageSelect) {
    languageSelect.addEventListener("change", handleLanguageChange);
  }

  // Run button
  const runButton = document.getElementById("runCode");
  if (runButton) {
    runButton.addEventListener("click", executeCode);
  }

  // Theme toggle
  const themeToggle = document.getElementById("editorTheme");
  if (themeToggle) {
    themeToggle.addEventListener("change", handleThemeChange);
  }

  // Save button
  const saveButton = document.getElementById("saveCode");
  if (saveButton) {
    saveButton.addEventListener("click", saveCode);
  }

  // Clear output button
  const clearButton = document.getElementById("clearOutput");
  if (clearButton) {
    clearButton.addEventListener("click", clearOutput);
  }
}

// Handle language change
function handleLanguageChange(e) {
  const lang = e.target.value;

  if (currentEditor && codeTemplates[lang]) {
    currentEditor.setValue(codeTemplates[lang]);
    monaco.editor.setModelLanguage(currentEditor.getModel(), lang);

    // Show/hide live preview for HTML
    const preview = document.getElementById("livePreview");
    if (preview) {
      preview.style.display = lang === "html" ? "flex" : "none";
    }
  } else if (document.getElementById("fallbackEditor")) {
    // Handle fallback editor
    const fallbackEditor = document.getElementById("fallbackEditor");
    if (fallbackEditor && codeTemplates[lang]) {
      fallbackEditor.value = codeTemplates[lang];
    }
  }
}

// Handle theme change
function handleThemeChange(e) {
  if (currentEditor) {
    const theme = e.target.checked ? "vs-dark" : "vs";
    monaco.editor.setTheme(theme);
  }
}

// Execute code based on language
async function executeCode() {
  const language = document.getElementById("codeLanguageSelect").value; // <-- DIUBAH
  const code = currentEditor
    ? currentEditor.getValue()
    : document.getElementById("fallbackEditor")?.value || "";
  const output = document.getElementById("outputResult");

  if (!output) return;

  output.innerHTML = '<div class="loading-spinner"></div>';
  output.classList.add("loading");

  try {
    let result;

    switch (language) {
      case "javascript":
        result = await executeJavaScript(code);
        break;
      case "html":
        result = await executeHTML(code);
        break;
      case "python":
        result = await executePython(code);
        break;
      case "cpp":
        result = await executeCpp(code);
        break;
      case "java":
        result = await executeJava(code);
        break;
      case "csharp":
        result = await executeCSharp(code);
        break;
      default:
        result = "Language not supported yet";
    }

    output.innerHTML = `<pre>${escapeHtml(result)}</pre>`;
  } catch (error) {
    output.innerHTML = `<pre style="color: #ff6b6b;">Error: ${escapeHtml(
      error.message
    )}</pre>`;
  } finally {
    output.classList.remove("loading");
  }
}

// JavaScript execution (in-browser)
function executeJavaScript(code) {
  return new Promise((resolve) => {
    const originalLog = console.log;
    const originalError = console.error;
    let output = "";

    // Override console.log to capture output
    console.log = (...args) => {
      output +=
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ") + "\n";
    };

    console.error = (...args) => {
      output += "ERROR: " + args.join(" ") + "\n";
    };

    try {
      // Create a safe execution environment
      const result = Function('"use strict";\n' + code)();
      if (result !== undefined) {
        output += String(result);
      }
      resolve(output || "Code executed successfully (no output)");
    } catch (error) {
      resolve(`Runtime Error: ${error.message}`);
    } finally {
      // Restore original console methods
      console.log = originalLog;
      console.error = originalError;
    }
  });
}

// HTML execution (in-browser)
function executeHTML(code) {
  return new Promise((resolve) => {
    const previewFrame = document.getElementById("previewFrame");
    if (previewFrame) {
      const blob = new Blob([code], { type: "text/html" });
      previewFrame.src = URL.createObjectURL(blob);
      resolve(
        "✅ HTML rendered in preview panel\nCheck the Live Preview section below"
      );
    } else {
      resolve("❌ Preview frame not available");
    }
  });
}

// Python execution (using WebAssembly fallback)
// Ganti fungsi executePython dengan ini:
async function executePython(code) {
  try {
    // Gunakan API execution sebagai primary method
    return await executeWithAPI("python", code);
  } catch (error) {
    return `Python Execution Error: ${error.message}\n\nNote: Python execution requires backend API service`;
  }
}

// Perbaiki fungsi executeWithAPI:
async function executeWithAPI(language, code) {
  try {
    console.log(`Executing ${language} code via API...`);

    const response = await fetch("/api/execute-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        code: code,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    if (data.success === false) {
      throw new Error(data.error || "Execution failed");
    }

    // Handle different response formats
    const output =
      data.output ||
      data.run?.output ||
      "Code executed successfully (no output)";
    const stderr = data.run?.stderr;

    let result = output;
    if (stderr) {
      result = `Error:\n${stderr}\n\nOutput:\n${output}`;
    }

    return result;
  } catch (error) {
    console.error("API Execution Error:", error);

    // Fallback simulation untuk demo
    if (language === "python") {
      return simulatePythonExecution(code);
    }

    return `❌ Execution Failed: ${error.message}\n\nThis would normally execute via a code execution API.`;
  }
}

// Fallback simulation untuk Python
function simulatePythonExecution(code) {
  try {
    // Simple simulation untuk kode dasar
    if (code.includes('print("Hello, World!")')) {
      return "Hello, World!";
    }

    if (
      code.includes('bil1 = int("10")') &&
      code.includes('bil2 = int("20")')
    ) {
      return "Code would execute successfully:\n- bil1 = 10\n- bil2 = 20\n- Condition bil1 > bil2 is False\n- No output (condition false)";
    }

    // Analisis kode sederhana
    const lines = code.split("\n");
    let output = "=== SIMULATION MODE ===\n";
    output += "Code analysis (simulated):\n";

    lines.forEach((line, index) => {
      if (line.trim() && !line.trim().startsWith("#")) {
        output += `Line ${index + 1}: ${line.trim()}\n`;
      }
    });

    output +=
      "\nNote: This is a simulation. Real execution requires backend API.";
    return output;
  } catch (error) {
    return `Simulation Error: ${error.message}`;
  }
}

// C++ execution
async function executeCpp(code) {
  return await executeWithAPI("cpp", code);
}

// Java execution
async function executeJava(code) {
  return await executeWithAPI("java", code);
}

// C# execution
async function executeCSharp(code) {
  return await executeWithAPI("csharp", code);
}

async function executeWithAPI(language, code) {
  try {
    const response = await fetch("/api/execute-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, code }),
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      const errorMsg = data.error || `Server Error: Status ${response.status}`;
      return `❌ Execution Failed: ${errorMsg}`;
    }

    // Mengambil output dari respons API Vercel
    const output = data.output || "Code executed successfully (no output).";
    return output;
  } catch (error) {
    return `❌ Network Error: Could not reach execution server.`;
  }
}
// Save code to localStorage
function saveCode() {
  const language = document.getElementById("languageSelect").value;
  const code = currentEditor
    ? currentEditor.getValue()
    : document.getElementById("fallbackEditor")?.value || "";

  const savedCode = JSON.parse(localStorage.getItem("savedCode") || "{}");
  savedCode[language] = code;
  localStorage.setItem("savedCode", JSON.stringify(savedCode));

  showNotification("Code saved successfully!", "success");
}

// Load saved code
function loadSavedCode() {
  const savedCode = JSON.parse(localStorage.getItem("savedCode") || "{}");
  const language = document.getElementById("languageSelect").value;

  if (savedCode[language]) {
    if (currentEditor) {
      currentEditor.setValue(savedCode[language]);
    } else if (document.getElementById("fallbackEditor")) {
      document.getElementById("fallbackEditor").value = savedCode[language];
    }
    showNotification("Saved code loaded!", "success");
  } else {
    showNotification("No saved code found for this language", "info");
  }
}

// Clear output
function clearOutput() {
  const output = document.getElementById("outputResult");
  if (output) {
    output.innerHTML =
      '<div class="welcome-message"><h3>🚀 Welcome to Code Playground!</h3><p>Write your code and click "Run Code" to see the output here.</p></div>';
  }
}

// Utility function to escape HTML
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `ai-notification ${type}`;
  notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 3000);
}

// Load saved code when switching to codeplayground section
function loadCodePlayground() {
  const savedCode = JSON.parse(localStorage.getItem("savedCode") || "{}");
  const language = document.getElementById("languageSelect")?.value || "python";

  if (savedCode[language] && currentEditor) {
    currentEditor.setValue(savedCode[language]);
  }
}

// Add to your main initialization
document.addEventListener("DOMContentLoaded", function () {
  // Initialize code playground when the section is accessed
  const codePlaygroundSection = document.getElementById("codeplayground");
  if (codePlaygroundSection) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style" &&
          !codePlaygroundSection.style.display
        ) {
          // Code playground section is now visible
          setTimeout(initCodePlayground, 100);
        }
      });
    });

    const codeFab = document.getElementById("codeFab");
    if (codeFab) {
      codeFab.addEventListener("click", () => {
        switchSection("codeplayground");
      });
    }

    observer.observe(codePlaygroundSection, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }
});

// Global functions for HTML access
window.executeCode = executeCode;
window.saveCode = saveCode;
window.clearOutput = clearOutput;
window.loadSavedCode = loadSavedCode;

// Initialize Finance Section
function initFinanceSection() {
  populateFinanceSummary();
  populateBillsTable();
  populatePaymentHistory();
  populatePaymentMethods();
  populateScholarships();
}

// Populate Finance Summary Cards
function populateFinanceSummary() {
  const summary = financialData.summary;

  // Update HTML untuk summary cards, ganti icon
  document.querySelector(".total-bill .summary-icon").innerHTML =
    '<i class="icon-bill"></i>';
  document.querySelector(".total-paid .summary-icon").innerHTML =
    '<i class="icon-check"></i>';
  document.querySelector(".remaining-bill .summary-icon").innerHTML =
    '<i class="icon-clock"></i>';
  document.querySelector(".payment-status .summary-icon").innerHTML =
    '<i class="icon-chart"></i>';

  document.getElementById("totalBill").textContent = formatCurrency(
    summary.totalTagihan
  );
  document.getElementById("totalPaid").textContent = formatCurrency(
    summary.totalBayar
  );
  document.getElementById("remainingBill").textContent = formatCurrency(
    summary.sisaTagihan
  );

  const statusElement = document.getElementById("paymentStatus");
  statusElement.className = `status-badge ${summary.status.replace("_", "-")}`;

  const statusKey = `finance.status.${summary.status}`;
  statusElement.setAttribute("data-i18n", statusKey);
  statusElement.textContent = translations[currentLanguage][statusKey];
}

// Populate Bills Table
function populateBillsTable() {
  const tableBody = document.getElementById("billsTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  financialData.tuitionFees.forEach((bill) => {
    const row = document.createElement("div");
    row.className = "table-row";

    let statusBadge = "";
    let actionButton = "";

    if (bill.status === "paid") {
      statusBadge = `<span class="status-badge paid" data-i18n="finance.status.paid">Lunas</span>`;
      actionButton = `<button class="receipt-btn" onclick="viewReceipt('${bill.receiptNumber}')">
        <span data-i18n="finance.view_receipt">Lihat Bukti</span>
      </button>`;
    } else if (bill.status === "overdue") {
      statusBadge = `<span class="status-badge overdue" data-i18n="finance.overdue">Terlambat</span>`;
      actionButton = `<button class="pay-btn" onclick="payBill(${bill.id})">
        <span data-i18n="finance.pay_now">Bayar Sekarang</span>
      </button>`;
    } else if (bill.status === "pending") {
      statusBadge = `<span class="status-badge pending" data-i18n="finance.pending">Tertunda</span>`;
      actionButton = `<button class="pay-btn" onclick="payBill(${bill.id})">
        <span data-i18n="finance.pay_now">Bayar Sekarang</span>
      </button>`;
    }

    // Get translated labels
    const semesterLabel =
      translations[currentLanguage]["finance.semester"] || "Semester";
    const typeLabel = translations[currentLanguage]["finance.type"] || "Jenis";
    const amountLabel =
      translations[currentLanguage]["finance.amount"] || "Jumlah";
    const dueLabel =
      translations[currentLanguage]["finance.due_date"] || "Jatuh Tempo";
    const statusLabel =
      translations[currentLanguage]["finance.status"] || "Status";
    const actionLabel =
      translations[currentLanguage]["finance.action"] || "Aksi";

    row.innerHTML = `
      <div class="col-semester" data-label="${semesterLabel}">${
      bill.semester
    }</div>
      <div class="col-type" data-label="${typeLabel}">${bill.type}</div>
      <div class="col-amount" data-label="${amountLabel}">${formatCurrency(
      bill.amount
    )}</div>
      <div class="col-due" data-label="${dueLabel}">${formatDate(
      bill.dueDate
    )}</div>
      <div class="col-status" data-label="${statusLabel}">${statusBadge}</div>
      <div class="col-action" data-label="${actionLabel}">${actionButton}</div>
    `;

    tableBody.appendChild(row);
  });

  applyTranslations();
}

// Populate Payment History Table
function populatePaymentHistory() {
  const tableBody = document.getElementById("historyTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  financialData.paymentHistory.forEach((payment) => {
    const row = document.createElement("div");
    row.className = "table-row";

    // Get translated labels
    const dateLabel =
      translations[currentLanguage]["finance.date"] || "Tanggal";
    const descLabel =
      translations[currentLanguage]["finance.description"] || "Deskripsi";
    const amountLabel =
      translations[currentLanguage]["finance.amount"] || "Jumlah";
    const methodLabel =
      translations[currentLanguage]["finance.method"] || "Metode";
    const receiptLabel =
      translations[currentLanguage]["finance.receipt_number"] || "No. Bukti";
    const actionLabel =
      translations[currentLanguage]["finance.action"] || "Aksi";

    row.innerHTML = `
      <div class="col-date" data-label="${dateLabel}">${formatDate(
      payment.date
    )}</div>
      <div class="col-description" data-label="${descLabel}">${
      payment.description
    }</div>
      <div class="col-amount" data-label="${amountLabel}">${formatCurrency(
      payment.amount
    )}</div>
      <div class="col-method" data-label="${methodLabel}">${
      payment.method
    }</div>
      <div class="col-receipt" data-label="${receiptLabel}">${
      payment.receiptNumber
    }</div>
      <div class="col-action" data-label="${actionLabel}">
        <button class="download-btn" onclick="downloadReceipt('${
          payment.receiptNumber
        }')">
          <span data-i18n="finance.download_receipt">Unduh</span>
        </button>
      </div>
    `;

    tableBody.appendChild(row);
  });

  applyTranslations();
}

function populatePaymentMethods() {
  const grid = document.getElementById("paymentMethodsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const iconMap = {
    qr: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h6v6H3z"/><path d="M15 3h6v6h-6z"/><path d="M3 15h6v6H3z"/><path d="M15 15h1v1h-1z"/><path d="M16 16h1v1h-1z"/><path d="M15 17h1v1h-1z"/><path d="M17 15h1v1h-1z"/><path d="M18 16h1v1h-1z"/><path d="M17 17h1v1h-1z"/><path d="M19 15h1v1h-1z"/><path d="M20 16h1v1h-1z"/><path d="M19 17h1v1h-1z"/><path d="M15 19h6v2h-6z"/></svg>',
    bank: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>',
    card: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    wallet:
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/></svg>',
    credit:
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h.01M11 15h2"/></svg>',
  };

  financialData.paymentMethods.forEach((method) => {
    const card = document.createElement("div");
    card.className = "payment-method-card";

    let detailsHTML = "";

    if (method.type === "qris") {
      detailsHTML = `<div class="method-details"><p>Scan QR Code menggunakan GoPay, OVO, Dana, atau M-Banking.</p></div>`;
    } else if (method.bank) {
      detailsHTML = `
        <div class="method-details">
          <p><strong>Bank:</strong> ${method.bank}</p>
          <p><strong>No. Rekening:</strong> ${method.accountNumber}</p>
        </div>
      `;
    } else if (method.providers) {
      detailsHTML = `
        <div class="method-details">
          <p><strong>Tersedia:</strong> ${method.providers.join(", ")}</p>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="method-icon">${iconMap[method.icon] || iconMap["card"]}</div>
      <div class="method-name">${method.name}</div>
      ${detailsHTML}
    `;
    grid.appendChild(card);
  });
}

function populateScholarships() {
  const container = document.getElementById("scholarshipsContainer");
  if (!container) return;

  if (financialData.scholarships.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #64748b;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto;">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <p>Belum ada riwayat beasiswa</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  financialData.scholarships.forEach((scholarship) => {
    const card = document.createElement("div");
    card.className = "scholarship-card";

    card.innerHTML = `
      <div class="scholarship-info">
        <h3>${scholarship.name}</h3>
        <div class="scholarship-detail">
          <span data-i18n="finance.scholarship_type">Jenis</span>
          <span>${scholarship.type}</span>
        </div>
        <div class="scholarship-detail">
          <span data-i18n="finance.scholarship_amount">Nominal</span>
          <span>${formatCurrency(scholarship.amount)}</span>
        </div>
        <div class="scholarship-detail">
          <span data-i18n="finance.semester">Semester</span>
          <span>${scholarship.semester}</span>
        </div>
        <div class="scholarship-detail">
          <span data-i18n="finance.scholarship_status">Status</span>
          <span class="status-badge ${
            scholarship.status === "received" ? "verified" : "pending"
          }" data-i18n="finance.${scholarship.status}">
            ${scholarship.status === "received" ? "Diterima" : "Pending"}
          </span>
        </div>
        <div class="scholarship-detail">
          <span data-i18n="finance.date">Tanggal</span>
          <span>${formatDate(scholarship.date)}</span>
        </div>
      </div>
      <div class="scholarship-visual" style="display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; padding: 2rem;">
        <div style="text-align: center;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 1rem;">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
          </svg>
          <div style="font-size: 1.5rem; font-weight: 700;">${formatCurrency(
            scholarship.amount
          )}</div>
          <div style="font-size: 0.875rem; opacity: 0.9; margin-top: 0.5rem;">Total Bantuan</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  applyTranslations();
}

// Switch Finance Tabs
function switchFinanceTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".finance-tab-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    }
  });

  // Update tab content
  document.querySelectorAll(".finance-tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  const activeTab = document.getElementById(`${tabName}Tab`);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

// Utility Functions
function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(currentLanguage === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function payBill(billId) {
  const bill = financialData.tuitionFees.find((b) => b.id === billId);
  if (!bill) return;

  const iconMap = {
    qr: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3z"/><path d="M15 3h6v6h-6z"/><path d="M3 15h6v6H3z"/><path d="M15 15h6v6h-6z"/></svg>',
    bank: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>',
    card: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    wallet:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/></svg>',
    credit:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  };

  const modal = document.createElement("div");
  modal.className = "payment-modal";
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); display: flex; align-items: center;
    justify-content: center; z-index: 10000;
  `;

  modal.innerHTML = `
    <div style="background: var(--surface); color: var(--text-primary); border-radius: 16px; padding: 2rem; max-width: 500px; width: 90%; border: 1px solid var(--border);">
      <h2 style="margin-bottom: 1rem;">Pembayaran Tagihan</h2>
      <div style="background: var(--background); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid var(--border);">
        <p style="margin: 0.5rem 0;"><strong>Jenis:</strong> ${bill.type}</p>
        <p style="margin: 0.5rem 0;"><strong>Jumlah:</strong> ${formatCurrency(
          bill.amount
        )}</p>
      </div>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">Pilih metode pembayaran:</p>
      <div style="display: grid; gap: 0.75rem; margin-bottom: 1.5rem;">
        ${financialData.paymentMethods
          .map(
            (method) => `
          <button onclick="processPayment(${bill.id}, '${method.type}')" style="
            padding: 1rem; border: 1px solid var(--border); border-radius: 8px;
            background: var(--surface); color: var(--text-primary); cursor: pointer;
            display: flex; align-items: center; gap: 1rem; transition: all 0.2s;
          " onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
            <span style="color: var(--primary);">${
              iconMap[method.icon] || iconMap["card"]
            }</span>
            <span style="font-weight: 600;">${method.name}</span>
          </button>
        `
          )
          .join("")}
      </div>
      <button onclick="this.closest('.payment-modal').remove()" style="
        width: 100%; padding: 0.75rem; background: var(--background); color: var(--text-primary);
        border: 1px solid var(--border); border-radius: 8px; cursor: pointer; font-weight: 600;
      ">Batal</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function processPayment(billId, method) {
  document.querySelector(".payment-modal")?.remove();

  // JIKA METODE ADALAH QRIS, TAMPILKAN POPUP QR
  if (method === "qris") {
    showQrisModal(billId);
    return;
  }

  // JIKA BUKAN QRIS (Transfer dll), PROSES LANGSUNG SEPERTI BIASA
  showNotification("Memproses pembayaran...", "info");
  setTimeout(() => {
    completePaymentLogic(billId, method);
  }, 2000);
}

// FUNGSI BARU: Menampilkan Modal QR Code
function showQrisModal(billId) {
  const bill = financialData.tuitionFees.find((b) => b.id === billId);
  if (!bill) return;

  // Buat elemen modal
  const modal = document.createElement("div");
  modal.className = "payment-modal";
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); display: flex; align-items: center;
    justify-content: center; z-index: 10001;
  `;

  modal.innerHTML = `
    <div style="background: white; border-radius: 16px; padding: 2.5rem; max-width: 400px; width: 90%; text-align: center; position: relative;">
      <h2 style="color: #1e293b; margin-bottom: 0.5rem;">Scan QRIS</h2>
      <p style="color: #64748b; margin-bottom: 1.5rem;">Scan kode di bawah ini untuk membayar</p>
      
      <div id="qrisContainer" style="
          background: white; 
          padding: 10px; 
          display: flex; 
          justify-content: center; 
          align-items: center;
          margin: 0 auto 1.5rem auto; 
          min-height: 200px;
      "></div>
      
      <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <p style="margin: 0; color: #64748b; font-size: 0.9rem;">Total Tagihan</p>
        <h3 style="margin: 5px 0 0; color: #1e293b; font-size: 1.5rem;">${formatCurrency(
          bill.amount
        )}</h3>
      </div>

      <button onclick="confirmQrisPayment(${bill.id})" style="
        width: 100%; padding: 1rem; background: #10b981; color: white;
        border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem;
        margin-bottom: 0.5rem;
      ">Saya Sudah Bayar</button>
      
      <button onclick="this.closest('.payment-modal').remove()" style="
        width: 100%; padding: 0.8rem; background: transparent; color: #64748b;
        border: none; cursor: pointer; font-weight: 500;
      ">Batalkan</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Generate QR Code dengan jeda sedikit agar elemen modal sudah masuk DOM
  setTimeout(() => {
    const container = document.getElementById("qrisContainer");

    // Cek apakah container ada
    if (!container) {
      console.error("Error: Container QRIS tidak ditemukan.");
      return;
    }

    // Cek apakah Library QRCode sudah terload
    if (typeof QRCode === "undefined") {
      container.innerHTML =
        "<p style='color:red; font-size:0.8rem;'>Gagal memuat library QR.<br>Pastikan internet lancar.</p>";
      return;
    }

    // Siapkan data
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const nim = user.nim || "MHS";
    const qrString = `PAY:${nim}-${bill.id}-${bill.amount}`;

    // Bersihkan isi container sebelum generate (mencegah duplikasi)
    container.innerHTML = "";

    // Buat QR Code
    try {
      new QRCode(container, {
        text: qrString,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    } catch (err) {
      console.error("Gagal membuat QR Code:", err);
      container.innerHTML = "Error Generating QR";
    }
  }, 150);
}

// FUNGSI BARU: Konfirmasi Pembayaran QRIS
function confirmQrisPayment(billId) {
  document.querySelector(".payment-modal")?.remove();
  showNotification("Memverifikasi pembayaran QRIS...", "info");

  setTimeout(() => {
    completePaymentLogic(billId, "qris");
  }, 1500);
}

// Helper: Logika Penyelesaian Pembayaran (Dipisah agar bisa dipanggil dari QR maupun Transfer)
function completePaymentLogic(billId, method) {
  const bill = financialData.tuitionFees.find((b) => b.id === billId);
  if (bill) {
    // Update status tagihan
    bill.status = "paid";
    bill.paidDate = new Date().toISOString().split("T")[0];
    bill.paymentMethod = method === "qris" ? "QRIS (Instant)" : "Transfer";
    bill.receiptNumber = "RCP" + Date.now();

    // Tambahkan ke history
    financialData.paymentHistory.unshift({
      id: Date.now(),
      date: bill.paidDate,
      description: bill.type,
      amount: bill.amount,
      method: bill.paymentMethod,
      receiptNumber: bill.receiptNumber,
      status: "verified",
    });

    // Update Summary
    financialData.summary.totalBayar += bill.amount;
    financialData.summary.sisaTagihan -= bill.amount;
    if (financialData.summary.sisaTagihan <= 0)
      financialData.summary.status = "paid";

    // Simpan
    localStorage.setItem("financialData", JSON.stringify(financialData));

    // Refresh UI
    populateBillsTable();
    populatePaymentHistory();
    populateFinanceSummary();
    syncAllSystems(); // Sinkronkan dengan dashboard utama

    showNotification("Pembayaran berhasil! Terima kasih.", "success");
  }
}

window.confirmQrisPayment = confirmQrisPayment;

function viewReceipt(receiptNumber) {
  const payment = financialData.paymentHistory.find(
    (p) => p.receiptNumber === receiptNumber
  );
  if (!payment) return;

  const receiptWindow = window.open("", "Receipt", "width=600,height=700");
  receiptWindow.document.write(`
    <html>
      <head>
        <title>Bukti Pembayaran - ${receiptNumber}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
          }
          .receipt-header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
          }
          .receipt-header h1 {
            color: #1e293b;
            margin: 0;
          }
          .receipt-header svg {
            margin-bottom: 1rem;
          }
          .receipt-info {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
          }
          .receipt-info p {
            display: flex;
            justify-content: space-between;
            margin: 0.75rem 0;
          }
          .receipt-info strong {
            color: #475569;
          }
          .receipt-amount {
            font-size: 2rem;
            font-weight: bold;
            color: #2b26b9;
            text-align: center;
            margin: 2rem 0;
          }
          .receipt-footer {
            text-align: center;
            color: #64748b;
            font-size: 0.875rem;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e2e8f0;
          }
          @media print {
            body { padding: 1rem; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-header">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" style="margin: 0 auto; display: block;">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <h1>Universitas XYZ</h1>
          <p>Bukti Pembayaran</p>
        </div>
        <div class="receipt-info">
          <p><strong>No. Bukti:</strong> <span>${
            payment.receiptNumber
          }</span></p>
          <p><strong>Tanggal:</strong> <span>${formatDate(
            payment.date
          )}</span></p>
          <p><strong>Nama:</strong> <span>${
            financialData.studentInfo.name
          }</span></p>
          <p><strong>NIM:</strong> <span>${
            financialData.studentInfo.nim
          }</span></p>
          <p><strong>Deskripsi:</strong> <span>${payment.description}</span></p>
          <p><strong>Metode:</strong> <span>${payment.method}</span></p>
        </div>
        <div class="receipt-amount">${formatCurrency(payment.amount)}</div>
        <div class="receipt-footer">
          <p>Dokumen ini sah dan diproses secara elektronik</p>
          <p>Dicetak pada: ${new Date().toLocaleString("id-ID")}</p>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <button onclick="window.print()" style="
            padding: 0.75rem 2rem;
            background: #2b26b9;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Cetak Bukti
          </button>
        </div>
      </body>
    </html>
  `);
  receiptWindow.document.close();
}

function downloadReceipt(receiptNumber) {
  showNotification("Mengunduh bukti pembayaran...", "info");
  setTimeout(() => {
    showNotification("Bukti pembayaran berhasil diunduh!", "success");
  }, 1000);
}

function selectPaymentMethod(methodType) {
  showNotification(`Metode pembayaran ${methodType} dipilih`, "success");
}

// Global functions
window.switchFinanceTab = switchFinanceTab;
window.payBill = payBill;
window.processPayment = processPayment;
window.viewReceipt = viewReceipt;
window.downloadReceipt = downloadReceipt;
window.selectPaymentMethod = selectPaymentMethod;

const dmSystem = {
  currentUser: null,
  currentChat: null,
  contacts: [],
  messages: new Map(),

  init() {
    this.setCurrentUser();
    this.loadContacts();
    this.loadAllMessages();
    this.setupWebSocket();
    this.renderContacts();
    this.setupEventListeners();
    this.startMessagePolling();
  },

  setCurrentUser() {
    const userData = JSON.parse(localStorage.getItem("currentUser") || "{}");
    this.currentUser = {
      id: userData.nim || "user_" + Date.now(),
      name: userData.fullName || "Student",
      avatar: "👤",
      status: "online",
    };
  },

  loadContacts() {
    const savedContacts = localStorage.getItem("dm_contacts");
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    } else {
      this.contacts = [
        {
          id: "user_001",
          name: "Andi Pratama",
          avatar: "👨‍💻",
          status: "online",
          lastSeen: null,
        },
        {
          id: "user_002",
          name: "Siti Rahayu",
          avatar: "👩‍🎓",
          status: "online",
          lastSeen: null,
        },
        {
          id: "user_003",
          name: "Budi Santoso",
          avatar: "👨‍🔬",
          status: "away",
          lastSeen: new Date().toISOString(),
        },
        {
          id: "user_004",
          name: "Dewi Anggraini",
          avatar: "👩‍💼",
          status: "offline",
          lastSeen: new Date(Date.now() - 3600000).toISOString(),
        },
      ];
      this.saveContacts();
    }
  },

  saveContacts() {
    localStorage.setItem("dm_contacts", JSON.stringify(this.contacts));
  },

  loadAllMessages() {
    const allMessages = JSON.parse(localStorage.getItem("dm_messages") || "{}");
    Object.keys(allMessages).forEach((chatId) => {
      this.messages.set(chatId, allMessages[chatId]);
    });
  },

  saveMessages(chatId) {
    const allMessages = {};
    this.messages.forEach((msgs, id) => {
      allMessages[id] = msgs;
    });
    localStorage.setItem("dm_messages", JSON.stringify(allMessages));
  },

  setupWebSocket() {
    try {
      this.ws = new WebSocket("wss://echo.websocket.org");
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "dm_message") {
          this.handleIncomingMessage(data);
        }
      };
    } catch (error) {
      console.log("WebSocket not available");
    }
  },

  startMessagePolling() {
    setInterval(() => {
      this.checkForNewMessages();
    }, 1500);
  },

  checkForNewMessages() {
    const allMessages = JSON.parse(localStorage.getItem("dm_messages") || "{}");

    this.messages.forEach((msgs, chatId) => {
      const storedMsgs = allMessages[chatId] || [];
      if (storedMsgs.length > msgs.length) {
        this.messages.set(chatId, storedMsgs);
        if (this.currentChat === chatId) {
          this.renderMessages();
        }
      }
    });
  },

  renderContacts() {
    const container = document.getElementById("contactsList");
    if (!container) return;

    container.innerHTML = "";

    this.contacts.forEach((contact) => {
      const contactEl = this.createContactElement(contact);
      container.appendChild(contactEl);
    });
  },

  createContactElement(contact) {
    const div = document.createElement("div");
    div.className = `contact-item ${
      this.currentChat === contact.id ? "active" : ""
    }`;

    const lastMessage = this.getLastMessage(contact.id);
    const unreadCount = this.getUnreadCount(contact.id);

    div.innerHTML = `
            <div class="contact-avatar">${contact.avatar}</div>
            <div class="contact-info">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-last-message">${
                  lastMessage || "No messages yet"
                }</div>
            </div>
            <div class="contact-meta">
                <div class="contact-time">${this.getLastMessageTime(
                  contact.id
                )}</div>
                ${
                  unreadCount > 0
                    ? `<div class="unread-badge">${unreadCount}</div>`
                    : ""
                }
            </div>
        `;

    div.addEventListener("click", () => this.openChat(contact));
    return div;
  },

  getLastMessage(contactId) {
    const messages = this.messages.get(contactId) || [];
    return messages.length > 0 ? messages[messages.length - 1].text : null;
  },

  getLastMessageTime(contactId) {
    const messages = this.messages.get(contactId) || [];
    if (messages.length === 0) return "";

    const lastMsg = messages[messages.length - 1];
    return this.formatTime(lastMsg.timestamp);
  },

  getUnreadCount(contactId) {
    const messages = this.messages.get(contactId) || [];
    return messages.filter((msg) => !msg.read && msg.senderId === contactId)
      .length;
  },

  openChat(contact) {
    this.currentChat = contact.id;
    this.updateChatHeader(contact);
    this.renderMessages();
    this.showMessageInput();
    this.markMessagesAsRead(contact.id);
    this.renderContacts();
  },

  updateChatHeader(contact) {
    const header = document.getElementById("chatHeader");
    if (!header) return;

    header.innerHTML = `
            <div class="chat-partner">
                <div class="partner-avatar">${contact.avatar}</div>
                <div class="partner-info">
                    <div class="partner-name">${contact.name}</div>
                    <div class="partner-status">
                        <span class="status-dot ${contact.status}"></span>
                        ${
                          contact.status === "online"
                            ? "Online"
                            : contact.status === "away"
                            ? "Away"
                            : "Offline"
                        }
                    </div>
                </div>
            </div>
            <div class="chat-actions">
                <button class="action-btn" title="Call">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </button>
                <button class="action-btn" title="Video call">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M23 7l-7 5 7 5V7z"/>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                </button>
            </div>
        `;
  },

  renderMessages() {
    const container = document.getElementById("messagesArea");
    if (!container || !this.currentChat) return;

    const messages = this.messages.get(this.currentChat) || [];

    if (messages.length === 0) {
      container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">💬</div>
                    <h3>No messages yet</h3>
                    <p>Send a message to start the conversation</p>
                </div>
            `;
      return;
    }

    container.innerHTML = "";
    messages.forEach((msg) => {
      const messageEl = this.createMessageElement(msg);
      container.appendChild(messageEl);
    });

    container.scrollTop = container.scrollHeight;
  },

  createMessageElement(msg) {
    const div = document.createElement("div");
    const isCurrentUser = msg.senderId === this.currentUser.id;

    div.className = `message ${isCurrentUser ? "sent" : "received"}`;
    div.innerHTML = `
            <div class="message-bubble">
                <div class="message-text">${this.escapeHtml(msg.text)}</div>
                <div class="message-time">${this.formatTime(
                  msg.timestamp
                )}</div>
            </div>
        `;

    return div;
  },

  showMessageInput() {
    const inputArea = document.getElementById("messageInputArea");
    if (inputArea) {
      inputArea.style.display = "block";
    }
  },

  sendMessage(text) {
    if (!text.trim() || !this.currentChat) return;

    const message = {
      id: "msg_" + Date.now(),
      text: text.trim(),
      senderId: this.currentUser.id,
      senderName: this.currentUser.name,
      timestamp: new Date().toISOString(),
      read: false,
    };

    this.saveMessage(message);
    this.broadcastMessage(message);
    this.renderNewMessage(message);
  },

  saveMessage(message) {
    const chatId = this.currentChat;
    if (!this.messages.has(chatId)) {
      this.messages.set(chatId, []);
    }

    this.messages.get(chatId).push(message);
    this.saveMessages(chatId);
  },

  broadcastMessage(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          type: "dm_message",
          chatId: this.currentChat,
          ...message,
        })
      );
    }
  },

  handleIncomingMessage(data) {
    if (data.chatId && data.senderId !== this.currentUser.id) {
      if (!this.messages.has(data.chatId)) {
        this.messages.set(data.chatId, []);
      }

      this.messages.get(data.chatId).push(data);
      this.saveMessages(data.chatId);

      if (this.currentChat === data.chatId) {
        this.renderNewMessage(data);
        this.markMessagesAsRead(data.chatId);
      }

      this.renderContacts();
    }
  },

  renderNewMessage(message) {
    const container = document.getElementById("messagesArea");
    if (!container) return;

    const messageEl = this.createMessageElement(message);

    if (container.querySelector(".empty-state")) {
      container.innerHTML = "";
    }

    container.appendChild(messageEl);
    container.scrollTop = container.scrollHeight;
  },

  markMessagesAsRead(chatId) {
    const messages = this.messages.get(chatId) || [];
    messages.forEach((msg) => {
      if (msg.senderId !== this.currentUser.id) {
        msg.read = true;
      }
    });
    this.saveMessages(chatId);
    this.renderContacts();
  },

  setupEventListeners() {
    const sendBtn = document.getElementById("sendMessageBtn");
    const input = document.getElementById("messageInput");
    const searchInput = document.getElementById("contactSearch");

    if (sendBtn && input) {
      sendBtn.addEventListener("click", () => {
        this.sendMessage(input.value);
        input.value = "";
      });

      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.sendMessage(input.value);
          input.value = "";
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.filterContacts(e.target.value);
      });
    }
  },

  filterContacts(query) {
    const filtered = this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    const container = document.getElementById("contactsList");
    if (!container) return;

    container.innerHTML = "";
    filtered.forEach((contact) => {
      const contactEl = this.createContactElement(contact);
      container.appendChild(contactEl);
    });
  },

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },

  formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return "now";
    if (diff < 3600000) return Math.floor(diff / 60000) + "m";
    if (diff < 86400000)
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  },
};

const groupChat = {
  currentUser: null,
  onlineUsers: new Map(),
  messages: [],

  init() {
    this.setCurrentUser();
    this.loadMessages();
    this.setupWebSocket();
    this.renderMessages();
    this.updateOnlineUsers();
    this.setupEventListeners();
    this.startPolling();
    this.addSystemMessage(`${this.currentUser.name} joined the chat`);

    // Handle mobile view
    this.handleMobileView();
  },

  setCurrentUser() {
    const userData = JSON.parse(localStorage.getItem("currentUser") || "{}");
    this.currentUser = {
      id: userData.nim || "user_" + Date.now(),
      name: userData.fullName || "Student",
      avatar: this.getRandomAvatar(),
      lastSeen: new Date().toISOString(),
    };
    this.markUserOnline();
  },

  getRandomAvatar() {
    const avatars = ["👦", "👧", "👨", "👩", "🧑", "👨‍💻", "👩‍🎓", "👨‍🎓", "👩‍💻"];
    return avatars[Math.floor(Math.random() * avatars.length)];
  },

  markUserOnline() {
    const onlineUsers = JSON.parse(
      localStorage.getItem("online_users") || "{}"
    );
    onlineUsers[this.currentUser.id] = {
      ...this.currentUser,
      lastSeen: new Date().toISOString(),
    };
    localStorage.setItem("online_users", JSON.stringify(onlineUsers));
  },

  updateOnlineUsers() {
    const onlineUsers = JSON.parse(
      localStorage.getItem("online_users") || "{}"
    );

    // Remove users who haven't been seen for 5 minutes
    const now = new Date();
    Object.keys(onlineUsers).forEach((userId) => {
      const lastSeen = new Date(onlineUsers[userId].lastSeen);
      if (now - lastSeen > 300000) {
        // 5 minutes
        delete onlineUsers[userId];
      }
    });

    localStorage.setItem("online_users", JSON.stringify(onlineUsers));
    this.renderOnlineUsers(onlineUsers);
  },

  renderOnlineUsers(onlineUsers) {
    const container = document.getElementById("onlineUsersList");
    const onlineCount = document.getElementById("onlineCount");
    if (!container || !onlineCount) return;

    const users = Object.values(onlineUsers);
    onlineCount.textContent = `${users.length} online`;

    container.innerHTML = "";
    users.forEach((user) => {
      const userEl = this.createOnlineUserElement(user);
      container.appendChild(userEl);
    });
  },

  handleMobileView() {
    // Toggle online sidebar on mobile
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector(".online-sidebar");
      if (sidebar) {
        sidebar.style.display = "none"; // Hide by default on mobile
      }

      // Add toggle button for online users on mobile
      this.addMobileToggle();
    }
  },

  addMobileToggle() {
    const header = document.querySelector(".group-chat-header");
    if (!header) return;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "mobile-toggle-btn";
    toggleBtn.innerHTML = "👥";
    toggleBtn.title = "Show Online Users";
    toggleBtn.style.cssText = `
        background: #2b26b9;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px;
        cursor: pointer;
        margin-left: 10px;
    `;

    toggleBtn.addEventListener("click", () => {
      const sidebar = document.querySelector(".online-sidebar");
      if (sidebar) {
        const isVisible = sidebar.style.display !== "none";
        sidebar.style.display = isVisible ? "none" : "flex";
        toggleBtn.innerHTML = isVisible ? "👥" : "✕";
        toggleBtn.title = isVisible ? "Show Online Users" : "Hide Online Users";
      }
    });

    const groupActions = header.querySelector(".group-actions");
    if (groupActions) {
      groupActions.appendChild(toggleBtn);
    }
  },

  createOnlineUserElement(user) {
    const div = document.createElement("div");
    div.className = "online-user";
    div.innerHTML = `
            <div class="user-avatar">${user.avatar}</div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-status">Online</div>
            </div>
            <div class="status-indicator online"></div>
        `;
    return div;
  },

  loadMessages() {
    const savedMessages = localStorage.getItem("group_chat_messages");
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  },

  saveMessages() {
    localStorage.setItem("group_chat_messages", JSON.stringify(this.messages));
  },

  setupWebSocket() {
    try {
      this.ws = new WebSocket("wss://echo.websocket.org");
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "group_message") {
          this.handleIncomingMessage(data);
        }
      };
    } catch (error) {
      console.log("WebSocket not available");
    }
  },

  startPolling() {
    setInterval(() => {
      this.markUserOnline();
      this.updateOnlineUsers();
      this.checkForNewMessages();
    }, 30000); // Update every 30 seconds

    setInterval(() => {
      this.checkForNewMessages();
    }, 2000); // Check messages every 2 seconds
  },

  checkForNewMessages() {
    const savedMessages = localStorage.getItem("group_chat_messages");
    if (!savedMessages) return;

    const messages = JSON.parse(savedMessages);
    if (messages.length > this.messages.length) {
      this.messages = messages;
      this.renderMessages();
    }
  },

  renderMessages() {
    const container = document.getElementById("groupMessages");
    if (!container) return;

    if (this.messages.length === 0) {
      container.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">👋</div>
                    <h3>Welcome to Classroom Group!</h3>
                    <p>Start chatting with everyone online</p>
                </div>
            `;
      return;
    }

    container.innerHTML = "";
    this.messages.forEach((msg) => {
      const messageEl = this.createMessageElement(msg);
      container.appendChild(messageEl);
    });

    container.scrollTop = container.scrollHeight;
  },

  createMessageElement(msg) {
    const div = document.createElement("div");
    const isCurrentUser = msg.userId === this.currentUser.id;
    const isSystem = msg.type === "system";

    if (isSystem) {
      div.className = "system-message";
      div.innerHTML = `
                <div class="system-text">${msg.text}</div>
                <div class="message-time">${this.formatTime(
                  msg.timestamp
                )}</div>
            `;
    } else {
      div.className = `group-message ${
        isCurrentUser ? "own-message" : "other-message"
      }`;
      div.innerHTML = `
                ${
                  !isCurrentUser
                    ? `<div class="message-avatar">${msg.avatar}</div>`
                    : ""
                }
                <div class="message-content">
                    ${
                      !isCurrentUser
                        ? `<div class="sender-name">${msg.userName}</div>`
                        : ""
                    }
                    <div class="message-bubble">
                        <div class="message-text">${this.escapeHtml(
                          msg.text
                        )}</div>
                        <div class="message-time">${this.formatTime(
                          msg.timestamp
                        )}</div>
                    </div>
                </div>
                ${
                  isCurrentUser
                    ? `<div class="message-avatar">${msg.avatar}</div>`
                    : ""
                }
            `;
    }

    return div;
  },

  sendMessage(text) {
    if (!text.trim()) return;

    const message = {
      id: "msg_" + Date.now(),
      text: text.trim(),
      userId: this.currentUser.id,
      userName: this.currentUser.name,
      avatar: this.currentUser.avatar,
      timestamp: new Date().toISOString(),
      type: "user",
    };

    this.addMessage(message);
    this.broadcastMessage(message);
  },

  addSystemMessage(text) {
    const message = {
      id: "sys_" + Date.now(),
      text: text,
      timestamp: new Date().toISOString(),
      type: "system",
    };
    this.addMessage(message);
  },

  addMessage(message) {
    this.messages.push(message);
    this.saveMessages();
    this.renderNewMessage(message);
  },

  broadcastMessage(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          type: "group_message",
          ...message,
        })
      );
    }
  },

  handleIncomingMessage(data) {
    if (data.userId !== this.currentUser.id) {
      this.addMessage(data);
    }
  },

  renderNewMessage(message) {
    const container = document.getElementById("groupMessages");
    if (!container) return;

    // Remove welcome message if it's the first real message
    if (container.querySelector(".welcome-message")) {
      container.innerHTML = "";
    }

    const messageEl = this.createMessageElement(message);
    container.appendChild(messageEl);
    container.scrollTop = container.scrollHeight;
  },

  setupEventListeners() {
    const sendBtn = document.getElementById("sendGroupMessageBtn");
    const input = document.getElementById("groupMessageInput");
    const refreshBtn = document.getElementById("refreshOnlineBtn");

    if (sendBtn && input) {
      sendBtn.addEventListener("click", () => {
        this.sendMessage(input.value);
        input.value = "";
      });

      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.sendMessage(input.value);
          input.value = "";
        }
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        this.updateOnlineUsers();
      });
    }
  },

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },

  formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return "now";
    if (diff < 3600000) return Math.floor(diff / 60000) + "m ago";
    if (diff < 86400000) {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  },
};

async function initGroupChat() {
  const chatMessages = document.getElementById("groupMessages");
  const chatInput = document.getElementById("groupMessageInput");
  const sendBtn = document.getElementById("sendGroupMessageBtn");

  if (window.groupChatInitialized) {
    return;
  }
  window.groupChatInitialized = true;

  const clearBtn = document.getElementById("clearChatBtn");
  if (clearBtn) clearBtn.onclick = clearGroupChatHistory;

  if (!chatMessages || !chatInput || !sendBtn) return;

  const newSendBtn = sendBtn.cloneNode(true);
  sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);
  const newChatInput = chatInput.cloneNode(true);
  chatInput.parentNode.replaceChild(newChatInput, chatInput);

  const user = JSON.parse(localStorage.getItem("currentUser")) || {
    fullName: "Anonim",
  };
  const myName = user.fullName;

  function loadChatHistory() {
    const savedHistory = JSON.parse(
      localStorage.getItem("groupChatHistory") || "[]"
    );

    if (savedHistory.length > 0) {
      const welcomeMsg = chatMessages.querySelector(".welcome-message");
      if (welcomeMsg) welcomeMsg.remove();

      chatMessages.innerHTML = "";

      // Render semua pesan
      savedHistory.forEach((chat) => renderMessage(chat));

      setTimeout(
        () => (chatMessages.scrollTop = chatMessages.scrollHeight),
        100
      );
    }
  }

  loadChatHistory();

  if (!window.pusherInstance && typeof Pusher !== "undefined") {
    window.pusherInstance = new Pusher("f13ff92cbbe2788163f8", {
      cluster: "ap1",
    });

    window.pusherInstance.connection.bind("connected", () => {
      window.myPusherSocketId = window.pusherInstance.connection.socket_id;
    });

    const channel = window.pusherInstance.subscribe("campus-chat");

    channel.bind("new-message", function (data) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const myName = currentUser ? currentUser.fullName : "Anonim";
      if (data.username !== myName) {
        renderMessage(data);
        saveMessageToLocal(data);
      }
    });
  }

  async function sendChatMessage() {
    const text = newChatInput.value.trim();

    // Validasi: Jangan kirim jika kosong
    if (!text) return;

    const msgData = {
      username: myName,
      message: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // 1. Render Langsung (Optimistic UI)
    renderMessage(msgData);
    saveMessageToLocal(msgData);

    // 2. Kosongkan Input SEGERA
    newChatInput.value = "";
    newChatInput.focus(); // Kembalikan fokus agar bisa ngetik lagi

    // 3. Hapus pesan selamat datang jika ada
    const welcomeMsg = chatMessages.querySelector(".welcome-message");
    if (welcomeMsg) welcomeMsg.remove();

    // 4. Kirim ke Backend (Background Process)
    try {
      const currentSocketId = window.pusherInstance?.connection?.socket_id;
      await fetch("/api/send-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...msgData,
          // socketId: currentSocketId,
        }),
      });

      // Logika AI (AIDA)
      const tagAI = "@AIDA";
      const tagAsdos = "@asdos";

      if (text.toLowerCase().startsWith(tagAI.toLowerCase())) {
        const question = text.substring(tagAI.length).trim();
        await triggerAIGroupChatResponse(question);
      } else if (text.toLowerCase().startsWith(tagAsdos.toLowerCase())) {
        const question = text.substring(tagAsdos.length).trim();
        await triggerAIGroupChatResponse(question);
      }
    } catch (err) {
      console.error("Gagal kirim pesan ke server:", err);
    }
  }

  // Helper Render
  function renderMessage(data) {
    const isMe = data.username === myName;
    const div = document.createElement("div");
    div.className = `chat-bubble ${isMe ? "me" : "others"}`;

    div.innerHTML = `
          ${!isMe ? `<span class="sender-name">${data.username}</span>` : ""}
          <span class="message-content">${data.message}</span>
          <span class="timestamp">${data.timestamp}</span>
      `;

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Helper Save
  function saveMessageToLocal(data) {
    const history = JSON.parse(
      localStorage.getItem("groupChatHistory") || "[]"
    );
    history.push(data);
    if (history.length > 50) history.shift(); // Batasi 50 pesan terakhir
    localStorage.setItem("groupChatHistory", JSON.stringify(history));
  }

  // AI Response Logic
  async function triggerAIGroupChatResponse(query) {
    try {
      // ... (Logika AI sama seperti sebelumnya) ...
      // Gunakan fetch ke /api/chat lalu render hasilnya
    } catch (e) {
      console.error(e);
    }
  }

  // Event Listeners
  newSendBtn.addEventListener("click", sendChatMessage);

  newChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah baris baru di input
      sendChatMessage();
    }
  });
}

// Fungsi untuk reset initialization jika needed
function resetGroupChatInit() {
  window.groupChatInitialized = false;
}

function clearGroupChatHistory() {
  // Tampilkan konfirmasi
  const confirmClear = confirm(
    "Apakah Anda yakin ingin menghapus semua riwayat chat lokal? (Ini tidak akan menghapus riwayat orang lain)"
  );

  if (confirmClear) {
    // 1. Hapus data dari localStorage
    localStorage.removeItem("groupChatHistory");

    // 2. Bersihkan tampilan chat di layar
    const chatMessages = document.getElementById("groupMessages");
    if (chatMessages) {
      // Sisakan pesan selamat datang
      chatMessages.innerHTML = `
        <div class="system-msg welcome-message" data-i18n="chat.welcome_title">
          Riwayat obrolan telah dibersihkan.
        </div>`;
    }

    // 3. (Opsional) Tampilkan notifikasi
    showNotification("Riwayat chat lokal berhasil dihapus!", "success");
  }
}

let notesData = JSON.parse(localStorage.getItem("quickNotes") || "[]");
let currentNoteId = null;

function initNotesSection() {
  renderNotesList();

  // Setup Auto-save listeners
  document.getElementById("noteTitle").addEventListener("input", autoSaveNote);
  document
    .getElementById("noteContent")
    .addEventListener("input", autoSaveNote);

  // Load catatan pertama jika ada
  if (notesData.length > 0 && !currentNoteId) {
    loadNote(notesData[0].id);
  } else if (notesData.length === 0) {
    createNewNote(); // Buat baru jika kosong
  }
}

function createNewNote() {
  const newNote = {
    id: Date.now(),
    title: "",
    content: "",
    date: new Date().toLocaleDateString(),
  };

  notesData.unshift(newNote); // Tambah ke awal
  saveNotesToStorage();
  renderNotesList();
  loadNote(newNote.id);
}

function loadNote(id) {
  const note = notesData.find((n) => n.id === id);
  if (!note) return;

  currentNoteId = id;
  document.getElementById("noteTitle").value = note.title;
  document.getElementById("noteContent").value = note.content;
  document.getElementById("noteDate").textContent = note.date;
  document.getElementById("saveStatus").textContent = "Tersimpan";

  // Highlight active in list
  document
    .querySelectorAll(".note-list-item")
    .forEach((el) => el.classList.remove("active"));
  const activeItem = document.querySelector(
    `.note-list-item[onclick="loadNote(${id})"]`
  );
  if (activeItem) activeItem.classList.add("active");
}

function autoSaveNote() {
  if (!currentNoteId) return;

  const noteIndex = notesData.findIndex((n) => n.id === currentNoteId);
  if (noteIndex > -1) {
    notesData[noteIndex].title =
      document.getElementById("noteTitle").value || "Tanpa Judul";
    notesData[noteIndex].content = document.getElementById("noteContent").value;
    notesData[noteIndex].date = new Date().toLocaleDateString();

    document.getElementById("saveStatus").textContent = "Menyimpan...";
    saveNotesToStorage();

    setTimeout(() => {
      document.getElementById("saveStatus").textContent = "Tersimpan";
      renderNotesList(); // Refresh list judul
    }, 500);
  }
}

function saveNotesToStorage() {
  localStorage.setItem("quickNotes", JSON.stringify(notesData));
}

function renderNotesList() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notesData.forEach((note) => {
    const item = document.createElement("div");
    item.className = `note-list-item ${
      note.id === currentNoteId ? "active" : ""
    }`;
    item.onclick = () => loadNote(note.id);
    item.innerHTML = `
      <h4>${note.title || "Tanpa Judul"}</h4>
      <p>${note.date}</p>
    `;
    list.appendChild(item);
  });
}

// ===== KANBAN BOARD SYSTEM =====
let kanbanTasks = JSON.parse(localStorage.getItem("kanbanTasks") || "[]");

function initKanbanBoard() {
  renderKanbanBoard();
}

function renderKanbanBoard() {
  const columns = {
    "col-todo": [],
    "col-progress": [],
    "col-done": [],
  };

  // Pisahkan task berdasarkan status
  kanbanTasks.forEach((task) => {
    if (columns[task.status]) {
      columns[task.status].push(task);
    }
  });

  // Render setiap kolom
  for (const [colId, tasks] of Object.entries(columns)) {
    const listEl = document.getElementById(colId).querySelector(".task-list");
    const countEl = document.getElementById(colId.replace("col", "count")); // count-todo

    listEl.innerHTML = "";
    countEl.textContent = tasks.length;

    tasks.forEach((task) => {
      const card = document.createElement("div");
      card.className = "kanban-card";
      card.draggable = true;
      card.id = `task-${task.id}`;
      card.ondragstart = (e) => drag(e);

      card.innerHTML = `
        <span class="card-tag">${task.tag}</span>
        <div class="card-title">${task.title}</div>
        <button class="delete-task" onclick="deleteKanbanTask(${task.id})">🗑️</button>
      `;
      listEl.appendChild(card);
    });
  }
}

// Drag and Drop Functions
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const taskId = parseInt(data.split("-")[1]);

  // Cari elemen target kolom (bisa jadi didrop di dalam task lain, jadi cari parent .kanban-column)
  let targetCol = ev.target;
  while (
    !targetCol.classList.contains("kanban-column") &&
    targetCol.parentElement
  ) {
    targetCol = targetCol.parentElement;
  }

  if (targetCol.classList.contains("kanban-column")) {
    updateTaskStatus(taskId, targetCol.id);
  }
}

function updateTaskStatus(id, newStatusCol) {
  const task = kanbanTasks.find((t) => t.id === id);
  if (task) {
    task.status = newStatusCol;
    localStorage.setItem("kanbanTasks", JSON.stringify(kanbanTasks));
    renderKanbanBoard();
  }
}

// Add New Task Logic
function openAddTaskModal() {
  const modal = document.getElementById("addTaskModal");
  if (modal) {
    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  }
}

function closeAddTaskModal() {
  const modal = document.getElementById("addTaskModal");
  if (modal) {
    modal.classList.remove("active");

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}

function addNewKanbanTask() {
  const title = document.getElementById("newTaskTitle").value;
  const tag = document.getElementById("newTaskTag").value;

  if (title) {
    const newTask = {
      id: Date.now(),
      title: title,
      tag: tag,
      status: "col-todo", // Default masuk ke Todo
    };

    kanbanTasks.push(newTask);
    localStorage.setItem("kanbanTasks", JSON.stringify(kanbanTasks));

    document.getElementById("newTaskTitle").value = "";
    closeAddTaskModal();
    renderKanbanBoard();
  }
}

function deleteKanbanTask(id) {
  if (confirm("Hapus tugas ini?")) {
    kanbanTasks = kanbanTasks.filter((t) => t.id !== id);
    localStorage.setItem("kanbanTasks", JSON.stringify(kanbanTasks));
    renderKanbanBoard();
  }
}

// Global scope access
window.createNewNote = createNewNote;
window.loadNote = loadNote;
window.openAddTaskModal = openAddTaskModal;
window.closeAddTaskModal = closeAddTaskModal;
window.addNewKanbanTask = addNewKanbanTask;
window.deleteKanbanTask = deleteKanbanTask;
window.drop = drop;
window.allowDrop = allowDrop;
window.drag = drag;

let cheatWarningCount = 0;
// ===== FUNGSI BARU UNTUK TAB UJIAN =====
function initExamTabs() {
  const tabButtons = document.querySelectorAll(".exam-tab-btn");
  const tabContents = document.querySelectorAll(".exam-tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Hapus 'active' dari semua tombol dan sembunyikan semua konten
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // 2. Tambahkan 'active' ke tombol yang diklik
      button.classList.add("active");

      // 3. Tampilkan konten yang sesuai
      const targetTab = document.getElementById(button.dataset.tab);
      if (targetTab) {
        targetTab.style.display = "block";
        targetTab.classList.add("active");
      }
    });
  });
}

function startUjian(namaUjian) {
  document.body.classList.add("exam-lockdown");

  enterExamFullscreen();

  const sectionUjian = document.getElementById("ujian");
  if (sectionUjian) sectionUjian.style.display = "none";

  const examPage = document.getElementById("examPage");
  if (examPage) examPage.style.display = "flex";

  const titlePrefix =
    translations[currentLanguage]["exams.midterm"] || "Ujian Tengah Semester";
  document.getElementById("examPageTitle").textContent =
    titlePrefix + ": " + namaUjian;

  const userJson = localStorage.getItem("currentUser");
  if (!userJson) {
    alert("Error: Data pengguna tidak ditemukan. Silakan login ulang.");
    return;
  }
  const user = JSON.parse(userJson);

  if (user) {
    document.getElementById("examPageUser").textContent =
      "Mahasiswa: " + user.fullName;
  }

  startExamTimer(90);
}

// Fungsi Timer Sederhana
function startExamTimer(minutes) {
  const timerEl = document.getElementById("examTimer");
  let seconds = minutes * 60;

  const timerInterval = setInterval(() => {
    seconds--;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    timerEl.textContent = `Sisa Waktu: ${mins}:${secs < 10 ? "0" : ""}${secs}`;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Waktu Habis!";
      alert("Waktu Ujian Habis! Jawaban Anda akan dikumpulkan otomatis.");
      submitExam(); // Panggil fungsi kumpulkan
    }
  }, 1000);
}

// Fungsi untuk Tombol "Jalankan Tes Kode" (Soal Ganjil/Genap)
const runCodeBtn = document.getElementById("runCodeBtn");
if (runCodeBtn) {
  runCodeBtn.addEventListener("click", () => {
    const codeToRun = document.getElementById("codingAnswer").value;
    const outputEl = document.getElementById("codeOutput");
    outputEl.textContent = ""; // Kosongkan output

    try {
      // Ini adalah cara aman untuk menjalankan kode JS dari user
      // Kita "membungkus" kode user dalam sebuah Fungsi
      const userFunction = new Function(
        "angka",
        codeToRun + "\nreturn cekGanjilGenap(angka);"
      );

      let output = "";

      // Tes Kasus 1: Angka Genap
      const hasil1 = userFunction(4);
      output += `Tes 1: Input (4)\nHasil: ${hasil1}\nStatus: ${
        hasil1 === "Genap" ? "✅ Lulus" : "❌ Gagal"
      }\n\n`;

      // Tes Kasus 2: Angka Ganjil
      const hasil2 = userFunction(7);
      output += `Tes 2: Input (7)\nHasil: ${hasil2}\nStatus: ${
        hasil2 === "Ganjil" ? "✅ Lulus" : "❌ Gagal"
      }\n\n`;

      // Tes Kasus 3: Angka Nol
      const hasil3 = userFunction(0);
      output += `Tes 3: Input (0)\nHasil: ${hasil3}\nStatus: ${
        hasil3 === "Genap" ? "✅ Lulus" : "❌ Gagal"
      }\n`;

      outputEl.textContent = output;
    } catch (error) {
      outputEl.textContent = `Error: ${error.message}`;
    }
  });
}

// Fungsi untuk Tombol "Kumpulkan Jawaban Ujian"
const submitExamBtn = document.getElementById("submitExamBtn");
if (submitExamBtn) {
  submitExamBtn.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mengumpulkan jawaban ujian ini?")) {
      submitExam();
    }
  });
}

function submitExam() {
  const pg_answer = document.querySelector(
    'input[name="soal1_pg"]:checked'
  )?.value;
  const esai_answer = document.getElementById("essayAnswer").value;
  const code_answer = document.getElementById("codingAnswer").value;

  console.log("JAWABAN TERKUMPUL:");
  console.log("PG:", pg_answer);
  console.log("Esai:", esai_answer);
  console.log("Coding:", code_answer);

  alert("Ujian Anda telah berhasil dikumpulkan!");

  const examPage = document.getElementById("examPage");
  if (examPage) examPage.style.display = "none";

  document.body.classList.remove("exam-lockdown");

  document.removeEventListener("visibilitychange", handleVisibilityChange);
  document.removeEventListener("fullscreenchange", handleVisibilityChange);
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }

  switchSection("dashboard");
}

function enterExamFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error: Gagal masuk mode fullscreen. Ujian tidak dapat dimulai.\n(${err.message})`
      );
      document.body.classList.remove("exam-lockdown");
      switchSection("ujian");
    });
  }

  cheatWarningCount = 0;

  document.addEventListener("visibilitychange", handleVisibilityChange);
  document.addEventListener("fullscreenchange", handleVisibilityChange);
}

function handleVisibilityChange() {
  if (!document.body.classList.contains("exam-lockdown")) return;

  if (document.hidden || !document.fullscreenElement) {
    if (cheatWarningCount === 0) {
      cheatWarningCount++;
      alert(
        "PERINGATAN!\nAnda terdeteksi meninggalkan halaman ujian. Jika Anda melakukannya lagi, ujian Anda akan dikumpulkan secara otomatis."
      );

      enterExamFullscreen();
    } else {
      alert(
        "Anda terdeteksi meninggalkan halaman ujian untuk kedua kalinya. Ujian Anda dikumpulkan secara otomatis."
      );
      submitExam();
    }
  }
}

function initFebCenter() {
  initFebTabs();
  initAccountingJournal();
  initCompoundInterestCalc();
  initNpvCalc();
  // Panggil kalkulator sekali saat load agar tidak kosong
  calculateCI();
  calculateNPV();
}

/**
 * Mengatur logika perpindahan tab (Jurnal, Bunga Majemuk, NPV).
 */
function initFebTabs() {
  const tabButtons = document.querySelectorAll(".feb-tab-btn");
  const tabContents = document.querySelectorAll(".feb-tab-content");

  tabButtons.forEach((button) => {
    // Hindari menambah listener berulang kali jika sudah ada
    if (button.dataset.listenerAttached) return;

    button.addEventListener("click", () => {
      // 1. Hapus 'active' dari semua tombol dan sembunyikan semua konten
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // 2. Tambahkan 'active' ke tombol yang diklik
      button.classList.add("active");

      // 3. Tampilkan konten yang sesuai
      const targetTab = document.getElementById(button.dataset.tab);
      if (targetTab) {
        targetTab.style.display = "block";
        targetTab.classList.add("active");
      }
    });
    button.dataset.listenerAttached = true; // Tandai sudah ada listener
  });
}

/**
 * Mengatur logika Jurnal Akuntansi (Tambah baris, hapus, hitung total).
 */
function initAccountingJournal() {
  const addRowBtn = document.getElementById("addJournalRow");
  const entryList = document.getElementById("journalEntryList");

  if (!addRowBtn || !entryList) return;

  // Panggil update total setiap kali ada input di tabel
  entryList.addEventListener("input", updateJournalTotals);

  addRowBtn.onclick = () => {
    const row = document.createElement("div");
    row.className = "journal-row";
    row.innerHTML = `
      <input type="text" name="account" placeholder="Kas...">
      <input type="text" name="desc" placeholder="Setoran modal...">
      <input type="number" name="debit" placeholder="0" value="0">
      <input type="number" name="credit" placeholder="0" value="0">
      <button class="delete-row-btn" onclick="this.parentElement.remove(); updateJournalTotals();">×</button>
    `;
    entryList.appendChild(row);
  };

  // Tambah 2 baris awal
  if (entryList.children.length === 0) {
    addRowBtn.click();
    addRowBtn.click();
  }
}

/**
 * Menghitung total Debit & Kredit dan mengecek keseimbangan.
 */
function updateJournalTotals() {
  const debitInputs = document.querySelectorAll(
    '#journalEntryList input[name="debit"]'
  );
  const creditInputs = document.querySelectorAll(
    '#journalEntryList input[name="credit"]'
  );

  let totalDebit = 0;
  let totalCredit = 0;

  debitInputs.forEach((input) => {
    totalDebit += parseFloat(input.value) || 0;
  });

  creditInputs.forEach((input) => {
    totalCredit += parseFloat(input.value) || 0;
  });

  const totalDebitEl = document.getElementById("totalDebit");
  const totalCreditEl = document.getElementById("totalCredit");
  const statusEl = document.getElementById("journalStatus");

  totalDebitEl.textContent = "Rp " + totalDebit.toLocaleString("id-ID");
  totalCreditEl.textContent = "Rp " + totalCredit.toLocaleString("id-ID");

  if (totalDebit === totalCredit && totalDebit > 0) {
    statusEl.textContent = "Balance";
    statusEl.className = "status-balance";
  } else {
    statusEl.textContent = "Imbalance";
    statusEl.className = "status-imbalance";
  }
}

/**
 * Mengatur tombol hitung Bunga Majemuk.
 */
function initCompoundInterestCalc() {
  const calculateBtn = document.getElementById("calculateCIBtn");
  if (calculateBtn) {
    calculateBtn.onclick = calculateCI;
  }
}

/**
 * Logika perhitungan Bunga Majemuk.
 */
function calculateCI() {
  const p = parseFloat(document.getElementById("ciModalAwal").value) || 0;
  const pmt = parseFloat(document.getElementById("ciSetoranBulan").value) || 0;
  const r =
    (parseFloat(document.getElementById("ciSukuBunga").value) || 0) / 100;
  const t = parseFloat(document.getElementById("ciPeriode").value) || 0;

  const n = 12; // Dihitung bulanan
  const i = r / n;
  const nt = n * t;

  // Rumus Future Value (Modal Awal)
  const fvPrincipal = p * Math.pow(1 + i, nt);

  // Rumus Future Value (Setoran Bulanan)
  const fvMonthly = pmt * ((Math.pow(1 + i, nt) - 1) / i);

  const futureValue = fvPrincipal + fvMonthly;
  const totalPrincipal = p + pmt * nt;
  const totalInterest = futureValue - totalPrincipal;

  document.getElementById("ciResult").textContent =
    "Rp " + futureValue.toLocaleString("id-ID", { maximumFractionDigits: 0 });
  document.getElementById("ciPrincipal").textContent =
    "Rp " + totalPrincipal.toLocaleString("id-ID");
  document.getElementById("ciInterest").textContent =
    "Rp " + totalInterest.toLocaleString("id-ID", { maximumFractionDigits: 0 });
}

/**
 * Mengatur tombol hitung NPV.
 */
function initNpvCalc() {
  const calculateBtn = document.getElementById("calculateNPVBtn");
  if (calculateBtn) {
    calculateBtn.onclick = calculateNPV;
  }
}

/**
 * Logika perhitungan NPV (Net Present Value).
 */
function calculateNPV() {
  const investment =
    parseFloat(document.getElementById("npvInvestasiAwal").value) || 0;
  const rate =
    (parseFloat(document.getElementById("npvDiscountRate").value) || 0) / 100;

  const cashFlows = [
    parseFloat(document.getElementById("npvCF1").value) || 0,
    parseFloat(document.getElementById("npvCF2").value) || 0,
    parseFloat(document.getElementById("npvCF3").value) || 0,
  ];

  let presentValue = 0;
  cashFlows.forEach((cf, index) => {
    presentValue += cf / Math.pow(1 + rate, index + 1);
  });

  const npv = presentValue - investment;

  const resultEl = document.getElementById("npvResult");
  const statusEl = document.getElementById("npvStatus");

  resultEl.textContent =
    "Rp " + npv.toLocaleString("id-ID", { maximumFractionDigits: 0 });

  if (npv > 0) {
    statusEl.textContent = "Investasi Layak (NPV Positif)";
    statusEl.className = "npv-status-box layak";
  } else if (npv < 0) {
    statusEl.textContent = "Investasi Tidak Layak (NPV Negatif)";
    statusEl.className = "npv-status-box tidak-layak";
  } else {
    statusEl.textContent = "Investasi Impas (NPV 0)";
    statusEl.className = "npv-status-box";
  }
}

let dkvCurrentTool = "pencil";
let dkvCurrentColor = "#000000";
let dkvIsDrawing = false;
let dkvIsInitialized = false;

let dkvScale = 1;
let dkvTranslateX = 0;
let dkvTranslateY = 0;
let dkvIsPanning = false;
let dkvPanLastX = 0;
let dkvPanLastY = 0;

/**
 * Fungsi utama untuk menginisialisasi DKV Pixel Pad.
 */
/**
 * Fungsi utama untuk menginisialisasi DKV Pixel Pad.
 */
function initDkvCenter() {
  // Hanya inisialisasi listener satu kali
  if (dkvIsInitialized) {
    createPixelGrid(document.getElementById("gridSize").value);
    return;
  }

  // 1. Buat Grid Awal
  createPixelGrid(32);

  // 2. Setup Listener Toolbar (Ini sudah ada, tidak berubah)
  const colorPicker = document.getElementById("colorPicker");
  const toolPencil = document.getElementById("toolPencil");
  const toolEraser = document.getElementById("toolEraser");
  const toolPicker = document.getElementById("toolPicker");
  const gridSizeSelect = document.getElementById("gridSize");
  const toggleGridBtn = document.getElementById("toggleGridBtn");
  const clearCanvasBtn = document.getElementById("clearCanvasBtn");
  const downloadArtBtn = document.getElementById("downloadArtBtn");
  const colorPalette = document.querySelector(".color-palette");

  colorPicker.addEventListener("input", (e) => {
    dkvCurrentColor = e.target.value;
  });
  colorPalette.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-swatch")) {
      dkvCurrentColor = e.target.dataset.color;
      colorPicker.value = dkvCurrentColor;
    }
  });
  function setActiveTool(toolName) {
    dkvCurrentTool = toolName;
    toolPencil.classList.toggle("active", toolName === "pencil");
    toolEraser.classList.toggle("active", toolName === "eraser");
    toolPicker.classList.toggle("active", toolName === "picker");
  }
  toolPencil.onclick = () => setActiveTool("pencil");
  toolEraser.onclick = () => setActiveTool("eraser");
  toolPicker.onclick = () => setActiveTool("picker");
  gridSizeSelect.onchange = (e) => createPixelGrid(e.target.value);
  toggleGridBtn.onclick = togglePixelGrid;
  clearCanvasBtn.onclick = clearPixelCanvas;
  downloadArtBtn.onclick = downloadPixelArt;

  // --- ▼▼▼ LOGIKA BARU UNTUK PAN & ZOOM ▼▼▼ ---

  const canvasWrapper = document.querySelector(".pixel-canvas-wrapper");
  const canvas = document.getElementById("pixelCanvas");

  if (!canvasWrapper || !canvas) return;

  // 3. ZOOM (Mouse Wheel)
  canvasWrapper.addEventListener("wheel", (e) => {
    e.preventDefault(); // Hentikan scroll halaman

    const zoomFactor = 1.1;
    const oldScale = dkvScale;

    // Ambil posisi mouse relatif terhadap wrapper
    const rect = canvasWrapper.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Tentukan arah zoom
    if (e.deltaY < 0) {
      // Zoom In
      dkvScale = Math.min(dkvScale * zoomFactor, 10); // Max zoom 10x
    } else {
      // Zoom Out
      dkvScale = Math.max(dkvScale / zoomFactor, 0.5); // Min zoom 0.5x
    }

    // Hitung translasi baru agar zoom berpusat di kursor mouse
    dkvTranslateX = mouseX - (mouseX - dkvTranslateX) * (dkvScale / oldScale);
    dkvTranslateY = mouseY - (mouseY - dkvTranslateY) * (dkvScale / oldScale);

    updateDkvTransform();
  });

  // 4. PAN (Spacebar + Drag)

  // Tekan Spasi = Aktifkan Mode Pan
  window.addEventListener("keydown", (e) => {
    // Hanya aktif jika di section DKV dan belum mode pan
    if (
      e.code === "Space" &&
      document.getElementById("dkv-center").style.display === "flex" &&
      !dkvIsPanning
    ) {
      e.preventDefault();
      dkvIsPanning = true;
      canvasWrapper.style.cursor = "grab";
    }
  });

  // Lepas Spasi = Matikan Mode Pan
  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      dkvIsPanning = false;
      canvasWrapper.style.cursor = "crosshair"; // Kembalikan ke kursor gambar
    }
  });

  // Mouse Down (Mulai Pan / Mulai Gambar)
  canvasWrapper.addEventListener("mousedown", (e) => {
    if (dkvIsPanning && e.button === 0) {
      // Jika SPASI ditahan + Klik Kiri
      e.preventDefault();
      canvasWrapper.style.cursor = "grabbing";
      dkvIsDrawing = false; // Pastikan tidak menggambar
      dkvPanLastX = e.clientX; // Simpan posisi awal klik
      dkvPanLastY = e.clientY;
    } else if (e.button === 0) {
      // Jika hanya Klik Kiri (Mode Gambar)
      handleDrawStart(e);
    }
  });

  // Mouse Move (Melakukan Pan / Melakukan Gambar)
  canvasWrapper.addEventListener("mousemove", (e) => {
    if (dkvIsPanning && e.buttons === 1) {
      // Jika SPASI ditahan DAN Klik Kiri ditahan (DRAG)
      e.preventDefault();
      const dx = e.clientX - dkvPanLastX; // Perbedaan gerak X
      const dy = e.clientY - dkvPanLastY; // Perbedaan gerak Y

      dkvTranslateX += dx; // Tambahkan ke posisi kanvas
      dkvTranslateY += dy;

      dkvPanLastX = e.clientX; // Simpan posisi terakhir
      dkvPanLastY = e.clientY;

      updateDkvTransform();
    } else if (e.buttons === 1) {
      // Jika hanya Klik Kiri ditahan (DRAW)
      handleDrawMove(e);
    }
  });

  // Mouse Up (Berhenti Pan / Berhenti Gambar)
  window.addEventListener("mouseup", (e) => {
    if (dkvIsPanning) {
      canvasWrapper.style.cursor = "grab"; // Tetap 'grab' jika spasi masih ditahan
    }
    handleDrawEnd(e); // Berhentikan proses menggambar
  });

  // Mouse Keluar Wrapper
  canvasWrapper.addEventListener("mouseleave", () => {
    if (dkvIsPanning) {
      canvasWrapper.style.cursor = "grab";
    }
    dkvIsDrawing = false; // Hentikan gambar jika keluar area
  });

  // --- ▲▲▲ AKHIR LOGIKA BARU ▲▲▲ ---

  // 3. Tandai sudah ter-inisialisasi
  dkvIsInitialized = true;
}

// (Fungsi createPixelGrid tetap sama)
// ...
function createPixelGrid(size = 32) {
  const canvas = document.getElementById("pixelCanvas");
  if (!canvas) return;

  canvas.innerHTML = ""; // Kosongkan kanvas
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  // Setel ulang posisi & zoom saat ganti grid
  dkvScale = 1;
  dkvTranslateX = 0;
  dkvTranslateY = 0;
  updateDkvTransform(); // Panggil reset transform

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "pixel-cell";

    // Listener 'mousedown' SEKARANG DI-HANDLE oleh wrapper
    // Hapus listener lama
    // cell.addEventListener("mousedown", handleDrawStart);
    // cell.addEventListener("mouseover", handleDrawMove);

    canvas.appendChild(cell);
  }

  // Hapus listener 'mouseup' lama dari window
  // window.removeEventListener("mouseup", handleDrawEnd);
}

// FUNGSI BARU: Untuk menerapkan CSS Transform
function updateDkvTransform() {
  const canvas = document.getElementById("pixelCanvas");
  if (canvas) {
    canvas.style.transform = `translate(${dkvTranslateX}px, ${dkvTranslateY}px) scale(${dkvScale})`;
  }
}

/**
 * Fungsi-fungsi untuk menggambar (Mouse Events)
 * DIMODIFIKASI AGAR TIDAK BENTROK DENGAN PAN
 */
function handleDrawStart(e) {
  // JANGAN menggambar jika sedang mode PAN
  if (dkvIsPanning) return;

  e.preventDefault();
  dkvIsDrawing = true;
  drawOnPixel(e.target);
}
function handleDrawMove(e) {
  // JANGAN menggambar jika sedang mode PAN
  if (dkvIsPanning) return;

  if (dkvIsDrawing) {
    // Cek apakah targetnya adalah pixel cell
    if (e.target.classList.contains("pixel-cell")) {
      drawOnPixel(e.target);
    }
  }
}
function handleDrawEnd() {
  dkvIsDrawing = false;
}

/**
 * Logika utama untuk mewarnai/menghapus/memilih pixel.
 * (Tidak ada perubahan di fungsi ini)
 */
function drawOnPixel(cell) {
  // ... (Isi fungsi ini tetap sama seperti sebelumnya)
  if (!cell || !cell.classList.contains("pixel-cell")) return; // Safety check

  switch (dkvCurrentTool) {
    case "pencil":
      cell.style.backgroundColor = dkvCurrentColor;
      break;
    case "eraser":
      cell.style.backgroundColor = "#FFFFFF"; // Selalu putih
      break;
    case "picker":
      if (dkvIsDrawing) {
        // Hanya pick warna saat klik, bukan drag
        dkvCurrentColor = cell.style.backgroundColor || "#FFFFFF";
        document.getElementById("colorPicker").value = dkvCurrentColor;
      }
      break;
  }
}

function togglePixelGrid() {
  document.getElementById("pixelCanvas").classList.toggle("grid-on");
}

/**
 * Membersihkan kanvas (mengembalikan semua pixel jadi putih).
 */
function clearPixelCanvas() {
  if (confirm("Anda yakin ingin membersihkan seluruh kanvas?")) {
    const cells = document.querySelectorAll("#pixelCanvas .pixel-cell");
    cells.forEach((cell) => {
      cell.style.backgroundColor = "#FFFFFF";
    });
  }
}

/**
 * Mengunduh karya sebagai file PNG.
 */
function downloadPixelArt() {
  const canvas = document.getElementById("pixelCanvas");

  // Tampilkan notifikasi
  showNotification("Membuat gambar PNG...", "info");

  // Gunakan html2canvas yang sudah di-load
  html2canvas(canvas, {
    backgroundColor: null, // Jaga transparansi (jika ada)
    onclone: (clonedDoc) => {
      // Saat meng-clone, hilangkan border grid agar tidak ikut tergambar
      clonedDoc.getElementById("pixelCanvas").classList.remove("grid-on");
    },
  })
    .then((canvasImage) => {
      // Buat link download
      const link = document.createElement("a");
      link.href = canvasImage.toDataURL("image/png");
      link.download = "pixel-art-karya-saya.png";
      link.click();

      showNotification("Gambar berhasil diunduh!", "success");
    })
    .catch((err) => {
      console.error("Gagal download gambar:", err);
      showNotification("Gagal mengunduh gambar.", "error");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const dkvFab = document.getElementById("dkvFab");
  if (dkvFab) {
    dkvFab.addEventListener("click", () => {
      showSection("dkv-center");
    });
  }
});

function initFpoCenter() {
  initFpoTabs();
  initBmiCalc();
  initTdeeCalc();
  initHeartRateCalc();

  calculateBMI();
  calculateTDEE();
  calculateHeartRateZones();
}

function initFpoTabs() {
  const tabButtons = document.querySelectorAll(".fpo-tab-btn");
  const tabContents = document.querySelectorAll(".fpo-tab-content");

  tabButtons.forEach((button) => {
    if (button.dataset.listenerAttached) return;

    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      button.classList.add("active");
      const targetTab = document.getElementById(button.dataset.tab);
      if (targetTab) {
        targetTab.style.display = "block";
        targetTab.classList.add("active");
      }
    });
    button.dataset.listenerAttached = true;
  });
}

function initBmiCalc() {
  const calculateBtn = document.getElementById("calculateBmiBtn");
  if (calculateBtn) {
    calculateBtn.onclick = calculateBMI;
  }
}

function calculateBMI() {
  const height = parseFloat(document.getElementById("bmiHeight").value);
  const weight = parseFloat(document.getElementById("bmiWeight").value);
  const resultEl = document.getElementById("bmiResult");
  const statusEl = document.getElementById("bmiStatus");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultEl.textContent = "0.0";
    statusEl.textContent = translations[currentLanguage]["fpo.bmi.prompt"];
    statusEl.className = "fpo-status-box";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  resultEl.textContent = bmi.toFixed(1);

  if (bmi < 18.5) {
    statusEl.textContent = translations[currentLanguage]["fpo.bmi.underweight"];
    statusEl.className = "fpo-status-box underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusEl.textContent = translations[currentLanguage]["fpo.bmi.normal"];
    statusEl.className = "fpo-status-box normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    statusEl.textContent = translations[currentLanguage]["fpo.bmi.overweight"];
    statusEl.className = "fpo-status-box overweight";
  } else {
    statusEl.textContent = translations[currentLanguage]["fpo.bmi.obese"];
    statusEl.className = "fpo-status-box obese";
  }
}

function initTdeeCalc() {
  const calculateBtn = document.getElementById("calculateTdeeBtn");
  if (calculateBtn) {
    calculateBtn.onclick = calculateTDEE;
  }
}

function calculateTDEE() {
  const age = parseFloat(document.getElementById("tdeeAge").value);
  const gender = document.getElementById("tdeeGender").value;
  const height = parseFloat(document.getElementById("tdeeHeight").value);
  const weight = parseFloat(document.getElementById("tdeeWeight").value);
  const activity = parseFloat(document.getElementById("tdeeActivity").value);

  if (!age || !height || !weight) return;

  let bmr = 0;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  const tdee = bmr * activity;

  document.getElementById("bmrResult").textContent = bmr.toFixed(0) + " kCal";
  document.getElementById("tdeeResult").innerHTML = `${tdee.toFixed(
    0
  )} <span class="kcal">kCal</span>`;
}

function initHeartRateCalc() {
  const calculateBtn = document.getElementById("calculateHrBtn");
  if (calculateBtn) {
    calculateBtn.onclick = calculateHeartRateZones;
  }
}

function calculateHeartRateZones() {
  const age = parseFloat(document.getElementById("hrAge").value);
  if (!age) return;

  const mhr = 220 - age;
  document.getElementById(
    "mhrResult"
  ).innerHTML = `${mhr} <span class="bpm">BPM</span>`;

  const zones = [
    { key: "fpo.hr.zone1", range: [0.5, 0.6] },
    { key: "fpo.hr.zone2", range: [0.6, 0.7] },
    { key: "fpo.hr.zone3", range: [0.7, 0.8] },
    { key: "fpo.hr.zone4", range: [0.8, 0.9] },
    { key: "fpo.hr.zone5", range: [0.9, 1.0] },
  ];

  const listEl = document.getElementById("hrZonesList");
  listEl.innerHTML = "";

  zones.forEach((zone) => {
    const minBpm = (mhr * zone.range[0]).toFixed(0);
    const maxBpm = (mhr * zone.range[1]).toFixed(0);
    const zoneName =
      translations[currentLanguage][zone.key] ||
      `Zone (${zone.range[0] * 100}%)`;

    const zoneEl = document.createElement("div");
    zoneEl.className = "hr-zone";
    zoneEl.style.setProperty("--zone-color", getZoneColor(zone.key));
    zoneEl.innerHTML = `
      <span>${zoneName}</span>
      <strong>${minBpm}-${maxBpm} BPM</strong>
    `;
    listEl.appendChild(zoneEl);
  });
}

function getZoneColor(key) {
  if (key.includes("zone1")) return "#4ade80";
  if (key.includes("zone2")) return "#a3e635";
  if (key.includes("zone3")) return "#facc15";
  if (key.includes("zone4")) return "#fb923c";
  if (key.includes("zone5")) return "#f87171";
  return "#e2e8f0";
}

let siIsInitialized = false;

function initSiCenter() {
  if (siIsInitialized) return;

  const addTableBtn = document.getElementById("siAddTableBtn");
  const tableNameInput = document.getElementById("siTableNameInput");
  const clearCanvasBtn = document.getElementById("siClearCanvasBtn");
  const canvas = document.getElementById("siCanvas");

  addTableBtn.addEventListener("click", () => {
    const tableName = tableNameInput.value.trim();
    if (tableName) {
      createErdTable(tableName, canvas);
      tableNameInput.value = "";
    }
  });

  clearCanvasBtn.addEventListener("click", () => {
    if (confirm("Anda yakin ingin menghapus semua tabel dari kanvas?")) {
      canvas.innerHTML = "";
    }
  });

  siIsInitialized = true;
}

function createErdTable(name, canvas) {
  const tableId = `table-${Date.now()}`;
  const tableEl = document.createElement("div");
  tableEl.className = "erd-table";
  tableEl.id = tableId;
  tableEl.style.left = `${Math.floor(Math.random() * 100) + 20}px`;
  tableEl.style.top = `${Math.floor(Math.random() * 100) + 20}px`;

  const fieldNameKey =
    translations[currentLanguage]["si.fieldName"] || "Field Name";
  const fieldTypeKey =
    translations[currentLanguage]["si.fieldType"] || "Data Type";
  const addFieldKey =
    translations[currentLanguage]["si.addField"] || "Add Field";

  tableEl.innerHTML = `
    <div class="erd-table-header" id="${tableId}-header">
      <span>${name}</span>
      <button class="delete-table-btn" onclick="document.getElementById('${tableId}').remove()">×</button>
    </div>
    <div class="erd-table-body" id="${tableId}-body">
      <div class="erd-table-field">
        <span>id</span>
        <span class="field-type">INT</span>
      </div>
    </div>
    <div class="erd-table-footer">
      <input type="text" id="${tableId}-field-name" placeholder="${fieldNameKey}">
      <input type="text" id="${tableId}-field-type" placeholder="${fieldTypeKey}" value="VARCHAR(255)">
      <button id="${tableId}-add-field-btn" title="${addFieldKey}">+</button>
    </div>
  `;

  canvas.appendChild(tableEl);

  makeElementDraggable(tableEl);

  document
    .getElementById(`${tableId}-add-field-btn`)
    .addEventListener("click", () => {
      const fieldNameInput = document.getElementById(`${tableId}-field-name`);
      const fieldTypeInput = document.getElementById(`${tableId}-field-type`);
      const fieldName = fieldNameInput.value.trim();
      const fieldType = fieldTypeInput.value.trim() || "VARCHAR(255)";

      if (fieldName) {
        const fieldEl = document.createElement("div");
        fieldEl.className = "erd-table-field";
        fieldEl.innerHTML = `
        <span>${fieldName}</span>
        <span class="field-type">${fieldType.toUpperCase()}</span>
      `;
        document.getElementById(`${tableId}-body`).appendChild(fieldEl);
        fieldNameInput.value = "";
        fieldTypeInput.value = "VARCHAR(255)";
      }
    });
}

function makeElementDraggable(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const header = document.getElementById(elmnt.id + "-header");

  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

    if (window.miLines) {
      window.miLines.forEach((line) => {
        try {
          line.position(); // Perintahkan garis untuk update posisi
        } catch (err) {
          // Abaikan error jika garis sudah dihapus
        }
      });
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let miIsInitialized = false;
let miLines = [];
let miSelectedSocket = null;

function initMiCenter() {
  if (miIsInitialized) return;

  const canvas = document.getElementById("miCanvas");

  document
    .getElementById("miDownloadFlowchartBtn")
    .addEventListener("click", downloadFlowchart);

  document.getElementById("miAddTerminator").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.terminator"] || "Terminator";
    createFlowchartShape("terminator", text, canvas);
  });

  document.getElementById("miAddProcess").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.process"] || "Proses";
    createFlowchartShape("process", text, canvas);
  });

  document
    .getElementById("miAddAlternateProcess")
    .addEventListener("click", () => {
      const text =
        translations[currentLanguage]["mi.alternateProcess"] ||
        "Proses Pilihan";
      createFlowchartShape("alternate-process", text, canvas);
    });

  document.getElementById("miAddDecision").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.decision"] || "Keputusan";
    createFlowchartShape("decision", text, canvas);
  });

  document.getElementById("miAddInputOutput").addEventListener("click", () => {
    const text =
      translations[currentLanguage]["mi.inputOutput"] || "Input/Output";
    createFlowchartShape("inputoutput", text, canvas);
  });

  document.getElementById("miAddPredefined").addEventListener("click", () => {
    const text =
      translations[currentLanguage]["mi.predefinedProcess"] || "Predefined";
    createFlowchartShape("predefined", text, canvas);
  });

  document
    .getElementById("miAddInternalStorage")
    .addEventListener("click", () => {
      const text =
        translations[currentLanguage]["mi.internalStorage"] || "Storage";
      createFlowchartShape("internal-storage", text, canvas);
    });

  document.getElementById("miAddDocument").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.document"] || "Dokumen";
    createFlowchartShape("document", text, canvas);
  });

  document
    .getElementById("miAddMultiDocument")
    .addEventListener("click", () => {
      const text =
        translations[currentLanguage]["mi.multiDocument"] || "Multi-Dokumen";
      createFlowchartShape("multi-document", text, canvas);
    });

  document.getElementById("miAddPreparation").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.preparation"] || "Preparasi";
    createFlowchartShape("preparation", text, canvas);
  });

  document.getElementById("miAddManualInput").addEventListener("click", () => {
    const text =
      translations[currentLanguage]["mi.manualInput"] || "Manual Input";
    createFlowchartShape("manual-input", text, canvas);
  });

  document.getElementById("miAddManualOp").addEventListener("click", () => {
    const text =
      translations[currentLanguage]["mi.manualop"] || "Manual Operasi";
    createFlowchartShape("manualop", text, canvas);
  });

  document.getElementById("miAddOnPageRef").addEventListener("click", () => {
    const text = "A";
    createFlowchartShape("onpageref", text, canvas);
  });

  document.getElementById("miAddOffPageRef").addEventListener("click", () => {
    const text = "B";
    createFlowchartShape("offpageref", text, canvas);
  });

  document.getElementById("miAddCard").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.card"] || "Card";
    createFlowchartShape("card", text, canvas);
  });

  document.getElementById("miAddPunchedTape").addEventListener("click", () => {
    const text =
      translations[currentLanguage]["mi.punchedTape"] || "Punched Tape";
    createFlowchartShape("punched-tape", text, canvas);
  });

  document
    .getElementById("miAddSummingJunction")
    .addEventListener("click", () => {
      const text = "";
      createFlowchartShape("summing-junction", text, canvas);
    });

  document.getElementById("miAddOr").addEventListener("click", () => {
    const text = "";
    createFlowchartShape("or", text, canvas);
  });

  document.getElementById("miAddCollate").addEventListener("click", () => {
    const text = "";
    createFlowchartShape("collate", text, canvas);
  });

  document.getElementById("miAddSort").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.sort"] || "Sort";
    createFlowchartShape("sort", text, canvas);
  });

  document.getElementById("miAddExtract").addEventListener("click", () => {
    const text = "";
    createFlowchartShape("extract", text, canvas);
  });

  document.getElementById("miAddMerge").addEventListener("click", () => {
    const text = "";
    createFlowchartShape("merge", text, canvas);
  });

  document.getElementById("miAddStorageData").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.storageData"] || "Storage";
    createFlowchartShape("storage-data", text, canvas);
  });

  document.getElementById("miAddDelay").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.delay"] || "Delay";
    createFlowchartShape("delay", text, canvas);
  });

  document
    .getElementById("miAddSequentialStorage")
    .addEventListener("click", () => {
      const text = "";
      createFlowchartShape("sequential-storage", text, canvas);
    });

  document
    .getElementById("miAddDirectStorage")
    .addEventListener("click", () => {
      const text = "DB";
      createFlowchartShape("direct-storage", text, canvas);
    });

  document.getElementById("miAddDisplay").addEventListener("click", () => {
    const text = translations[currentLanguage]["mi.display"] || "Display";
    createFlowchartShape("display", text, canvas);
  });

  document
    .getElementById("miCodeToFlowchartBtn")
    .addEventListener("click", openCodeToFlowchartModal);

  document
    .getElementById("miAiFlowchartBtn")
    .addEventListener("click", openAiFlowchartModal);

  document.getElementById("miClearCanvasBtn").addEventListener("click", () => {
    if (confirm("Anda yakin ingin menghapus semua bentuk dari kanvas?")) {
      canvas.innerHTML = "";
      miLines.forEach((line) => line.remove());
      miLines = [];
    }
  });

  document
    .getElementById("miDownloadFlowchartBtn")
    .addEventListener("click", downloadFlowchart);

  document
    .getElementById("miAiFlowchartBtn")
    .addEventListener("click", openAiFlowchartModal);

  canvas.addEventListener("click", (e) => {
    if (e.target === canvas) {
      if (miSelectedSocket) {
        miSelectedSocket.classList.remove("selected");
        miSelectedSocket = null;
      }
    }
  });

  miIsInitialized = true;
}

function createFlowchartShape(type, text, canvas) {
  const shapeId = `shape-${Date.now()}`;
  const shapeEl = document.createElement("div");

  shapeEl.className = `flowchart-shape shape-${type}`;
  shapeEl.id = shapeId;
  shapeEl.style.left = `${Math.floor(Math.random() * 100) + 20}px`;
  shapeEl.style.top = `${Math.floor(Math.random() * 100) + 20}px`;

  shapeEl.innerHTML = `
    <div class="flowchart-header" id="${shapeId}-header"></div>
    <div class="shape-text" contenteditable="true">${text}</div>
    <div class="flowchart-socket socket-top" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-bottom" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-left" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-right" data-shape-id="${shapeId}"></div>
  `;

  canvas.appendChild(shapeEl);

  makeFlowchartDraggable(shapeEl);

  shapeEl.querySelectorAll(".flowchart-socket").forEach((socket) => {
    socket.addEventListener("click", (e) => {
      e.stopPropagation();
      handleSocketClick(socket, shapeId);
    });
  });
}

function handleSocketClick(socketEl, shapeId) {
  if (!miSelectedSocket) {
    socketEl.classList.add("selected");
    miSelectedSocket = socketEl;
  } else {
    if (miSelectedSocket === socketEl) {
      socketEl.classList.remove("selected");
      miSelectedSocket = null;
      return;
    }

    const startEl = miSelectedSocket;
    const endEl = socketEl;

    const line = new LeaderLine(startEl, endEl, {
      color: "#64748b",
      size: 3,
      path: "grid",
      endPlug: "arrow1",
      startSocket: "auto",
      endSocket: "auto",
      parent: document.getElementById("miCanvas"),
    });

    miLines.push(line);

    startEl.classList.remove("selected");
    miSelectedSocket = null;
  }
}

function makeFlowchartDraggable(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const header = document.getElementById(elmnt.id + "-header");

  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Hitung pergeseran kursor
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Set posisi baru elemen
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

    // ▼▼▼ PERBAIKAN DI SINI: Hapus 'window.' ▼▼▼
    // Pastikan variabel miLines ada dan memiliki isi
    if (typeof miLines !== "undefined" && miLines.length > 0) {
      miLines.forEach((line) => {
        try {
          // Paksa LeaderLine untuk menghitung ulang posisi start & end
          line.position();
        } catch (err) {
          // Abaikan jika garis error
        }
      });
    }
    // ▲▲▲ AKHIR PERBAIKAN ▲▲▲
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function downloadFlowchart() {
  const node = document.getElementById("miCanvas");

  showNotification("Memproses gambar flowchart...", "info");

  if (typeof miLines !== "undefined") {
    miLines.forEach((line) => {
      try {
        line.position();
      } catch (e) {}
    });
  }
  domtoimage
    .toPng(node, {
      bgcolor: document.body.classList.contains("dark-mode")
        ? "#0f172a"
        : "#ffffff",
      width: node.scrollWidth,
      height: node.scrollHeight,
      style: {
        transform: "scale(1)",
        "transform-origin": "top left",
      },
    })
    .then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "flowchart-saya.png";
      link.href = dataUrl;
      link.click();
      showNotification("Flowchart berhasil diunduh!", "success");
    })
    .catch(function (error) {
      console.error("Gagal download:", error);
      showNotification("Gagal mengunduh flowchart.", "error");
    });
}

window.downloadFlowchart = downloadFlowchart;

const wrapperEl = document.getElementById("miCanvasWrapper");

wrapperEl.addEventListener("scroll", () => {
  miLines.forEach((line) => {
    try {
      line.position();
    } catch {}
  });
});

let infoIsInitialized = false;

function initInfoCenter() {
  if (infoIsInitialized) {
    applyTranslations();
    return;
  }

  initInfoTabs();
  populateEvents();
  populateAnnouncements();
  initCampusMap();

  infoIsInitialized = true;
}

function initInfoTabs() {
  const tabButtons = document.querySelectorAll(".info-tab-btn");
  const tabContents = document.querySelectorAll(".info-tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      button.classList.add("active");
      const targetTab = document.getElementById(button.dataset.tab);
      if (targetTab) {
        targetTab.style.display = "block";
        targetTab.classList.add("active");
      }
    });
  });
}

function populateEvents() {
  const container = document.getElementById("eventsListContainer");
  if (!container) return;

  container.innerHTML = "";

  campusInfoData.events.forEach((event) => {
    const eventEl = document.createElement("div");
    eventEl.className = "exam-card";

    const eventDate = new Date(event.date);
    const dateStr = eventDate
      .toLocaleDateString(currentLanguage, { day: "numeric", month: "short" })
      .toUpperCase();

    const statusKey = `schedule.${event.status}`;
    const statusText = translations[currentLanguage][statusKey] || "Upcoming";

    eventEl.innerHTML = `
      <div class="exam-time">
        <span class="exam-date">${dateStr}</span>
        <span class="exam-clock">${event.time}</span>
      </div>
      <div class="exam-info">
        <h4 class="exam-name">${event.title}</h4>
        <div class="exam-details">
          <span class="exam-room"><b data-i18n="info.location">Lokasi:</b> ${event.location}</span>
          <span class="exam-lecturer"><b data-i18n="info.organizer">Penyelenggara:</b> ${event.organizer}</span>
        </div>
      </div>
      <div class="exam-action">
        <div class="exam-status ${event.status}" data-i18n="${statusKey}">
          ${statusText}
        </div>
      </div>
    `;
    container.appendChild(eventEl);
  });

  applyTranslations();
}

function populateAnnouncements() {
  const container = document.getElementById("announcementsListContainer");
  if (!container) return;

  container.innerHTML = "";

  campusInfoData.announcements.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "announcement-card";

    const itemDate = new Date(item.date);
    const dateStr = itemDate.toLocaleDateString(currentLanguage, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const tagText = translations[currentLanguage][item.tagKey] || item.tag;

    cardEl.innerHTML = `
      <h3 class="announcement-title">${item.title}</h3>
      <p class="announcement-excerpt">${item.excerpt}</p>
      <div class="announcement-footer">
        <span class="announcement-date">${dateStr}</span>
        <span class="announcement-tag" data-i18n="${item.tagKey}">${tagText}</span>
      </div>
    `;
    container.appendChild(cardEl);
  });

  applyTranslations();
}

function initCampusMap() {
  const hotspots = document.querySelectorAll(".map-hotspot");
  const popup = document.getElementById("mapPopup");
  const titleEl = document.getElementById("popupTitle");
  const addressEl = document.getElementById("popupAddress");
  const linkEl = document.getElementById("popupLink");
  const closeBtn = document.getElementById("popupClose");
  const mapImage = document.getElementById("campusMapImage");

  // ðŸ"¥ DEBUGGING - CEK APAKAH ELEMEN ADA
  console.log("Map elements:", {
    hotspots: hotspots.length,
    popup: !!popup,
    mapImage: !!mapImage,
  });

  if (!popup || !closeBtn || !mapImage) {
    console.error("Map elements not found!");
    return;
  }

  // Event listener untuk setiap hotspot (tombol 1 dan 2)
  hotspots.forEach((spot, index) => {
    console.log(`Setting up hotspot ${index + 1}`);

    spot.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Hotspot clicked:", spot.dataset.titleKey);

      const titleKey = spot.dataset.titleKey;
      const address = spot.dataset.address;

      // Ambil teks dari translations
      const title = translations[currentLanguage][titleKey] || "Lokasi Kampus";
      const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        address
      )}`;

      // Update popup content
      titleEl.textContent = title;
      addressEl.textContent = address;
      linkEl.href = mapsUrl;

      // Tampilkan popup
      popup.classList.add("active");
      console.log("Popup should be visible now");
    });
  });

  // Tombol close popup
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.remove("active");
    console.log("Popup closed");
  });

  // Klik di gambar peta = tutup popup
  mapImage.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  console.log("Campus map initialized successfully!");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("ðŸ", "Page loaded, checkingInfoKampustab...");

  // Cek apakah section info-center sedang aktif
  const infoSection = document.getElementById("info-center");
  if (infoSection && infoSection.style.display !== "none") {
    console.log("âœ… Info section active, initializing map");
    setTimeout(() => {
      initCampusMap();
    }, 500);
  }

  // Listener untuk FAB button Info Kampus
  const infoFab = document.querySelector('[data-section="info-center"]');
  if (infoFab) {
    infoFab.addEventListener("click", () => {
      console.log("ðŸ—ºï¸ Info Kampus opened via navigation");
      setTimeout(() => {
        initCampusMap();
      }, 200);
    });
  }
});

let pomodoroIsInitialized = false;
let pomodoroTimer;
let pomodoroCurrentMode = "pomodoro";
let pomodoroTimeLeft = 1500;
let pomodoroIsRunning = false;
let pomodoroCycle = 0;

const POMODORO_TIMES = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 900,
};

function initStudyCenter() {
  if (pomodoroIsInitialized) return;

  document.getElementById("pomodoroStart").onclick = startPomodoro;
  document.getElementById("pomodoroPause").onclick = pausePomodoro;
  document.getElementById("pomodoroReset").onclick = resetPomodoro;

  document.querySelectorAll(".pomodoro-mode-btn").forEach((btn) => {
    btn.onclick = () => {
      switchPomodoroMode(btn.dataset.mode);
    };
  });

  updateTimerDisplay();
  updatePomodoroModeDisplay();

  pomodoroIsInitialized = true;
}

function startPomodoro() {
  pomodoroIsRunning = true;
  document.getElementById("pomodoroStart").style.display = "none";
  document.getElementById("pomodoroPause").style.display = "inline-block";

  pomodoroTimer = setInterval(() => {
    pomodoroTimeLeft--;
    updateTimerDisplay();

    if (pomodoroTimeLeft <= 0) {
      clearInterval(pomodoroTimer);
      playAlarmSound();

      if (pomodoroCurrentMode === "pomodoro") {
        pomodoroCycle++;
        if (pomodoroCycle % 4 === 0) {
          switchPomodoroMode("longBreak");
          alert(translations[currentLanguage]["pomodoro.alarm.pomodoro"]);
        } else {
          switchPomodoroMode("shortBreak");
          alert(translations[currentLanguage]["pomodoro.alarm.pomodoro"]);
        }
      } else {
        switchPomodoroMode("pomodoro");
        alert(translations[currentLanguage]["pomodoro.alarm.break"]);
      }
    }
  }, 1000);
}

function pausePomodoro() {
  pomodoroIsRunning = false;
  clearInterval(pomodoroTimer);
  document.getElementById("pomodoroStart").style.display = "inline-block";
  document.getElementById("pomodoroPause").style.display = "none";
}

function resetPomodoro() {
  pausePomodoro();
  pomodoroTimeLeft = POMODORO_TIMES[pomodoroCurrentMode];
  updateTimerDisplay();
}

function switchPomodoroMode(mode) {
  pausePomodoro();
  pomodoroCurrentMode = mode;
  pomodoroTimeLeft = POMODORO_TIMES[mode];

  document.querySelectorAll(".pomodoro-mode-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  updateTimerDisplay();
  updatePomodoroModeDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(pomodoroTimeLeft / 60);
  const seconds = pomodoroTimeLeft % 60;
  document.getElementById("pomodoroTime").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function updatePomodoroModeDisplay() {
  const modeKey = `pomodoro.mode.${pomodoroCurrentMode}`;
  document.getElementById("pomodoroMode").textContent =
    translations[currentLanguage][modeKey];
  document.getElementById("pomodoroMode").dataset.i18n = modeKey;
}

function playAlarmSound() {
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 1
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
  } catch (e) {
    console.error("Gagal memutar suara alarm:", e);
  }
}

let roomFinderInitialized = false;

function initRoomFinder() {
  if (roomFinderInitialized) {
    updateRoomFinder();
    return;
  }

  updateRoomFinder();

  setInterval(updateRoomFinder, 60000);

  roomFinderInitialized = true;
}

function updateRoomFinder() {
  const now = new Date();
  const currentDayIndex = now.getDay();
  const currentTime = now.getHours() * 100 + now.getMinutes();

  const daysMap = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDayKey = daysMap[currentDayIndex];

  let allKnownRooms = new Set();
  let occupiedRooms = new Map();

  const scheduleDays = document.querySelectorAll(".schedule-day");
  if (scheduleDays.length === 0) {
    console.error("Data Jadwal (elemen .schedule-day) tidak ditemukan.");
    return;
  }

  scheduleDays.forEach((dayEl) => {
    const dayKey = dayEl.dataset.day;
    const classes = dayEl.querySelectorAll(".class-item");

    classes.forEach((classEl) => {
      const room = classEl
        .querySelector(".class-room")
        .textContent.replace("Room: ", "")
        .trim();
      allKnownRooms.add(room);

      if (dayKey === currentDayKey) {
        const startTimeStr = classEl
          .querySelector(".time-start")
          .textContent.replace(":", "");
        const endTimeStr = classEl
          .querySelector(".time-end")
          .textContent.replace(":", "");
        const startTime = parseInt(startTimeStr, 10);
        const endTime = parseInt(endTimeStr, 10);

        if (currentTime >= startTime && currentTime < endTime) {
          const courseName = classEl
            .querySelector(".class-name")
            .textContent.trim();
          occupiedRooms.set(room, {
            course: courseName,
            end: classEl.querySelector(".time-end").textContent,
          });
        }
      }
    });
  });

  const availableList = document.getElementById("availableRoomsList");
  const inUseList = document.getElementById("inUseRoomsList");

  availableList.innerHTML = "";
  inUseList.innerHTML = "";

  let availableCount = 0;
  let inUseCount = 0;

  allKnownRooms.forEach((room) => {
    if (occupiedRooms.has(room)) {
      const details = occupiedRooms.get(room);
      inUseList.appendChild(
        createRoomCard(
          room,
          "in-use",
          `${
            translations[currentLanguage]["roomfinder.occupied"] ||
            "Occupied by"
          } ${details.course}`,
          `${
            translations[currentLanguage]["roomfinder.untilTime"] || "until"
          } ${details.end}`
        )
      );
      inUseCount++;
    } else {
      const nextClassTime = findNextClassForRoom(
        scheduleDays,
        currentDayKey,
        room,
        currentTime
      );
      availableList.appendChild(
        createRoomCard(
          room,
          "available",
          `${
            translations[currentLanguage]["roomfinder.until"] ||
            "Available until"
          } ${nextClassTime}`,
          ""
        )
      );
      availableCount++;
    }
  });

  document.getElementById("availableRoomCount").textContent = availableCount;
  document.getElementById("inUseRoomCount").textContent = inUseCount;
}

function findNextClassForRoom(scheduleDays, currentDayKey, room, currentTime) {
  let nextStartTime = "24:00";

  const todaySchedule = document.querySelector(
    `.schedule-day[data-day="${currentDayKey}"]`
  );

  if (todaySchedule) {
    const classes = todaySchedule.querySelectorAll(".class-item");
    let soonestTime = 2400;

    classes.forEach((classEl) => {
      const classRoom = classEl
        .querySelector(".class-room")
        .textContent.replace("Room: ", "")
        .trim();
      if (classRoom === room) {
        const startTime = parseInt(
          classEl.querySelector(".time-start").textContent.replace(":", ""),
          10
        );
        if (startTime > currentTime && startTime < soonestTime) {
          soonestTime = startTime;
          nextStartTime = classEl.querySelector(".time-start").textContent;
        }
      }
    });
  }

  return nextStartTime === "24:00" ? "End of Day" : nextStartTime;
}

function createRoomCard(roomName, status, infoLine1, infoLine2) {
  const card = document.createElement("div");
  card.className = `room-card ${status}`;

  const statusText =
    status === "available"
      ? translations[currentLanguage]["roomfinder.available"] || "Available"
      : translations[currentLanguage]["roomfinder.inuse"] || "In Use";

  card.innerHTML = `
    <div class="room-card-header">
      <span class="room-name">${roomName}</span>
      <span class="room-status">${statusText}</span>
    </div>
    <p class="room-info">${infoLine1}</p>
    <p class="room-info">${infoLine2}</p>
  `;
  return card;
}

let ktmInitialized = false;

function initKTM() {
  const card = document.getElementById("studentCard");
  const downloadBtn = document.getElementById("downloadKtmBtn");

  const userJson = localStorage.getItem("currentUser");

  if (userJson) {
    const user = JSON.parse(userJson);

    if (document.getElementById("ktmName")) {
      document.getElementById("ktmName").textContent =
        user.fullName || "Nama Mahasiswa";
    }

    if (document.getElementById("ktmNim")) {
      document.getElementById("ktmNim").textContent = user.nim || "000000";
    }
    if (document.getElementById("ktmNimQr")) {
      document.getElementById("ktmNimQr").textContent = user.nim || "000000";
    }

    if (document.getElementById("ktmProdi")) {
      document.getElementById("ktmProdi").textContent =
        user.programStudi || "Umum";
    }

    if (document.getElementById("ktmPhoto")) {
      const initials = user.fullName
        ? user.fullName
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "M";
      document.getElementById("ktmPhoto").textContent = initials;
    }

    const qrContainer = document.getElementById("ktmQrCode");
    if (qrContainer && !qrContainer.innerHTML) {
      new QRCode(qrContainer, {
        text: user.nim || "2023001",
        width: 80,
        height: 80,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
  }

  if (!ktmInitialized) {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    downloadBtn.addEventListener("click", () => {
      processDownloadKTM();
    });

    ktmInitialized = true;
  }
}

function processDownloadKTM() {
  const card = document.getElementById("studentCard");

  const isBackVisible = card.classList.contains("is-flipped");

  const sourceElement = isBackVisible
    ? document.querySelector(".ktm-back")
    : document.querySelector(".ktm-front");

  showNotification("Sedang memproses gambar KTM...", "info");

  const clone = sourceElement.cloneNode(true);

  clone.style.transform = "none";
  clone.style.position = "fixed";
  clone.style.top = "-10000px";
  clone.style.left = "0";
  clone.style.width = "400px";
  clone.style.height = "250px";
  clone.style.borderRadius = "16px";
  clone.style.boxShadow = "none";
  clone.style.transition = "none";
  clone.style.backfaceVisibility = "visible";

  document.body.appendChild(clone);

  const options = {
    backgroundColor: null,
    scale: 3,
    logging: false,
    useCORS: true,
  };

  html2canvas(clone, options)
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `KTM_Digital_UCIC_${
        isBackVisible ? "Belakang" : "Depan"
      }.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      document.body.removeChild(clone);

      showNotification("KTM berhasil diunduh!", "success");
    })
    .catch((err) => {
      console.error(err);
      if (document.body.contains(clone)) document.body.removeChild(clone);
      showNotification("Gagal mengunduh KTM", "error");
    });
}

let marketInitialized = false;
let marketItems = JSON.parse(localStorage.getItem("marketItems") || "[]");

// Update Data Dummy dengan Deskripsi (Jika kosong/reset)
if (marketItems.length === 0) {
  marketItems = [
    {
      id: 1,
      name: "Buku Algoritma Dasar",
      price: 45000,
      category: "book",
      seller: "Budi",
      wa: "628123456789",
      description:
        "Buku bekas kondisi 90%. Tidak ada coretan, halaman lengkap. Cocok untuk semester 1.",
    },
    {
      id: 2,
      name: "Jasa Instal Ulang Laptop",
      price: 50000,
      category: "service",
      seller: "Andi",
      wa: "628987654321",
      description:
        "Melayani instal ulang Windows 10/11, Office, dan aplikasi standar kuliah. Bisa dipanggil ke kost sekitar kampus.",
    },
    {
      id: 3,
      name: "Mouse Logitech Silent",
      price: 80000,
      category: "electronics",
      seller: "Siti",
      wa: "62811223344",
      description:
        "Mouse wireless silent click. Baterai awet, dongle USB ada. Baru dipakai 1 bulan.",
    },
    {
      id: 4,
      name: "Nasi Kulit Syuurga",
      price: 20000,
      category: "food",
      seller: "Kantin Kejujuran",
      wa: "62855667788",
      description:
        "Paket nasi kulit ayam krispi + serundeng + sambal bawang. Bisa antar ke lobi FTI.",
    },
  ];
  localStorage.setItem("marketItems", JSON.stringify(marketItems));
}

// Icon SVG Mapping
const categoryIcons = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  electronics:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  service:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  other:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
};

function initMarketplace() {
  if (!marketInitialized) {
    const filterBtns = document.querySelectorAll(".market-filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderMarketplace(btn.dataset.category);
      });
    });

    document
      .getElementById("sellForm")
      .addEventListener("submit", handleSellSubmit);
    marketInitialized = true;
  }

  renderMarketplace("all");

  const allBtn = document.querySelector(
    '.market-filter-btn[data-category="all"]'
  );
  if (allBtn) {
    document
      .querySelectorAll(".market-filter-btn")
      .forEach((b) => b.classList.remove("active"));
    allBtn.classList.add("active");
  }
}

function renderMarketplace(category) {
  const container = document.getElementById("marketGrid");
  container.innerHTML = "";

  const items =
    category === "all"
      ? marketItems
      : marketItems.filter((item) => item.category === category);

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "market-card";
    // Tambahkan onclick untuk membuka detail
    card.style.cursor = "pointer";
    card.onclick = (e) => {
      // Jangan buka modal jika yang diklik adalah tombol WA
      if (!e.target.closest(".market-wa-btn")) {
        openProductDetail(item.id);
      }
    };

    const iconSvg = categoryIcons[item.category] || categoryIcons["other"];

    card.innerHTML = `
      <div class="market-img-placeholder">${iconSvg}</div>
      <div class="market-info">
        <div class="market-cat-badge">${item.category}</div>
        <h3 class="market-title">${item.name}</h3>
        <div class="market-price">Rp ${item.price.toLocaleString("id-ID")}</div>
        <div class="market-seller">
          <span>👤 ${item.seller}</span>
        </div>
        <button class="market-wa-btn" onclick="contactSeller('${item.wa}', '${
      item.name
    }')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          <span data-i18n="market.chat">Chat</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Fungsi Membuka Modal Detail Produk
function openProductDetail(id) {
  const item = marketItems.find((i) => i.id === id);
  if (!item) return;

  const modal = document.getElementById("productDetailModal");

  // Isi konten modal
  const iconSvg = categoryIcons[item.category] || categoryIcons["other"];
  document.getElementById("detailImagePlaceholder").innerHTML = iconSvg;

  document.getElementById("detailCategory").textContent = item.category;
  document.getElementById("detailName").textContent = item.name;
  document.getElementById("detailPrice").textContent =
    "Rp " + item.price.toLocaleString("id-ID");
  document.getElementById("detailSeller").textContent = item.seller;
  document.getElementById("detailWA").textContent = item.wa;
  document.getElementById("detailDescription").textContent =
    item.description || "Tidak ada deskripsi.";

  // Update tombol chat di modal
  const chatBtn = document.getElementById("detailChatBtn");
  chatBtn.onclick = () => contactSeller(item.wa, item.name);
  chatBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> Hubungi Penjual`;

  // Tampilkan modal
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeProductModal() {
  const modal = document.getElementById("productDetailModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function openSellModal() {
  const modal = document.getElementById("sellModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeSellModal() {
  const modal = document.getElementById("sellModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function handleSellSubmit(e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const newItem = {
    id: Date.now(),
    name: document.getElementById("sellName").value,
    price: parseInt(document.getElementById("sellPrice").value),
    category: document.getElementById("sellCategory").value,
    seller: user.fullName || "Mahasiswa",
    wa: document.getElementById("sellWA").value,
    description: "Produk baru dari " + (user.fullName || "Mahasiswa"),
  };

  marketItems.unshift(newItem);
  localStorage.setItem("marketItems", JSON.stringify(marketItems));

  closeSellModal();
  renderMarketplace("all");
  document.getElementById("sellForm").reset();
  showNotification(translations[currentLanguage]["market.success"], "success");
}

function contactSeller(wa, productName) {
  const text = `Halo, saya tertarik dengan produk "${productName}" yang Anda jual di Dashboard Mahasiswa.`;
  const url = `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Expose global functions
window.openSellModal = openSellModal;
window.closeSellModal = closeSellModal;
window.contactSeller = contactSeller;
window.openProductDetail = openProductDetail;
window.closeProductModal = closeProductModal;

const jobList = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Tokopedia",
    type: "internship",
    location: "Jakarta (Remote)",
    salary: "Paid",
  },
  {
    id: 2,
    title: "Junior Graphic Designer",
    company: "Gojek",
    type: "fulltime",
    location: "Jakarta",
    salary: "Negotiable",
  },
  {
    id: 3,
    title: "IT Support Staff",
    company: "Kampus UCIC",
    type: "parttime",
    location: "Cirebon",
    salary: "Rp 1.5jt",
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    company: "Bank BCA",
    type: "internship",
    location: "Jakarta",
    salary: "Paid",
  },
  {
    id: 5,
    title: "Social Media Admin",
    company: "Local Coffee Shop",
    type: "parttime",
    location: "Cirebon",
    salary: "Hourly",
  },
];

let careerInitialized = false;

function initCareerCenter() {
  if (!careerInitialized) {
    const filterBtns = document.querySelectorAll(".career-filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderJobs(btn.dataset.type);
      });
    });

    document.getElementById("applyForm").addEventListener("submit", (e) => {
      e.preventDefault();
      closeApplyModal();
      showNotification(
        translations[currentLanguage]["career.success"],
        "success"
      );
      e.target.reset();
    });

    careerInitialized = true;
  }
  renderJobs("all");
}

function renderJobs(filterType) {
  const container = document.getElementById("careerGrid");
  container.innerHTML = "";

  const filtered =
    filterType === "all"
      ? jobList
      : jobList.filter((j) => j.type === filterType);

  filtered.forEach((job) => {
    const card = document.createElement("div");
    card.className = "job-card";

    const logoText = job.company.substring(0, 2).toUpperCase();
    const btnText = translations[currentLanguage]["career.apply"];

    card.innerHTML = `
      <div class="job-header">
        <div class="company-logo">${logoText}</div>
        <span class="job-type-badge ${job.type}">${job.type}</span>
      </div>
      <div class="job-title">${job.title}</div>
      <div class="company-name">${job.company}</div>
      <div class="job-details">
        <div class="job-detail-item">📍 ${job.location}</div>
        <div class="job-detail-item">💰 ${job.salary}</div>
      </div>
      <button class="apply-btn" onclick="openApplyModal('${job.title}')">${btnText}</button>
    `;
    container.appendChild(card);
  });
}

function openApplyModal(jobTitle) {
  document.getElementById("applyJobTitle").textContent =
    "Position: " + jobTitle;
  const modal = document.getElementById("applyModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeApplyModal() {
  const modal = document.getElementById("applyModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}
window.openApplyModal = openApplyModal;
window.closeApplyModal = closeApplyModal;

let helpInitialized = false;
let voiceData = JSON.parse(localStorage.getItem("voiceData") || "[]");
let lfData = JSON.parse(localStorage.getItem("lfData") || "[]");

function initHelpCenter() {
  if (!helpInitialized) {
    const tabButtons = document.querySelectorAll(".help-tab-btn");
    const tabContents = document.querySelectorAll(".help-tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => {
          content.style.display = "none";
          content.classList.remove("active");
        });
        button.classList.add("active");
        document.getElementById(button.dataset.tab).style.display = "block";
      });
    });

    document
      .getElementById("voiceForm")
      .addEventListener("submit", handleVoiceSubmit);
    document
      .getElementById("lfForm")
      .addEventListener("submit", handleLfSubmit);

    helpInitialized = true;
  }
  renderVoiceHistory();
  renderLfItems();
}

function handleVoiceSubmit(e) {
  e.preventDefault();
  const newItem = {
    id: Date.now(),
    type: document.getElementById("voiceType").value,
    desc: document.getElementById("voiceDesc").value,
    status: "sent",
    date: new Date().toLocaleDateString(),
  };
  voiceData.unshift(newItem);
  localStorage.setItem("voiceData", JSON.stringify(voiceData));
  e.target.reset();
  renderVoiceHistory();
  showNotification(
    translations[currentLanguage]["help.voice.success"],
    "success"
  );
}

function renderVoiceHistory() {
  const list = document.getElementById("voiceList");
  list.innerHTML = "";
  voiceData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "voice-item";
    div.innerHTML = `
      <div class="voice-header">
        <span class="voice-type">${item.type}</span>
        <span class="voice-status ${item.status}">${item.status}</span>
      </div>
      <p class="voice-desc">${item.desc}</p>
      <small style="color:var(--text-secondary)">${item.date}</small>
    `;
    list.appendChild(div);
  });
}

function handleLfSubmit(e) {
  e.preventDefault();
  const newItem = {
    id: Date.now(),
    type: document.getElementById("lfType").value,
    name: document.getElementById("lfName").value,
    location: document.getElementById("lfLocation").value,
    contact: document.getElementById("lfContact").value,
    date: new Date().toLocaleDateString(),
  };
  lfData.unshift(newItem);
  localStorage.setItem("lfData", JSON.stringify(lfData));
  closeLfModal();
  e.target.reset();
  renderLfItems();
  showNotification("Post berhasil ditambahkan!", "success");
}

function renderLfItems() {
  const grid = document.getElementById("lfGrid");
  grid.innerHTML = "";
  lfData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "lf-card";
    div.innerHTML = `
      <span class="lf-badge ${item.type}">${item.type}</span>
      <div class="lf-title">${item.name}</div>
      <div class="lf-detail">📍 ${item.location}</div>
      <div class="lf-detail">📅 ${item.date}</div>
      <button class="lf-contact-btn" onclick="contactSeller('${item.contact}', '${item.name}')">
        Hubungi (WA)
      </button>
    `;
    grid.appendChild(div);
  });
}

function openLfModal() {
  const modal = document.getElementById("lfModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeLfModal() {
  const modal = document.getElementById("lfModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.openLfModal = openLfModal;
window.closeLfModal = closeLfModal;

function openCodeToFlowchartModal() {
  const modal = document.getElementById("codeToFlowchartModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeCodeToFlowchartModal() {
  const modal = document.getElementById("codeToFlowchartModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.openCodeToFlowchartModal = openCodeToFlowchartModal;
window.closeCodeToFlowchartModal = closeCodeToFlowchartModal;
window.generateFlowchartFromInput = generateFlowchartFromInput;

function generateFlowchartFromInput() {
  const code = document.getElementById("flowchartCodeInput").value;
  if (!code.trim()) return;

  const canvas = document.getElementById("miCanvas");

  canvas.innerHTML = "";
  miLines.forEach((line) => line.remove());
  miLines = [];

  const lines = code.split("\n").filter((line) => line.trim() !== "");

  let lastShape = null;
  let startX = 400;
  let startY = 50;
  let gapY = 120;
  let shapeCount = 0;

  lines.forEach((line) => {
    const text = line.trim();
    const lowerText = text.toLowerCase();

    // Filter: Abaikan baris kosong, komentar, atau kurung kurawal saja
    if (
      !text ||
      text === "{" ||
      text === "}" ||
      text.startsWith("//") ||
      text.startsWith("#") ||
      text.startsWith("/*")
    ) {
      return;
    }

    let type = "process";

    // 1. DETEKSI TERMINATOR (Start/End)
    if (
      // Umum
      lowerText.includes("start") ||
      lowerText.includes("stop") ||
      lowerText.includes("begin") ||
      lowerText.includes("end") ||
      // Python
      lowerText.startsWith("def ") ||
      lowerText.startsWith("return") ||
      // JS / C++ / C#
      lowerText.startsWith("function ") ||
      lowerText.includes("class ") ||
      lowerText.includes("void main") ||
      lowerText.includes("int main") ||
      lowerText.includes("static void main")
    ) {
      type = "terminator";
    }

    // 2. DETEKSI DECISION (Percabangan/Loop)
    else if (
      lowerText.startsWith("if") ||
      lowerText.startsWith("else") ||
      lowerText.startsWith("elif") ||
      lowerText.startsWith("while") ||
      lowerText.startsWith("for") ||
      lowerText.startsWith("do ") ||
      lowerText.startsWith("switch") ||
      lowerText.startsWith("case")
    ) {
      type = "decision";
    }

    // 3. DETEKSI INPUT
    else if (
      // Umum
      lowerText.includes("input") ||
      lowerText.includes("read") ||
      lowerText.includes("get") ||
      // JS
      lowerText.includes("prompt(") ||
      // C++
      lowerText.includes("cin >>") ||
      // C#
      lowerText.includes("console.readline") ||
      // Java
      lowerText.includes("scanner.next")
    ) {
      type = "inputoutput";
    }

    // 4. DETEKSI OUTPUT (Display)
    else if (
      // Umum
      lowerText.includes("print") ||
      lowerText.includes("display") ||
      lowerText.includes("output") ||
      // JS
      lowerText.includes("console.log") ||
      lowerText.includes("alert") ||
      // Python
      lowerText.startsWith("print(") ||
      // C++
      lowerText.includes("cout <<") ||
      // C#
      lowerText.includes("console.writeline") ||
      lowerText.includes("console.write") ||
      // Java
      lowerText.includes("system.out.print")
    ) {
      type = "display";
    }

    // 5. DEFAULT (Process)
    else {
      type = "process";
    }

    const shapeEl = createShapeForGenerator(
      type,
      text,
      startX,
      startY + shapeCount * gapY
    );

    if (lastShape) {
      connectShapes(lastShape, shapeEl);
    }

    lastShape = shapeEl;
    shapeCount++;
  });

  closeCodeToFlowchartModal();
  showNotification("Flowchart berhasil digenerate dari kode!", "success");
}

// Fungsi Helper Khusus untuk Generator (tanpa drag manual awal)
function createShapeForGenerator(type, text, x, y) {
  const canvas = document.getElementById("miCanvas");
  const shapeId = `shape-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const shapeEl = document.createElement("div");

  // Mapping tipe untuk class CSS yang sesuai
  let cssClass = type;
  if (type === "inputoutput") cssClass = "shape-inputoutput";
  if (type === "terminator") cssClass = "shape-terminator";
  if (type === "process") cssClass = "shape-process";
  if (type === "decision") cssClass = "shape-decision";
  if (type === "display") cssClass = "shape-display";

  // Fallback jika class spesifik tidak ada, gunakan nama tipe langsung
  if (!cssClass.startsWith("shape-")) cssClass = `shape-${type}`;

  shapeEl.className = `flowchart-shape ${cssClass}`;
  shapeEl.id = shapeId;
  shapeEl.style.left = `${x}px`;
  shapeEl.style.top = `${y}px`;

  shapeEl.innerHTML = `
    <div class="flowchart-header" id="${shapeId}-header"></div>
    <div class="shape-text" contenteditable="true">${text}</div>
    <div class="flowchart-socket socket-top" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-bottom" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-left" data-shape-id="${shapeId}"></div>
    <div class="flowchart-socket socket-right" data-shape-id="${shapeId}"></div>
  `;

  canvas.appendChild(shapeEl);
  makeFlowchartDraggable(shapeEl); // Tetap bisa didrag setelah digenerate

  // Re-attach socket listeners
  shapeEl.querySelectorAll(".flowchart-socket").forEach((socket) => {
    socket.addEventListener("click", (e) => {
      e.stopPropagation();
      handleSocketClick(socket, shapeId);
    });
  });

  return shapeEl;
}

function connectShapes(source, target) {
  const sourceSocket = source.querySelector(".socket-bottom");
  const targetSocket = target.querySelector(".socket-top");

  if (sourceSocket && targetSocket) {
    const line = new LeaderLine(sourceSocket, targetSocket, {
      color: "#64748b",
      size: 3,
      path: "straight", // Gunakan garis lurus untuk auto-layout vertikal
      endPlug: "arrow1",
      startSocket: "auto",
      endSocket: "auto",
      parent: document.getElementById("miCanvas"),
    });
    miLines.push(line);
  }
}

const availableCoursesSem5 = [
  {
    id: "M501",
    code: "TI501",
    name: "Mobile Programming",
    sks: 4,
    class: "A",
    schedule: "Senin, 08:00-11:30",
    quota: "35/40",
  },
  {
    id: "M502",
    code: "TI502",
    name: "Cloud Computing",
    sks: 3,
    class: "A",
    schedule: "Selasa, 13:00-15:30",
    quota: "30/40",
  },
  {
    id: "M503",
    code: "TI503",
    name: "Artificial Intelligence",
    sks: 3,
    class: "A",
    schedule: "Rabu, 08:00-10:30",
    quota: "38/40",
  },
  {
    id: "M504",
    code: "TI504",
    name: "Computer Security",
    sks: 3,
    class: "B",
    schedule: "Kamis, 10:00-12:30",
    quota: "20/40",
  },
  {
    id: "M505",
    code: "TI505",
    name: "Software Testing",
    sks: 3,
    class: "A",
    schedule: "Jumat, 09:00-11:30",
    quota: "32/40",
  },
  {
    id: "M506",
    code: "TI506",
    name: "Human Computer Interaction",
    sks: 3,
    class: "C",
    schedule: "Senin, 13:00-15:30",
    quota: "15/40",
  },
  {
    id: "M507",
    code: "TI507",
    name: "Technopreneurship",
    sks: 2,
    class: "A",
    schedule: "Sabtu, 08:00-10:00",
    quota: "40/50",
  },
  {
    id: "M508",
    code: "TI508",
    name: "Data Mining",
    sks: 3,
    class: "B",
    schedule: "Selasa, 08:00-10:30",
    quota: "10/40",
  },
];

let krsInitialized = false;
let selectedKRS = [];
let isKRSSubmitted = false;

function getUserKRSKey(type) {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const nim = user.nim || "guest";
  return `${type}_${nim}`;
}

function initKRS() {
  const draftKey = getUserKRSKey("krsDraft");
  const submitKey = getUserKRSKey("krsSubmitted");

  selectedKRS = JSON.parse(localStorage.getItem(draftKey) || "[]");
  isKRSSubmitted = localStorage.getItem(submitKey) === "true";

  renderKRSTable();
  updateKRSStatus();
  if (isKRSSubmitted) {
    showKRSResult();
  } else {
    document.getElementById("krsFormView").style.display = "block";
    document.getElementById("krsResultView").style.display = "none";
  }

  krsInitialized = true;
}

function renderKRSTable() {
  const tbody = document.getElementById("krsCourseList");
  if (!tbody) return;

  tbody.innerHTML = "";
  let totalSks = 0;

  availableCoursesSem5.forEach((course) => {
    const isSelected = selectedKRS.includes(course.id);
    if (isSelected) totalSks += course.sks;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="text-align: center;">
        <input type="checkbox" class="krs-checkbox" data-id="${
          course.id
        }" data-sks="${course.sks}" 
        ${isSelected ? "checked" : ""} onchange="toggleKrsCourse(this)">
      </td>
      <td>${course.code}</td>
      <td style="font-weight: 600;">${course.name}</td>
      <td>${course.sks}</td>
      <td>${course.class}</td>
      <td>${course.schedule}</td>
      <td>${course.quota}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("totalSksCounter").textContent = totalSks;
  updateSubmitButton(totalSks);
}

function toggleKrsCourse(checkbox) {
  const id = checkbox.dataset.id;
  const sks = parseInt(checkbox.dataset.sks);
  let currentTotal = parseInt(
    document.getElementById("totalSksCounter").textContent
  );

  if (checkbox.checked) {
    if (currentTotal + sks > 24) {
      alert("Maaf, batas maksimal adalah 24 SKS.");
      checkbox.checked = false;
      return;
    }
    selectedKRS.push(id);
    currentTotal += sks;
  } else {
    selectedKRS = selectedKRS.filter((item) => item !== id);
    currentTotal -= sks;
  }

  // Simpan ke kunci UNIK user
  localStorage.setItem(getUserKRSKey("krsDraft"), JSON.stringify(selectedKRS));

  document.getElementById("totalSksCounter").textContent = currentTotal;
  updateSubmitButton(currentTotal);
}

function updateSubmitButton(totalSks) {
  const btn = document.getElementById("submitKrsBtn");
  if (btn) btn.disabled = totalSks === 0;
}

function resetKRSSelection() {
  if (confirm("Reset semua pilihan?")) {
    selectedKRS = [];
    // Reset kunci UNIK user
    localStorage.setItem(getUserKRSKey("krsDraft"), "[]");
    renderKRSTable();
  }
}

function submitKRS() {
  if (selectedKRS.length === 0) return;

  if (confirm("Apakah Anda yakin ingin mengajukan KRS ini?")) {
    isKRSSubmitted = true;

    // Simpan status ke kunci UNIK user
    localStorage.setItem(getUserKRSKey("krsSubmitted"), "true");
    localStorage.setItem(getUserKRSKey("krsSubmissionTime"), Date.now());

    syncAllSystems();
    showNotification(
      "KRS berhasil! Data Keuangan & Akademik telah diperbarui.",
      "success"
    );
    showKRSResult();
    updateKRSStatus();

    updateClassScheduleFromKRS();
  }
}

function updateKRSStatus() {
  const statusText = document.getElementById("krsStatusText");
  const statusDot = document.querySelector("#krsStatusBadge .status-indicator");

  if (isKRSSubmitted) {
    statusText.textContent =
      translations[currentLanguage]["krs.status_submitted"];
    statusDot.className = "status-indicator submitted";
  } else {
    statusText.textContent = translations[currentLanguage]["krs.status_draft"];
    statusDot.className = "status-indicator pending";
  }
}

function showKRSResult() {
  document.getElementById("krsFormView").style.display = "none";
  document.getElementById("krsResultView").style.display = "block";

  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  document.getElementById("ksmName").textContent = user.fullName || "Mahasiswa";
  document.getElementById("ksmNim").textContent = user.nim || "000000";
  document.getElementById("ksmProdi").textContent = user.programStudi || "-";
  document.getElementById("ksmSignatureName").textContent =
    user.fullName || "Mahasiswa";
  document.getElementById("ksmDate").textContent =
    new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const tbody = document.getElementById("ksmTableBody");
  tbody.innerHTML = "";
  let total = 0;
  let no = 1;

  availableCoursesSem5.forEach((course) => {
    if (selectedKRS.includes(course.id)) {
      total += course.sks;
      const row = `<tr>
        <td style="text-align:center;">${no++}</td>
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td style="text-align:center;">${course.sks}</td>
        <td style="text-align:center;">${course.class}</td>
        <td>${course.schedule}</td>
      </tr>`;
      tbody.innerHTML += row;
    }
  });

  document.getElementById("ksmTotalSks").textContent = total;
}

function editKRS() {
  // Cek waktu berdasarkan kunci UNIK user
  const submissionTime = localStorage.getItem(
    getUserKRSKey("krsSubmissionTime")
  );

  if (submissionTime) {
    const timeNow = Date.now();
    const timeDiff = timeNow - parseInt(submissionTime);
    const fiveMinutes = 5 * 60 * 1000;

    if (timeDiff > fiveMinutes) {
      alert(
        "⛔ Batas waktu pengubahan (5 menit) sudah habis.\n\nKRS Anda sudah dikunci. Silakan hubungi Dosen Wali."
      );
      return;
    }
  }

  if (confirm("Masih dalam waktu toleransi 5 menit. Ingin mengubah KRS?")) {
    isKRSSubmitted = false;

    // Reset status di kunci UNIK user
    localStorage.setItem(getUserKRSKey("krsSubmitted"), "false");
    localStorage.removeItem(getUserKRSKey("krsSubmissionTime"));

    updateKRSStatus();
    document.getElementById("krsFormView").style.display = "block";
    document.getElementById("krsResultView").style.display = "none";
    renderKRSTable();
  }
}

function downloadKSM() {
  const element = document.getElementById("ksmDocument");
  showNotification("Mengunduh KSM...", "info");

  const opt = {
    margin: 10,
    filename: "KSM_Semester_5.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}

// Expose to window
window.resetKRSSelection = resetKRSSelection;
window.submitKRS = submitKRS;
window.toggleKrsCourse = toggleKrsCourse;
window.editKRS = editKRS;
window.downloadKSM = downloadKSM;

let citationInitialized = false;

function initCitationCenter() {
  if (!citationInitialized) {
    const typeSelect = document.getElementById("citeType");
    const generateBtn = document.getElementById("generateCiteBtn");

    typeSelect.addEventListener("change", (e) => {
      const type = e.target.value;
      document.getElementById("groupPublisher").style.display =
        type === "book" ? "block" : "none";
      document.getElementById("groupJournal").style.display =
        type === "journal" ? "block" : "none";
      document.getElementById("groupUrl").style.display =
        type === "website" ? "block" : "none";
    });

    generateBtn.addEventListener("click", generateCitation);
    citationInitialized = true;
  }
}

function generateCitation() {
  const type = document.getElementById("citeType").value;
  const last = document.getElementById("citeAuthorLast").value.trim();
  const first = document.getElementById("citeAuthorFirst").value.trim();
  const year = document.getElementById("citeYear").value.trim();
  const title = document.getElementById("citeTitle").value.trim();

  if (!last || !year || !title) {
    alert("Mohon lengkapi Nama, Tahun, dan Judul.");
    return;
  }

  let result = "";

  // Format APA: Last, F. M. (Year). Title.
  const authorPart = `${last}, ${first}.`;

  if (type === "book") {
    const publisher = document.getElementById("citePublisher").value.trim();
    // APA Book: Author, A. A. (Year). Title of work. Publisher.
    result = `${authorPart} (${year}). <i>${title}</i>. ${publisher}.`;
  } else if (type === "journal") {
    const journal = document.getElementById("citeJournal").value.trim();
    // APA Journal: Author, A. A. (Year). Title of article. Title of Periodical, volume number(issue number), pages.
    result = `${authorPart} (${year}). ${title}. <i>${journal}</i>.`;
  } else if (type === "website") {
    const url = document.getElementById("citeUrl").value.trim();
    // APA Web: Author, A. A. (Year, Month Date). Title of page. Site Name. URL
    result = `${authorPart} (${year}). <i>${title}</i>. Diakses dari ${url}`;
  }

  document.getElementById("citationOutput").innerHTML = result;
}

function copyCitation() {
  const text = document.getElementById("citationOutput").innerText;
  navigator.clipboard.writeText(text).then(() => {
    showNotification(
      translations[currentLanguage]["citation.copied"],
      "success"
    );
  });
}
window.copyCitation = copyCitation;

const dpaInfo = {
  name: "Bambang Sugiarto, M.Kom",
  phone: "6281234567890",
};

const skkmRules = {
  seminar: 10,
  wajib: 20,
  organisasi: 30,
  prestasi: 50,
};

let skkmInitialized = false;
let skkmData = [];

function initSKKM() {
  skkmData = JSON.parse(localStorage.getItem("skkmData") || "[]");

  if (!skkmInitialized) {
    const typeSelect = document.getElementById("skkmType");
    const pointsInput = document.getElementById("skkmPoints");

    if (typeSelect && pointsInput) {
      const updatePoints = () => {
        const selectedType = typeSelect.value;
        pointsInput.value = skkmRules[selectedType] || 0;
      };

      typeSelect.addEventListener("change", updatePoints);
      updatePoints();
    }

    const skkmForm = document.getElementById("skkmForm");
    if (skkmForm && !skkmForm.dataset.listenerAttached) {
      skkmForm.addEventListener("submit", handleSkkmSubmit);
      skkmForm.dataset.listenerAttached = "true";
    }

    skkmInitialized = true;
  }

  renderSKKM();
}

function renderSKKM() {
  const list = document.getElementById("skkmList");
  if (!list) return;

  skkmData = JSON.parse(localStorage.getItem("skkmData") || "[]");

  list.innerHTML = "";
  let totalPoints = 0;
  let countWajib = 0;
  let countPilihan = 0;

  skkmData.sort((a, b) => b.id - a.id);

  skkmData.forEach((item) => {
    totalPoints += parseInt(item.points);
    if (item.type === "wajib") countWajib++;
    else countPilihan++;

    const div = document.createElement("div");
    div.className = "skkm-item";

    const validateBtn =
      item.status === "pending"
        ? `<button class="validate-btn" onclick="contactDPA('${item.name}')">
           <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           Validasi DPA
         </button>`
        : "";

    div.innerHTML = `
      <div class="skkm-item-info">
        <h4>${item.name}</h4>
        <div class="skkm-meta">
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            ${item.type.toUpperCase()}
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${item.date}
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            ${item.level}
          </span>
        </div>
      </div>
      <div class="skkm-item-right">
        <div class="skkm-points">+${item.points} Poin</div>
        <span class="skkm-status ${item.status}">${
      item.status === "pending" ? "Menunggu" : "Valid"
    }</span>
        ${validateBtn}
      </div>
    `;
    list.appendChild(div);
  });

  const totalEl = document.getElementById("skkmTotalPoints");
  if (totalEl) totalEl.textContent = `${totalPoints} / 100 Poin`;

  const countWajibEl = document.getElementById("countWajib");
  if (countWajibEl) countWajibEl.textContent = countWajib;

  const countPilihanEl = document.getElementById("countPilihan");
  if (countPilihanEl) countPilihanEl.textContent = countPilihan;

  const percentage = Math.min(totalPoints, 100);
  const percentEl = document.getElementById("skkmPercentage");
  if (percentEl) percentEl.textContent = `${percentage}%`;

  const pathEl = document.getElementById("skkmProgressPath");
  if (pathEl) {
    pathEl.setAttribute("stroke-dasharray", `${percentage}, 100`);
    if (percentage >= 100) pathEl.style.stroke = "#10b981";
  }
}

function handleSkkmSubmit(e) {
  e.preventDefault();

  try {
    const nameVal = document.getElementById("skkmName").value.trim();
    const typeVal = document.getElementById("skkmType").value;
    const levelVal = document.getElementById("skkmLevel").value;
    const pointsVal = skkmRules[typeVal] || 0;

    if (!nameVal) {
      alert("Nama kegiatan harus diisi!");
      return false;
    }

    const newItem = {
      id: Date.now(),
      name: nameVal,
      type: typeVal,
      level: levelVal,
      points: pointsVal,
      status: "pending",
      date: new Date().toLocaleDateString(),
    };

    let currentData = JSON.parse(localStorage.getItem("skkmData") || "[]");

    const isDuplicate = currentData.some(
      (item) =>
        item.name === nameVal &&
        item.type === typeVal &&
        item.date === newItem.date
    );

    if (isDuplicate) {
      alert("Data kegiatan ini sudah ada!");
      return false;
    }

    currentData.push(newItem);
    localStorage.setItem("skkmData", JSON.stringify(currentData));

    skkmData = currentData;

    addSystemNotification(
      "SKKM Diunggah",
      `Sertifikat "${nameVal}" berhasil diunggah dan menunggu validasi.`,
      "info"
    );

    closeSkkmModal();
    document.getElementById("skkmForm").reset();

    const typeSelect = document.getElementById("skkmType");
    if (typeSelect) {
      typeSelect.value = "wajib";
      document.getElementById("skkmPoints").value = skkmRules["wajib"];
    }

    renderSKKM();

    if (typeof showNotification === "function") {
      showNotification("Data SKKM berhasil disimpan!", "success");
    }

    return false;
  } catch (error) {
    console.error("Error submit SKKM:", error);
    alert("Terjadi error: " + error.message);
  }
}

window.handleSkkmSubmit = handleSkkmSubmit;

function contactDPA(activityName) {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const nim = user.nim || "NIM";
  const name = user.fullName || "Mahasiswa";

  const message = `Assalamu'alaikum Bapak/Ibu Dosen Wali (${dpaInfo.name}).%0A%0ASaya ${name} (NIM: ${nim}) telah mengupload sertifikat kegiatan baru:%0A*${activityName}*%0A%0AMohon bantuannya untuk memvalidasi poin SKKM saya di sistem.%0ATerima kasih.`;

  window.open(`https://wa.me/${dpaInfo.phone}?text=${message}`, "_blank");
}

function openSkkmModal() {
  const modal = document.getElementById("skkmModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeSkkmModal() {
  const modal = document.getElementById("skkmModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.openSkkmModal = openSkkmModal;
window.closeSkkmModal = closeSkkmModal;
window.contactDPA = contactDPA;

function updateClassScheduleFromKRS() {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  days.forEach((day) => {
    const dayContainer = document.querySelector(
      `.schedule-day[data-day="${day}"] .class-list`
    );
    if (dayContainer) {
      dayContainer.innerHTML = `<p class="empty-schedule-msg" style="padding:1rem; color:var(--text-secondary); font-style:italic;">Tidak ada jadwal kelas.</p>`;
    }
  });

  const submitKey = getUserKRSKey("krsSubmitted");
  const isSubmitted = localStorage.getItem(submitKey) === "true";

  if (!isSubmitted) {
    updateScheduleSummary(0);
    return;
  }

  const draftKey = getUserKRSKey("krsDraft");
  const selectedIds = JSON.parse(localStorage.getItem(draftKey) || "[]");
  const myCourses = availableCoursesSem5.filter((course) =>
    selectedIds.includes(course.id)
  );

  if (myCourses.length > 0) {
    myCourses.forEach((course) => {
      const scheduleParts = course.schedule.split(", ");
      const dayNameIndo = scheduleParts[0];
      const timeRange = scheduleParts[1].split("-");
      const dayKey = getDayKeyFromIndo(dayNameIndo);

      const dayContainer = document.querySelector(
        `.schedule-day[data-day="${dayKey}"] .class-list`
      );

      if (dayContainer) {
        if (dayContainer.querySelector(".empty-schedule-msg")) {
          dayContainer.innerHTML = "";
        }

        const classItem = document.createElement("div");
        classItem.className = "class-item";
        const statusText = "Upcoming";
        const statusClass = "upcoming";

        classItem.innerHTML = `
            <div class="class-time">
              <span class="time-start">${timeRange[0]}</span>
              <span class="time-separator">-</span>
              <span class="time-end">${timeRange[1]}</span>
            </div>
            <div class="class-info">
              <h4 class="class-name">${course.name}</h4>
              <div class="class-details">
                <span class="class-room">Room: A-301</span>
                <span class="class-lecturer">${course.code} • ${course.class}</span>
              </div>
            </div>
            <div class="class-status ${statusClass}">
              ${statusText}
            </div>
          `;

        dayContainer.appendChild(classItem);
      }
    });
  }

  updateScheduleSummary(myCourses.length);
}

function getDayKeyFromIndo(dayName) {
  const map = {
    Senin: "monday",
    Selasa: "tuesday",
    Rabu: "wednesday",
    Kamis: "thursday",
    Jumat: "friday",
    Sabtu: "saturday",
    Minggu: "sunday",
  };
  return map[dayName] || "monday";
}

function updateScheduleSummary(totalClasses) {
  const totalEl = document.getElementById("totalClasses");
  if (totalEl) totalEl.textContent = totalClasses;

  if (document.getElementById("completedClasses"))
    document.getElementById("completedClasses").textContent = "0";
  if (document.getElementById("upcomingClasses"))
    document.getElementById("upcomingClasses").textContent = totalClasses;
}

function openAiFlowchartModal() {
  const modal = document.getElementById("aiFlowchartModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeAiFlowchartModal() {
  const modal = document.getElementById("aiFlowchartModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

async function generateFlowchartWithAI() {
  const promptInput = document.getElementById("aiFlowchartPrompt");
  const promptText = promptInput.value.trim();
  const btn = document.getElementById("btnGenerateAiFlow");

  if (!promptText) return;

  btn.innerHTML = "⏳ Sedang Berpikir...";
  btn.disabled = true;

  // 1. System Prompt Khusus (Agar AI membalas dengan JSON)
  const systemInstruction = `
    Anda adalah Flowchart Architect. Tugas Anda adalah mengubah deskripsi teks menjadi struktur data JSON untuk flowchart.
    
    Gunakan HANYA tipe shape berikut:
    - terminator (untuk Mulai/Selesai)
    - process (untuk tindakan/aksi)
    - decision (untuk percabangan IF/ELSE)
    - inputoutput (untuk Input/Output data)
    - display (untuk menampilkan pesan)
    - database (untuk simpan data)
    
    Format respon HARUS berupa Array JSON murni tanpa teks lain.
    Contoh format:
    [
      {"type": "terminator", "text": "Mulai"},
      {"type": "inputoutput", "text": "Input Email"},
      {"type": "decision", "text": "Email Valid?"},
      {"type": "process", "text": "Masuk Dashboard"},
      {"type": "terminator", "text": "Selesai"}
    ]
    
    Deskripsi User: "${promptText}"
  `;

  try {
    // 2. Panggil API Chat Anda
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: systemInstruction,
        context: "Flowchart Generation Mode",
        language: "id",
      }),
    });

    const data = await response.json();

    let aiContent = "";
    if (data.choices && data.choices[0]) {
      aiContent = data.choices[0].message.content;
    } else {
      throw new Error("Respon AI kosong");
    }

    // 3. Bersihkan Respon (Hapus markdown ```json jika ada)
    aiContent = aiContent
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // 4. Parsing JSON
    const flowSteps = JSON.parse(aiContent);

    if (!Array.isArray(flowSteps)) throw new Error("Format JSON salah");

    // 5. Gambar ke Kanvas
    renderAiFlowchart(flowSteps);

    closeAiFlowchartModal();
    showNotification("Flowchart berhasil dibuat oleh AI!", "success");
    promptInput.value = "";
  } catch (error) {
    console.error("AI Error:", error);
    alert("Gagal membuat flowchart. Coba deskripsi yang lebih spesifik.");
  } finally {
    btn.innerHTML = "✨ Generate";
    btn.disabled = false;
  }
}

function renderAiFlowchart(steps) {
  const canvas = document.getElementById("miCanvas");

  // Reset Kanvas
  canvas.innerHTML = "";
  miLines.forEach((line) => line.remove());
  miLines = [];

  let startX = 400;
  let startY = 50;
  let gapY = 130;
  let lastShape = null;

  steps.forEach((step, index) => {
    // Mapping tipe data AI ke class CSS kita jika beda
    let shapeType = step.type.toLowerCase();
    if (shapeType === "database") shapeType = "direct-storage"; // Mapping khusus

    // Gunakan fungsi generator yang sudah kita buat sebelumnya
    const shapeEl = createShapeForGenerator(
      shapeType,
      step.text,
      startX,
      startY + index * gapY
    );

    if (lastShape) {
      connectShapes(lastShape, shapeEl);
    }
    lastShape = shapeEl;
  });
}

// Pastikan window functions terekspos
window.openAiFlowchartModal = openAiFlowchartModal;
window.closeAiFlowchartModal = closeAiFlowchartModal;
window.generateFlowchartWithAI = generateFlowchartWithAI;

let libraryInitialized = false;
let libraryData = JSON.parse(localStorage.getItem("libraryData") || "[]");

if (libraryData.length === 0) {
  libraryData = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "textbook",
      isbn: "9780262033848",
      year: "2009",
      shelf: "A-01",
      status: "available",
      color: "#ef4444",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "textbook",
      isbn: "9780132350884",
      year: "2008",
      shelf: "A-02",
      status: "borrowed",
      color: "#3b82f6",
    },
    {
      id: 3,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      category: "textbook",
      isbn: "9780136042594",
      year: "2020",
      shelf: "B-05",
      status: "available",
      color: "#f59e0b",
    },
    {
      id: 4,
      title: "Jurnal Sistem Informasi Vol. 5",
      author: "Universitas CIC",
      category: "journal",
      isbn: "ISSN-1234",
      year: "2023",
      shelf: "J-10",
      status: "available",
      color: "#10b981",
    },
    {
      id: 5,
      title: "Analisis Sentimen Pengguna Twitter",
      author: "Budi Santoso (Alumni)",
      category: "thesis",
      isbn: "NIM-2019005",
      year: "2023",
      shelf: "S-01",
      status: "available",
      color: "#8b5cf6",
    },
    {
      id: 6,
      title: "Design Patterns",
      author: "Erich Gamma",
      category: "textbook",
      isbn: "9780201633610",
      year: "1994",
      shelf: "A-03",
      status: "available",
      color: "#ec4899",
    },
  ];
  localStorage.setItem("libraryData", JSON.stringify(libraryData));
}

function initLibrary() {
  if (!libraryInitialized) {
    const catBtns = document.querySelectorAll(".lib-cat-btn");
    catBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        catBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderLibrary(btn.dataset.cat);
      });
    });

    document
      .getElementById("librarySearchInput")
      .addEventListener("input", (e) => {
        renderLibrary("all", e.target.value);
      });

    libraryInitialized = true;
  }
  renderLibrary("all");
}

function renderLibrary(category, searchQuery = "") {
  const container = document.getElementById("libraryGrid");
  if (!container) return;

  container.innerHTML = "";

  let items = libraryData;

  if (category !== "all") {
    items = items.filter((item) => item.category === category);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q)
    );
  }

  // Ikon Buku SVG
  const bookSvg = `
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  `;

  items.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.onclick = () => openBookDetail(book.id);

    const statusText =
      translations[currentLanguage][`library.status.${book.status}`];
    const statusClass = book.status;

    card.innerHTML = `
      <div class="book-cover" style="background: ${book.color}15; color: ${book.color};">
        ${bookSvg}
        <div class="book-status-overlay ${statusClass}">${statusText}</div>
      </div>
      <div class="book-details">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function openBookDetail(id) {
  const book = libraryData.find((b) => b.id === id);
  if (!book) return;

  document.getElementById("modalBookTitle").textContent = book.title;
  document.getElementById("modalBookAuthor").textContent = book.author;
  document.getElementById("modalBookCat").textContent =
    book.category.toUpperCase();
  document.getElementById("modalBookISBN").textContent = book.isbn;
  document.getElementById("modalBookYear").textContent = book.year;
  document.getElementById("modalBookShelf").textContent = book.shelf;

  const statusEl = document.getElementById("modalBookStatus");
  const btn = document.getElementById("btnBorrowBook");
  const cover = document.getElementById("modalBookCover");

  // Set warna cover
  cover.style.background = `${book.color}20`;
  cover.style.color = book.color;

  statusEl.textContent =
    translations[currentLanguage][`library.status.${book.status}`];
  statusEl.className = `book-status-badge ${
    book.status === "available" ? "present" : "absent"
  }`;

  // LOGIKA TOMBOL
  if (book.status === "available") {
    btn.textContent = translations[currentLanguage]["library.borrow"];
    btn.className = "submit-task-btn";
    btn.disabled = false;
    // UBAH DISINI: Panggil openBorrowForm bukan toggleBookStatus
    btn.onclick = () => openBorrowForm(book.id);
  } else {
    btn.textContent = translations[currentLanguage]["library.return"];
    btn.className = "cancel-btn";
    btn.disabled = false;
    // Jika mengembalikan buku, langsung proses tanpa form
    btn.onclick = () => processReturnBook(book.id);
  }

  // Isi deskripsi dummy jika kosong
  document.getElementById("modalBookDesc").textContent =
    "Buku ini membahas tentang " +
    book.title +
    " secara mendalam dan komprehensif.";

  const modal = document.getElementById("bookDetailModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeBookModal() {
  const modal = document.getElementById("bookDetailModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function openBorrowForm(bookId) {
  // Tutup modal detail dulu
  closeBookModal();

  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  // Isi otomatis data mahasiswa
  document.getElementById("borrowBookId").value = bookId;
  document.getElementById("borrowName").value = user.fullName || "";
  document.getElementById("borrowNim").value = user.nim || "";
  document.getElementById("borrowEmail").value = user.email || "";
  document.getElementById("borrowPhone").value = ""; // Kosongkan no hp agar diisi manual

  // Buka modal form
  const modal = document.getElementById("borrowFormModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeBorrowModal() {
  const modal = document.getElementById("borrowFormModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

// 4. Inisialisasi Listener Form (Tambahkan di initLibrary atau global)
document.addEventListener("DOMContentLoaded", () => {
  const borrowForm = document.getElementById("borrowForm");
  if (borrowForm) {
    borrowForm.addEventListener("submit", handleBorrowSubmit);
  }
});

function handleBorrowSubmit(e) {
  e.preventDefault();

  const bookId = parseInt(document.getElementById("borrowBookId").value);
  const phone = document.getElementById("borrowPhone").value;
  const duration = document.getElementById("borrowDuration").value;

  const bookIndex = libraryData.findIndex((b) => b.id === bookId);

  if (bookIndex > -1) {
    // Update status buku
    libraryData[bookIndex].status = "borrowed";

    // Simpan perubahan ke localStorage
    localStorage.setItem("libraryData", JSON.stringify(libraryData));

    // Notifikasi dan Refresh
    showNotification(
      translations[currentLanguage]["library.borrow_success"],
      "success"
    );
    closeBorrowModal();

    // Refresh tampilan grid library
    const activeCatBtn = document.querySelector(".lib-cat-btn.active");
    const currentCat = activeCatBtn ? activeCatBtn.dataset.cat : "all";
    renderLibrary(currentCat);
  }
}

function processReturnBook(bookId) {
  if (confirm("Apakah Anda yakin ingin mengembalikan buku ini?")) {
    const bookIndex = libraryData.findIndex((b) => b.id === bookId);
    if (bookIndex > -1) {
      libraryData[bookIndex].status = "available";
      localStorage.setItem("libraryData", JSON.stringify(libraryData));

      showNotification(
        translations[currentLanguage]["library.success_return"],
        "success"
      );
      closeBookModal();

      const activeCatBtn = document.querySelector(".lib-cat-btn.active");
      const currentCat = activeCatBtn ? activeCatBtn.dataset.cat : "all";
      renderLibrary(currentCat);
    }
  }
}

function toggleBookStatus(id) {
  const book = libraryData.find((b) => b.id === id);
  if (book) {
    if (book.status === "available") {
      book.status = "borrowed";
      showNotification(
        translations[currentLanguage]["library.success_borrow"],
        "success"
      );
    } else {
      book.status = "available";
      showNotification(
        translations[currentLanguage]["library.success_return"],
        "success"
      );
    }
    localStorage.setItem("libraryData", JSON.stringify(libraryData));
    closeBookModal();
    renderLibrary(document.querySelector(".lib-cat-btn.active").dataset.cat);
  }
}

window.openBookDetail = openBookDetail;
window.closeBookModal = closeBookModal;
window.openBorrowForm = openBorrowForm;
window.closeBorrowModal = closeBorrowModal;

let thesisInitialized = false;

const academicRecord = {
  programLevel: "S1",
  totalSksLulus: 140,
  ipk: 3.42,
  jumlahNilaiD: 1,
  jumlahNilaiE: 0,
};

function initThesis() {
  const financeStatus = financialData.summary.status;

  const minSks = academicRecord.programLevel === "S1" ? 139 : 106;

  const checkFinance = financeStatus === "paid";
  const checkSks = academicRecord.totalSksLulus >= minSks;
  const checkGpa = academicRecord.ipk >= 2.5;
  const checkGradeD = academicRecord.jumlahNilaiD <= 2;
  const checkGradeE = academicRecord.jumlahNilaiE === 0;

  // Update UI Checklist
  updateRequirementUI(
    "reqFinance",
    checkFinance,
    checkFinance ? "Lunas" : "Belum Lunas"
  );
  updateRequirementUI(
    "reqSks",
    checkSks,
    `${academicRecord.totalSksLulus} SKS (Min: ${minSks})`
  );
  updateRequirementUI("reqGpa", checkGpa, `IPK: ${academicRecord.ipk}`);
  updateRequirementUI(
    "reqGradeD",
    checkGradeD,
    `${academicRecord.jumlahNilaiD} Mata Kuliah`
  );
  updateRequirementUI(
    "reqGradeE",
    checkGradeE,
    `${academicRecord.jumlahNilaiE} Mata Kuliah`
  );

  const allPassed =
    checkFinance && checkSks && checkGpa && checkGradeD && checkGradeE;

  const btnUnlock = document.getElementById("btnUnlockThesis");
  const msgLock = document.getElementById("lockMessage");
  const lockScreen = document.getElementById("thesisLockScreen");
  const dashboard = document.getElementById("thesisDashboard");

  if (allPassed) {
    btnUnlock.style.display = "block";
    msgLock.style.display = "none";

    btnUnlock.onclick = () => {
      lockScreen.style.display = "none";
      dashboard.style.display = "block";
      showNotification("Akses Skripsi Diberikan", "success");
    };
  } else {
    btnUnlock.style.display = "none";
    msgLock.style.display = "block";
    dashboard.style.display = "none";
    lockScreen.style.display = "block";
  }

  thesisInitialized = true;
}

function updateRequirementUI(elementId, isPassed, detailText) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.className = `req-item ${isPassed ? "pass" : "fail"}`;

  const detailEl = el.querySelector("span");
  if (detailText) {
    const label = el.querySelector("strong").textContent;
    el.querySelector(
      ".req-text"
    ).innerHTML = `<strong>${label}</strong><span>${detailText}</span>`;
  }
}

let submittedTitles = [];

function openProposalModal() {
  if (submittedTitles.length >= 3) {
    alert("Anda sudah mengajukan maksimal 3 judul.");
    return;
  }
  const modal = document.getElementById("proposalModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeProposalModal() {
  const modal = document.getElementById("proposalModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

document.addEventListener("DOMContentLoaded", () => {
  const propForm = document.getElementById("proposalForm");
  if (propForm) {
    propForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("propTitle").value;
      const desc = document.getElementById("propDesc").value;

      const newItem = {
        id: Date.now(),
        title: title,
        desc: desc,
        status: "Menunggu Review",
      };

      submittedTitles.push(newItem);
      renderTitles();

      closeProposalModal();
      e.target.reset();
      showNotification("Judul berhasil diajukan!", "success");
    });
  }
});

function renderTitles() {
  const container = document.getElementById("titleSubmissionList");
  if (!container) return;

  container.innerHTML = "";

  if (submittedTitles.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-secondary); font-style:italic;">Belum ada judul yang diajukan.</p>`;
    return;
  }

  submittedTitles.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "title-item";
    div.innerHTML = `
      <h4>Opsi ${index + 1}: ${item.title}</h4>
      <p>${item.desc}</p>
      <div style="margin-top:0.5rem; font-size:0.8rem; font-weight:bold; color:var(--warning);">
        Status: ${item.status}
      </div>
    `;
    container.appendChild(div);
  });
}

let musicInitialized = false;
let playlist = [];
let currentLyrics = [];
let currentSongIndex = 0;
let isPlaying = false;
const audio = document.getElementById("audioPlayer");

function initMusicPlayer() {
  if (!musicInitialized) {
    document
      .getElementById("musicUploadInput")
      .addEventListener("change", handleMusicUpload);
    document.getElementById("playBtn").addEventListener("click", togglePlay);
    document.getElementById("prevBtn").addEventListener("click", prevSong);
    document.getElementById("nextBtn").addEventListener("click", nextSong);
    document.getElementById("progressBar").addEventListener("input", seekSong);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", nextSong);
    audio.addEventListener("play", () => updatePlayBtnUI(true));
    audio.addEventListener("pause", () => updatePlayBtnUI(false));

    const miniPlayBtn = document.getElementById("miniPlayBtn");
    if (miniPlayBtn) {
      miniPlayBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        togglePlay();
      });
    }

    document
      .getElementById("lrcUploadInput")
      .addEventListener("change", handleLrcUpload);

    musicInitialized = true;
  }
}

function handleMusicUpload(e) {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  showNotification("Memproses file musik...", "info");

  let processedCount = 0;

  files.forEach((file) => {
    const url = URL.createObjectURL(file);

    const newSong = {
      title: file.name.replace(/\.[^/.]+$/, ""),
      artist: "Unknown Artist",
      src: url,
      cover: null,
    };

    jsmediatags.read(file, {
      onSuccess: function (tag) {
        const tags = tag.tags;

        if (tags.title) newSong.title = tags.title;
        if (tags.artist) newSong.artist = tags.artist;

        if (tags.picture) {
          const { data, format } = tags.picture;
          let base64String = "";
          for (let i = 0; i < data.length; i++) {
            base64String += String.fromCharCode(data[i]);
          }
          newSong.cover = `data:${format};base64,${window.btoa(base64String)}`;
        }

        playlist.push(newSong);
        finishProcessing();
      },
      onError: function (error) {
        console.log("Gagal baca tag:", error);
        playlist.push(newSong);
        finishProcessing();
      },
    });
  });

  function finishProcessing() {
    processedCount++;
    if (processedCount === files.length) {
      renderPlaylist();
      if (playlist.length > 0 && !isPlaying) {
        loadSong(playlist.length - files.length);
      }
      showNotification("Musik berhasil ditambahkan!", "success");
    }
  }
}

function renderPlaylist() {
  const container = document.getElementById("playlistContainer");
  container.innerHTML = "";

  if (playlist.length === 0) {
    container.innerHTML =
      '<div class="empty-playlist">Belum ada lagu. Upload file MP3 sekarang.</div>';
    return;
  }

  playlist.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = `playlist-item ${
      index === currentSongIndex ? "active" : ""
    }`;
    div.onclick = () => loadSong(index);
    div.innerHTML = `
      <div class="song-icon">🎵</div>
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function loadSong(index) {
  currentSongIndex = index;
  const song = playlist[currentSongIndex];

  document.getElementById("currentTrackTitle").textContent = song.title;
  document.getElementById("currentTrackArtist").textContent = song.artist;
  const albumArt = document.getElementById("currentAlbumArt");

  if (song.cover) {
    albumArt.style.backgroundImage = `url(${song.cover})`;
    albumArt.style.backgroundSize = "contain";
    albumArt.style.backgroundRepeat = "no-repeat";
    albumArt.style.backgroundPosition = "center";
    albumArt.innerHTML = "";
  } else {
    albumArt.style.backgroundImage = "none";
    albumArt.innerHTML = "🎵";
  }

  document.getElementById("miniTrackTitle").textContent = song.title;
  document.getElementById("miniTrackArtist").textContent = song.artist;
  const miniArt = document.querySelector(".mini-album-art");
  if (song.cover) {
    miniArt.style.backgroundImage = `url(${song.cover})`;
    miniArt.innerHTML = "";
  } else {
    miniArt.style.backgroundImage = "none";
    miniArt.innerHTML = "🎵";
  }

  audio.src = song.src;
  renderPlaylist();
  playSong();
}

function togglePlay() {
  if (playlist.length === 0) return;
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function playSong() {
  isPlaying = true;
  audio.play();

  document.getElementById("iconPlay").style.display = "none";
  document.getElementById("iconPause").style.display = "block";

  document.getElementById("miniIconPlay").style.display = "none";
  document.getElementById("miniIconPause").style.display = "block";
}

function pauseSong() {
  isPlaying = false;
  audio.pause();

  document.getElementById("iconPlay").style.display = "block";
  document.getElementById("iconPause").style.display = "none";

  document.getElementById("miniIconPlay").style.display = "block";
  document.getElementById("miniIconPause").style.display = "none";
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1;
  }
  loadSong(currentSongIndex);
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > playlist.length - 1) {
    currentSongIndex = 0;
  }
  loadSong(currentSongIndex);
}

function updateProgress() {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;

  document.getElementById("progressBar").value = progressPercent || 0;
  document.getElementById("currentTime").textContent = formatTime(currentTime);
  document.getElementById("durationTime").textContent = formatTime(duration);

  const miniFill = document.getElementById("miniProgressFill");
  if (miniFill) {
    miniFill.style.width = `${progressPercent || 0}%`;
  }

  syncLyrics(currentTime);
}

function seekSong() {
  const progressBar = document.getElementById("progressBar");
  const duration = audio.duration;
  audio.currentTime = (progressBar.value / 100) * duration;
}

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function expandMiniPlayer() {
  switchSection("music-center");
}

function closeMiniPlayer() {
  const miniPlayer = document.getElementById("miniPlayer");
  miniPlayer.classList.remove("active");
  const fabContainer = document.getElementById("fabContainer");
  if (fabContainer) fabContainer.classList.remove("raised");
  setTimeout(() => {
    miniPlayer.style.display = "none";
  }, 300);
  pauseSong();
}

document.getElementById("miniPlayBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  togglePlay();
});

window.expandMiniPlayer = expandMiniPlayer;
window.closeMiniPlayer = closeMiniPlayer;

let lettersInitialized = false;
let lettersData = JSON.parse(localStorage.getItem("lettersData") || "[]");

function initLetters() {
  if (!lettersInitialized) {
    lettersInitialized = true;
  }
  renderLettersTable();
}

function renderLettersTable() {
  const tbody = document.getElementById("lettersTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  // Hitung statistik
  let pending = 0;
  let ready = 0;

  if (lettersData.length === 0) {
    tbody.innerHTML = `<div style="padding:2rem; text-align:center; color:var(--text-secondary); grid-column:1/-1;">Belum ada pengajuan surat.</div>`;
  }

  lettersData.forEach((item, index) => {
    if (item.status === "pending") pending++;
    else if (item.status === "approved") ready++;

    const row = document.createElement("div");
    row.className = "table-row";
    // Grid kolom disesuaikan dengan header di HTML
    row.style.gridTemplateColumns = "50px 2fr 1.5fr 1.5fr 1.5fr 1fr";

    const statusText =
      item.status === "approved"
        ? translations[currentLanguage]["letters.status_approved"]
        : translations[currentLanguage]["letters.status_pending"];

    const statusClass = item.status;

    const actionBtn =
      item.status === "approved"
        ? `<button class="download-btn" onclick="generateLetterPDF(${item.id})">${translations[currentLanguage]["letters.download"]}</button>`
        : `<span style="color:var(--text-secondary); font-size:0.8rem;">-</span>`;

    let typeName = item.type;
    if (item.type === "aktif") typeName = "Surat Keterangan Aktif Kuliah";
    if (item.type === "magang") typeName = "Surat Pengantar Magang";
    if (item.type === "kelakuan") typeName = "Surat Keterangan Kelakuan Baik";
    if (item.type === "beasiswa") typeName = "Rekomendasi Beasiswa";

    row.innerHTML = `
      <div>${index + 1}</div>
      <div style="font-weight:600;">${typeName}</div>
      <div>${item.date}</div>
      <div style="font-size:0.9rem;">${item.purpose}</div>
      <div><span class="letter-status-badge ${statusClass}">${statusText}</span></div>
      <div style="text-align:right;">${actionBtn}</div>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("letterTotal").textContent = lettersData.length;
  document.getElementById("letterPending").textContent = pending;
  document.getElementById("letterReady").textContent = ready;
}

function handleLetterSubmit(e) {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    type: document.getElementById("letterType").value,
    purpose: document.getElementById("letterPurpose").value,
    date: new Date().toLocaleDateString(),
    status: "pending", // Awalnya pending
  };

  lettersData.unshift(newItem);
  localStorage.setItem("lettersData", JSON.stringify(lettersData));

  closeLetterModal();
  e.target.reset();
  renderLettersTable();
  showNotification("Pengajuan berhasil dikirim ke TU!", "success");

  // SIMULASI OTOMATIS DISETUJUI SETELAH 5 DETIK (Untuk Demo)
  setTimeout(() => {
    const index = lettersData.findIndex((x) => x.id === newItem.id);
    if (index !== -1) {
      lettersData[index].status = "approved";
      lettersData[index].docNumber = `S.Ket/${Math.floor(
        Math.random() * 1000
      )}/FTI/2025`;
      localStorage.setItem("lettersData", JSON.stringify(lettersData));
      if (document.getElementById("letters-center").style.display !== "none") {
        renderLettersTable();
        showNotification(
          "Surat Anda telah disetujui & ditandatangani!",
          "success"
        );
      }
    }
  }, 5000);
}

function generateLetterPDF(id) {
  const item = lettersData.find((x) => x.id === id);
  if (!item) return;

  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  // Isi Template
  let title = "SURAT KETERANGAN";
  let body = "";

  if (item.type === "aktif") {
    title = "SURAT KETERANGAN AKTIF KULIAH";
    body = `Adalah benar mahasiswa aktif pada Program Studi ${
      user.programStudi
    } Fakultas Teknologi Informasi Universitas Catur Insan Cendekia pada Semester ${
      user.semester || 4
    } Tahun Akademik 2024/2025.<br><br>Surat ini dibuat untuk keperluan: <b>${
      item.purpose
    }</b>.`;
  } else if (item.type === "magang") {
    title = "SURAT PENGANTAR MAGANG";
    body = `Adalah mahasiswa kami yang akan melaksanakan Kerja Praktik / Magang.<br><br>Kami mohon kesediaan Bapak/Ibu untuk dapat menerima mahasiswa tersebut.<br>Keperluan: <b>${item.purpose}</b>.`;
  } else {
    title = "SURAT REKOMENDASI";
    body = `Adalah mahasiswa dengan perilaku baik dan prestasi akademik yang memuaskan.<br><br>Surat ini diberikan untuk keperluan: <b>${item.purpose}</b>.`;
  }

  document.getElementById("printLetterTitle").textContent = title;
  document.getElementById("printLetterNo").textContent =
    item.docNumber || "001/Draft";
  document.getElementById("printName").textContent =
    user.fullName || "Nama Mahasiswa";
  document.getElementById("printNim").textContent = user.nim || "NIM";
  document.getElementById("printProdi").textContent = user.programStudi || "TI";
  document.getElementById("printSem").textContent = user.semester || "4";
  document.getElementById("printBody").innerHTML = body;
  document.getElementById("printDate").textContent =
    new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  // Generate PDF
  const element = document.getElementById("letterTemplate");
  element.style.display = "block"; // Tampilkan sebentar untuk dicapture

  const opt = {
    margin: 10,
    filename: `Surat_${item.type}_${user.nim}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      element.style.display = "none"; // Sembunyikan lagi
    });
}

function openLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
  // Sembunyikan FAB agar tidak menghalangi
  const fab = document.getElementById("fabContainer");
  if (fab) fab.style.display = "none";
}

function closeLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
  const fab = document.getElementById("fabContainer");
  if (fab) fab.style.display = "block";
}

window.openLetterModal = openLetterModal;
window.closeLetterModal = closeLetterModal;
window.generateLetterPDF = generateLetterPDF;

let edomInitialized = false;
let edomData = JSON.parse(localStorage.getItem("edomData") || "[]");

function initEdom() {
  // Generate data from attendanceData if empty
  if (edomData.length === 0) {
    Object.entries(attendanceData).forEach(([key, course]) => {
      // Ambil nama dosen dari jadwal (simulasi)
      let lecturerName = "Dosen Pengampu";
      // Logic sederhana untuk ambil nama dosen dari string html statis atau database
      if (key === "algorithms") lecturerName = "Dr. Ahmad Santoso, M.Kom.";
      if (key === "databases") lecturerName = "Dr. Budi Prasetyo, M.Sc.";
      if (key === "webdev") lecturerName = "Dian Purnama, M.Kom.";
      if (key === "softwareeng") lecturerName = "Prof. Siti Rahayu, M.T.";

      edomData.push({
        id: key,
        course: course.name,
        code: course.code,
        lecturer: lecturerName,
        status: "pending",
      });
    });
    localStorage.setItem("edomData", JSON.stringify(edomData));
  }

  if (!edomInitialized) {
    document
      .getElementById("edomForm")
      .addEventListener("submit", handleEdomSubmit);
    edomInitialized = true;
  }
  renderEdomList();
}

function renderEdomList() {
  const container = document.getElementById("edomList");
  if (!container) return;

  container.innerHTML = "";
  let completedCount = 0;

  edomData.forEach((item) => {
    if (item.status === "completed") completedCount++;

    const div = document.createElement("div");
    div.className = `edom-card ${item.status}`;

    const statusText =
      item.status === "completed"
        ? translations[currentLanguage]["edom.completed"]
        : translations[currentLanguage]["edom.pending"];

    const btnText = translations[currentLanguage]["edom.fill"];
    const btnState = item.status === "completed" ? "disabled" : "";
    const btnLabel = item.status === "completed" ? "✓ Terkirim" : btnText;

    div.innerHTML = `
      <div class="edom-info">
        <span class="edom-status-badge ${item.status}">${statusText}</span>
        <h3 style="margin-top:0.5rem;">${item.course}</h3>
        <p>${item.lecturer}</p>
        <small style="color:var(--text-secondary);">${item.code}</small>
      </div>
      <button class="edom-btn" ${btnState} onclick="openEdomModal('${item.id}')">
        ${btnLabel}
      </button>
    `;
    container.appendChild(div);
  });

  // Update Progress Bar
  const total = edomData.length;
  const percent = (completedCount / total) * 100;
  document.getElementById(
    "edomProgressText"
  ).textContent = `${completedCount}/${total}`;
  document.getElementById("edomProgressBar").style.width = `${percent}%`;
}

function openEdomModal(id) {
  const item = edomData.find((d) => d.id === id);
  if (!item) return;

  document.getElementById("edomCourseId").value = id;
  document.getElementById("edomModalTitle").textContent =
    "Evaluasi: " + item.course;
  document.getElementById("edomModalSubtitle").textContent =
    "Dosen: " + item.lecturer;

  const modal = document.getElementById("edomModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeEdomModal() {
  const modal = document.getElementById("edomModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
  document.getElementById("edomForm").reset();
}

function handleEdomSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("edomCourseId").value;

  const index = edomData.findIndex((x) => x.id === id);
  if (index !== -1) {
    edomData[index].status = "completed";
    localStorage.setItem("edomData", JSON.stringify(edomData));

    closeEdomModal();
    renderEdomList();
    showNotification(translations[currentLanguage]["edom.success"], "success");
  }
}

window.openEdomModal = openEdomModal;
window.closeEdomModal = closeEdomModal;

function switchMusicTab(tabName) {
  document
    .querySelectorAll(".music-tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.querySelectorAll(".music-tab-content").forEach((content) => {
    content.style.display = "none";
    content.classList.remove("active");
  });

  const target = document.getElementById(`music-tab-${tabName}`);
  if (target) {
    target.style.display = "flex";
    target.classList.add("active");
  }
}

function handleLrcUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const text = event.target.result;
    parseLRC(text);
    showNotification("Lirik berhasil dimuat!", "success");
  };
  reader.readAsText(file);
}

function parseLRC(lrcText) {
  currentLyrics = [];
  const lines = lrcText.split("\n");
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  lines.forEach((line) => {
    const match = line.match(timeReg);
    if (match) {
      const min = parseInt(match[1]);
      const sec = parseInt(match[2]);
      const ms = parseInt(match[3]);
      const time = min * 60 + sec + ms / 100;
      const text = line.replace(timeReg, "").trim();

      if (text) {
        currentLyrics.push({ time, text });
      }
    }
  });

  renderLyricsUI();
}

function renderLyricsUI() {
  const container = document.getElementById("lyricsContainer");
  container.innerHTML = "";

  if (currentLyrics.length === 0) {
    container.innerHTML =
      '<div class="empty-lyrics"><p>Format lirik tidak dikenali.</p></div>';
    return;
  }

  const spacerTop = document.createElement("div");
  spacerTop.style.height = "30%";
  container.appendChild(spacerTop);

  currentLyrics.forEach((line, index) => {
    const p = document.createElement("p");
    p.className = "lyric-line";
    p.id = `lyric-${index}`;
    p.textContent = line.text;

    p.onclick = () => {
      audio.currentTime = line.time;
      playSong();
    };

    container.appendChild(p);
  });

  const spacerBottom = document.createElement("div");
  spacerBottom.style.height = "50%";
  container.appendChild(spacerBottom);
}

function syncLyrics(currentTime) {
  if (currentLyrics.length === 0) return;

  let activeIndex = -1;
  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentTime >= currentLyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  if (activeIndex !== -1) {
    document
      .querySelectorAll(".lyric-line")
      .forEach((el) => el.classList.remove("active"));

    const activeEl = document.getElementById(`lyric-${activeIndex}`);
    if (activeEl) {
      activeEl.classList.add("active");

      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
}

window.switchMusicTab = switchMusicTab;

const lecturersDB = [
  {
    name: "Dr. Ahmad Santoso, M.Kom.",
    nidn: "0412098801",
    phone: "6281234567890",
  },
  {
    name: "Dr. Budi Prasetyo, M.Sc.",
    nidn: "0415059002",
    phone: "6289876543210",
  },
  {
    name: "Prof. Siti Rahayu, M.T.",
    nidn: "0420018503",
    phone: "6285555555555",
  },
  { name: "Dian Purnama, M.Kom.", nidn: "0405039204", phone: "6281111111111" },
  {
    name: "Bambang Sugiarto, M.Kom.",
    nidn: "0410108005",
    phone: "6289999999999",
  },
];

function initDPA() {
  // 1. Cek apakah user sudah punya DPA di localStorage
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  if (user.dpa) {
    // Jika sudah ada, langsung tampilkan hasilnya
    showDPAResult(user.dpa);
  } else {
    // Jika belum, tampilkan tombol Gacha
    document.getElementById("dpaEmptyState").style.display = "block";
    document.getElementById("dpaLoadingState").style.display = "none";
    document.getElementById("dpaResultState").style.display = "none";
  }
}

function startDPAGacha() {
  // 1. Ubah tampilan ke Loading
  document.getElementById("dpaEmptyState").style.display = "none";
  document.getElementById("dpaLoadingState").style.display = "block";

  // 2. Simulasi proses "mencari" selama 3 detik
  setTimeout(() => {
    // 3. Pilih dosen secara acak
    const randomIndex = Math.floor(Math.random() * lecturersDB.length);
    const selectedDPA = lecturersDB[randomIndex];

    // 4. Simpan ke data user di localStorage
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    user.dpa = selectedDPA;
    addSystemNotification(
      "Dosen Wali Ditentukan",
      `Anda telah mendapatkan Dosen Wali: ${selectedDPA.name}`,
      "success"
    );
    localStorage.setItem("currentUser", JSON.stringify(user));

    // 5. Tampilkan Hasil
    document.getElementById("dpaLoadingState").style.display = "none";
    showDPAResult(selectedDPA);

    showNotification("DPA berhasil ditentukan!", "success");
  }, 3000); // 3000ms = 3 detik
}

function showDPAResult(dpa) {
  document.getElementById("dpaEmptyState").style.display = "none";
  document.getElementById("dpaLoadingState").style.display = "none";
  const resultState = document.getElementById("dpaResultState");
  resultState.style.display = "block";

  document.getElementById("dpaName").textContent = dpa.name;
  document.getElementById("dpaNidn").textContent = "NIDN: " + dpa.nidn;
}

function contactDPAWhatsApp() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!user.dpa) return;

  const studentName = user.fullName || "Mahasiswa";
  const studentNim = user.nim || "NIM";

  // Pesan otomatis sopan
  const message = `Assalamu'alaikum Bapak/Ibu ${user.dpa.name}.%0A%0ASaya ${studentName} (NIM: ${studentNim}), mahasiswa bimbingan Bapak/Ibu.%0ASaya ingin mengajukan validasi KRS/Konsultasi Akademik.%0A%0AMohon arahannya. Terima kasih.`;

  const url = `https://wa.me/${user.dpa.phone}?text=${message}`;
  window.open(url, "_blank");
}

// PENTING: Panggil initDPA saat profil dimuat
// Tambahkan baris ini di akhir fungsi loadUserProfile yang sudah ada
// (Atau copy ulang fungsi loadUserProfile di bawah ini untuk mengganti yang lama)
const originalLoadUserProfile = window.loadUserProfile;
window.loadUserProfile = function () {
  if (originalLoadUserProfile) originalLoadUserProfile();
  initDPA();
};

window.startDPAGacha = startDPAGacha;
window.contactDPAWhatsApp = contactDPAWhatsApp;

function initOnboardingTour() {
  // 1. Ambil data user saat ini
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // 2. Cek apakah user ada DAN apakah dia user baru
  if (user && user.isNewUser === true) {
    // Definisi Driver
    const driver = window.driver.js.driver({
      showProgress: true,
      animate: true,
      allowClose: false, // Paksa user ikut tour (opsional)
      doneBtnText: "Selesai",
      nextBtnText: "Lanjut",
      prevBtnText: "Kembali",
      steps: [
        {
          element: "#mobileNameDisplay", // Target elemen (untuk mobile) atau header
          popover: {
            title: "Selamat Datang! 👋",
            description:
              "Halo mahasiswa baru! Ini adalah dashboard akademik Anda. Mari kita keliling sebentar.",
          },
        },
        {
          element: ".sidebar",
          popover: {
            title: "Navigasi Utama",
            description:
              "Di sini Anda bisa mengakses Profil, KRS, Nilai, Jadwal, dan layanan akademik lainnya.",
          },
        },
        {
          element: "#fabTrigger",
          popover: {
            title: "Menu Pintas (Magic Button)",
            description:
              "Klik tombol ini untuk membuka alat bantu keren seperti Music Player, Chatbot AI, Kalkulator, dan lainnya!",
            side: "left",
          },
        },
        {
          element: ".sidebar-right",
          popover: {
            title: "Info Cepat",
            description:
              "Lihat progres semester, kehadiran, dan aksi cepat di panel ini.",
            side: "left",
          },
        },
        {
          element: "#logoutBtn",
          popover: {
            title: "Keluar",
            description:
              "Jangan lupa logout jika menggunakan komputer umum ya.",
          },
        },
      ],
      onDestroyStarted: () => {
        // 3. SAAT TOUR SELESAI/DITUTUP: Matikan status user baru
        user.isNewUser = false;

        localStorage.setItem("currentUser", JSON.stringify(user));

        let usersDb = JSON.parse(localStorage.getItem("users_db") || "[]");
        const userIndex = usersDb.findIndex((u) => u.email === user.email);
        if (userIndex !== -1) {
          usersDb[userIndex].isNewUser = false;
          localStorage.setItem("users_db", JSON.stringify(usersDb));
        }

        showNotification("Tour selesai! Selamat belajar.", "success");
        driver.destroy();
      },
    });

    setTimeout(() => {
      driver.drive();
    }, 1000);
  }
}

window.addEventListener("load", () => {
  setTimeout(initOnboardingTour, 1500);
});

const queueServices = [
  {
    id: "baak",
    name: "Layanan Akademik (BAAK)",
    code: "A",
    current: 102,
    waiting: 5,
    status: "open",
    iconClass: "baak",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  },
  {
    id: "fin",
    name: "Layanan Keuangan",
    code: "B",
    current: 45,
    waiting: 12,
    status: "open",
    iconClass: "fin",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  },
  {
    id: "lib",
    name: "Perpustakaan",
    code: "C",
    current: 12,
    waiting: 0,
    status: "open",
    iconClass: "lib",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  },
  {
    id: "health",
    name: "Klinik Mahasiswa",
    code: "D",
    current: 8,
    waiting: 2,
    status: "closed",
    iconClass: "health",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  },
];

let activeTicket = null;
let queueInterval = null;

function initQueue() {
  renderServices();
  checkActiveTicket();
}

function renderServices() {
  const container = document.getElementById("serviceGrid");
  if (!container) return;

  container.innerHTML = "";

  queueServices.forEach((service) => {
    const isOpen = service.status === "open";
    const btnText = isOpen ? "Ambil Antrian" : "Tutup (Jam Istirahat)";
    const btnClass = isOpen ? "" : "closed";
    const btnAction = isOpen ? `onclick="takeQueue('${service.id}')"` : "";

    const card = document.createElement("div");
    card.className = "queue-service-card";
    card.innerHTML = `
      <div class="q-header">
        <div class="q-icon ${service.iconClass}">${service.icon}</div>
        <div class="q-title">
          <h3>${service.name}</h3>
          <p>Kode Loket: ${service.code}</p>
        </div>
      </div>
      <div class="q-stats">
        <div class="q-stat-item">
          <span>Dipanggil</span>
          <strong>${service.code}-${service.current}</strong>
        </div>
        <div class="q-stat-item">
          <span>Menunggu</span>
          <strong>${service.waiting} Orang</strong>
        </div>
      </div>
      <button class="q-btn ${btnClass}" ${btnAction} ${
      !isOpen ? "disabled" : ""
    }>
        ${btnText}
      </button>
    `;
    container.appendChild(card);
  });
}

function takeQueue(serviceId) {
  if (activeTicket) {
    alert("Anda sudah memiliki antrian aktif. Selesaikan atau batalkan dulu.");
    return;
  }

  const service = queueServices.find((s) => s.id === serviceId);

  const myNumber = service.current + service.waiting + 1;

  activeTicket = {
    serviceId: serviceId,
    serviceName: service.name,
    number: `${service.code}-${myNumber}`,
    currentServing: `${service.code}-${service.current}`,
    peopleAhead: service.waiting,
    estWait: (service.waiting + 1) * 3,
  };

  renderActiveTicket();

  startQueueSimulation();

  showNotification(
    `Berhasil mengambil antrian ${activeTicket.number}`,
    "success"
  );
}

function renderActiveTicket() {
  const area = document.getElementById("activeTicketArea");
  const grid = document.getElementById("serviceGrid");

  if (activeTicket) {
    area.style.display = "flex";
    grid.style.display = "none";

    document.getElementById("ticketService").textContent =
      activeTicket.serviceName;
    document.getElementById("myTicketNumber").textContent = activeTicket.number;
    document.getElementById("currentServingTicket").textContent =
      activeTicket.currentServing;
    document.getElementById(
      "peopleAhead"
    ).textContent = `${activeTicket.peopleAhead} Orang`;
    document.getElementById(
      "estWaitTime"
    ).textContent = `${activeTicket.estWait} Menit`;
  } else {
    area.style.display = "none";
    grid.style.display = "grid";
  }
}

function cancelQueue() {
  if (confirm("Batalkan antrian ini?")) {
    activeTicket = null;
    if (queueInterval) clearInterval(queueInterval);
    renderActiveTicket();
  }
}

function startQueueSimulation() {
  if (queueInterval) clearInterval(queueInterval);

  queueInterval = setInterval(() => {
    if (!activeTicket) return;

    if (activeTicket.peopleAhead > 0) {
      activeTicket.peopleAhead--;
      activeTicket.estWait = Math.max(0, activeTicket.estWait - 3);

      const parts = activeTicket.currentServing.split("-");
      const nextNum = parseInt(parts[1]) + 1;
      activeTicket.currentServing = `${parts[0]}-${nextNum}`;

      renderActiveTicket();
      showNotification("Antrian bergerak! Giliran Anda semakin dekat.", "info");
    } else {
      clearInterval(queueInterval);
      alert(
        `🔔 Ding Dong! \n\nNomor Antrian ${activeTicket.number} dipersilakan ke loket.`
      );
      activeTicket = null;
      renderActiveTicket();
    }
  }, 5000);
}

function checkActiveTicket() {
  if (activeTicket) renderActiveTicket();
}

window.takeQueue = takeQueue;
window.cancelQueue = cancelQueue;

let facilityBookings = JSON.parse(
  localStorage.getItem("facilityBookings") || "[]"
);

const facilitiesDB = [
  {
    id: 1,
    name: "Aula Utama (Convention Hall)",
    type: "room",
    cap: "500 Org",
    status: "available",
    // Ikon Gedung/Bank
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M17 21v-8H7v8"/><line x1="9" y1="9" x2="9" y2="10"/><line x1="9" y1="13" x2="9" y2="14"/><line x1="15" y1="9" x2="15" y2="10"/><line x1="15" y1="13" x2="15" y2="14"/></svg>`,
    desc: "Gedung serbaguna untuk seminar atau acara besar.",
  },
  {
    id: 2,
    name: "Lab Komputer Umum",
    type: "room",
    cap: "40 PC",
    status: "booked",
    // Ikon Monitor/PC
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    desc: "Lab untuk praktikum atau pelatihan IT.",
  },
  {
    id: 3,
    name: "Lapangan Basket/Futsal",
    type: "sport",
    cap: "Outdoor",
    status: "available",
    // Ikon Bola / Aktivitas
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2.1 13.4A10.1 10.1 0 0 0 13.4 21.9"/><path d="M2 10.6a10.1 10.1 0 0 1 11.4-8.5"/><path d="M22 12a10 10 0 0 0-10 10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/></svg>`,
    desc: "Lapangan olahraga mahasiswa.",
  },
  {
    id: 4,
    name: "Proyektor Portable (LCD)",
    type: "tool",
    cap: "5 Unit",
    status: "available",
    // Ikon Proyektor / Cast
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/></svg>`,
    desc: "Proyektor Epson untuk kegiatan kelas tambahan.",
  },
  {
    id: 5,
    name: "Sound System Portable",
    type: "tool",
    cap: "2 Set",
    status: "available",
    // Ikon Speaker
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    desc: "Speaker dan Mic wireless untuk kegiatan outdoor.",
  },
  {
    id: 6,
    name: "Studio Fotografi",
    type: "room",
    cap: "15 Org",
    status: "available",
    // Ikon Kamera
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    desc: "Studio lengkap dengan lighting dan background.",
  },
];

let facilityInitialized = false;

function initFacility() {
  if (!facilityInitialized) {
    document
      .getElementById("facilityForm")
      .addEventListener("submit", handleFacilitySubmit);
    facilityInitialized = true;
  }
  renderFacilities("room"); // Default tab
}

function filterFacility(type) {
  // Update Tab UI
  document
    .querySelectorAll(".fac-tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  renderFacilities(type);
}

function renderFacilities(type) {
  const container = document.getElementById("facilityGrid");
  container.innerHTML = "";

  const items = facilitiesDB.filter((f) => f.type === type);

  items.forEach((item) => {
    const isAvailable = item.status === "available";
    const btnText = isAvailable ? "Ajukan Peminjaman" : "Sedang Digunakan";
    const btnState = isAvailable ? "" : "disabled";

    const card = document.createElement("div");
    card.className = "fac-card";
    card.innerHTML = `
      <div class="fac-image">${item.icon}</div>
      <div class="fac-info">
        <div class="fac-header">
          <div>
            <h3 class="fac-title">${item.name}</h3>
            <span class="fac-cap">${item.cap}</span>
          </div>
          <span class="fac-badge ${item.status}">${
      isAvailable ? "Tersedia" : "Dipakai"
    }</span>
        </div>
        <p class="fac-desc">${item.desc}</p>
        <button class="fac-btn" ${btnState} onclick="openFacilityModal(${
      item.id
    })">
          ${btnText}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function openFacilityModal(id) {
  const item = facilitiesDB.find((f) => f.id === id);
  if (!item) return;

  document.getElementById("facId").value = id;
  document.getElementById("facTargetName").textContent = item.name;

  const modal = document.getElementById("facilityModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeFacilityModal() {
  const modal = document.getElementById("facilityModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
  document.getElementById("facilityForm").reset();
}

function handleFacilitySubmit(e) {
  e.preventDefault();

  // 1. Ambil Data dari Form
  const id = parseInt(document.getElementById("facId").value);
  const targetItem = facilitiesDB.find((f) => f.id === id);
  const date = document.getElementById("facDate").value;
  const timeStart = document.getElementById("facStart").value;
  const timeEnd = document.getElementById("facEnd").value;
  const reason = document.getElementById("facReason").value;

  if (!date || !timeStart || !timeEnd || !reason) {
    alert("Mohon lengkapi semua data peminjaman.");
    return;
  }

  // 2. Buat Objek Booking Baru
  const newBooking = {
    id: Date.now(),
    facilityName: targetItem ? targetItem.name : "Fasilitas Kampus",
    date: date,
    time: `${timeStart} - ${timeEnd}`,
    reason: reason,
    status: "pending", // Status awal selalu pending
    timestamp: new Date().toISOString(),
  };

  // 3. Simpan ke Array & LocalStorage
  facilityBookings.unshift(newBooking); // Tambah di paling atas
  localStorage.setItem("facilityBookings", JSON.stringify(facilityBookings));

  // 4. Reset Form & Tutup Modal
  closeFacilityModal();
  document.getElementById("facilityForm").reset();

  // 5. Beri Notifikasi
  showNotification(
    "Pengajuan berhasil dikirim! Menunggu persetujuan.",
    "success"
  );

  // (Opsional) Langsung buka riwayat untuk menunjukkan data masuk
  setTimeout(() => showMyBookings(), 500);
}

function showMyBookings() {
  const modal = document.getElementById("facilityHistoryModal");
  const list = document.getElementById("facHistoryList");

  // Render Ulang Daftar
  if (facilityBookings.length === 0) {
    list.innerHTML =
      '<div class="empty-state-text">Belum ada riwayat peminjaman.</div>';
  } else {
    list.innerHTML = ""; // Bersihkan
    facilityBookings.forEach((booking) => {
      // Format Tanggal agar cantik (contoh: 25 Nov 2025)
      const dateObj = new Date(booking.date);
      const dateStr = dateObj.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      // Tentukan Label Status
      let statusLabel = "Menunggu";
      if (booking.status === "approved") statusLabel = "Disetujui";
      if (booking.status === "rejected") statusLabel = "Ditolak";

      const item = document.createElement("div");
      item.className = "fac-history-item";
      item.innerHTML = `
        <div class="fac-history-info">
          <h4>${booking.facilityName}</h4>
          <div class="fac-history-meta">
            <span>📅 ${dateStr}</span>
            <span>⏰ ${booking.time}</span>
          </div>
          <div class="fac-history-reason">"${booking.reason}"</div>
        </div>
        <div class="fac-history-status ${booking.status}">${statusLabel}</div>
      `;
      list.appendChild(item);
    });
  }

  // Tampilkan Modal
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeHistoryModal() {
  const modal = document.getElementById("facilityHistoryModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.openFacilityModal = openFacilityModal;
window.closeFacilityModal = closeFacilityModal;
window.filterFacility = filterFacility;
window.showMyBookings = showMyBookings;
window.closeHistoryModal = closeHistoryModal;
window.handleFacilitySubmit = handleFacilitySubmit;

function syncAllSystems() {
  console.log("🔄 Mengsinkronkan seluruh data sistem...");

  // 1. Cek User & Profil
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  // 2. Integrasi KRS -> AKADEMIK & KEUANGAN
  // Cek apakah KRS sudah disubmit?
  const isKrsSubmitted = localStorage.getItem("krsSubmitted") === "true";
  const krsDraft = JSON.parse(localStorage.getItem("krsDraft") || "[]");

  if (isKrsSubmitted && krsDraft.length > 0) {
    // A. Update Data Mata Kuliah (attendanceData) berdasarkan KRS
    // Kita mapping ID KRS ke Data Akademik
    krsDraft.forEach((courseId) => {
      // Cari detail course dari availableCoursesSem5 (Data master KRS)
      const courseInfo = availableCoursesSem5.find((c) => c.id === courseId);

      if (courseInfo) {
        // Buat Key unik (misal: "TI501" -> "mobileprogramming")
        const key = courseInfo.name.toLowerCase().replace(/ /g, "");

        // Jika matkul ini belum ada di data akademik, tambahkan!
        if (!attendanceData[key]) {
          attendanceData[key] = {
            name: courseInfo.name,
            code: courseInfo.code,
            credits: courseInfo.sks,
            currentWeek: 1, // Default mulai minggu 1
            meetings: generateDummyMeetings(), // Generate pertemuan default
            tasks: [],
            materials: [],
          };
        }
      }
    });

    // B. Update Tagihan Keuangan berdasarkan SKS
    // Misal: Biaya per SKS = Rp 200.000
    const biayaPerSks = 200000;
    let totalSks = 0;
    krsDraft.forEach((id) => {
      const c = availableCoursesSem5.find((x) => x.id === id);
      if (c) totalSks += c.sks;
    });

    const biayaSksBaru = totalSks * biayaPerSks;

    // Cek apakah tagihan SKS ini sudah ada di financialData?
    const cekTagihan = financialData.tuitionFees.find(
      (f) => f.type === "Biaya SKS Semester Ini"
    );
    if (!cekTagihan) {
      // Jika belum ada, buat tagihan baru
      financialData.tuitionFees.push({
        id: Date.now(),
        semester: `Semester ${user.semester || 5}`,
        type: "Biaya SKS Semester Ini",
        amount: biayaSksBaru,
        dueDate: "2025-02-01",
        status: "unpaid", // Belum bayar
        paymentMethod: null,
        receiptNumber: null,
      });
      // Update total tagihan
      financialData.summary.totalTagihan += biayaSksBaru;
      financialData.summary.sisaTagihan += biayaSksBaru;
      financialData.summary.status = "partially_paid"; // Status berubah jadi belum lunas total
    }
  }

  // 3. Integrasi KEUANGAN -> AKSES (Blocker)
  // Cek apakah ada tagihan "overdue" atau sisa tagihan > 5 Juta?
  const isFinanceProblem = financialData.summary.sisaTagihan > 5000000;

  if (isFinanceProblem) {
    // Blokir akses KRS jika keuangan bermasalah
    const krsBtn = document.getElementById("submitKrsBtn");
    if (krsBtn) {
      krsBtn.disabled = true;
      krsBtn.textContent = "Lunasi Tagihan Dulu";
      krsBtn.style.backgroundColor = "#94a3b8";
    }
  }

  // 4. Integrasi NILAI -> DASHBOARD
  // Hitung ulang IPK dari data tugas yang ada di attendanceData
  calculateGlobalGPA();

  // Simpan semua perubahan ke LocalStorage agar permanen
  localStorage.setItem("financialData", JSON.stringify(financialData));
  localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
}

// Helper: Generator Pertemuan Dummy (Untuk matkul baru dari KRS)
function generateDummyMeetings() {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    date: "TBA",
    topic: `Pertemuan Ke-${i + 1}`,
    status: "not_started",
  }));
}

// Helper: Hitung IPK Global untuk Dashboard
function calculateGlobalGPA() {
  let totalBobot = 0;
  let totalSks = 0;
  let totalHadir = 0;
  let totalPertemuan = 0;

  Object.values(attendanceData).forEach((course) => {
    // Hitung Kehadiran
    course.meetings.forEach((m) => {
      if (m.status === "present") totalHadir++;
      if (m.status !== "not_started") totalPertemuan++;
    });

    // Hitung Nilai (Dari Tugas)
    let nilaiTotal = 0;
    let tugasCount = 0;
    course.tasks.forEach((t) => {
      if (t.score !== null) {
        nilaiTotal += t.score;
        tugasCount++;
      }
    });

    if (tugasCount > 0) {
      const rataRata = nilaiTotal / tugasCount;
      let bobot = 0;
      if (rataRata >= 85) bobot = 4.0;
      else if (rataRata >= 70) bobot = 3.0;
      else if (rataRata >= 55) bobot = 2.0;
      else if (rataRata >= 40) bobot = 1.0;

      totalBobot += bobot * course.credits;
      totalSks += course.credits;
    }
  });

  // Update UI Dashboard Depan
  const gpa = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : "0.00";
  const attendRate =
    totalPertemuan > 0 ? Math.round((totalHadir / totalPertemuan) * 100) : 0;

  const dashGPA = document.querySelector(
    '.card-title[data-i18n="dashboard.gpa"] + .card-value'
  );
  const dashSKS = document.querySelector(
    '.card-title[data-i18n="dashboard.credits"] + .card-value'
  );
  const dashAttend = document.querySelector(
    '.card-title[data-i18n="dashboard.attendance"] + .card-value'
  );
  const dashCourse = document.querySelector(
    '.card-title[data-i18n="dashboard.active_courses"] + .card-value'
  );

  if (dashGPA) dashGPA.textContent = gpa;
  if (dashSKS) dashSKS.textContent = totalSks; // Total SKS diambil
  if (dashAttend) dashAttend.textContent = `${attendRate}%`;
  if (dashCourse) dashCourse.textContent = Object.keys(attendanceData).length;
}

function changePassword() {
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmNewPassword").value;

  if (!newPass || !confirmPass) {
    alert("Mohon isi kedua kolom password.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Password tidak sama!");
    return;
  }

  if (newPass.length < 6) {
    alert("Password minimal 6 karakter.");
    return;
  }

  // Update di LocalStorage
  const user = JSON.parse(localStorage.getItem("currentUser"));
  user.password = newPass; // Note: Di app nyata ini harus di-hash
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Update di Database Users juga
  let usersDb = JSON.parse(localStorage.getItem("users_db") || "[]");
  const index = usersDb.findIndex((u) => u.email === user.email);
  if (index !== -1) {
    usersDb[index].password = newPass; // Di app nyata, gunakan hash
    localStorage.setItem("users_db", JSON.stringify(usersDb));
  }

  alert("Password berhasil diubah! Silakan login ulang.");

  // Logout otomatis
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}

function exportUserData() {
  const dataToExport = {
    user: JSON.parse(localStorage.getItem("currentUser")),
    settings: JSON.parse(localStorage.getItem("userSettings")),
    skkm: JSON.parse(localStorage.getItem("skkmData")),
    tasks: JSON.parse(localStorage.getItem("kanbanTasks")),
    finance: JSON.parse(localStorage.getItem("financialData")),
  };

  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(dataToExport, null, 2));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "backup_data_mahasiswa.json");
  document.body.appendChild(downloadAnchorNode); // Required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();

  showNotification("Data berhasil didownload!", "success");
}

function resetApplicationData() {
  if (
    confirm(
      "⚠️ PERINGATAN: Ini akan menghapus SELURUH data Anda (SKKM, Tugas, Chat, dll) dan mengembalikan aplikasi ke awal. Anda akan logout.\n\nApakah Anda yakin?"
    )
  ) {
    localStorage.clear();
    alert("Aplikasi berhasil di-reset.");
    window.location.href = "index.html";
  }
}

// Expose functions
window.changePassword = changePassword;
window.exportUserData = exportUserData;
window.resetApplicationData = resetApplicationData;

let logoutTimer;
const INACTIVITY_TIME = 8 * 60 * 1000;

function initAutoLogout() {
  const activityEvents = [
    "mousemove",
    "keypress",
    "click",
    "scroll",
    "touchstart",
  ];

  activityEvents.forEach((event) => {
    document.addEventListener(event, resetTimer, true);
  });

  resetTimer();
}

function resetTimer() {
  clearTimeout(logoutTimer);

  logoutTimer = setTimeout(doLogout, INACTIVITY_TIME);
}

function doLogout() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "index.html";
  }
}

window.initAutoLogout = initAutoLogout;

let notifications = JSON.parse(localStorage.getItem("notifications") || "[]");

function addSystemNotification(title, message, type = "info") {
  const newNotif = {
    id: Date.now(),
    title: title,
    message: message,
    type: type, // info, success, warning
    time: new Date().toISOString(),
    read: false,
  };

  notifications.unshift(newNotif); // Tambah ke paling atas
  localStorage.setItem("notifications", JSON.stringify(notifications));

  renderNotifications();

  // Opsional: Munculkan juga sebagai toast popup biasa
  showNotification(message, type);
}

function toggleNotificationPanel(type) {
  if (type === "mobile") {
    const notifSection = document.getElementById("notifications-center");

    const isCurrentlyOpen =
      notifSection && notifSection.style.display !== "none";

    if (isCurrentlyOpen) {
      switchSection("dashboard");
    } else {
      switchSection("notifications-center");
    }
    return;
  }

  const panelId = "desktopNotifDropdown";
  const panel = document.getElementById(panelId);

  if (panel) {
    panel.classList.toggle("active");
    if (panel.classList.contains("active")) {
      markAllAsRead();
    }
  }
}

function renderNotifications() {
  const list = document.getElementById("notifList");
  const badges = document.querySelectorAll(
    "#desktopNotifBadge, #mobileNotifBadge"
  );

  if (!list) return;

  // Hitung yang belum dibaca
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Update Badge
  badges.forEach((badge) => {
    if (unreadCount > 0) {
      badge.style.display = "flex";
      badge.textContent = unreadCount > 9 ? "9+" : unreadCount;
    } else {
      badge.style.display = "none";
    }
  });

  // Render List
  list.innerHTML = "";

  if (notifications.length === 0) {
    list.innerHTML = `<div class="empty-notif">Belum ada notifikasi.</div>`;
    return;
  }

  notifications.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = `notif-item ${item.read ? "" : "unread"}`;

    // Ikon berdasarkan tipe
    let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    if (item.type === "success")
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
    if (item.type === "warning")
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;

    // Format Waktu (misal: "Baru saja", "5 menit yang lalu")
    const timeStr = timeAgo(new Date(item.time));

    itemEl.innerHTML = `
      <div class="notif-icon ${item.type}">${iconSvg}</div>
      <div class="notif-content">
        <h4>${item.title}</h4>
        <p>${item.message}</p>
        <span class="notif-time">${timeStr}</span>
      </div>
    `;
    list.appendChild(itemEl);
  });
}

function markAllAsRead() {
  notifications.forEach((n) => (n.read = true));
  localStorage.setItem("notifications", JSON.stringify(notifications));
  renderNotifications(); // Update badge jadi hilang
}

function clearNotifications() {
  if (confirm("Hapus semua notifikasi?")) {
    notifications = [];
    localStorage.setItem("notifications", JSON.stringify(notifications));
    renderNotifications();
  }
}

// Helper: Time Ago
function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " tahun lalu";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " bulan lalu";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " hari lalu";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " jam lalu";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " menit lalu";
  return "Baru saja";
}

// Init saat load
document.addEventListener("DOMContentLoaded", () => {
  renderNotifications();
});

// Expose global
window.addSystemNotification = addSystemNotification;
window.toggleNotificationPanel = toggleNotificationPanel;
window.clearNotifications = clearNotifications;

const academicHistory = {
  1: {
    ips: 3.5,
    sks: 20,
    courses: [
      { code: "TI101", name: "Pengantar TI", sks: 3, grade: "A", bobot: 4.0 },
      {
        code: "TI102",
        name: "Algoritma Dasar",
        sks: 4,
        grade: "A-",
        bobot: 3.75,
      },
      {
        code: "UM101",
        name: "Bahasa Inggris",
        sks: 2,
        grade: "B+",
        bobot: 3.5,
      },
      { code: "UM102", name: "Agama", sks: 2, grade: "A", bobot: 4.0 },
      { code: "TI103", name: "Kalkulus 1", sks: 3, grade: "B", bobot: 3.0 },
      { code: "TI104", name: "Fisika Dasar", sks: 3, grade: "B", bobot: 3.0 },
      {
        code: "TI105",
        name: "Logika Informatika",
        sks: 3,
        grade: "A",
        bobot: 4.0,
      },
    ],
  },
  2: {
    ips: 3.25,
    sks: 21,
    courses: [
      { code: "TI201", name: "Struktur Data", sks: 4, grade: "B+", bobot: 3.5 },
      {
        code: "TI202",
        name: "Arsitektur Komputer",
        sks: 3,
        grade: "B",
        bobot: 3.0,
      },
      {
        code: "TI203",
        name: "Aljabar Linear",
        sks: 3,
        grade: "C+",
        bobot: 2.5,
      },
      { code: "UM202", name: "Pancasila", sks: 2, grade: "A", bobot: 4.0 },
      { code: "TI204", name: "Statistika", sks: 3, grade: "A-", bobot: 3.75 },
      { code: "TI205", name: "Basis Data 1", sks: 3, grade: "A", bobot: 4.0 },
      {
        code: "TI206",
        name: "Pemrograman Web 1",
        sks: 3,
        grade: "B+",
        bobot: 3.5,
      },
    ],
  },
  3: {
    ips: 3.6,
    sks: 22,
    courses: [
      {
        code: "TI301",
        name: "Pemrograman Web 2",
        sks: 4,
        grade: "A",
        bobot: 4.0,
      },
      {
        code: "TI302",
        name: "Jaringan Komputer",
        sks: 3,
        grade: "A-",
        bobot: 3.75,
      },
      {
        code: "TI303",
        name: "Sistem Operasi",
        sks: 3,
        grade: "B+",
        bobot: 3.5,
      },
      {
        code: "TI304",
        name: "Analisis Algoritma",
        sks: 3,
        grade: "B",
        bobot: 3.0,
      },
      {
        code: "TI305",
        name: "Kecerdasan Buatan",
        sks: 3,
        grade: "A",
        bobot: 4.0,
      },
      {
        code: "TI306",
        name: "Interaksi Manusia Komputer",
        sks: 3,
        grade: "A",
        bobot: 4.0,
      },
      {
        code: "UM301",
        name: "Kewirausahaan",
        sks: 3,
        grade: "A-",
        bobot: 3.75,
      },
    ],
  },
  4: {
    ips: "Running", // Semester ini
    sks: 13,
    courses: [], // Ambil dari attendanceData
  },
};

let historyInitialized = false;
let historyChart = null;

function initHistory() {
  if (!historyInitialized) {
    initHistoryChart();
    historyInitialized = true;
  }
  loadSemesterData(4); // Load semester saat ini
}

function loadSemesterData(semester) {
  const list = document.getElementById("khsList");
  const title = document.getElementById("khsTitle");
  const ipsEl = document.getElementById("khsIps");
  const sksEl = document.getElementById("khsSks");

  list.innerHTML = "";

  let data = academicHistory[semester];
  let courses = data.courses;

  // Jika semester 4, ambil data live dari attendanceData
  if (semester == 4) {
    courses = Object.values(attendanceData).map((c) => ({
      code: c.code,
      name: c.name,
      sks: c.credits,
      grade: "-", // Belum ada nilai final
      bobot: "0.0",
    }));
    title.textContent = "Kartu Studi Semester 4 (Berjalan)";
    ipsEl.textContent = "-";
  } else {
    title.textContent = `Hasil Studi Semester ${semester}`;
    ipsEl.textContent = data.ips;
  }

  sksEl.textContent = courses.reduce((acc, curr) => acc + curr.sks, 0);

  courses.forEach((course) => {
    const row = document.createElement("div");
    row.className = "khs-row";
    row.innerHTML = `
      <div data-label="Kode">${course.code}</div>
      <div data-label="Mata Kuliah"><b>${course.name}</b></div>
      <div data-label="SKS" class="center">${course.sks}</div>
      <div data-label="Nilai" class="center grade">${course.grade}</div>
      <div data-label="Bobot" class="center">${course.bobot}</div>
    `;
    list.appendChild(row);
  });
}

function initHistoryChart() {
  const ctx = document.getElementById("gpaTrendChart").getContext("2d");

  // Data IPK per semester
  const labels = ["Sem 1", "Sem 2", "Sem 3", "Sem 4 (Est)"];
  const dataPoints = [3.5, 3.25, 3.6, 3.42]; // 3.42 adalah IPK Kumulatif saat ini

  historyChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Indeks Prestasi (IP)",
          data: dataPoints,
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#2563eb",
          pointRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 4.0,
          grid: { color: "rgba(0,0,0,0.05)" },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
}

function printKHS() {
  window.print();
}

window.initHistory = initHistory;
window.loadSemesterData = loadSemesterData;
window.printKHS = printKHS;

const languageData = {
  tests: [
    {
      id: 1,
      name: "EPrT (English Proficiency Test)",
      type: "Tes Wajib",
      price: 150000,
      dates: ["2025-12-10", "2025-12-24"],
      icon: "toefl",
    },
    {
      id: 2,
      name: "TOEFL ITP Prediction",
      type: "Sertifikasi",
      price: 350000,
      dates: ["2025-12-15"],
      icon: "toefl",
    },
    {
      id: 3,
      name: "JLPT N5 Simulation",
      type: "Simulasi",
      price: 75000,
      dates: ["2025-12-20"],
      icon: "japan",
    },
  ],
  courses: [
    {
      id: 4,
      name: "English Conversation Club",
      type: "Short Course",
      price: 250000,
      meetings: "8x Pertemuan",
      icon: "speak",
    },
    {
      id: 5,
      name: "Basic Japanese (N5)",
      type: "Regular",
      price: 500000,
      meetings: "12x Pertemuan",
      icon: "japan",
    },
  ],
  history: [
    {
      id: 101,
      name: "EPrT (English Proficiency Test)",
      date: "2024-06-15",
      score: 480,
      status: "Lulus",
    },
    {
      id: 102,
      name: "EPrT (English Proficiency Test)",
      date: "2025-01-10",
      score: 550,
      status: "Lulus",
    },
  ],
};

let langInitialized = false;

function initLanguageCenter() {
  if (!langInitialized) {
    document
      .getElementById("langTestForm")
      .addEventListener("submit", handleLangSubmit);
    langInitialized = true;
  }

  // Update Skor Terbaik di Header
  const maxScore = Math.max(...languageData.history.map((h) => h.score), 0);
  document.getElementById("bestToeflScore").textContent = maxScore;

  filterLang("test");
}

function filterLang(type) {
  document
    .querySelectorAll(".lang-tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const container = document.getElementById("langContent");
  container.innerHTML = "";

  if (type === "history") {
    renderLangHistory(container);
  } else if (type === "course") {
    renderLangGrid(container, languageData.courses, "course");
  } else {
    renderLangGrid(container, languageData.tests, "test");
  }
}

function renderLangGrid(container, items, mode) {
  const grid = document.createElement("div");
  grid.className = "lang-grid";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "lang-card";

    const icon = getLangIcon(item.icon);
    const price = "Rp " + item.price.toLocaleString("id-ID");
    const metaInfo = mode === "test" ? "Jadwal Tersedia" : item.meetings;
    const btnText =
      translations[currentLanguage]["language.register"] || "Daftar";

    card.innerHTML = `
      <div class="lang-card-header">
        <div class="lang-icon">${icon}</div>
        <span class="lang-type">${item.type}</span>
      </div>
      <h3 class="lang-title">${item.name}</h3>
      <p class="lang-desc">Tingkatkan kemampuan bahasa Anda dengan program ini.</p>
      <div class="lang-meta">
        <span>${metaInfo}</span>
        <span class="lang-price">${price}</span>
      </div>
      <button class="lang-btn" onclick="openLangModal(${item.id}, '${mode}')">
        ${btnText}
      </button>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function renderLangHistory(container) {
  const list = document.createElement("div");
  list.style.display = "flex";
  list.style.flexDirection = "column";

  // Urutkan dari terbaru
  const sortedHistory = [...languageData.history].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  sortedHistory.forEach((item) => {
    const el = document.createElement("div");
    el.className = "lang-history-item";
    el.innerHTML = `
      <div class="lang-hist-info">
        <h4>${item.name}</h4>
        <span class="lang-hist-date">Tanggal: ${item.date} • Status: <span style="color:var(--success)">${item.status}</span></span>
      </div>
      <div style="display:flex; align-items:center; gap:1rem;">
        <div class="lang-hist-score">
          <span class="score-val">${item.score}</span>
          <span class="score-label">Score</span>
        </div>
        <button class="lang-btn outline" style="padding:0.5rem;" title="Download Sertifikat" onclick="downloadLangCert('${item.name}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </button>
      </div>
    `;
    list.appendChild(el);
  });
  container.appendChild(list);
}

function getLangIcon(type) {
  if (type === "japan")
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.2"/></svg>`;
  if (type === "speak")
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
}

function openLangModal(id, mode) {
  const db = mode === "test" ? languageData.tests : languageData.courses;
  const item = db.find((i) => i.id === id);
  if (!item) return;

  document.getElementById("langTestId").value = id;
  document.getElementById("langTestName").textContent = item.name;
  document.getElementById("langTestPrice").textContent =
    "Rp " + item.price.toLocaleString("id-ID");

  const dateSelect = document.getElementById("langTestDate");
  dateSelect.innerHTML = "";

  if (item.dates) {
    item.dates.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      dateSelect.appendChild(opt);
    });
  } else {
    const opt = document.createElement("option");
    opt.textContent = "Jadwal menyusul";
    dateSelect.appendChild(opt);
  }

  const modal = document.getElementById("langTestModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("active"), 10);
}

function closeLangModal() {
  const modal = document.getElementById("langTestModal");
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function handleLangSubmit(e) {
  e.preventDefault();
  closeLangModal();
  showNotification(
    "Pendaftaran berhasil! Silakan selesaikan pembayaran.",
    "success"
  );
}

function downloadLangCert(name) {
  showNotification("Mengunduh sertifikat " + name + "...", "info");
}

window.filterLang = filterLang;
window.openLangModal = openLangModal;
window.closeLangModal = closeLangModal;
window.handleLangSubmit = handleLangSubmit;
window.downloadLangCert = downloadLangCert;

function renderNotificationsPage() {
  const container = document.getElementById("fullPageNotifList");
  if (!container) return;

  container.innerHTML = "";

  if (notifications.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem; color: var(--text-secondary);">
        <div style="font-size: 4rem; margin-bottom: 1rem;">📭</div>
        <p data-i18n="notif.empty">Tidak ada notifikasi.</p>
      </div>
    `;
    applyTranslations(); // Agar teks kosong diterjemahkan
    return;
  }

  notifications.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = `notif-page-item ${item.read ? "" : "unread"}`;

    // Tentukan Ikon
    let iconType = "info";
    let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

    if (item.type === "success") {
      iconType = "success";
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    } else if (item.type === "warning") {
      iconType = "warning";
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
    }

    const timeStr = timeAgo(new Date(item.time));

    itemEl.innerHTML = `
      <div class="notif-page-icon ${iconType}">
        ${iconSvg}
      </div>
      <div class="notif-page-content">
        <h4>${item.title}</h4>
        <p>${item.message}</p>
        <span class="notif-page-time">${timeStr}</span>
      </div>
    `;

    container.appendChild(itemEl);
  });
}
