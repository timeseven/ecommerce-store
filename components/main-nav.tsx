"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

import { MainNavProps } from "@/lib/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  for (const items of data) {
    items.children.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  const routes = data.map((route) => ({
    id: route.id,
    label: route.name,
    active: pathname === `/category/${route.id}`,
    children: route.children.map((item) => ({
      id: item.id,
      href: `/category/${item.id}`,
      label: item.name,
      active: pathname === `/category/${item.id}`,
    })),
  }));
  return (
    <>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Menu as="div" key={route.id} className="relative inline-block text-left z-50">
            <div>
              <Menu.Button
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-5 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {route.children.map((child) => (
                  <Menu.Item key={child.href}>
                    {({ active }) => (
                      <Link
                        href={child.href}
                        className={`${
                          active ? "bg-red-950 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {child.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        ))}
      </nav>
    </>
  );
};

export default MainNav;
