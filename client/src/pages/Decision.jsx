import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Decision() {

  const navigate = useNavigate();

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#050816]
      text-white
      relative
      overflow-hidden
      px-6
    ">

      {/* BACKGROUND GLOWS */}

      <div className="
        absolute
        w-[500px]
        h-[500px]
        bg-purple-600
        blur-[160px]
        opacity-20
        rounded-full
        top-[-100px]
        left-[-100px]
      "></div>

      <div className="
        absolute
        w-[450px]
        h-[450px]
        bg-cyan-500
        blur-[160px]
        opacity-20
        rounded-full
        bottom-[-120px]
        right-[-120px]
      "></div>

      {/* MAIN CARD */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          text-center
          backdrop-blur-2xl
          bg-white/10
          border
          border-white/10
          rounded-[35px]
          p-12
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        "
      >

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            text-5xl
            md:text-6xl
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
          Career Path Selection
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-gray-300
            text-xl
            mb-12
          "
        >
          Tell us where you are in your journey and let AI guide your future
        </motion.p>

        {/* BUTTONS */}

        <div className="
          flex
          flex-col
          gap-8
          items-center
        ">

          {/* DECIDED */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/domain")}
            className="
              relative
              overflow-hidden
              w-80
              py-5
              rounded-2xl
              font-bold
              text-lg
              bg-gradient-to-r
              from-indigo-500
              to-purple-600
              transition-all
              duration-300
            "
          >

            <div className="
              absolute
              inset-0
              translate-x-[-100%]
              hover:translate-x-[100%]
              transition-transform
              duration-1000
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "></div>

            <span className="relative z-10">
              Career Already Decided
            </span>

          </motion.button>

          {/* NOT DECIDED */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(236,72,153,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/questionnaire")}
            className="
              relative
              overflow-hidden
              w-80
              py-5
              rounded-2xl
              font-bold
              text-lg
              bg-gradient-to-r
              from-pink-500
              to-orange-500
              transition-all
              duration-300
            "
          >

            <div className="
              absolute
              inset-0
              translate-x-[-100%]
              hover:translate-x-[100%]
              transition-transform
              duration-1000
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "></div>

            <span className="relative z-10">
              Career Not Decided
            </span>

          </motion.button>

        </div>

      </motion.div>

    </div>
  );
}