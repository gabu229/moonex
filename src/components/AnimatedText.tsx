import { motion } from "framer-motion";

function AnimatedText({ text = "", delay = 0 }) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.01 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{
        overflow: "hidden",
        display: "inline-block",
        lineHeight: "1.2em",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word: string, index: number) => (
        <motion.span
          key={index}
          style={{
            overflow: "hidden",
            display: "inline-block",
            verticalAlign: "baseline",
          }}
          variants={childVariants}
        >
          <span
            style={{
              display: "inline-block",
              paddingRight: "0.3em",
            }}
          >
            {word}
          </span>
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;
