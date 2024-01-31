// CalculatorContext.js
import React, { createContext, useState } from "react";

const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  return (
    <CalculatorContext.Provider
      value={{
        preState,
        setPreState,
        curState,
        setCurState,
        display,
        setDisplay,
        operator,
        setOperator,
        total,
        setTotal,
      }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorProvider };
