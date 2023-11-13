"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";

import { InfoProps } from "@/lib/interface";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const Info: React.FC<InfoProps> = ({ data }) => {
  const items = useCart((state) => state.items);
  const cart = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <span className="text-sm text-neutral-500">Brand New - Full Warranty</span>
      <hr className="my-1" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Condition:</h3>
        <div>NEW</div>
      </div>
      <hr className="my-2" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Price:</h3>
        <span className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </span>
        <div className="ml-auto flex items-center gap-x-3">
          <Button onClick={() => cart.addItem(data)} className="flex items-center gap-x-2 text-white">
            Add To Cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Description:</h3>
        <div>{data?.description}</div>
      </div>

      {/* <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Info;
