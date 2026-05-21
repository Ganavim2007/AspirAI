import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {

  const navigate = useNavigate();

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      bg-[#050816]
      text-white
      px-6
    ">

      {/* BACKGROUND GLOWS */}

      <div className="
        absolute
        w-[600px]
        h-[600px]
        bg-purple-600
        blur-[180px]
        opacity-20
        rounded-full
        top-[-120px]
        left-[-120px]
      "></div>

      <div className="
        absolute
        w-[500px]
        h-[500px]
        bg-cyan-500
        blur-[160px]
        opacity-20
        rounded-full
        bottom-[-120px]
        right-[-120px]
      "></div>

      {/* MAIN CARD */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          text-center
          max-w-4xl
          w-full
          backdrop-blur-2xl
          bg-white/5
          border
          border-white/10
          rounded-[40px]
          p-12
          shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        "
      >

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-6xl
            md:text-7xl
            font-extrabold
            tracking-widest
            bg-gradient-to-r
            from-purple-400
            via-pink-500
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          ASPIRA AI
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-8
            text-xl
            md:text-2xl
            text-gray-300
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          AI-powered career guidance platform that analyzes your answers and
          generates a personalized roadmap for your future in technology.
        </motion.p>

        {/* FEATURES */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          <span className="
            px-5
            py-2
            rounded-full
            bg-purple-500/20
            border
            border-purple-400/30
          ">
            AI Career Analysis
          </span>

          <span className="
            px-5
            py-2
            rounded-full
            bg-cyan-500/20
            border
            border-cyan-400/30
          ">
            Roadmap Generator
          </span>

          <span className="
            px-5
            py-2
            rounded-full
            bg-pink-500/20
            border
            border-pink-400/30
          ">
            Skill Guidance
          </span>

        </motion.div>

        {/* BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 30px rgba(139,92,246,0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
          className="
            mt-12
            px-10
            py-5
            text-xl
            font-bold
            rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            shadow-[0_0_25px_rgba(139,92,246,0.4)]
            transition-all
          "
        >
          Start Building Your Future
        </motion.button>

      </motion.div>

    </div>
  );
}