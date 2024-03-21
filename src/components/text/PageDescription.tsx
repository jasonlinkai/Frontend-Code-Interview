import React, { ReactNode } from "react";

export interface PageDescriptionProps {
  children?: ReactNode;
}

export const PageDescription: React.FC<PageDescriptionProps> = ({
  children,
}) => {
  return (
    <div className="text-center">
      <span className="text-md">{children}</span>
    </div>
  );
};

export default PageDescription;
