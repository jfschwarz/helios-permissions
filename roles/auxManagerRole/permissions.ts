import { allowMorphoDeposit, allowMorphoWithdraw } from "../../helpers";
import contracts from "../../contracts";

const { GeneralAdapter1 } = contracts.base.morpho;

const usdc = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const eusd = "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4";

export default [
  ///////////////////////////////////
  // MORPHO /////////////////////////
  ///////////////////////////////////

  // authorize ethereumGeneralAdapter1
  allow.base.morpho.Morpho.setAuthorization(GeneralAdapter1, true),

  // https://app.morpho.org/base/vault/0xbb819D845b573B5D7C538F5b85057160cfb5f313/re7-eusd
  allowMorphoDeposit(eusd, "0xbb819D845b573B5D7C538F5b85057160cfb5f313"),
  allowMorphoWithdraw(eusd, "0xbb819D845b573B5D7C538F5b85057160cfb5f313"),

  // https://app.morpho.org/base/vault/0x8773447e6369472D9B72f064Ea62e405216E9084/mev-frontier-usdc-vault
  allowMorphoDeposit(usdc, "0x8773447e6369472D9B72f064Ea62e405216E9084"),
  allowMorphoWithdraw(usdc, "0x8773447e6369472D9B72f064Ea62e405216E9084"),

  // https://app.morpho.org/base/vault/0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657/clearstar-usdc-reactor
  allowMorphoDeposit(usdc, "0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657"),
  allowMorphoWithdraw(usdc, "0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657"),

  // https://app.morpho.org/base/vault/0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e/extrafi-xlend-usdc
  allowMorphoDeposit(usdc, "0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e"),
  allowMorphoWithdraw(usdc, "0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e"),

  // https://app.morpho.org/base/vault/0xE74c499fA461AF1844fCa84204490877787cED56/high-yield-clearstar-usdc
  allowMorphoDeposit(usdc, "0xE74c499fA461AF1844fCa84204490877787cED56"),
  allowMorphoWithdraw(usdc, "0xE74c499fA461AF1844fCa84204490877787cED56"),
  
  // https://app.morpho.org/base/vault/0xBEEFA7B88064FeEF0cEe02AAeBBd95D30df3878F/steakhouse-high-yield-usdc-v11
  allowMorphoDeposit(usdc, "0xBEEFA7B88064FeEF0cEe02AAeBBd95D30df3878F"),
  allowMorphoWithdraw(usdc, "0xBEEFA7B88064FeEF0cEe02AAeBBd95D30df3878F"),

  // https://app.morpho.org/base/vault/0xbeeff7aE5E00Aae3Db302e4B0d8C883810a58100/steakhouse-high-yield-instant
  allowMorphoDeposit(usdc, "0xbeeff7aE5E00Aae3Db302e4B0d8C883810a58100"),
  allowMorphoWithdraw(usdc, "0xbeeff7aE5E00Aae3Db302e4B0d8C883810a58100"),
] satisfies Permissions;
