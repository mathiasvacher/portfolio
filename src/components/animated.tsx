import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Animated = ({ children, inView = true }: { children: React.ReactNode; inView?: boolean }) => {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
