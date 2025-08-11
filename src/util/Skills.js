const education = [
    {
        institution: "National University of Colombia",
        title: "Bachelor of Systems and Computer Engineering",
        period: "2020-08 | 2026-06"
    },
    {
        institution: "Samsung Innovation Campus",
        title: "Bootcamp - Course in Python Coding and Programming",
        period: "2022-11 | 2023-04",
    },
    {
        institution: "SENA",
        title: "English Dot Works (Level 0 - 7)",
        period: "2019-06 | 2020-06",
    },
    {
        institution: "Claretiano Gustavo Torres Parra E.I.",
        title: "High School Graduate",
        period: "2019-11"
    }
]

const courses = [
    {
        institution: "Polytechnic University of Colombia",
        title: "Diploma in PHP Programming",
        period: "2025-05 | 2025-06",
    },
    {
        institution: "Colsubsidio Technological Education",
        title: "Advanced Excel and Power BI Fundamentals",
        period: "2025-05 | 2025-06",
    },
    {
        institution: "Udemy",
        title: "Wordpress for Beginners - Master Wordpress Quickly",
        period: "2025-04",
    },
    {
        institution: "Skillsoft",
        title: "Concurrency",
        period: "2025-04",
    },
    {
        institution: "University of the Andes",
        title: "Backend with Python",
        period: "2025-02 | 2025-04",
    },
    {
        institution: "Coursera",
        title: "AI Now 2.0 - Use GEN AI as your Thought Partner - Module 1 & 2",
        period: "2025-04",
    },
    {
        institution: "Udemy",
        title: "AI Agents – Transforming Business and Complex Processes",
        period: "2025-04",
    },
    {
        institution: "Samsung Innovation Campus",
        title: "Artificial Intelligence Course – Principles and Fundamentals",
        period: "2023-05 | 2023-06",
    },
    {
        institution: "National University of Colombia",
        title: "Innovation Lab – Practical Programming Workshop for All",
        period: "2021-07",
    },
    {
        institution: "WIE UNAL",
        title: "Python Programming Course",
        period: "2021-06 | 2021-07",
    },
    {
        institution: "SENA",
        title: "Design Fundamentals",
        period: "2021-06",
    },
    {
        institution: "SENA",
        title: "Computer Architecture",
        period: "2021-06",
    },
    {
        institution: "SENA",
        title: "Third Person Video Game Design with UNITY",
        period: "2020-06",
    },
    {
        institution: "Carlos Slim Foundation",
        title: "Introduction to Programming",
        period: "2020-04",
    },
    {
        institution: "EAN University",
        title: "Introduction to University Mathematics",
        period: "2020-04",
    },
    {
        institution: "SENA",
        title: "Adobe Photoshop Management",
        period: "2019-11",
    },
    {
        institution: "SENA",
        title: "C++ Programming Language (Level 0-2)",
        period: "2019-11 | 2019-12",
    },
    {
        institution: "SENA",
        title: "Design and Prototyping",
        period: "2018-12",
    },
    {
        institution: "SENA",
        title: "Technoacademy: Science, Technology and Innovation Contextualization",
        period: "2018-11",
    }
];

const skills = [
    { name: "Python", certified: true, porcentage: "75%", icon: "fa-brands fa-python" },
    { name: "C++", certified: true, porcentage: "40%", icon: "fa-solid fa-terminal" },
    { name: "Java", certified: false, porcentage: "40%", icon: "fa-brands fa-java" },
    { name: "Matlab", certified: false, porcentage: "40%", icon: "fa-solid fa-arrow-down-1-9" },
    { name: "MySQL", certified: false, porcentage: "60%", icon: "fa-solid fa-database" },
    { name: "Postgress", certified: false, porcentage: "30%", icon: "fa-solid fa-database" },
    { name: "HTML", certified: false, porcentage: "50%", icon: "fa-brands fa-html5" },
    { name: "JavaScript", certified: false, porcentage: "70%", icon: "fa-brands fa-js" },
    { name: "CSS", certified: false, porcentage: "30%", icon: "fa-brands fa-css" },
    { name: "WordPress", certified: false, porcentage: "25%", icon: "fa-brands fa-wordpress" },
    { name: "React", certified: false, porcentage: "25%", icon: "fa-brands fa-react" },
    { name: "NodeJS", certified: false, porcentage: "25%", icon: "fa-brands fa-node-js" },
    { name: "Unity", certified: false, porcentage: "10%", icon: "fa-brands fa-unity" }
];

const languages = [
    { name: "Spanish", porcentage: "100%" },
    { name: "English", porcentage: "60%" },
    { name: "Japanese", porcentage: "20%" }
];

const others = [
    { name: "Inclusivity" },
    { name: "Gender Equality" },
    { name: "Design and Prototyping" },
    { name: "Photoshop and Canva" },
    { name: "Social Media Management" },
    { name: "Creating Content for Social Media" },
]

// Función para convertir el porcentaje de string a número
const getPercentageNumber = (percentageStr) => {
    return parseInt(percentageStr.replace('%', ''));
};

const getSkillLevel = (percentageStr) => {
    const percentage = getPercentageNumber(percentageStr);
    if (percentage < 35) return "Basic";
    if (percentage < 75) return "Intermediate";
    if (percentage < 85) return "Advanced";
    if (percentage < 99) return "Professional";
    return "Native";
};

export { education, courses, skills, languages, others, getSkillLevel }