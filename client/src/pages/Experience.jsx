import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Experience() {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "Software Engineer";
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (key) => {
    setShowAnswer((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const data = {
    "Software Engineer": {
      skills: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "System Design Basics",
        "OOP Concepts",
        "Debugging & Testing",
        "API Design",
        "Database Management",
        "Version Control (Git)",
      ],
      technologies: [
        "Java / Python",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB / SQL",
        "Git & GitHub",
        "REST APIs",
      ],
      roadmap: [
        "Learn programming fundamentals (1–2 months)",
        "Master DSA (3–6 months)",
        "Build small projects",
        "Learn frontend & backend",
        "Build full stack projects",
        "Learn system design basics",
        "Practice interview problems daily",
      ],
      dailyPlan: [
        "2 hours DSA practice",
        "1 hour development",
        "1 hour project building",
        "30 mins revision",
      ],
      projects: [
        "E-commerce website with cart system",
        "Real-time chat application",
        "Task manager app",
        "Portfolio generator",
      ],
      resources: [
        "https://leetcode.com",
        "https://www.youtube.com/@freecodecamp",
        "https://www.youtube.com/@TraversyMedia",
        "https://www.geeksforgeeks.org",
      ],
      quiz: [
        {
          q: "What is used to store data permanently?",
          options: ["RAM", "CPU", "Database", "Cache"],
          answer: "Database",
        },
      ],
    },

    "Data Scientist": {
      skills: [
        "Statistics & Probability",
        "Machine Learning",
        "Data Cleaning",
        "Data Visualization",
        "Python Programming",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "SQL",
      ],
      roadmap: [
        "Learn Python basics",
        "Learn statistics",
        "Practice datasets",
        "Learn ML algorithms",
        "Build ML projects",
      ],
      dailyPlan: [
        "1 hr Python",
        "1 hr ML theory",
        "1 hr dataset practice",
      ],
      projects: [
        "Stock prediction model",
        "Customer segmentation",
        "Movie recommender",
      ],
      resources: [
        "https://www.kaggle.com",
        "https://www.youtube.com/@freecodecamp",
      ],
      quiz: [
        {
          q: "Which library is used for data analysis?",
          options: ["Pandas", "React", "HTML", "Java"],
          answer: "Pandas",
        },
      ],
    },
  };

  const plan = data[role] || data["Software Engineer"];

  // UI styles (inline theme system)
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#020617)",
      color: "white",
      padding: "40px",
      fontFamily: "Segoe UI",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "38px",
      fontWeight: "800",
      background: "linear-gradient(90deg,#facc15,#f97316)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    section: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "14px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    },
    heading: {
      fontSize: "20px",
      marginBottom: "12px",
      color: "#60a5fa",
    },
    item: {
      padding: "10px",
      marginBottom: "8px",
      background: "rgba(0,0,0,0.4)",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      marginTop: "30px",
      padding: "12px 20px",
      background: "#1f2937",
      border: "none",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },
    quizBox: {
      background: "rgba(255,255,255,0.05)",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    option: {
      display: "block",
      width: "100%",
      marginTop: "5px",
      padding: "8px",
      borderRadius: "6px",
      background: "rgba(0,0,0,0.4)",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.title}>🚀 Experience Plan</div>
        <p style={{ color: "#94a3b8" }}>Roadmap to become {role}</p>
      </div>

      {/* SKILLS */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Skills You Must Learn</h2>
        {plan.skills.map((s, i) => (
          <div key={i} style={styles.item}>{s}</div>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Technologies</h2>
        {plan.technologies.map((t, i) => (
          <div key={i} style={styles.item}>{t}</div>
        ))}
      </div>

      {/* ROADMAP */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Step-by-Step Roadmap</h2>
        {plan.roadmap.map((r, i) => (
          <div key={i} style={styles.item}>{r}</div>
        ))}
      </div>

      {/* DAILY PLAN */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Daily Routine</h2>
        {plan.dailyPlan.map((d, i) => (
          <div key={i} style={styles.item}>{d}</div>
        ))}
      </div>

      {/* PROJECTS */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        {plan.projects.map((p, i) => (
          <div key={i} style={styles.item}>🚀 {p}</div>
        ))}
      </div>

      {/* RESOURCES */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Free Resources</h2>
        {plan.resources.map((r, i) => (
          <a key={i} href={r} target="_blank" rel="noreferrer"
            style={{ ...styles.item, display: "block", color: "#38bdf8" }}>
            🔗 {r}
          </a>
        ))}
      </div>


      {/* BACK BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button style={styles.button} onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>

    </div>
  );
}