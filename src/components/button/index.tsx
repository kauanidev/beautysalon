import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-primary px-8 py-3.5 text-white font-medium rounded hover:bg-gray transition-colors flex items-center gap-2.5">
      {children}
    </button>
  );
};
