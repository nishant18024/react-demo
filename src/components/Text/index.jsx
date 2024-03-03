import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-base font-normal",
  s: "text-[13px] font-normal leading-4",
  "2xl": "text-xl font-normal leading-6",
  "3xl": "text-[21px] font-normal",
  xl: "text-lg font-normal leading-[22px]",
  md: "text-sm font-normal leading-[17px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-neosanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
