import { Link } from "react-router-dom";
import { MacbookScroll } from "../ui/mr-technologies-scroll";
import { useContext } from "react";
import { useTheme } from "../../Theme/theme-provider";

export default function MrTechnologiesLaptop() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        badge={
          <Link to="https://gotodev.ma">
            <Badge />
          </Link>
        }
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <img src="/Gotodev/Logo_White.png" alt="Gotodev" className="w-8 h-8" />
      ) : (
        <img src="/Gotodev/Logo_Black.png" alt="Gotodev" className="w-8 h-8" />
      )}
    </>
  );
};
