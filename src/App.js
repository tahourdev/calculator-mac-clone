import React from "react";
import ButtonBox from "./components/ButtonBox";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import { CalcProvider } from "./context/CalcContext";

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox />
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
