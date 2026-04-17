import fs from "fs";

export class LegoWorld {
  constructor(registry) {
    this.registry = registry;
    this.instances = [];
  }

  async loadFromFile(path) {
    const layout = JSON.parse(fs.readFileSync(path));

    const uniqueAddresses = [...new Set(layout.map(e => e.address))];

    // preload all block definitions
    await Promise.all(
      uniqueAddresses.map(addr =>
        this.registry.getBlockDefinition(addr)
      )
    );

    for (const entry of layout) {
      const def = await this.registry.getBlockDefinition(entry.address);

      if (!def) {
        console.warn("Missing block:", entry.address);
        continue;
      }

      this.instances.push({
        ...def,
        position: entry.position,
        rotation: entry.rotation,
        address: entry.address
      });
    }
  }
}
