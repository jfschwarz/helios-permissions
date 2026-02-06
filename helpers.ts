import { c, forAll } from "zodiac-roles-sdk";
import { allow } from "zodiac-roles-sdk/kit";
import contracts from "./contracts";

export const allowErc20Approve = (
  tokens: readonly `0x${string}`[],
  spender: `0x${string}`,
  allowanceKey?: `0x${string}`,
) =>
  forAll(tokens, {
    signature: "approve(address,uint256)",
    condition: c.calldataMatches(
      [spender, allowanceKey ? c.withinAllowance(allowanceKey) : undefined],
      ["address", "uint256"],
    ),
  });

const { GeneralAdapter1 } = contracts.base.morpho;

export const allowMorphoDeposit = (depositToken: `0x${string}`, vaultToken: `0x${string}`) => {
  return [
    ...allowErc20Approve([depositToken], GeneralAdapter1),
    allow.base.morpho.GeneralAdapter1.erc20TransferFrom(
      depositToken,
      GeneralAdapter1,
    ),
    allow.base.morpho.GeneralAdapter1.erc4626Deposit(
      vaultToken,
      undefined,
      undefined,
      c.avatar,
    ),
    allow.base.morpho.GeneralAdapter1.erc20TransferFrom(
      depositToken,
      c.avatar,
      undefined,
    ),
    allow.base.morpho.GeneralAdapter1.erc20Transfer(
      vaultToken,
      c.avatar,
      undefined,
    ),
  ];
};

export const allowMorphoWithdraw = (withdrawToken: `0x${string}`, vaultToken: `0x${string}`) => {
  return [
    ...allowErc20Approve([vaultToken], GeneralAdapter1),

    allow.base.morpho.GeneralAdapter1.erc4626Redeem(
      vaultToken,
      undefined,
      undefined,
      c.avatar,
      c.avatar,
    ),
    allow.base.morpho.GeneralAdapter1.erc20Transfer(
      vaultToken,
      c.avatar,
      undefined,
    ),
    allow.base.morpho.GeneralAdapter1.erc20Transfer(
      withdrawToken,
      c.avatar,
      undefined,
    ),

    allow.base.morpho.GeneralAdapter1.erc20TransferFrom(
      vaultToken,
      GeneralAdapter1,
      undefined,
    ),
    allow.base.morpho.GeneralAdapter1.erc4626Withdraw(
      vaultToken,
      undefined,
      undefined,
      c.avatar,
      GeneralAdapter1,
    ),
  ];
};