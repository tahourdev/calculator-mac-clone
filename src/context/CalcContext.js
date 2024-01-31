import React, { createContext, useContext, useState, useEffect } from "react";

const CalcContext = createContext();

export const useCalcContext = () => {
  return useContext(CalcContext);
};

export const CalcProvider = ({ children }) => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [clearToZero, setClearToZero] = useState(false);

  useEffect(() => {
    setDisplay(curState);
  }, [curState]);

  useEffect(() => {
    setPreState("");
    setCurState("");
    setDisplay("0");
    setClearToZero(false);
  }, [clearToZero]);

  const reset = () => {
    setPreState("");
    setCurState("");
    setDisplay("0");
    setClearToZero(true);
  };

  const valueClick = (operand) => {
    if (display === "0" && operand === ".") return;

    if (total) {
      setPreState("");
    }

    setCurState((prev) => prev + operand);
    setTotal(false);
  };

  const operatorType = (value) => {
    setTotal(false);
    setOperator(value);

    if (curState === "") return;

    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "÷":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "−":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setDisplay("0");
    setCurState("");
    setPreState(cal);
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const contextValue = {
    preState,
    curState,
    display,
    operator,
    total,
    setPreState,
    setCurState,
    setDisplay,
    setOperator,
    setTotal,
    reset,
    valueClick,
    operatorType,
    equals,
    minusPlus,
    percent,
  };

  return <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>;
};
