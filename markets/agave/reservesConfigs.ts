import BigNumber from 'bignumber.js';
import { oneRay } from '../../helpers/constants';
import { eContractid, IReserveParams } from '../../helpers/types';
// TODO: Set the strategy for Atokens

export const strategyETH: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

export const strategyTIN: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};
export const strategyWtSYS: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};
export const strategyWSYS: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

export const strategyUSDC: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};


export const strategyDAI: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

export const strategyUSDT: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.85).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

export const strategyWETH: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.08).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(1).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(1).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

// export const strategyLINK: IReserveParams = {
//   optimalUtilizationRate: new BigNumber(0.4).multipliedBy(oneRay).toFixed(),
//   baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
//   variableRateSlope1: new BigNumber(0.06).multipliedBy(oneRay).toFixed(),
//   variableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
//   stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
//   stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
//   baseLTVAsCollateral: '6000',
//   liquidationThreshold: '6500',
//   liquidationBonus: '11000',
//   borrowingEnabled: true,
//   stableBorrowRateEnabled: true,
//   reserveDecimals: '18',
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: '2000',
// };

export const strategyMATIC: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.45).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: '0',
  variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '6000',
  liquidationThreshold: '7000',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '2000',
};

export const strategyWBTC: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: '0',
  variableRateSlope1: new BigNumber(0.08).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '7000',
  liquidationThreshold: '7500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '2000',
};


export const strategyWTEST1: IReserveParams = {
  optimalUtilizationRate: new BigNumber(0.65).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: '0',
  variableRateSlope1: new BigNumber(0.08).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
  baseLTVAsCollateral: '7000',
  liquidationThreshold: '7500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '2000',
};


// export const strategyFOX: IReserveParams = {
//   optimalUtilizationRate: new BigNumber(0.45).multipliedBy(oneRay).toFixed(),
//   baseVariableBorrowRate: '0',
//   variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
//   variableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
//   stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
//   stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
//   baseLTVAsCollateral: '5500',
//   liquidationThreshold: '6500',
//   liquidationBonus: '11000',
//   borrowingEnabled: true,
//   stableBorrowRateEnabled: false,
//   reserveDecimals: '18',
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: '2000',
// };

// export const strategyEURe: IReserveParams = {
//   optimalUtilizationRate: new BigNumber(0.45).multipliedBy(oneRay).toFixed(),
//   baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
//   variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
//   variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
//   stableRateSlope1: new BigNumber(0.08).multipliedBy(oneRay).toFixed(),
//   stableRateSlope2: new BigNumber(1).multipliedBy(oneRay).toFixed(),
//   baseLTVAsCollateral: '6500',
//   liquidationThreshold: '7000',
//   liquidationBonus: '11500',
//   borrowingEnabled: false,
//   stableBorrowRateEnabled: true,
//   reserveDecimals: '18',
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: '1500',
// };

// export const strategywstETH: IReserveParams = {
//   optimalUtilizationRate: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
//   baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
//   variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
//   variableRateSlope2: new BigNumber(0.7).multipliedBy(oneRay).toFixed(),
//   stableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
//   stableRateSlope2: new BigNumber(1).multipliedBy(oneRay).toFixed(),
//   baseLTVAsCollateral: '6500',
//   liquidationThreshold: '7000',
//   liquidationBonus: '11000',
//   borrowingEnabled: false,
//   stableBorrowRateEnabled: false, 
//   reserveDecimals: '18',
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: '1500',
// };