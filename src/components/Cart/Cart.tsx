import { IoClose } from "react-icons/io5";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { ButtonBordred } from "../Button";
import { ScrollArea } from "../ui/scroll-area";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    isDrawerOpen,
    setDrawerOpen,
  } = useCart();

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  return (
    <Drawer direction="right" open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger className="flex items-center justify-center gap-2 cursor-pointer">
        <ShoppingCart />
        <p>Cart({totalQuantity})</p>
      </DrawerTrigger>

      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
        <DrawerHeader>
          <div className="font-bold text-black dark:text-white text-xl">
            Cart
          </div>
          <DrawerClose asChild>
            <div onClick={handleCloseDrawer}>
              <IoClose size={20} className="text-black dark:text-white" />
            </div>
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className="px-5">
          {cartItems.map((product) => (
            <div
              className="relative flex justify-between items-center pr-2 rounded-lg border shadow-lg mb-4"
              key={product.id}
            >
              <button
                className="absolute end-0 top-0 rounded-full p-1"
                onClick={() => removeFromCart(product.id)}
              >
                <X size={18} color="#bd2828" strokeWidth={1} />
              </button>

              <div className="flex items-center gap-4 p-2">
                <img
                  alt={product.title}
                  src={product.image}
                  className="size-24 rounded-lg object-cover"
                />
              </div>
              <div className="pr-10 h-0.5 relative bg-zinc-400/10 rotate-90"></div>
              <div className="w-28">
                <p className="text-md text-black dark:text-white text-center line-clamp-1">
                  {product.title}
                </p>

                <p className="text-sm text-gray-500 text-center">
                  {product.price} $
                </p>
              </div>
              <div className="pl-10 h-0.5 relative bg-zinc-400/10 rotate-90"></div>

              <div className="flex flex-col justify-center">
                <div className="w-20 flex justify-center border px-4 py-1 rounded-full">
                  <label htmlFor={`quantity-${product.id}`} className="sr-only">
                    Quantity
                  </label>
                  <div className="flex items-center justify-center rounded">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, (product.quantity || 1) - 1)
                      }
                    >
                      <Minus size={16} className="text-black dark:text-white" />
                    </button>
                    <span className="px-2 text-black dark:text-white">
                      {product.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(product.id, (product.quantity || 1) + 1)
                      }
                    >
                      <Plus size={16} className="text-black dark:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex flex-col mt-auto">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 w-full">
            <div className="px-3 mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="text-black dark:text-white font-bold">Quantity</p>
              <div className="font-bold text-black dark:text-white">
                {totalQuantity}
              </div>
            </div>
            <div className="px-3 mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="text-black dark:text-white font-bold">
                Total Price
              </p>
              <div className="font-bold text-black dark:text-white">
                Total: {totalPrice.toFixed(2)} $
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <ButtonBordred injectedText="Checkout" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
