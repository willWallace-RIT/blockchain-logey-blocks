import { keccak256, toUtf8Bytes } from "ethers";

export function generateBlockAddress(blockData) {
  const json = JSON.stringify(blockData);
  const hash = keccak256(toUtf8Bytes(json));

  return "0x" + hash.slice(-40);
}
