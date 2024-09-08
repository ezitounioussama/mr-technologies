import { useEffect, useState } from "react";
import { ProductCard } from "../Product/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { ReusableSelect } from "../Shop/Select";

// Define the Product interface based on the data structure
export interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Categories = [
  { value: "Laptops", label: "Laptops" },
  { value: "Accessories", label: "Accessories" },
  { value: "Hardware", label: "Hardware" },
];

const SortingOptions = [
  { value: "asc", label: "ASC" },
  { value: "desc", label: "DESC" },
];

export default function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page
  const [sortOrder, setSortOrder] = useState<string>("asc"); // State for sorting order

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const products: Product[] = await response.json();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectChange = (value: string) => {
    setSortOrder(value);
  };

  // Sort the data based on the selected sort order (ASC or DESC)
  const sortedProducts = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // Ascending order
    } else if (sortOrder === "desc") {
      return b.price - a.price; // Descending order
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mx-10">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <div className="mx-auto min-w-full my-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                isDisabled={currentPage === 1}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                isDisabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
