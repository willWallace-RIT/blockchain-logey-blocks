import { BlockRegistry } from "../src/BlockRegistry.js";
import { generateBlockAddress } from "../src/utils.js";
import fs from "fs";

const registry = new BlockRegistry();

const blocks = JSON.parse(fs.readFileSync("./data/blocks.json"));

async function main() {
  for (const block of blocks) {
    const addr = generateBlockAddress(block);

    console.log("Registering:", addr);

    await registry.registerBlock(addr, block);
  }
}

main();
