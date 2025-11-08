import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import BackgroundImg from "../assets/background.svg";

export default function Hero() {
  const [startYellow, setStartYellow] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 py-32 md:py-40 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url("${BackgroundImg}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl space-y-6 text-background"
      >
        {/* Typing Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
          {/* White typing */}
          <span className="text-background">
            <TypeAnimation
              sequence={[
                "Build. Create. ", // first part
                () => setStartYellow(true), // trigger next
              ]}
              speed={60}
              repeat={0}
              cursor={false}
            />
          </span>

          {/* Yellow typing */}
          {startYellow && !doneTyping && (
            <TypeAnimation
              sequence={[
                "Innovate.", 
                400, 
                () => setDoneTyping(true), 
              ]}
              speed={60}
              repeat={0}
              cursor={true} // show while typing
              className="text-secondary"
            />
          )}

          {/* Render once done typing  */}
          {doneTyping && (
            <span className="text-secondary">Innovate.</span>
          )}
        </h1>

        {/* Subtitle (fade in after typing completes) */}
        {doneTyping && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Welcome to <span className="font-bold text-secondary">Buildclub</span> — 
            where passionate creators, coders, and designers turn ideas into
            reality. Let’s build the future together.
          </motion.p>
        )}

        {/* Buttons (fade in with subtitle) */}
        {doneTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-primary hover:text-secondary transition-all duration-300 w-full sm:w-auto"
            >
              Join Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
