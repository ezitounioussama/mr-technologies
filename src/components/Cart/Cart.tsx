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

export function Cart() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex items-center justify-center gap-2 cursor-pointer">
        <ShoppingCart />
        <p>Cart(0)</p>
      </DrawerTrigger>

      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
        <DrawerHeader>
          <div className="font-bold text-black dark:text-white text-xl">
            Cart
          </div>
          <DrawerClose asChild>
            <div>
              <IoClose size={20} className="text-black dark:text-white" />
            </div>
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className="px-5">
          <div className="relative flex justify-between items-center pr-2 rounded-lg border shadow-lg">
            <button className="absolute end-0 top-0 rounded-full p-1">
              <X size={18} color="#bd2828" strokeWidth={1} />
            </button>

            <div className="flex items-center gap-4 p-2">
              <img
                alt=""
                src="https://asset.msi.com/resize/image/global/product/product_16190861921ff3e69f935cd3753b174a21f123c26f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
                className="size-24 rounded-lg object-cover"
              />
            </div>
            <div className="pr-10 h-0.5 relative bg-zinc-400/10 rotate-90"></div>
            <div className="w-28">
              <p className="text-md text-black dark:text-white text-center line-clamp-1">
                MSI Katana
              </p>

              <p className="text-sm text-gray-500 text-center">1000 $</p>
            </div>
            <div className="pl-10 h-0.5 relative bg-zinc-400/10 rotate-90"></div>

            <div className="flex flex-col justify-center">
              <div className="w-20 flex justify-center border px-4 py-1 rounded-full">
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>
                <div className="flex items-center justify-center rounded">
                  <div className="flex justify-center items-center">
                    {" "}
                    <Minus size={15} />
                  </div>
                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="w-10 text-black dark:text-white bg-zinc-950 border-transparent text-sm text-center [-moz-appearance:_textfield]  [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <div className="flex justify-center items-center">
                    {" "}
                    <Plus size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex flex-col mt-auto">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 w-full">
            <div className="px-3 mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="text-black dark:text-white font-bold">Quantity</p>
              <div className="font-bold text-black dark:text-white">x20</div>
            </div>
            <div className="px-3 mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p className="text-black dark:text-white font-bold">
                Total Price
              </p>
              <div className="font-bold text-black dark:text-white">200 $</div>
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
