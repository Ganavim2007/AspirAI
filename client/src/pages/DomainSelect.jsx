import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function DomainSelect() {

  const navigate = useNavigate();

  const domains = [
    {
      name: "Engineering",
      icon: "💻",
      color: "from-purple-600 to-cyan-500",
      desc: "Software, AI, Development & Technology",
    },
    {
      name: "Medical",
      icon: "🩺",
      color: "from-pink-500 to-red-500",
      desc: "Healthcare, Research & Medicine",
    },
    {
      name: "Banking",
      icon: "🏦",
      color: "from-green-500 to-emerald-600",
      desc: "Finance, Investment & Banking",
    },
    {
      name: "Government",
      icon: "🏛️",
      color: "from-yellow-500 to-orange-500",
      desc: "Civil Services & Public Sector",
    },
    {
      name: "Business",
      icon: "📈",
      color: "from-blue-500 to-indigo-600",
      desc: "Startup, Management & Marketing",
    },
    {
      name: "Arts",
      icon: "🎨",
      color: "from-fuchsia-500 to-pink-500",
      desc: "Design, Creativity & Media",
    },
  ];

  return (

    <div className="
      min-h-screen
      relative
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      px-6
      py-16
      bg-[#050816]
      text-white
    ">

      {/* BACKGROUND LIGHTS */}

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

      {/* MAIN CONTENT */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          text-center
        "
      >

        {/* HEADING */}

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
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
          Choose Your Domain
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
          Select your field of interest and let AI generate
          your personalized career roadmap
        </motion.p>

        {/* DOMAIN CARDS */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {domains.map((d, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="
                relative
                overflow-hidden
                group
                backdrop-blur-2xl
                bg-white/10
                border
                border-white/10
                rounded-[32px]
                p-8
                text-left
                shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                transition-all
                duration-500
              "
            >

              {/* HOVER GLOW */}

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

              <div className={`
                w-20
                h-20
                rounded-3xl
                bg-gradient-to-r
                ${d.color}
                flex
                items-center
                justify-center
                text-4xl
                mb-8
                shadow-[0_0_25px_rgba(168,85,247,0.35)]
              `}>
                {d.icon}
              </div>

              {/* DOMAIN NAME */}

              <h2 className="
                text-3xl
                font-bold
                mb-4
              ">
                {d.name}
              </h2>

              {/* DESCRIPTION */}

              <p className="
                text-gray-300
                text-lg
                leading-8
                mb-10
              ">
                {d.desc}
              </p>

              {/* FEATURES */}

              <div className="
                flex
                flex-wrap
                gap-3
                mb-10
              ">

                <span className="
                  px-4
                  py-2
                  rounded-full
                  bg-purple-500/20
                  border
                  border-purple-400/30
                  text-sm
                ">
                  AI Analysis
                </span>

                <span className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  border
                  border-cyan-400/30
                  text-sm
                ">
                  Career Roadmap
                </span>

                <span className="
                  px-4
                  py-2
                  rounded-full
                  bg-pink-500/20
                  border
                  border-pink-400/30
                  text-sm
                ">
                  Skill Guidance
                </span>

              </div>

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => navigate("/engineering")}
                className={`
                  relative
                  overflow-hidden
                  group
                  w-full
                  py-5
                  rounded-2xl
                  text-xl
                  font-bold
                  bg-gradient-to-r
                  ${d.color}
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(168,85,247,0.35)]
                `}
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
                  Explore Domain
                </span>

              </motion.button>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>
  );
}