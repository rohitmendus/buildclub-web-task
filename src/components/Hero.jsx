import { motion } from "framer-motion";
import BackgroundImg from "../assets/background.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 py-32 md:py-40 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url("${BackgroundImg}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl space-y-6 text-background"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
          Build. Create.{" "}
          <span className="text-secondary drop-shadow-md">Innovate.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          Welcome to <span className="font-bold text-secondary">Buildclub</span> — 
          where passionate creators, coders, and designers turn ideas into
          reality. Let’s build the future together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto">
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
        </div>
      </motion.div>
    </section>
  );
}
