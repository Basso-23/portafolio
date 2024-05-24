import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pivot as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" relative">
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      {isOpen && (
        <div className=" absolute w-20 h-20 top-0 right-3 mt-[60px] bg-amber-300"></div>
      )}
    </div>
  );
};

export default Menu;
