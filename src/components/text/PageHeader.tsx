import React, { ReactNode } from "react";

export interface PageHeaderProps {
  children?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <h1 className="font-bold text-4xl text-center">
      {children}
    </h1>
  );
};

export default PageHeader;