import type { Contracts } from "./.lib/types";

export default {
  base: {
    morpho: {
      Morpho: '0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb',
      Bundler3: "0x6BFd8137e702540E7A42B74178A4a49Ba43920C4",
      GeneralAdapter1: "0xb98c948CFA24072e58935BC004a8A7b376AE746A",
      ERC20WrapperAdapter: "0xdeEf55F0A7366cC3Baf5E04313269389Fe17E9AE",
      ParaswapAdapter: "0x6abE8ABd0275E5564ed1336F0243A52C32562F71",
      CompoundV3MigrationAdapter: "0x85D4812Ef92c040d4270eD8547b6835e41FbbB70",
      AaveV3MigrationAdapter: "0xb27Aa2a964eAd5ed661D86974b37e4fB995b36f5",
    }
  },
} satisfies Contracts;
