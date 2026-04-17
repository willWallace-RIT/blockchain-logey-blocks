import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const abi = [
  "function getBlock(address addr) view returns (string)",
  "function registerBlock(address addr, string json)"
];

export class BlockRegistry {
  constructor() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    this.contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      abi,
      wallet
    );

    this.cache = new Map();
  }

  async getBlockDefinition(address) {
    if (this.cache.has(address)) {
      return this.cache.get(address);
    }

    const json = await this.contract.getBlock(address);
    if (!json) return null;

    const data = JSON.parse(json);
    this.cache.set(address, data);
    return data;
  }

  async registerBlock(address, data) {
    const json = JSON.stringify(data);
    return await this.contract.registerBlock(address, json);
  }
}
