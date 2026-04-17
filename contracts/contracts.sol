// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LegoLedger {

    mapping(address => string) public blockData;

    event BlockRegistered(address indexed addr, string json);

    function registerBlock(address addr, string memory json) public {
        require(bytes(blockData[addr]).length == 0, "Already exists");

        blockData[addr] = json;
        emit BlockRegistered(addr, json);
    }

    function getBlock(address addr) public view returns (string memory) {
        return blockData[addr];
    }
}
