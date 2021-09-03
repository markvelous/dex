import React, { useContext, useEffect, useState } from "react";
import {
  ERC20Context,
  UniswapV2Router02Context,
  CurrentAddressContext,
} from "../hardhat/SymfoniContext";
import { ERC20 } from "../hardhat/typechain/ERC20";
import ethers from "ethers";
interface Props {
  tokenA: string;
  tokenB: string;
}

export const Swap: React.FC<Props> = ({ tokenA, tokenB }) => {
  const ERC20Factory = useContext(ERC20Context);

  const [tokenAInstance, setTokenAInstance] = useState<ERC20>();
  const [tokenBInstance, setTokenBInstance] = useState<ERC20>();

  const [tokenASymbol, setTokenASymbol] = useState<string>();
  const [tokenBSymbol, setTokenBSymbol] = useState<string>();

  useEffect(() => {
    if (ERC20Factory.instance) {
      setTokenAInstance(ERC20Factory.instance!.attach(tokenA));
      setTokenBInstance(ERC20Factory.instance!.attach(tokenB));
    }
  }, [ERC20Factory.instance, tokenA, tokenB]);

  useEffect(() => {
    const fetchTokenSymbols = async () => {
      if (!tokenAInstance || !tokenBInstance)  {
        return;
      }
      
      setTokenASymbol(await tokenAInstance.symbol());
      setTokenBSymbol(await tokenBInstance.symbol());
    };
    fetchTokenSymbols();
  }, [tokenAInstance, tokenBInstance])

  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const router = useContext(UniswapV2Router02Context);
  const [exchangeAmount, setExchangeAmount] = useState<string>("0");

  useEffect(() => {
    const fetchExchangeAmount = async () => {
      if (!router.instance) {
        console.log("router instance not found");
        return;
      }

      if (amount > 0) {
        // router gets angry if you pass in a 0
        const amountsOut = await router.instance.getAmountsOut(
          ethers.utils.parseEther(amount.toString()),
          [tokenA, tokenB]
        );
        setExchangeAmount(ethers.utils.formatUnits(amountsOut[1].toString(), 18));
      }
    };

    fetchExchangeAmount();
  }, [router.instance, amount, tokenA, tokenB]);

  const [currentAddress] = useContext(CurrentAddressContext);

  const handleSwap = async () => {
    if (!router.instance || !tokenAInstance) {
      console.log("router or token instance not found");
      return;
    }
    const time = Math.floor(Date.now() / 1000) + 3600;

    await (
      await tokenAInstance.approve(
        router.instance.address,
        ethers.utils.parseEther(amount.toString())
      )
    ).wait();
    await (
      await router.instance.swapExactTokensForTokens(
        ethers.utils.parseEther(amount.toString()),
        1, // we shouldn't leave this as 0, it is dangerous in real trading
        [tokenA, tokenB],
        currentAddress,
        time
      )
    ).wait();
  };

  return (
    <div className="bg-black shadow sm:rounded-lg">
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-blue-300 text-4xl">{tokenASymbol}</div>
          <div/>
          <div className="text-blue-300 text-4xl">{tokenBSymbol}</div>
          
          <div className="flex justify-center">
            <span className="flex-item mt-5 text-gray-300 text-2xl">Amount:</span>
          </div>
          <div></div>
          <div className="flex justify-center">
            <span className="flex-item mt-5 text-gray-300 text-2xl">Receive:</span>
          </div>

          <div className="flex justify-center">
            <input
              type="text"
              name="Amount"
              id="amount"
              className="mx-2 flex-item shadow-sm bg-gray-700 border-gray-300 rounded-md text-gray-300 focus:ring-red-500 focus:border-red-500 block text-4xl w-1/2 text-center"
              placeholder="10"
              onChange={handleAmountChange}
            />
          </div>
          <div className="text-yellow-500 text-4xl"> &#10140; </div>
          <div className="flex justify-center">
            <input
              type="text"
              name="Receive"
              id="receive"
              disabled
              className="mx-2 flex-item shadow-sm focus:ring-gray-500 focus:border-gray-500 block border-gray-300 rounded-md text-gray-800 text-4xl w-full text-center truncate"
              placeholder="20"
              value={exchangeAmount}
            />
          </div>

          <div></div>
          <div></div>
          <button
            type="submit"
            className="flex-item text-center mx-2 mt-3 mb-6 px-2 py-2 border-transparent shadow-sm rounded-md text-white bg-green-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-xl"
            onClick={handleSwap}
          >
            SWAP!
          </button>
        </div>
      </div>
    </div>
  );
};