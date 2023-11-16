"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import Link from "next/link";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href={`/order`}>My Orders</Link>
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.replace("/cart" as string);
          router.refresh();
        }}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
