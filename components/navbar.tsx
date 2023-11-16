import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-action";

import categoryService from "@/services/categoryServices";
import logo from "@/public/logo.jpg";

export const revalidate = 0;

const Navbar = async () => {
  const mainCategories = await categoryService.getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            {/* <p className="font-bold text-xl">STORE</p> */}
            <Image src={logo} alt="log" className="w-32 aspect-[2/1]" />
          </Link>
          <MainNav data={mainCategories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
