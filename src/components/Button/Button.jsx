import React from "react";

const Button = ({ className, symbol, handleClick, children }) => {
  return (
    <button className={className} onClick={() => handleClick(symbol)}>
      {children}
    </button>
  );
};

export default Button;
