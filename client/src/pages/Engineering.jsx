import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Engineering() {

  const navigate = useNavigate();

  return (

    <div className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
      bg-[#050816]
      text-white
    ">

      {/* BACKGROUND GLOW EFFECTS */}

      <div className="
        absolute
        top-[-120px]
        left-[-120px]
        w-[350px]
        h-[350px]
        bg-purple-600/20
        blur-[120px]
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-[-120px]
        right-[-120px]
        w-[350px]
        h-[350px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
      "></div>

      {/* MAIN CONTAINER */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-5xl
          text-center
          backdrop-blur-2xl
          bg-white/5
          border
          border-white/10
          rounded-[40px]
          p-12
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        "
      >

        {/* HEADING */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            text-6xl
            md:text-7xl
            font-extrabold
            mb-6
            bg-gradient-to-r
            from-purple-400
            via-pink-500
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Engineering Path
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-xl
            md:text-2xl
            text-gray-300
            mb-16
            leading-relaxed
          "
        >
          Discover your future career roadmap with AI-powered guidance
        </motion.p>

        {/* CARDS */}

        <div className="
          grid
          md:grid-cols-2
          gap-10
        ">

          {/* TECHNICAL DOMAIN */}

          <motion.div
            whileHover={{
              scale: 1.03,
              y: -6,
            }}
            transition={{ duration: 0.3 }}
            className="
              relative
              overflow-hidden
              group
              backdrop-blur-xl
              bg-white/10
              border
              border-purple-500/20
              rounded-3xl
              p-10
              text-left
              hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
              transition-all
              duration-500
            "
          >

            {/* CARD GLOW */}

            <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-br
              from-purple-500/10
              to-cyan-500/10
            "></div>

            {/* ICON */}

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              shadow-[0_0_25px_rgba(168,85,247,0.4)]
            ">
              💻
            </div>

            {/* TITLE */}

            <h2 className="
              text-3xl
              font-bold
              mb-5
              text-purple-300
            ">
              Technical Domain
            </h2>

            {/* DESCRIPTION */}

            <p className="
              text-gray-300
              text-lg
              leading-8
              mb-8
            ">
              Explore AI-powered career recommendations in:
              <br /><br />

              • Software Development  
              • AI & Machine Learning  
              • Web Development  
              • App Development  
              • Cybersecurity  
              • Cloud Computing  
              • Data Science  
              • DevOps Engineering
            </p>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => navigate("/questionnaire")}
              className="
                relative
                overflow-hidden
                group
                w-full
                py-5
                rounded-2xl
                text-xl
                font-bold
                bg-gradient-to-r
                from-purple-600
                via-pink-500
                to-cyan-500
                shadow-[0_0_25px_rgba(168,85,247,0.35)]
                transition-all
                duration-300
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
                Start AI Analysis
              </span>

            </motion.button>

          </motion.div>

          {/* NON TECHNICAL */}

          <motion.div
            whileHover={{
              scale: 1.03,
              y: -6,
            }}
            transition={{ duration: 0.3 }}
            className="
              relative
              overflow-hidden
              group
              backdrop-blur-xl
              bg-white/10
              border
              border-cyan-500/20
              rounded-3xl
              p-10
              text-left
              hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]
              transition-all
              duration-500
            "
          >

            {/* CARD GLOW */}

            <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-br
              from-cyan-500/10
              to-purple-500/10
            "></div>

            {/* ICON */}

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              shadow-[0_0_25px_rgba(6,182,212,0.4)]
            ">
              📊
            </div>

            {/* TITLE */}

            <h2 className="
              text-3xl
              font-bold
              mb-5
              text-cyan-300
            ">
              Non-Technical Domain
            </h2>

            {/* DESCRIPTION */}

            <p className="
              text-gray-300
              text-lg
              leading-8
              mb-8
            ">
              Future enhancement for:
              <br /><br />

              • Business Analytics  
              • Marketing  
              • HR Management  
              • Finance  
              • Entrepreneurship  
              • Product Management  
              • Consulting
            </p>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => alert("Coming Soon 🚀")}
              className="
                relative
                overflow-hidden
                group
                w-full
                py-5
                rounded-2xl
                text-xl
                font-bold
                bg-gradient-to-r
                from-gray-700
                to-gray-900
                border
                border-white/10
                transition-all
                duration-300
              "
            >

              <div className="
                absolute
                inset-0
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-transform
                duration-1000
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "></div>

              <span className="relative z-10">
                Coming Soon
              </span>

            </motion.button>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}