import { Allowance, ERC20 } from "../asset";
import { Address, Integer, TypedMap, Usdc } from "../common";

export interface TokenPrice {
  address: Address;
  priceUsdc: Usdc;
}

export interface TokenBalance {
  address: Address;
  priceUsdc: Usdc;
  balance: Integer;
  balanceUsdc: Usdc;
}

export interface TokenAllowance extends Allowance {
  token: Address;
}

export interface Balance {
  address: Address;
  token: ERC20;
  balance: Integer;
  balanceUsdc: Usdc;
  priceUsdc: Usdc;
}

export type BalancesMap<T extends Address> = TypedMap<T, Balance[]>;

export type Icon = string | undefined;
export type IconMap<T extends Address> = TypedMap<T, Icon>;
