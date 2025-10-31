import "@fhevm/hardhat-plugin";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-deploy";
import type { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";

// 允许通过环境变量覆盖 Hardhat Vars
const ENV_MNEMONIC = process.env.MNEMONIC;
const ENV_SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const ENV_DEPLOYER_INDEX = process.env.DEPLOYER_INDEX;

const VARS_MNEMONIC: string = vars.get("MNEMONIC", "");
const VARS_INFURA_API_KEY: string = vars.get("INFURA_API_KEY", "");

const MNEMONIC: string =
  ENV_MNEMONIC?.trim() || VARS_MNEMONIC || "test test test test test test test test test test test junk";

const SEPOLIA_URL: string =
  (ENV_SEPOLIA_RPC_URL?.trim() ||
    (VARS_INFURA_API_KEY ? `https://sepolia.infura.io/v3/${VARS_INFURA_API_KEY}` : "")) ||
  // 兜底公共 RPC（仅当未提供任何密钥时使用）
  "https://ethereum-sepolia-rpc.publicnode.com";

const DEPLOYER_INDEX: number = Number.isFinite(Number(ENV_DEPLOYER_INDEX)) ? Number(ENV_DEPLOYER_INDEX) : 0;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  namedAccounts: { deployer: 0 },
  networks: {
    hardhat: {
      zksync: false,
      accounts: { mnemonic: MNEMONIC },
      chainId: 31337,
    },
    anvil: {
      zksync: false,
      accounts: { mnemonic: MNEMONIC, path: "m/44'/60'/0'/0/", count: 10 },
      chainId: 31337,
      url: "http://localhost:8545",
    },
    sepolia: {
      accounts: { mnemonic: MNEMONIC, path: "m/44'/60'/0'/0/", count: 10, initialIndex: DEPLOYER_INDEX },
      chainId: 11155111,
      url: SEPOLIA_URL,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deployments: "./deployments",
  },
  solidity: {
    version: "0.8.27",
    settings: {
      metadata: { bytecodeHash: "none" },
      optimizer: { enabled: true, runs: 800 },
      evmVersion: "cancun",
    },
  },
  typechain: { outDir: "types", target: "ethers-v6" },
};

export default config;


