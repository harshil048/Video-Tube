import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

function Logo({ size = "45" }) {
  return (
    <>
      <Link to={"/"} className="flex gap-2 items-center">
        <IoLogoYoutube size={size} color="#A855F7" />
        <span className="font-bold text-white text-xl">NEXTUBE</span>
      </Link>
    </>
  );
}

export default Logo;
