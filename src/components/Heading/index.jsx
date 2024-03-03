import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold",
  "2xl": "text-[34px] font-bold",
  xl: "text-[26px] font-bold",
  "5xl": "text-[46px] font-bold",
  "4xl": "text-[42px] font-bold",
  s: "text-base font-bold leading-5",
  md: "text-xl font-bold leading-6",
  "6xl": "text-[50px] font-bold",
  xs: "text-sm font-bold",
  lg: "text-2xl font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-neosanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
