import React, { ReactNode } from "react";
import clsx from "clsx";

export interface RowProps {
  className?: string
  children?: ReactNode;
}

export const Row: React.FC<RowProps> = ({ className, children }) => {
  return (
    <div
      className={clsx([
        "flex flex-row",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Row;
