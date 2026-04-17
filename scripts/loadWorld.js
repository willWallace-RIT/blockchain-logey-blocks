import { BlockRegistry } from "../src/BlockRegistry.js";
import { LegoWorld } from "../src/LegoWorld.js";

const registry = new BlockRegistry();
const world = new LegoWorld(registry);

async function main() {
  await world.loadFromFile("./data/layout.json");

  console.log("World Loaded:");
  console.log(world.instances);
}

main();
