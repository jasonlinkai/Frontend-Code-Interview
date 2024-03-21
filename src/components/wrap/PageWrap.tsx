import React, { ReactNode } from "react";

export interface PageWrapProps {
  children?: ReactNode;
}

export const PageWrap: React.FC<PageWrapProps> = ({ children }) => {
  return (
    <main className="bg-amber-50 p-4 min-h-screen pt-14">
      <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow">
        {children}
      </div>
    </main>
  );
};

export default PageWrap;
