import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { questions } from "../data/questions";

export default function Questionnaire() {

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const current = questions[index];

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
    setError("");
  };

  const handleNext = () => {

    const answer = answers[index];

    if (!answer || String(answer).trim() === "") {
      setError("Please answer before continuing 🚨");
      return;
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(answers));
      navigate("/result");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center px-6 py-10 text-white relative overflow-hidden bg-[#050816]">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
        relative
        backdrop-blur-2xl
        bg-white/10
        border border-white/10
        rounded-[32px]
        p-10
        max-w-3xl
        w-full
        shadow-[0_8px_40px_rgba(0,0,0,0.4)]
        hover:shadow-purple-500/20
        transition-all
        duration-500
      "
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <p className="text-purple-300 text-lg font-semibold tracking-wide">
            Question {index + 1}/{questions.length}
          </p>

          <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-semibold">
            Aspira AI Analysis
          </div>

        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-3 bg-gray-800 rounded-full mb-10 overflow-hidden relative">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((index + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-cyan-400
            relative
          "
          >

            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>

          </motion.div>

        </div>

        {/* QUESTION */}
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
          text-3xl
          md:text-4xl
          font-extrabold
          mb-10
          leading-relaxed
          bg-gradient-to-r
          from-white
          to-gray-300
          bg-clip-text
          text-transparent
        "
        >
          {current.question}
        </motion.h1>

        {/* MCQ */}
        {current.type === "mcq" && (

          <div className="grid gap-5">

            {current.options.map((opt, i) => (

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                key={i}
                onClick={() => handleAnswer(opt)}
                className={`
                relative
                overflow-hidden
                group
                p-5
                rounded-2xl
                border
                text-left
                text-lg
                font-medium
                transition-all
                duration-300

                ${answers[index] === opt
                    ? `
                      bg-gradient-to-r
                      from-purple-600
                      to-cyan-500
                      border-purple-300
                      shadow-[0_0_25px_rgba(168,85,247,0.45)]
                    `
                    : `
                      bg-white/5
                      border-white/10
                      hover:bg-white/10
                    `
                  }
              `}
              >

                {/* BUTTON SHINE EFFECT */}
                <div className="
                absolute
                inset-0
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-transform
                duration-1000
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "></div>

                <span className="relative z-10">
                  {opt}
                </span>

              </motion.button>

            ))}

          </div>
        )}

        {/* TEXTAREA */}
        {current.type === "text" && (

          <motion.textarea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            value={answers[index] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="
            w-full
            h-44
            p-6
            rounded-3xl
            bg-black/30
            border border-gray-700
            outline-none
            text-lg
            resize-none
            transition-all
            duration-300
            focus:border-purple-500
            focus:shadow-[0_0_25px_rgba(168,85,247,0.3)]
          "
          />

        )}

        {/* ERROR */}
        {error && (

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
            text-red-400
            mt-5
            text-lg
            font-semibold
          "
          >
            {error}
          </motion.p>

        )}

        {/* NEXT BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 0px 35px rgba(168,85,247,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={handleNext}
          className="
          mt-12
          w-full
          py-5
          rounded-3xl
          text-xl
          font-bold
          bg-gradient-to-r
          from-purple-600
          via-pink-500
          to-cyan-500
          shadow-[0_0_25px_rgba(168,85,247,0.35)]
          transition-all
          duration-300
          relative
          overflow-hidden
          group
        "
        >

          {/* BUTTON SHINE */}
          <div className="
          absolute
          inset-0
          translate-x-[-100%]
          group-hover:translate-x-[100%]
          transition-transform
          duration-1000
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "></div>

          <span className="relative z-10">

            {index === questions.length - 1
              ? "Generate AI Career Report"
              : "Next Question"}

          </span>

        </motion.button>

      </motion.div>

    </div>
  );
}