import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Experience() {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "Software Engineer";

  const [completedTasks, setCompletedTasks] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(7);

  const data = {
    "Software Engineer": {
      description:
        "Software Engineers build real-world applications, websites, APIs, and scalable systems used by millions of users. They solve problems using programming, development frameworks, databases, and system architecture concepts.",

      salary: "8 – 35+ LPA",

      level: "High Demand",

      duration: "6 – 12 Months Preparation",

      mentorTip:
        "Focus on DSA + Full Stack Projects together. Most students only study theory and fail in placements because they don't build projects.",

      skills: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "OOP Concepts",
        "Database Management",
        "API Integration",
        "Git & GitHub",
        "Debugging",
        "System Design Basics",
      ],

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Java / Python",
      ],

      roadmap: [
        "Learn programming basics",
        "Master arrays, strings, linked lists",
        "Learn frontend development",
        "Learn backend APIs",
        "Build full stack apps",
        "Practice interview questions",
        "Deploy projects online",
      ],

      dailyPlan: [
        "2 hrs DSA practice",
        "1 hr development learning",
        "1 hr project building",
        "30 mins aptitude",
        "30 mins revision",
      ],

      projects: [
        {
          title: "AI Career Guidance Platform",
          difficulty: "Advanced",
        },
        {
          title: "E-Commerce Application",
          difficulty: "Intermediate",
        },
        {
          title: "Real-Time Chat App",
          difficulty: "Intermediate",
        },
        {
          title: "Portfolio Generator",
          difficulty: "Beginner",
        },
      ],

      weeklyTargets: [
        "Solve 30 LeetCode questions",
        "Push code to GitHub daily",
        "Complete one mini project feature",
        "Revise DBMS & OS concepts",
      ],

      resources: [
        {
          name: "freeCodeCamp",
          link: "https://www.youtube.com/@freecodecamp",
        },
        {
          name: "Traversy Media",
          link: "https://www.youtube.com/@TraversyMedia",
        },
        {
          name: "LeetCode",
          link: "https://leetcode.com",
        },
      ],

      companies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Adobe",
        "Atlassian",
      ],

      quiz: [
        {
          q: "Which is mainly used for backend development?",
          options: ["Node.js", "Figma", "Photoshop", "Canva"],
          answer: "Node.js",
        },
        {
          q: "Which platform is best for DSA practice?",
          options: ["LeetCode", "Netflix", "Instagram", "Spotify"],
          answer: "LeetCode",
        },
        {
          q: "GitHub is used for?",
          options: [
            "Version Control",
            "Photo Editing",
            "Gaming",
            "Designing",
          ],
          answer: "Version Control",
        },
        {
          q: "Which database is NoSQL?",
          options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
          answer: "MongoDB",
        },
      ],
    },
  };

  const plan = data[role] || data["Software Engineer"];

  const currentQuiz = plan.quiz[quizIndex];

  useEffect(() => {
    const savedXP = localStorage.getItem("xp");
    if (savedXP) {
      setXp(Number(savedXP));
    }
  }, []);

  const completeTask = (task) => {
    if (!completedTasks[task]) {
      setCompletedTasks({
        ...completedTasks,
        [task]: true,
      });

      const newXP = xp + 10;
      setXp(newXP);
      localStorage.setItem("xp", newXP);
    }
  };

  const nextQuiz = () => {
    setQuizIndex((prev) =>
      prev + 1 >= plan.quiz.length ? 0 : prev + 1
    );

    setSelectedAnswer("");
    setShowResult(false);
  };

  const checkAnswer = (option) => {
    setSelectedAnswer(option);
    setShowResult(true);

    if (option === currentQuiz.answer) {
      const newXP = xp + 20;
      setXp(newXP);
      localStorage.setItem("xp", newXP);
    }
  };

  const progress =
    (Object.keys(completedTasks).length /
      plan.dailyPlan.length) *
    100;

  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#020617,#0f172a,#111827)",
      padding: "30px",
      color: "white",
      fontFamily: "Segoe UI",
    },

    hero: {
      background:
        "linear-gradient(135deg,#1e293b,#0f172a)",
      borderRadius: "25px",
      padding: "35px",
      marginBottom: "25px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    },

    heroTitle: {
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "10px",
      background:
        "linear-gradient(90deg,#facc15,#fb7185)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    statsRow: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      marginTop: "20px",
    },

    statCard: {
      flex: "1",
      minWidth: "180px",
      background: "rgba(255,255,255,0.05)",
      padding: "18px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.08)",
    },

    card: {
      background: "rgba(255,255,255,0.05)",
      borderRadius: "20px",
      padding: "25px",
      marginBottom: "22px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    },

    heading: {
      fontSize: "24px",
      marginBottom: "18px",
      color: "#60a5fa",
      fontWeight: "700",
    },

    item: {
      background: "rgba(0,0,0,0.35)",
      padding: "14px",
      borderRadius: "12px",
      marginBottom: "12px",
      lineHeight: "24px",
      border: "1px solid rgba(255,255,255,0.05)",
    },

    taskButton: {
      marginTop: "10px",
      background:
        "linear-gradient(90deg,#2563eb,#7c3aed)",
      border: "none",
      padding: "10px 15px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },

    progressBar: {
      width: "100%",
      height: "14px",
      background: "#1e293b",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "15px",
    },

    progressFill: {
      width: `${progress}%`,
      height: "100%",
      background:
        "linear-gradient(90deg,#22c55e,#14b8a6)",
    },

    quizOption: {
      background: "#1e293b",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "10px",
      cursor: "pointer",
      transition: "0.3s",
    },

    backButton: {
      padding: "14px 22px",
      borderRadius: "12px",
      border: "none",
      background:
        "linear-gradient(90deg,#334155,#475569)",
      color: "white",
      cursor: "pointer",
      fontWeight: "700",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroTitle}>
          🚀 {role} Mastery Plan
        </div>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "30px",
            fontSize: "16px",
          }}
        >
          {plan.description}
        </p>

        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <h3>💰 Salary Range</h3>
            <p>{plan.salary}</p>
          </div>

          <div style={styles.statCard}>
            <h3>📈 Demand</h3>
            <p>{plan.level}</p>
          </div>

          <div style={styles.statCard}>
            <h3>⏳ Preparation</h3>
            <p>{plan.duration}</p>
          </div>

          <div style={styles.statCard}>
            <h3>🔥 XP Earned</h3>
            <p>{xp} XP</p>
          </div>

          <div style={styles.statCard}>
            <h3>⚡ Learning Streak</h3>
            <p>{streak} Days</p>
          </div>
        </div>
      </div>

      {/* MENTOR TIP */}
      <div style={styles.card}>
        <h2 style={styles.heading}>🎓 Mentor Advice</h2>

        <div style={styles.item}>
          {plan.mentorTip}
        </div>
      </div>

      {/* SKILLS */}
      <Section
        title="🧠 Skills You Must Learn"
        items={plan.skills}
        styles={styles}
      />

      {/* TECHNOLOGIES */}
      <Section
        title="⚙ Technologies"
        items={plan.technologies}
        styles={styles}
      />

      {/* ROADMAP */}
      <Section
        title="🛣 Career Roadmap"
        items={plan.roadmap}
        styles={styles}
      />

      {/* DAILY TASK TRACKER */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          📅 Daily Routine Tracker
        </h2>

        {plan.dailyPlan.map((task, i) => (
          <div key={i} style={styles.item}>
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <span>{task}</span>

              <button
                style={{
                  ...styles.taskButton,
                  background:
                    completedTasks[task]
                      ? "#16a34a"
                      : "linear-gradient(90deg,#2563eb,#7c3aed)",
                }}
                onClick={() =>
                  completeTask(task)
                }
              >
                {completedTasks[task]
                  ? "Completed"
                  : "Mark Done"}
              </button>
            </div>
          </div>
        ))}

        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>

        <p style={{ marginTop: "10px" }}>
          Progress: {Math.round(progress)}%
        </p>
      </div>

      {/* PROJECTS */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          🚀 Recommended Projects
        </h2>

        {plan.projects.map((project, i) => (
          <div key={i} style={styles.item}>
            <strong>{project.title}</strong>

            <div
              style={{
                marginTop: "8px",
                color: "#94a3b8",
              }}
            >
              Difficulty: {project.difficulty}
            </div>
          </div>
        ))}
      </div>

      {/* WEEKLY TARGETS */}
      <Section
        title="🎯 Weekly Targets"
        items={plan.weeklyTargets}
        styles={styles}
      />

      {/* TOP COMPANIES */}
      <Section
        title="🏢 Dream Companies"
        items={plan.companies}
        styles={styles}
      />

      {/* RESOURCES */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          📚 Free Resources
        </h2>

        {plan.resources.map((resource, i) => (
          <a
            key={i}
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            style={{
              ...styles.item,
              display: "block",
              textDecoration: "none",
              color: "#38bdf8",
            }}
          >
            🔗 {resource.name}
          </a>
        ))}
      </div>

      {/* QUIZ */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          🎯 Daily Quiz Challenge
        </h2>

        <div style={styles.item}>
          {currentQuiz.q}
        </div>

        {currentQuiz.options.map((option, i) => (
          <div
            key={i}
            style={styles.quizOption}
            onClick={() =>
              checkAnswer(option)
            }
          >
            {option}
          </div>
        ))}

        {showResult && (
          <div
            style={{
              marginTop: "15px",
              padding: "14px",
              borderRadius: "12px",
              background:
                selectedAnswer ===
                currentQuiz.answer
                  ? "#14532d"
                  : "#7f1d1d",
            }}
          >
            {selectedAnswer ===
            currentQuiz.answer
              ? "✅ Correct Answer!"
              : `❌ Correct Answer: ${currentQuiz.answer}`}
          </div>
        )}

        <button
          style={styles.taskButton}
          onClick={nextQuiz}
        >
          Next Quiz →
        </button>
      </div>

      {/* BACK BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button
          style={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

function Section({
  title,
  items,
  styles,
}) {
  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>{title}</h2>

      {items.map((item, i) => (
        <div key={i} style={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
}