import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { Link } from "react-router-dom";

interface LinkProps {
  title: string;
  href: string;
}

interface BodyProps {
  links: LinkProps[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (newSelectedLink: {
    isActive: boolean;
    index: number;
  }) => void;
}

const Body: React.FC<BodyProps> = ({
  links,
  selectedLink,
  setSelectedLink,
}) => {
  const getChars = (word: string): JSX.Element[] => {
    return word.split("").map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => (
        <Link key={`l_${index}`} to={link.href}>
          <motion.p
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            variants={blur}
            animate={
              selectedLink.isActive && selectedLink.index !== index
                ? "open"
                : "closed"
            }
          >
            {getChars(link.title)}
          </motion.p>
        </Link>
      ))}
    </div>
  );
};

export default Body;
