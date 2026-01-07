import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h3 className="text-3xl poppins font-bold text-green-400">SkillSwap</h3>
    </Link>
  );
};

export default Logo;
