# Final Assignment for Intermediate Blockchain Module 

SGBT4 PT7210027 Mark Tan

## Getting started

` Install deps with yarn `yarn` or npm `npm install`
` Start hardhat `npx hardhat node --watch`

![](https://media.giphy.com/media/9l6z9MzXfHX9gKzbvU/giphy.gif)

` cd frontend 
` npm install
` sign in to Metamask
` npm start

The frontend should preview at http://localhost:3000/

In hardhat.config.ts there is example on how to instruct your hardhat-network to use mnemonic or privatekey.

```ts
const config: HardhatUserConfig = {
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
};
```

Ensure you are useing RPC to http://localhost:8545.

You may also need to set the chainID to 31337 if you are useing Hardhat blockchain development node.

## Invalid nonce.

```bash
eth_sendRawTransaction
  Invalid nonce. Expected X but got X.
```

Reset your account in Metamask.

