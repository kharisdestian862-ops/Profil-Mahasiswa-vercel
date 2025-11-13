// Complete Data Structure with Attendance, Tasks, and Materials
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
    status: "partially_paid", // paid, partially_paid, unpaid
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
      type: "bank_transfer",
      name: "Transfer Bank",
      bank: "Bank Mandiri",
      accountNumber: "1234567890",
      accountName: "Universitas XYZ",
      icon: "bank", // Ganti dari emoji
    },
    {
      id: 2,
      type: "virtual_account",
      name: "Virtual Account",
      bank: "Bank BCA",
      accountNumber: "8012023001",
      accountName: "Kharis Destian Maulana",
      icon: "card", // Ganti dari emoji
    },
    {
      id: 3,
      type: "e_wallet",
      name: "E-Wallet",
      providers: ["GoPay", "OVO", "Dana"],
      icon: "wallet", // Ganti dari emoji
    },
    {
      id: 4,
      type: "credit_card",
      name: "Kartu Kredit/Debit",
      icon: "credit", // Ganti dari emoji
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
    "dashboard.title": "Kharis Dashboard",
    "dashboard.welcome": "Welcome back, Kharis",
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
    "chat.greeting":
      "Hello Kharis! Ask me about your dashboard. Try typing 'help'.",

    "chat.hello": "Hello, Kharis! How can I help you with your dashboard?",
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
  },
  id: {
    "nav.dashboard": "Dashboard",
    "nav.profile": "Profil",
    "nav.grades": "Nilai",
    "nav.attendance": "Kehadiran",
    "nav.ai_assistant": "AIDA AI",
    "nav.settings": "Pengaturan",
    "nav.logout": "Keluar",
    "dashboard.title": "Dashboard Kharis",
    "dashboard.welcome": "Selamat datang kembali, Kharis",
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
      "Halo Kharis! Tanya saya seputar dashboard Anda. Coba ketik 'bantuan'.",

    "chat.hello":
      "Halo, Kharis! Ada yang bisa saya bantu terkait dashboard Anda?",
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
  },
};

// Language Management
let currentLanguage = "en";

function setLanguage(lang) {
  // Validasi bahasa yang dipilih
  if (!translations[lang]) {
    console.error(`Language '${lang}' not found, defaulting to 'en'`);
    lang = "en";
  }

  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  applyTranslations();
  updateLanguageSelect();

  // Update chatbot greeting
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
  const quickActions = document.querySelectorAll(".actions button");
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

// ===== MOBILE MENU INITIALIZATION - IMPROVED =====
// ===== MOBILE MENU INITIALIZATION - FIXED =====
function initHamburgerMenu() {
  // Gunakan elemen yang sudah ada di HTML
  const hamburger = document.querySelector(".hamburger");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileSidebar = document.querySelector(".mobile-sidebar");

  // Pastikan semua elemen ditemukan
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
    }
  }

  function closeMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      hamburger.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      mobileSidebar.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  }

  // Event listener untuk hamburger button
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Event listener untuk overlay
  mobileMenuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking on links
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

  // Initialize mobile dark mode toggle
  const mobileDarkModeToggle = document.getElementById("quickDarkModeMobile");
  if (mobileDarkModeToggle) {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      mobileDarkModeToggle.checked = settings.darkMode;
    }

    mobileDarkModeToggle.addEventListener("change", function () {
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

      // Sync with desktop toggle
      const desktopToggle = document.getElementById("quickDarkMode");
      if (desktopToggle) {
        desktopToggle.checked = this.checked;
      }
    });
  }

  console.log("Mobile menu initialized successfully!");
}

// Switch between main sections
function switchSection(sectionId) {
  const links = document.querySelectorAll(
    ".sidebar nav a, .mobile-sidebar nav a"
  );
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => link.classList.remove("active"));

  const desktopLink = document.querySelector(
    `.sidebar nav a[data-section="${sectionId}"]`
  );
  const mobileLink = document.querySelector(
    `.mobile-sidebar nav a[data-section="${sectionId}"]`
  );

  if (desktopLink) desktopLink.classList.add("active");
  if (mobileLink) mobileLink.classList.add("active");

  sections.forEach((sec) => (sec.style.display = "none"));

  // === LOGIKA PENANDA LAYOUT BARU ===
  if (
    sectionId === "chatbot" ||
    sectionId === "codeplayground" ||
    sectionId === "chat"
  ) {
    document.body.classList.add("full-layout-active");
  } else {
    document.body.classList.remove("full-layout-active");
  }
  // === AKHIR LOGIKA PENANDA LAYOUT BARU ===

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "flex";

    if (sectionId === "attendance") {
      showCourseListView();
    }
    if (sectionId === "grades") {
      populateGradesPage();
    }
    if (sectionId === "finance") {
      initFinanceSection();
    }
    if (sectionId === "dashboard" && typeof chart !== "undefined") {
      setTimeout(() => {
        chart.resize();
      }, 100);
    }
    if (sectionId === "codeplayground") {
      // Panggil initCodePlayground saat section diakses
      setTimeout(() => {
        initCodePlayground();
        loadCodePlayground();
      }, 50);
    }
    if (sectionId === "chat") {
      // Tunggu sebentar agar elemen DOM siap
      setTimeout(initGroupChat, 100);
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

// Main initialization
document.addEventListener("DOMContentLoaded", function () {
  initLanguage();
  initHamburgerMenu();
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

  window.addEventListener("resize", function () {
    if (chart) {
      setTimeout(() => {
        chart.resize();
      }, 100);
    }
  });

  switchSection("dashboard");
  simulateDataLoading();

  const chatbotFab = document.getElementById("chatbotFab");
  const messagesContainer = document.getElementById("chatbotMessages");
  const inputField = document.getElementById("chatbotInput");
  const sendBtn = document.getElementById("chatbotSendBtn");
  const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

  if (chatbotFab && messagesContainer && inputField && sendBtn) {
    chatbotFab.addEventListener("click", () => {
      switchSection("chatbot");
    });

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
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          removeMessage(loadingMessageId);

          // Handle berbagai format response
          if (data.choices && data.choices[0] && data.choices[0].message) {
            const aiResponse = data.choices[0].message.content;
            addMessage(aiResponse, "bot");
          } else if (data.error) {
            addMessage(`Error: ${data.error}`, "bot");
          } else if (data.message) {
            addMessage(data.message, "bot");
          } else {
            console.error("Unexpected API response:", data);
            addMessage("Maaf, format response tidak dikenali.", "bot");
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
          // CONVERT MARKDOWN TO HTML
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

    // Fungsi untuk convert markdown ke HTML
    function convertMarkdownToHTML(markdown) {
      if (!markdown) return "";

      let html = markdown;

      // Convert **bold** to <strong>
      html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

      // Convert *italic* to <em>
      html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

      // Convert __bold__ (alternate syntax) to <strong>
      html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

      // Convert _italic_ (alternate syntax) to <em>
      html = html.replace(/_(.*?)_/g, "<em>$1</em>");

      // Convert line breaks to <br>
      html = html.replace(/\n/g, "<br>");

      // Convert lists (basic support)
      html = html.replace(/^\s*[-*]\s+(.+)$/gm, "<li>$1</li>");
      html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

      // Convert numbered lists
      html = html.replace(/^\s*\d+\.\s+(.+)$/gm, "<li>$1</li>");
      html = html.replace(/(<li>.*<\/li>)/s, "<ol>$1</ol>");

      return html;
    }

    function removeMessage(messageId) {
      const messageElement = document.getElementById(messageId);
      if (messageElement) {
        messageElement.remove();
      }
    }
    const initialGreeting = translations[currentLanguage]["chat.greeting"];
    messagesContainer.innerHTML = "";
    addMessage(initialGreeting, "bot");

    const backToStudyRoomList = document.getElementById("backToStudyRoomList");
    if (backToStudyRoomList) {
      backToStudyRoomList.addEventListener("click", function () {
        switchSection("studyroom");
      });
    }
  }
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
    return translations[currentLanguage]["chat.hello"];
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
  const userJson = localStorage.getItem("currentUser");
  if (!userJson) {
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(userJson);

  document.querySelector(
    ".profile-info .info-item:nth-child(1) .info-value"
  ).textContent = user.fullName;
  document.querySelector(
    ".profile-info .info-item:nth-child(2) .info-value"
  ).textContent = user.nim;
  document.querySelector(
    ".profile-info .info-item:nth-child(3) .info-value"
  ).textContent = user.programStudi;
  document.querySelector(
    ".profile-info .info-item:nth-child(6) .info-value"
  ).textContent = user.email;

  const firstName = user.fullName.split(" ")[0];

  const dashboardTitleElement = document.querySelector(
    'h1[data-i18n="dashboard.title"]'
  );
  if (dashboardTitleElement) {
    dashboardTitleElement.textContent = `${
      dashboardTitleElement.textContent.split(" ")[0]
    } ${firstName}`;
  }

  const welcomeElement = document.querySelector(
    'div[data-i18n="dashboard.welcome"]'
  );
  if (welcomeElement) {
    welcomeElement.textContent = `${
      welcomeElement.textContent.split(",")[0]
    }, ${firstName}`;
  }

  document
    .querySelectorAll(".profile .name")
    .forEach((el) => (el.textContent = user.fullName));
  document
    .querySelectorAll(".profile .program")
    .forEach((el) => (el.textContent = `${user.programStudi} • 2023`));

  document.querySelector(".sidebar-right .student-info h3").textContent =
    user.fullName;
  document.querySelector(
    ".sidebar-right .student-info p:nth-child(2)"
  ).textContent = `NIM: ${user.nim}`;
  document.querySelector(
    ".sidebar-right .student-info p:nth-child(3)"
  ).textContent = user.programStudi;
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

// Initialize Code Playground
function initCodePlayground() {
  // Load Monaco Editor
  loadMonacoEditor();

  // Setup event listeners
  setupPlaygroundEvents();
}

// Load Monaco Editor dynamically
function loadMonacoEditor() {
  if (window.monaco) {
    initializeEditor();
    return;
  }

  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
  script.onload = () => {
    require.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" },
    });
    require(["vs/editor/editor.main"], () => {
      initializeEditor();
    });
  };
  document.head.appendChild(script);
}

// Initialize Monaco Editor
function initializeEditor() {
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

    console.log("Monaco Editor initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Monaco Editor:", error);
    // Fallback to textarea
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

// Populate Payment Methods
function populatePaymentMethods() {
  const grid = document.getElementById("paymentMethodsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const iconMap = {
    bank: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>',
    card: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    wallet:
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/></svg>',
    credit:
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h.01M11 15h2"/></svg>',
  };

  financialData.paymentMethods.forEach((method) => {
    const card = document.createElement("div");
    card.className = "payment-method-card";

    let detailsHTML = "";

    if (method.bank) {
      detailsHTML = `
        <div class="method-details">
          <p><strong>Bank:</strong> ${method.bank}</p>
          <p><strong>No. Rekening:</strong> ${method.accountNumber}</p>
          <p><strong>Atas Nama:</strong> ${method.accountName}</p>
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
      <div class="method-icon">${iconMap[method.icon]}</div>
      <div class="method-name">${method.name}</div>
      <p style="color: #64748b; font-size: 0.875rem;">
        ${
          method.type === "bank_transfer"
            ? "Transfer melalui ATM, Mobile Banking, atau Internet Banking"
            : method.type === "virtual_account"
            ? "Nomor Virtual Account khusus untuk Anda"
            : method.type === "e_wallet"
            ? "Pembayaran melalui dompet digital"
            : "Pembayaran dengan kartu"
        }
      </p>
      ${detailsHTML}
      <button class="pay-btn" onclick="selectPaymentMethod('${
        method.type
      }')" style="width: 100%; margin-top: 1rem;">
        Pilih Metode Ini
      </button>
    `;

    grid.appendChild(card);
  });
}

// Populate Scholarships
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

// Action Functions
function payBill(billId) {
  const bill = financialData.tuitionFees.find((b) => b.id === billId);
  if (!bill) return;

  const iconMap = {
    bank: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>',
    card: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    wallet:
      '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/></svg>',
    credit:
      '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h.01M11 15h2"/></svg>',
  };

  const modal = document.createElement("div");
  modal.className = "payment-modal";
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;

  modal.innerHTML = `
    <div style="background: white; border-radius: 16px; padding: 2rem; max-width: 500px; width: 90%;">
      <h2 style="margin-bottom: 1rem;">Pembayaran Tagihan</h2>
      <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="margin: 0.5rem 0;"><strong>Jenis:</strong> ${bill.type}</p>
        <p style="margin: 0.5rem 0;"><strong>Jumlah:</strong> ${formatCurrency(
          bill.amount
        )}</p>
        <p style="margin: 0.5rem 0;"><strong>Jatuh Tempo:</strong> ${formatDate(
          bill.dueDate
        )}</p>
      </div>
      <p style="color: #64748b; margin-bottom: 1.5rem;">Pilih metode pembayaran yang Anda inginkan:</p>
      <div style="display: grid; gap: 0.75rem; margin-bottom: 1.5rem;">
        ${financialData.paymentMethods
          .map(
            (method) => `
          <button onclick="processPayment(${bill.id}, '${method.type}')" style="
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: all 0.2s;
          " onmouseover="this.style.borderColor='#2b26b9'" onmouseout="this.style.borderColor='#e2e8f0'">
            <span style="color: #2b26b9;">${iconMap[method.icon]}</span>
            <span style="font-weight: 600;">${method.name}</span>
          </button>
        `
          )
          .join("")}
      </div>
      <button onclick="this.closest('.payment-modal').remove()" style="
        width: 100%;
        padding: 0.75rem;
        background: #e2e8f0;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      ">Batal</button>
    </div>
  `;

  document.body.appendChild(modal);
}

function processPayment(billId, method) {
  // Close modal
  document.querySelector(".payment-modal")?.remove();

  // Simulate payment processing
  showNotification("Memproses pembayaran...", "info");

  setTimeout(() => {
    showNotification("Pembayaran berhasil! Menunggu verifikasi.", "success");

    // Update bill status (simulation)
    const bill = financialData.tuitionFees.find((b) => b.id === billId);
    if (bill) {
      bill.status = "pending";
      populateBillsTable();
    }
  }, 2000);
}

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

function initGroupChat() {
  const chatMessages = document.getElementById("groupMessages");
  const chatInput = document.getElementById("groupMessageInput");
  const sendBtn = document.getElementById("sendGroupMessageBtn");

  if (!chatMessages || !chatInput || !sendBtn) return;

  const newSendBtn = sendBtn.cloneNode(true);
  sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);

  const newChatInput = chatInput.cloneNode(true);
  chatInput.parentNode.replaceChild(newChatInput, chatInput);

  const user = JSON.parse(localStorage.getItem("currentUser")) || {
    fullName: "Anonim",
  };
  const myName = user.fullName;

  if (chatMessages.children.length <= 1) {
    const savedHistory = JSON.parse(
      localStorage.getItem("groupChatHistory") || "[]"
    );
    if (savedHistory.length > 0) {
      const welcomeMsg = chatMessages.querySelector(".welcome-message");
      if (welcomeMsg) welcomeMsg.remove();

      chatMessages.innerHTML = "";
      savedHistory.forEach((chat) => renderMessage(chat));
      setTimeout(
        () => (chatMessages.scrollTop = chatMessages.scrollHeight),
        100
      );
    }
  }

  if (!window.pusherInstance) {
    if (typeof Pusher !== "undefined") {
      window.pusherInstance = new Pusher("f13ff92cbbe2788163f8", {
        cluster: "ap1",
      });

      window.pusherInstance.connection.bind("connected", () => {
        window.myPusherSocketId = window.pusherInstance.connection.socket_id;
      });

      const channel = window.pusherInstance.subscribe("campus-chat");

      channel.bind("new-message", function (data) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const currentName = currentUser ? currentUser.fullName : "Anonim";

        if (data.username !== currentName) {
          const activeContainer = document.getElementById("groupMessages");
          if (activeContainer) {
            const welcome = activeContainer.querySelector(".welcome-message");
            if (welcome) welcome.remove();

            const div = document.createElement("div");
            div.className = "chat-bubble others";
            div.innerHTML = `
                          <span class="sender-name">${data.username}</span>
                          <span class="message-content">${data.message}</span>
                          <span class="timestamp">${data.timestamp}</span>
                      `;
            activeContainer.appendChild(div);
            activeContainer.scrollTop = activeContainer.scrollHeight;

            saveMessageToLocal(data);
          }
        }
      });
    }
  }

  async function sendChatMessage() {
    const text = newChatInput.value.trim();
    if (!text) return;

    const msgData = {
      username: myName,
      message: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    renderMessage(msgData);
    saveMessageToLocal(msgData);
    newChatInput.value = "";

    const welcomeMsg = chatMessages.querySelector(".welcome-message");
    if (welcomeMsg) welcomeMsg.remove();

    try {
      const currentSocketId = window.pusherInstance?.connection?.socket_id;

      await fetch("/api/send-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...msgData,
          socketId: currentSocketId,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }

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

  function saveMessageToLocal(data) {
    const history = JSON.parse(
      localStorage.getItem("groupChatHistory") || "[]"
    );
    history.push(data);
    if (history.length > 50) history.shift();
    localStorage.setItem("groupChatHistory", JSON.stringify(history));
  }

  newSendBtn.addEventListener("click", sendChatMessage);
  newChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage();
  });
}
