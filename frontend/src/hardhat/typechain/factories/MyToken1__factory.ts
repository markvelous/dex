/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MyToken1 } from "../MyToken1";

export class MyToken1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MyToken1> {
    return super.deploy(overrides || {}) as Promise<MyToken1>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyToken1 {
    return super.attach(address) as MyToken1;
  }
  connect(signer: Signer): MyToken1__factory {
    return super.connect(signer) as MyToken1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken1 {
    return new Contract(address, _abi, signerOrProvider) as MyToken1;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152694d7920546f6b656e203160b01b60208083019182528351808501909452600384526231594960e81b90840152815191929183918391620000639160049162000220565b5080516200007990600590602084019062000220565b50506006805461ff001960ff1990911660121716905550620000a66000620000a06200010c565b62000110565b620000d57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6620000a06200010c565b620001047f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a620000a06200010c565b5050620002bc565b3390565b6200011c828262000120565b5050565b6000828152602081815260409091206200014591839062000b6162000199821b17901c565b156200011c57620001556200010c565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001b0836001600160a01b038416620001b9565b90505b92915050565b6000620001c7838362000208565b620001ff57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001b3565b506000620001b3565b60009081526001919091016020526040902054151590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026357805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029357825182559160200191906001019062000276565b50620002a1929150620002a5565b5090565b5b80821115620002a15760008155600101620002a6565b61184880620002cc6000396000f3fe608060405234801561001057600080fd5b50600436106101595760003560e01c806370a08231116100c957806370a082311461038557806379cc6790146103ab5780638456cb59146103d75780639010d07c146103df57806391d148541461041e57806395d89b411461044a578063a217fddf14610452578063a457c2d71461045a578063a9059cbb14610486578063ca15c873146104b2578063d5391393146104cf578063d547741f146104d7578063dd62ed3e14610503578063e63ab1e91461053157610159565b806306fdde031461015e578063095ea7b3146101db57806318160ddd1461021b57806323b872dd14610235578063248a9ca31461026b5780632f2ff15d14610288578063313ce567146102b657806336568abe146102d457806339509351146103005780633f4ba83a1461032c57806340c10f191461033457806342966c68146103605780635c975abb1461037d575b600080fd5b610166610539565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a0578181015183820152602001610188565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610207600480360360408110156101f157600080fd5b506001600160a01b0381351690602001356105cf565b604080519115158252519081900360200190f35b6102236105ed565b60408051918252519081900360200190f35b6102076004803603606081101561024b57600080fd5b506001600160a01b038135811691602081013590911690604001356105f3565b6102236004803603602081101561028157600080fd5b503561067a565b6102b46004803603604081101561029e57600080fd5b50803590602001356001600160a01b031661068f565b005b6102be6106fb565b6040805160ff9092168252519081900360200190f35b6102b4600480360360408110156102ea57600080fd5b50803590602001356001600160a01b0316610704565b6102076004803603604081101561031657600080fd5b506001600160a01b038135169060200135610765565b6102b46107b3565b6102b46004803603604081101561034a57600080fd5b506001600160a01b038135169060200135610812565b6102b46004803603602081101561037657600080fd5b5035610883565b610207610897565b6102236004803603602081101561039b57600080fd5b50356001600160a01b03166108a5565b6102b4600480360360408110156103c157600080fd5b506001600160a01b0381351690602001356108c0565b6102b461091a565b610402600480360360408110156103f557600080fd5b5080359060200135610977565b604080516001600160a01b039092168252519081900360200190f35b6102076004803603604081101561043457600080fd5b50803590602001356001600160a01b0316610996565b6101666109ae565b610223610a0f565b6102076004803603604081101561047057600080fd5b506001600160a01b038135169060200135610a14565b6102076004803603604081101561049c57600080fd5b506001600160a01b038135169060200135610a7c565b610223600480360360208110156104c857600080fd5b5035610a90565b610223610aa7565b6102b4600480360360408110156104ed57600080fd5b50803590602001356001600160a01b0316610acb565b6102236004803603604081101561051957600080fd5b506001600160a01b0381358116916020013516610b24565b610223610b4f565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c55780601f1061059a576101008083540402835291602001916105c5565b820191906000526020600020905b8154815290600101906020018083116105a857829003601f168201915b5050505050905090565b60006105e36105dc610b76565b8484610b7a565b5060015b92915050565b60035490565b6000610600848484610c66565b6106708461060c610b76565b61066b85604051806060016040528060288152602001611632602891396001600160a01b038a1660009081526002602052604081209061064a610b76565b6001600160a01b031681526020810191909152604001600020549190610db1565b610b7a565b5060019392505050565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546106b2906106ad610b76565b610996565b6106ed5760405162461bcd60e51b815260040180806020018281038252602f815260200180611530602f913960400191505060405180910390fd5b6106f78282610e48565b5050565b60065460ff1690565b61070c610b76565b6001600160a01b0316816001600160a01b03161461075b5760405162461bcd60e51b815260040180806020018281038252602f8152602001806117ba602f913960400191505060405180910390fd5b6106f78282610eb1565b60006105e3610772610b76565b8461066b8560026000610783610b76565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610f1a565b6107cd60008051602061165a8339815191526106ad610b76565b6108085760405162461bcd60e51b81526004018080602001828103825260398152602001806115816039913960400191505060405180910390fd5b610810610f72565b565b61083e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66106ad610b76565b6108795760405162461bcd60e51b815260040180806020018281038252603681526020018061167a6036913960400191505060405180910390fd5b6106f78282611013565b61089461088e610b76565b826110f3565b50565b600654610100900460ff1690565b6001600160a01b031660009081526001602052604090205490565b60006108f7826040518060600160405280602481526020016116b0602491396108f0866108eb610b76565b610b24565b9190610db1565b905061090b83610905610b76565b83610b7a565b61091583836110f3565b505050565b61093460008051602061165a8339815191526106ad610b76565b61096f5760405162461bcd60e51b815260040180806020018281038252603781526020018061175e6037913960400191505060405180910390fd5b6108106111dd565b600082815260208190526040812061098f9083611262565b9392505050565b600082815260208190526040812061098f908361126e565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c55780601f1061059a576101008083540402835291602001916105c5565b600081565b60006105e3610a21610b76565b8461066b856040518060600160405280602581526020016117956025913960026000610a4b610b76565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610db1565b60006105e3610a89610b76565b8484610c66565b60008181526020819052604081206105e790611283565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b600082815260208190526040902060020154610ae9906106ad610b76565b61075b5760405162461bcd60e51b81526004018080602001828103825260308152602001806116026030913960400191505060405180910390fd5b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60008051602061165a83398151915281565b600061098f836001600160a01b03841661128e565b3390565b6001600160a01b038316610bbf5760405162461bcd60e51b815260040180806020018281038252602481526020018061173a6024913960400191505060405180910390fd5b6001600160a01b038216610c045760405162461bcd60e51b81526004018080602001828103825260228152602001806115ba6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610cab5760405162461bcd60e51b81526004018080602001828103825260258152602001806117156025913960400191505060405180910390fd5b6001600160a01b038216610cf05760405162461bcd60e51b815260040180806020018281038252602381526020018061150d6023913960400191505060405180910390fd5b610cfb8383836112d8565b610d38816040518060600160405280602681526020016115dc602691396001600160a01b0386166000908152600160205260409020549190610db1565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610d679082610f1a565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716926000805160206116d483398151915292918290030190a3505050565b60008184841115610e405760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e05578181015183820152602001610ded565b50505050905090810190601f168015610e325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828152602081905260409020610e609082610b61565b156106f757610e6d610b76565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081905260409020610ec990826112e3565b156106f757610ed6610b76565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60008282018381101561098f576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b610f7a610897565b610fc2576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6006805461ff00191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610ff6610b76565b604080516001600160a01b039092168252519081900360200190a1565b6001600160a01b03821661106e576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61107a600083836112d8565b6003546110879082610f1a565b6003556001600160a01b0382166000908152600160205260409020546110ad9082610f1a565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391926000805160206116d48339815191529281900390910190a35050565b6001600160a01b0382166111385760405162461bcd60e51b81526004018080602001828103825260218152602001806116f46021913960400191505060405180910390fd5b611144826000836112d8565b6111818160405180606001604052806022815260200161155f602291396001600160a01b0385166000908152600160205260409020549190610db1565b6001600160a01b0383166000908152600160205260409020556003546111a790826112f8565b6003556040805182815290516000916001600160a01b038516916000805160206116d48339815191529181900360200190a35050565b6111e5610897565b1561122a576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6006805461ff0019166101001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ff6610b76565b600061098f8383611355565b600061098f836001600160a01b0384166113b9565b60006105e7826113d1565b600061129a83836113b9565b6112d0575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105e7565b5060006105e7565b6109158383836113d5565b600061098f836001600160a01b038416611424565b60008282111561134f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b815460009082106113975760405162461bcd60e51b81526004018080602001828103825260228152602001806114eb6022913960400191505060405180910390fd5b8260000182815481106113a657fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6113e0838383610915565b6113e8610897565b156109155760405162461bcd60e51b815260040180806020018281038252602a8152602001806117e9602a913960400191505060405180910390fd5b600081815260018301602052604081205480156114e0578354600019808301919081019060009087908390811061145757fe5b906000526020600020015490508087600001848154811061147457fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806114a457fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506105e7565b60009150506105e756fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e706175736545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636565d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a45524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e7445524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20706175736545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c6645524332305061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564a264697066735822122044f5fb00145495978d64f13251bcc5c54fc433d3c9c6bd86e85556413254903764736f6c634300060c0033";
