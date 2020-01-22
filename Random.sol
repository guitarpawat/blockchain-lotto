pragma solidity ^0.5.14;

contract Random {
    
    function rand() public {
        uint256 seed = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, block.gaslimit)));
        for(uint8 i = 0; i < 100; i++) {
            seed ^= seed << 13;
        	seed ^= seed >> 17;
        	seed ^= seed << 5;
        	emit Result(i, seed % 1000000);
        }
    }
    
    event Result(uint8 i, uint256 result);
}