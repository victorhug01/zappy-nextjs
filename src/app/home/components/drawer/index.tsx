'use client'

import { Menu } from "lucide-react";
import React from "react";

export default function DrawerComponent() {
  return (
    <div className="text-foreground-default block md:hidden cursor-pointer">
      <Menu className="bg-foreground-inverse block md:hidden"/>
    </div>
  );
}
