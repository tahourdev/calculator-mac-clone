// Screen.js
import React from "react";
import { useCalcContext } from "..//context/CalcContext";
import { Textfit } from "react-textfit";
import { NumericFormat } from "react-number-format";

const Screen = () => {
  const { display, preState } = useCalcContext();
  console.log("display = " + display);
  console.log("pre = " + preState);

  return (
    <div className="pt-6 pb-2 bg-[#2e2725]/50">
      <Textfit
        mode="single"
        max={70}
        className="bg-transparent w-full h-full text-right pr-4 p-4 text-white text-4xl">
        {display !== "" || display === "0" ? (
          <NumericFormat value={display} displayType={"text"} thousandSeparator={true} />
        ) : (
          <NumericFormat value={preState} displayType={"text"} thousandSeparator={true} />
        )}
      </Textfit>
    </div>
  );
};

export default Screen;
