import React, { ReactNode } from "react";

export interface SectionWrapProps {
  children?: ReactNode;
}

export const SectionWrap: React.FC<SectionWrapProps> = ({ children }) => {
  return (
    <div className="mt-6 border-t pt-6">
      {children}
    </div>
  );
};

export default SectionWrap;