"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import useCart from "@/hooks/use-cart";
import Link from "next/link";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href={`/order`}>My Orders</Link>
      <Link href={"/cart"} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Link>
    </div>
  );
};

export default NavbarActions;
