import Products from "../../components/Products/Products";
import { FadeDown } from "../../components/ui/animations/typo-fadeown";

export default function Shop() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <FadeDown injectedText="Shop" />
      </div>
      <div>
        <Products />
      </div>
      {/* <div></div>  */}
    </div>
  );
}
