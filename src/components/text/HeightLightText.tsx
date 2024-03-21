import React, { ReactNode } from "react";

export interface HeightLightTextProps {
  children?: ReactNode;
}

export const HeightLightText: React.FC<HeightLightTextProps> = ({ children }) => {
  return (
    <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
      {children}
    </span>
  );
};

export default HeightLightText;
