import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface LinkTextProps extends HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

export const LinkText: React.FC<LinkTextProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      className={clsx([
        "underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1",
        className,
      ])}
    >
      {children}
    </a>
  );
};

export default LinkText;
