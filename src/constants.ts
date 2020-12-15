import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// //测试环境 - 开发环境
// export  const FACTORY_ADDRESS = "0x765Fa2a51681797A995B2919cc89E08b8aaA4AeE";
// export  const FACTORY_ADDRESSV2 = "0xBbE026500E273e2F2E6b41C93d11fE6d5c6D71bF";
// export  const INIT_CODE_HASH = "0xce433b886c281f53164ae7a190981e6b8d6873236496ff76bad740af6895efa7";
// export  const INIT_CODE_HASHV2 = "0xd832a14113b5cf26e79de23ae0ae01a2ebab1d21595909d3ce1b6cd7de425bb7";
//测试环境 - 演示环境
export  const FACTORY_ADDRESS = "0x765Fa2a51681797A995B2919cc89E08b8aaA4AeE";
export  const FACTORY_ADDRESSV2 = "0x551210395222a45a6c3ce2fe73086dd710fb7bce";
export  const INIT_CODE_HASH = "0xce433b886c281f53164ae7a190981e6b8d6873236496ff76bad740af6895efa7";
export  const INIT_CODE_HASHV2 = "bdc570f7645133211053e201ca1ece9a230a863a9be2ba84903a6a75d8806c5e";


//生产
// export  const FACTORY_ADDRESS = "0x2294577031F113DF4782B881cF0b140e94209a6F";
// export  const FACTORY_ADDRESSV2 = "0x1e2c2102cf8efcaaaf20ffe926469ec7cd0d0f6e";
// export  const INIT_CODE_HASH = "0xc452e099acab13324eff6921de6a25e75eb481f814af7406d7f296af8ddb7dbd";
// export  const INIT_CODE_HASHV2 = "0x074f125999ff7f2ce1bc01fc0032136917b1f7c81658bdd173c38cc36d7057c1";

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
