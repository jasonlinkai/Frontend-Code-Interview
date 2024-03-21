import React, { ReactNode } from "react";
import clsx from "clsx";

export interface StrongTextProps {
  className?: string;
  children?: ReactNode;
}

export const StrongText: React.FC<StrongTextProps> = ({
  className,
  children,
}) => {
  return <strong className={clsx(className)}>{children}</strong>;
};

export default StrongText;
