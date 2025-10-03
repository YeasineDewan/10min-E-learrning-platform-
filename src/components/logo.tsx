import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="font-bold text-2xl">
        <span className="text-brand-dark">10</span>
        <span className="text-primary">MINUTE</span>
      </div>
      <div className="text-xs font-bold ml-1 text-brand-dark">SCHOOL</div>
    </div>
  );
};