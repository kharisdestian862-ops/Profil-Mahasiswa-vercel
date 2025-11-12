// Complete Data Structure with Attendance, Tasks, and Materials
const attendanceData = {
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
    "nav.ai_assistant": "AI Assistant",
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

    "chat.greeting":
      "Hello Kharis! Ask me about your dashboard. Try typing 'help'.",
    "chat.help":
      "You can ask about your schedule, assignments, attendance, or lecturer info.",
    "chat.welcome": "You're welcome! Let me know if you need anything else.",
    "chat.hello": "Hi! How can I help you today?",
    "chat.fallback": "Sorry, I couldn’t understand your question.",
    "chat.schedule.header": "Your schedule for {dayName}: <ul>",
    "chat.schedule.item": "<li>{time} - {course} ({room})</li>",
    "chat.schedule.not_found": "No schedule found for that day.",
    "chat.schedule.prompt": "Please specify the day you want to check.",
    "chat.schedule.today_off": "You have no classes today. Enjoy your day off!",
    "chat.briefing.header": "Daily briefing for {dayName}, {date}: <ul>",
    "chat.briefing.class_item": "<li>{time} - {course}: {topic}</li>",
    "chat.briefing.no_class": "No classes today.",
    "chat.briefing.deadline_header": "<br><b>Today's Deadlines:</b>",
    "chat.briefing.deadline_item": "<li>{taskTitle} - {courseName}</li>",
    "chat.briefing.deadline_none": "No tasks due today.",
    "chat.tasks.header": "<b>Pending Tasks:</b><ul>",
    "chat.tasks.item": "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "chat.tasks.none_all": "You have completed all tasks!",
    "chat.tasks.none_specific": "No pending tasks for {courseName}.",
    "chat.grades.prompt":
      "Please specify the course you want to check grades for.",
    "chat.grades.header": "<b>Grades for {courseName}:</b><ul>",
    "chat.grades.item": "<li>{title}: {score}/{maxScore}</li>",
    "chat.grades.item_pending": "<li>{title}: Awaiting grading</li>",
    "chat.grades.none": "No graded tasks yet for {courseName}.",
    "chat.missed.header": "<b>Missed Items:</b><ul>",
    "chat.missed.tasks_header": "<b>Unsubmitted Tasks:</b><ul>",
    "chat.missed.meetings_header": "<b>Missed Classes:</b><ul>",
    "chat.missed.tasks_none": "No missed tasks.",
    "chat.missed.meetings_none": "No missed classes.",
    "chat.missed.task_item":
      "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "chat.missed.meeting_item": "<li>{courseName}: {id} - {topic}</li>",
    "chat.updates.header": "<b>Latest Updates:</b><ul>",
    "chat.updates.next_task": "<li>Next task: {task}</li>",
    "chat.updates.no_task": "No upcoming tasks.",
    "chat.updates.latest_material": "<li>Latest material: {material}</li>",
    "chat.updates.no_material": "No new materials.",
    "chat.perf.summary":
      "Your average score is {avg}%. Best course: {bestCourse} ({bestScore}%), weakest: {worstCourse} ({worstScore}%).",
    "chat.perf.no_scores": "No grades yet to calculate performance.",
    "motivation.response":
      "Keep up the good work in {bestCourse}! Try to improve your results in {worstCourse}.",
    "chat.attendance.overall": "Your overall attendance rate is {attendance}.",
    "chat.attendance.specific":
      "Attendance for {name}: Present {present}, Absent {absent}, Late {late} ({rate}% attendance).",
    "chat.attendance_warn.header": "<b>Attendance Warnings:</b><ul>",
    "chat.attendance_warn.item":
      "<li>{courseName}: {absentCount} absences</li>",
    "chat.attendance_warn.none": "No attendance warnings.",
    "chat.courselist.header": "<b>List of your courses:</b><ul>",
    "chat.coursedetails.info":
      "<b>{name}</b> ({code}) - {credits} credits. {meetings} meetings, {tasks} tasks, {materials} materials available.",
    "chat.coursedetails.prompt":
      "<br>You can ask about the tasks or materials for {courseKey}.",
    "chat.desc.prompt": "Which course task do you want me to describe?",
    "chat.desc.none": "No active task found for {courseName}.",
    "chat.desc.response": "<b>{title}</b> ({courseName}): {description}",
    "chat.gpa": "Your current GPA is {gpa}.",
    "chat.credits": "You have taken a total of {sks} credits this semester.",
    "chat.whoami":
      "You are Kharis, a hardworking student enrolled in Informatics.",
    "lecturer.prompt": "Please mention the course to find the lecturer info.",
    "lecturer.info": "Lecturer for {courseName}: {lecturer}.",
    "lecturer.room": "{courseName} is held in room {room}.",
    "lecturer.not_found": "Lecturer for {courseName} not found.",
    "chat.task_count.item": "{courseName} has {count} pending tasks.",
    "chat.task_count.none": "No pending tasks for {courseName}.",
    "chat.task_count.all": "You have {count} pending tasks in total.",
    "chat.task_count.all_none": "All tasks are completed!",
    "urgent.header": "<b>Most Urgent Task:</b>",
    "urgent.item": "{courseName}: {title} (Deadline: {deadline})",
    "urgent.none": "No urgent tasks at the moment.",
    "tasks_status.header": "<b>Tasks with status {status}:</b><ul>",
    "tasks_status.item":
      "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "tasks_status.none": "No tasks with status {status}.",
    "tasks_status.prompt": "Specify task status: late or pending review.",
    "chat.topics.header": "<b>This Week’s Topics:</b><ul>",
    "chat.topics.item": "<li>{courseName}: {topic} (Meeting {id})</li>",
    "chat.topics.none": "No topics available for this week.",
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

    "chat.greeting":
      "Halo Kharis! Tanya saya seputar dashboard Anda. Coba ketik 'bantuan'.",
    "chat.help":
      "Anda bisa bertanya tentang jadwal, tugas, kehadiran, atau info dosen.",
    "chat.welcome": "Sama-sama! Ada yang bisa saya bantu lagi?",
    "chat.hello": "Hai! Ada yang bisa saya bantu?",
    "chat.fallback": "Maaf, saya belum paham maksud pertanyaan Anda.",
    "chat.schedule.header": "Jadwal untuk hari {dayName}: <ul>",
    "chat.schedule.item": "<li>{time} - {course} ({room})</li>",
    "chat.schedule.not_found": "Jadwal untuk hari tersebut tidak ditemukan.",
    "chat.schedule.prompt": "Sebutkan hari yang ingin Anda cek.",
    "chat.schedule.today_off": "Hari ini tidak ada kelas. Nikmati waktu luang!",
    "chat.briefing.header": "Rangkuman hari {dayName}, {date}: <ul>",
    "chat.briefing.class_item": "<li>{time} - {course}: {topic}</li>",
    "chat.briefing.no_class": "Tidak ada kelas hari ini.",
    "chat.briefing.deadline_header":
      "<br><b>Tugas dengan deadline hari ini:</b>",
    "chat.briefing.deadline_item": "<li>{taskTitle} - {courseName}</li>",
    "chat.briefing.deadline_none": "Tidak ada tugas yang jatuh tempo hari ini.",
    "chat.tasks.header": "<b>Tugas yang belum selesai:</b><ul>",
    "chat.tasks.item": "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "chat.tasks.none_all": "Semua tugas sudah selesai!",
    "chat.tasks.none_specific": "Tidak ada tugas untuk {courseName}.",
    "chat.grades.prompt": "Sebutkan mata kuliah untuk melihat nilainya.",
    "chat.grades.header": "<b>Nilai untuk {courseName}:</b><ul>",
    "chat.grades.item": "<li>{title}: {score}/{maxScore}</li>",
    "chat.grades.item_pending": "<li>{title}: Menunggu penilaian</li>",
    "chat.grades.none": "Belum ada nilai untuk {courseName}.",
    "chat.missed.header": "<b>Yang terlewat:</b><ul>",
    "chat.missed.tasks_header": "<b>Tugas belum dikumpulkan:</b><ul>",
    "chat.missed.meetings_header": "<b>Pertemuan yang terlewat:</b><ul>",
    "chat.missed.tasks_none": "Tidak ada tugas yang terlewat.",
    "chat.missed.meetings_none": "Tidak ada pertemuan yang terlewat.",
    "chat.missed.task_item":
      "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "chat.missed.meeting_item": "<li>{courseName}: {id} - {topic}</li>",
    "chat.updates.header": "<b>Pembaruan Terbaru:</b><ul>",
    "chat.updates.next_task": "<li>Tugas berikutnya: {task}</li>",
    "chat.updates.no_task": "Belum ada tugas baru.",
    "chat.updates.latest_material": "<li>Materi terbaru: {material}</li>",
    "chat.updates.no_material": "Belum ada materi baru.",
    "chat.perf.summary":
      "Rata-rata nilai Anda {avg}%. Mata kuliah terbaik: {bestCourse} ({bestScore}%), terendah: {worstCourse} ({worstScore}%).",
    "chat.perf.no_scores": "Belum ada nilai untuk menghitung performa.",
    "motivation.response":
      "Pertahankan performa di {bestCourse}! Tingkatkan hasil di {worstCourse}.",
    "chat.attendance.overall":
      "Tingkat kehadiran keseluruhan Anda {attendance}.",
    "chat.attendance.specific":
      "Kehadiran untuk {name}: Hadir {present}, Absen {absent}, Terlambat {late} ({rate}% kehadiran).",
    "chat.attendance_warn.header": "<b>Peringatan Kehadiran:</b><ul>",
    "chat.attendance_warn.item":
      "<li>{courseName}: {absentCount} kali absen</li>",
    "chat.attendance_warn.none": "Tidak ada peringatan kehadiran.",
    "chat.courselist.header": "<b>Daftar Mata Kuliah:</b><ul>",
    "chat.coursedetails.info":
      "<b>{name}</b> ({code}) - {credits} SKS. {meetings} pertemuan, {tasks} tugas, {materials} materi tersedia.",
    "chat.coursedetails.prompt":
      "<br>Anda bisa tanya tugas atau materi dari {courseKey}.",
    "chat.desc.prompt": "Tugas mata kuliah mana yang ingin dijelaskan?",
    "chat.desc.none": "Tidak ada tugas aktif untuk {courseName}.",
    "chat.desc.response": "<b>{title}</b> ({courseName}): {description}",
    "chat.gpa": "IPK Anda saat ini adalah {gpa}.",
    "chat.credits": "Total SKS yang diambil semester ini: {sks}.",
    "chat.whoami": "Anda adalah Kharis, mahasiswa Informatika yang rajin.",
    "lecturer.prompt": "Sebutkan mata kuliahnya untuk melihat info dosen.",
    "lecturer.info": "Dosen pengampu {courseName}: {lecturer}.",
    "lecturer.room": "{courseName} diadakan di ruang {room}.",
    "lecturer.not_found": "Dosen untuk {courseName} tidak ditemukan.",
    "chat.task_count.item":
      "{courseName} memiliki {count} tugas belum dikumpulkan.",
    "chat.task_count.none": "Tidak ada tugas untuk {courseName}.",
    "chat.task_count.all": "Total {count} tugas yang belum dikumpulkan.",
    "chat.task_count.all_none": "Semua tugas sudah dikumpulkan!",
    "urgent.header": "<b>Tugas Paling Mendesak:</b>",
    "urgent.item": "{courseName}: {title} (Deadline: {deadline})",
    "urgent.none": "Tidak ada tugas mendesak saat ini.",
    "tasks_status.header": "<b>Tugas dengan status {status}:</b><ul>",
    "tasks_status.item":
      "<li>{courseName}: {title} (Deadline: {deadline})</li>",
    "tasks_status.none": "Tidak ada tugas dengan status {status}.",
    "tasks_status.prompt":
      "Tentukan status tugas: terlambat atau sedang dinilai.",
    "chat.topics.header": "<b>Topik Minggu Ini:</b><ul>",
    "chat.topics.item": "<li>{courseName}: {topic} (Pertemuan {id})</li>",
    "chat.topics.none": "Belum ada topik untuk minggu ini.",
  },
};

// Language Management
let currentLanguage = "en";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  applyTranslations();
  updateLanguageSelect();

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
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      if (element.tagName === "INPUT" && element.type === "placeholder") {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
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
    setLanguage(savedLanguage);
  } else {
    setLanguage("en");
  }
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
  const mainWrapper = document.querySelector(".main-wrapper"); // <-- Tambahkan ini

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

  // === LOGIKA BARU UNTUK LAYOUT CHATBOT ===
  if (mainWrapper) {
    if (sectionId === "chatbot") {
      mainWrapper.classList.add("chatbot-active");
    } else {
      mainWrapper.classList.remove("chatbot-active");
    }
  }
  // === AKHIR LOGIKA BARU ===

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "flex";

    if (sectionId === "attendance") {
      showCourseListView();
    }
    if (sectionId === "grades") {
      populateGradesPage();
    }
    if (sectionId === "dashboard" && typeof chart !== "undefined") {
      setTimeout(() => {
        chart.resize();
      }, 100);
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
  transcriptBtn.addEventListener("click", showTranscript);

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
  initHamburgerMenu();
  initSidebar();
  let chart = initChart();
  initAttendanceSystem();
  initLogout();
  initLanguage();
  initSettings();
  initAIAssistant();
  initQuickDarkMode();
  initScheduleFilter();
  initQuickActions();
  initGpaCalculator();

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

  if (chatbotFab && messagesContainer && inputField && sendBtn) {
    chatbotFab.addEventListener("click", () => {
      switchSection("chatbot");
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
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          removeMessage(loadingMessageId);

          // Grog API bisa kirim data langsung (pakai .choices) atau udah difilter backend
          const aiResponse =
            data.answer ||
            data.choices?.[0]?.message?.content ||
            data.message ||
            null;

          if (aiResponse) {
            addMessage(aiResponse, "bot");
          } else if (data.error) {
            addMessage("Maaf, ada error: " + data.error, "bot");
          } else {
            addMessage("Maaf, saya tidak menerima balasan yang valid.", "bot");
            console.warn("Respon tidak dikenali:", data);
          }
        })

        .catch((error) => {
          removeMessage(loadingMessageId);
          addMessage(
            "Maaf, terjadi masalah koneksi ke server. Coba lagi nanti.",
            "bot"
          );
          console.error("Error:", error);
        });
    };

    sendBtn.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });

    const addMessage = (message, sender, isLoading = false) => {
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
          msgDiv.innerHTML = message.replace(/\n/g, "<br>");
        }
      } else {
        const textSpan = document.createElement("span");
        textSpan.className = "chat-text";
        textSpan.textContent = message;
        msgDiv.appendChild(textSpan);
      }

      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      return messageId;
    };

    function removeMessage(messageId) {
      const messageElement = document.getElementById(messageId);
      if (messageElement) {
        messageElement.remove();
      }
    }
    const initialGreeting = translations[currentLanguage]["chat.greeting"];
    messagesContainer.innerHTML = "";
    addMessage(initialGreeting, "bot");
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
