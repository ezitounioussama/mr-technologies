import Products from "../../components/Products/Products";
import { ReusableSelect } from "../../components/Shop/Select";
import { FadeDown } from "../../components/ui/animations/typo-fadeown";

const Categories = [
  { value: "Laptops", label: "Laptops" },
  { value: "Accessories", label: "Accessories" },
  { value: "Hardware", label: "Hardware" },
];

const SortingOptions = [
  { value: "asc", label: "ASC" },
  { value: "desc", label: "DESC" },
];

export default function Shop() {
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <FadeDown injectedText="Shop" />
      </div>
      <div className="flex justify-between gap-5 my-10 mx-20">
        <ReusableSelect
          options={Categories}
          placeholder="Select a category"
          label="Category"
          onChange={handleSelectChange}
        />
        <ReusableSelect
          options={SortingOptions}
          placeholder="Select order"
          label="Order"
          onChange={handleSelectChange}
        />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
