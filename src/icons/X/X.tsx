import { FC } from "react";

const X: FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="10" />
      <line x1="90" y1="10" x2="10" y2="90" stroke="black" strokeWidth="10" />
    </svg>
  );
};

export default X;
