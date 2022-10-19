// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

//import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract EGameCore is Initializable, ERC20Upgradeable, OwnableUpgradeable {

    function initialize() initializer public {
        __ERC20_init("EGame", "EG");
        __Ownable_init();
        // Premint 10k tokens into the deployed contract
        _mint(address(this), 10000 * 10 ** decimals());
    }

    struct Player {
        uint256 datetime;
        uint256 score;
    }

    mapping (address => bool) public addressToIsFirst;
    mapping (address => Player[]) public addressToPlayer;

    event GamePlayed(address indexed player, uint256 datetime, uint256 score);

    // Play function
    function play(uint256 _score, uint256 _datetime) external {
        // Ensure that msg.sender is EOA
        require(msg.sender == tx.origin, "Only EOA can call this function");
        // Ensure that the balance of the contract is more than the score
        require(balanceOf(address(this)) >= _score*10**decimals(), "Not enough token balance in contract");
        // Check if they have played the game before
        if (addressToIsFirst[msg.sender] == false) {
            // push array into addressToPlayer
            addressToPlayer[msg.sender].push(Player(_datetime, _score));
            IERC20(address(this)).transfer(msg.sender, _score*10**decimals());
            // If they haven't, set their first play to true
            addressToIsFirst[msg.sender] = true;
            // Emit event
            emit GamePlayed(msg.sender, _datetime, _score);
        }
        else {
            // Just store the score and datetime
            addressToPlayer[msg.sender].push(Player(_datetime, _score));
            // Emit event
            emit GamePlayed(msg.sender, _datetime, _score);
        }
    }

    function getUserScores(address _user) external view returns (Player[] memory) {
        uint256 length = uint256(addressToPlayer[_user].length);
        Player[] memory result = new Player[](length);
        for (uint256 i = 0; i < length; i++) {
            Player memory player = addressToPlayer[_user][i];
            result[i] = player;
        }
        return result;
    }
}