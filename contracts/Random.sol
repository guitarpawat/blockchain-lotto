pragma solidity ^0.5.14;

contract Random {

    address private owner;
    uint256 private nextBlock;

    constructor() public {
        owner = msg.sender;
        nextBlock = 0;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "only owner is allowed to call this method");
        _;
    }

    function rand(uint8 offset, uint8 items) public onlyOwner {
        uint32 seed = uint32(uint256(blockhash(nextBlock + 1)));
        for(uint8 i = 0; i < items; i += 5) {
            seed ^= seed << 13;
            seed ^= seed >> 17;
            seed ^= seed << 5;
            emit Result(offset, i,
                uint8((seed % 100) / 10),
                uint8((seed % 1000) / 100),
                uint8((seed % 10000) / 1000),
                uint8((seed % 100000) / 10000),
                uint8((seed % 1000000) / 100000)
            );
        }
        setBlock();
    }

    function setCompleted() public onlyOwner {
        nextBlock = 0;
    }

    function setBlock() public onlyOwner {
        nextBlock = block.number + 1;
    }

    function combine(
        uint8 block1,
        uint8 block2,
        uint8 block3,
        uint8 block4,
        uint8 block5,
        uint8 block6,
        uint8 block7,
        uint8 block8,
        uint8 block9,
        uint8 block10,
        uint8 block11,
        uint8 block12
    ) public pure returns(uint24) {
        uint24 digit1 = (block1 % 5) + (5 * (block2 % 2));
        uint24 digit2 = (block3 % 5) + (5 * (block4 % 2));
        uint24 digit3 = (block5 % 5) + (5 * (block6 % 2));
        uint24 digit4 = (block7 % 5) + (5 * (block8 % 2));
        uint24 digit5 = (block9 % 5) + (5 * (block10 % 2));
        uint24 digit6 = (block11 % 5) + (5 * (block12 % 2));

        return (digit1 * 100000) + (digit2 * 10000) + (digit3 * 1000) + (digit4 * 100) + (digit5 * 10) + digit6;
    }

    event Result(uint8 offset, uint8 i, uint8 result1, uint8 result2, uint8 result3, uint8 result4, uint8 result5);
}