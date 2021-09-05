import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";
import { Swap2 } from "./components/Swap2";

function App() {
  return (
    <div className="App">
      <Symfoni autoInit={true}>
        <div className="min-h-screen bg-gray-700">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="text-gray-100 text-6xl pt-28 pb-10">
              Remarkable Swap
            </div>
            <Swap
              tokenA="0x5bA2C1c111cbEF4fCA70bEB9d4CD0b5F04E6c14b"
              tokenB="0x94CF34b37B9f68Aa6F790065b5CB6DFA857368Ed"
            ></Swap>
            <br/>
            <Swap2
              tokenB="0x5bA2C1c111cbEF4fCA70bEB9d4CD0b5F04E6c14b"
              tokenA="0x94CF34b37B9f68Aa6F790065b5CB6DFA857368Ed"
            ></Swap2>
          </div>
        </div>
      </Symfoni>
    </div>
  );
}

export default App;
