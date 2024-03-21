import React, { ReactNode } from "react";
import clsx from "clsx";

export interface SolidButtonProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const SolidButton: React.FC<SolidButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <div
      className={clsx([
        "py-2 flex flex-row justify-center items-center w-[200px] md:w-[400px] cursor-pointer bg-amber-500 hover:bg-amber-400",
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SolidButton;
