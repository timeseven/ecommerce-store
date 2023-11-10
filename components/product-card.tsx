"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { ProductCardProps } from "@/lib/interface";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          sizes="100vw, (min-width:640px) 50vw, (min-width:768px) 33vw, (min-width:1024px) 25vw"
          alt="Image"
          className="aspect-square object rounded-md"
        />
        <div className="absolute bottom-5 w-full px-6 transition opacity-0 group-hover:opacity-100">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={<Expand size={20} className="text-gray-600" />} onClick={() => {}} />
            <IconButton icon={<ShoppingCart size={20} className="text-gray-600" />} onClick={() => {}} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
