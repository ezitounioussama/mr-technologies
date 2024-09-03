import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <img src={`/images/${src}`} alt="image" />
    </motion.div>
  );
};

export default Index;
