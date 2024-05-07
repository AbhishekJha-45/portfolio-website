import Link from "next/link";
import React from "react";
import NavLink from "./NavLinks";
// import NavLink from "@components/NavLink";

const MenuOverlay = ({ links }) => {
  return <NavLink links={links} />;
};

export default MenuOverlay;
