// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EGame is Initializable, ERC20Upgradeable {

    mapping (address => bool) public addressToIsFirst;
    mapping (address => uint8[]) public addressToScores;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC20_init("EGame", "EG");
        _mint(address(this), 10000 * 10 * decimals());
    }

    // Play function
    function play(uint8 _score) external {

        // Check if they have played the game before
        if (addressToIsFirst[msg.sender] == false) {
            //rewardsToken.transfer(msg.sender, reward*10**18);
            IERC20(address(this)).transfer(msg.sender, _score*10**18);
            // If they haven't, set their first play to true
            addressToIsFirst[msg.sender] = true;
        }
    }

    // Claim function
    function claim() internal {
        // Check if the player has won
        // If yes, transfer the tokens to the player
    }

}