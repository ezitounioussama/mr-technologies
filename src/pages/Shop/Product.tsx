import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { ButtonBordred } from "../../components/Button";
import { Product } from "../../components/Products/Products";

export default function ProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const { addToCart } = useCart(); // Cart context to handle adding product
  const [product, setProduct] = useState<Product | null>(null); // State to store the product
  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState<string | null>(null); // Error state
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for selected image

  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.image); // Set the main product image
      } catch (error) {
        setError(`Error fetching product data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
      });
    }
  };

  // Display loading skeleton while fetching the product
  if (loading) {
    return (
      <section className="overflow-hidden body-font">
        {/* Skeleton content */}
        <div className="container px-5 pb-24 mx-auto">
          <div className="skeleton h-8 w-full"></div>
        </div>
      </section>
    );
  }

  // Handle error
  if (error) {
    return (
      <section>
        <div className="container mx-auto px-5 pb-24">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex justify-center items-center flex-wrap mx-auto lg:w-full">
          {/* Product images */}
          <div className="items-center hidden w-1/6 grid-cols-1 grid-rows-5 gap-2 pr-4 lg:grid">
            <img
              className={`w-24 h-24 border-2 rounded-md cursor-pointer ${
                selectedImage === product?.image
                  ? "border-gray-400"
                  : "border-black"
              }`}
              src={product?.image}
              alt={product?.title}
              onClick={() => setSelectedImage(product?.image ?? null)}
            />
          </div>

          {/* Main product image */}
          <div className="w-full lg:w-3/6 md:w-3/6">
            <img
              alt="main image"
              className="object-cover object-center w-full h-auto rounded"
              src={selectedImage ?? ""}
            />
          </div>

          {/* Product details */}
          <div className="w-full mt-6 lg:w-2/6 md:w-3/6 lg:pl-10 lg:py-6 lg:mt-0">
            <h1 className="mb-2 text-4xl font-bold title-font text-black dark:text-white">
              {product?.title}
            </h1>
            <h2 className="mb-8 text-xl font-semibold text-black dark:text-white">
              Category: {product?.category}
            </h2>
            <p className="mt-8 text-base text-black dark:text-white">
              {product?.description}
            </p>

            {/* Price */}
            <div className="flex flex-col items-center justify-between py-4 mt-10 border-t border-b sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold text-black dark:text-white">
                  {product?.price.toFixed(2)} MAD
                </h1>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <ButtonBordred
                onClick={handleAddToCart}
                injectedText="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
