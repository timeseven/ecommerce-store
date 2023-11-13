"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ProductCardProps } from "@/lib/interface";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

const OrderItemCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div onClick={handleClick} className="bg-white cursor-pointer rounded-xl border p-3">
      {/* Images and Actions */}
      <div className="aspect-square h-32 w-32 rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          sizes="100vw, (min-width:640px) 50vw, (min-width:768px) 33vw, (min-width:1024px) 25vw"
          alt="Image"
          className="aspect-square object rounded-md"
        />
      </div>
      {/* Description */}
      <p className="text-center font-semibold text-sm">{data.name}</p>
    </div>
  );
};

export default OrderItemCard;
