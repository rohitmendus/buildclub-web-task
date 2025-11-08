import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-primary text-background px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-24 md:py-32"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary/85"></div>

      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center md:text-left"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-secondary"
        >
          About Buildclub
        </motion.h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto md:mx-0">
          Buildclub is not just a tech community — it’s a playground for
          innovators. We bring together passionate students who love to explore
          new technologies, from AI and Machine Learning to IoT and robotics.
          Here, we <span className="text-secondary">learn</span>,{" "}
          <span className="text-secondary">build</span>, and{" "}
          <span className="text-secondary">launch</span> together.
        </p>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 w-24 sm:w-32 bg-secondary mx-auto md:mx-0 mt-6 sm:mt-8 rounded-full origin-left"
        ></motion.div>

        {/* Feature cards container */}
        <div
          className="
            mt-10 sm:mt-14 
            flex flex-col sm:flex-row flex-wrap 
            justify-center sm:justify-center lg:justify-start 
            gap-6 sm:gap-8 md:gap-10 
            max-w-5xl mx-auto lg:mx-0
          "
        >
          {[
            {
              emoji: "💡",
              title: "Learn",
              desc: "Explore new tech, frameworks, and ideas every week.",
              color: "bg-accent",
            },
            {
              emoji: "🧠",
              title: "Build",
              desc: "Turn imagination into code — one project at a time.",
              color: "bg-secondary text-primary",
            },
            {
              emoji: "🚀",
              title: "Collaborate",
              desc: "Work in teams, share ideas, and grow together.",
              color: "bg-accent",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 20px rgba(255, 247, 5, 0.4)",
                transition: { type: "tween", duration: 0.1 },
              }}
              className={`
                relative flex flex-col items-center justify-center
                ${item.color}
                rounded-xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12
                shadow-lg cursor-pointer select-none transition-all duration-300
                w-full sm:w-[46%] lg:w-[30%] text-center
              `}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl mb-3">
                {item.emoji}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-background/90 leading-relaxed max-w-[18rem]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating icons (decorative) */}
      <motion.div
        className="absolute -bottom-10 right-4 sm:right-10 text-secondary/30 text-[4rem] sm:text-[5rem] md:text-[6rem] select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🔧
      </motion.div>

      <motion.div
        className="absolute top-4 sm:top-10 left-4 sm:left-10 text-secondary/30 text-[4rem] sm:text-[5rem] md:text-[6rem] select-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ⚙️
      </motion.div>
    </section>
  );
}
