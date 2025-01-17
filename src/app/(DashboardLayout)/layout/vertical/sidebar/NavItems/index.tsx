"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
    item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
    const pathname = usePathname();

    // Check if the current path matches the item's URL or the additional condition
    const isActive = pathname === item.url || (item.url === "/" && pathname === "/ui/streamView");

    return (
        <Sidebar.Item
            href={item.url}
            as={Link}
            className={`${isActive ? "!text-white activeNavItem" : "text-link bg-transparent group/link smNavItem"}`}
        >
      <span className="flex gap-3 align-center items-center setIconColor">
        {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
        ) : (
            <span
                className={`${
                    isActive
                        ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                        : "h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
                }`}
            ></span>
        )}
          <span className="max-w-36 overflow-hidden hide-menu setMenuText">{item.name}</span>
      </span>
        </Sidebar.Item>
    );
};

export default NavItems;
