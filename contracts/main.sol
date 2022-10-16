import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity ^0.8.9;

contract Main {
    ERC20 public token;

    constructor(address _token) {
        token = ERC20(_token);
    }

    function transfer(address _to, uint256 _amount) public {
        token.transfer(_to, _amount);
    }
}