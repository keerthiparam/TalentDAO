// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public buyer;
    address public seller;
    uint public amount;

    constructor(address _buyer, address _seller, uint _amount) {
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
    }

    function deposit() public payable {
        require(msg.sender == buyer, "Only the buyer can deposit.");
        require(msg.value == amount, "Incorrect amount.");
    }

    function release() public {
        require(msg.sender == buyer, "Only the buyer can release the funds.");
        payable(seller).transfer(amount);
    }
}
