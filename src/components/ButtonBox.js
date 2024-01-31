// ButtonBox.js
import React from "react";
import { useCalcContext } from "..//context/CalcContext";

const ButtonBox = () => {
  const { setTotal, reset, valueClick, operatorType, equals, minusPlus, percent } = useCalcContext();

  const handleNumberClick = (value) => {
    setTotal(false); // Reset total to false
    valueClick(value); // Call valueClick with the clicked value
  };

  return (
    <div className="grid grid-cols-4 z-10 gap-x-[1px] gap-y-[1px]">
      <button onClick={reset} className="clear">
        AC
      </button>
      <button onClick={minusPlus} className="minusPlus">
        <sup className="-mr-1">+</sup>
        &#x2044;-
      </button>
      <button onClick={percent} className="percentage">
        %
      </button>
      <button onClick={() => operatorType("÷")} className="divide">
        &#xF7;
      </button>
      <button onClick={() => handleNumberClick("7")} className="num">
        7
      </button>
      <button onClick={() => handleNumberClick("8")} className="num">
        8
      </button>
      <button onClick={() => handleNumberClick("9")} className="num">
        9
      </button>
      <button onClick={() => operatorType("x")} className="multiply">
        x
      </button>
      <button onClick={() => handleNumberClick("4")} className="num">
        4
      </button>
      <button onClick={() => handleNumberClick("5")} className="num">
        5
      </button>
      <button onClick={() => handleNumberClick("6")} className="num">
        6
      </button>
      <button onClick={() => operatorType("−")} className="minus">
        &#8722;
      </button>
      <button onClick={() => handleNumberClick("1")} className="num">
        1
      </button>
      <button onClick={() => handleNumberClick("2")} className="num">
        2
      </button>
      <button onClick={() => handleNumberClick("3")} className="num">
        3
      </button>
      <button onClick={() => operatorType("+")} className="plus">
        +
      </button>
      <button onClick={() => handleNumberClick("0")} className="num col-span-2">
        0
      </button>
      <button onClick={() => handleNumberClick(".")} className="dot">
        .
      </button>
      <button onClick={equals} className="equal">
        =
      </button>
    </div>
  );
};

export default ButtonBox;
