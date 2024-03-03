import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    blue_gray_600: "bg-blue_gray-600 text-white-A700",
    lime_800: "bg-lime-800 text-white-A700",
    green_500: "bg-green-500 text-white-A700",
    deep_orange_A200: "bg-deep_orange-A200 text-white-A700",
    black_900: "bg-black-900 text-lime-800",
  },
};
const sizes = {
  sm: "h-[45px] px-2.5",
  md: "h-[50px] px-[18px] text-xl",
  lg: "h-14 px-[15px]",
  xs: "h-[45px] px-[30px] text-[13px]",
  xl: "h-16 px-[35px] text-base",
  "3xl": "h-[82px] pl-[35px] text-2xl",
  "2xl": "h-[71px] px-[35px] text-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "2xl",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xs", "xl", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_gray_600", "lime_800", "green_500", "deep_orange_A200", "black_900"]),
};

export { Button };
