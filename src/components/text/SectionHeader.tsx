import React, { ReactNode } from "react";

export interface SectionHeaderProps {
  children?: ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <h2 className="text-xl font-bold">
      {children}
    </h2>
  );
};

export default SectionHeader;