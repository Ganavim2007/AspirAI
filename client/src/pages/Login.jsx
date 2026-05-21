import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {

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

      {/* LOGIN CARD */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          p-12
          rounded-[35px]
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        "
      >

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            mb-3
            bg-gradient-to-r
            from-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Welcome to Aspira AI
        </motion.h2>

        {/* SUBTITLE */}

        <p className="
          text-center
          text-gray-300
          mb-10
          text-lg
        ">
          Enter your details to begin your AI career journey
        </p>

        {/* INPUTS */}

        <div className="
          grid
          gap-6
        ">

          <input
            className="
              p-4
              rounded-2xl
              bg-black/40
              border
              border-gray-700
              outline-none
              focus:border-purple-500
              focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
              transition-all
              duration-300
            "
            placeholder="Enter Your Name"
          />

          <input
            className="
              p-4
              rounded-2xl
              bg-black/40
              border
              border-gray-700
              outline-none
              focus:border-cyan-500
              focus:shadow-[0_0_20px_rgba(6,182,212,0.3)]
              transition-all
              duration-300
            "
            placeholder="Enter Your Email"
          />

        </div>

        {/* BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => navigate("/decision")}
          className="
            mt-10
            w-full
            py-5
            rounded-2xl
            font-bold
            text-lg
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            shadow-[0_0_25px_rgba(168,85,247,0.4)]
            transition-all
            duration-300
          "
        >
          Continue
        </motion.button>

      </motion.div>

    </div>
  );
}