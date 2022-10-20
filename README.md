## Architecture Diagram

![Architecture Diagram](https://user-images.githubusercontent.com/54927531/197005038-1cb1bf73-b9ec-4047-9980-400ff741e634.jpg)

 So as to tackle the requirement of scalability, I implemented a proxy pattern for the core contract so as to allow future upgrades of the core contract.
 
 Another possible future upgrade for the game would be to allow for gasless transactions to incentivize players to play more, or more players to play. 
 
 Instead of sending transactions directly to the core contract, a relayer can help collate transactions send it to a receiver contract, where it will help pay the gas cost. This will result in the players not having to pay for anything.


## Tech Stack

**Client:** NextJS, TailwindCSS, DaisyUI

**Backend:** Solidity

**Others:** WAGMI, Ethers, Hardhat, Open-zeppelin, Infura


## Improvements

  1) Going forward, to improve the quality of the code, I would use a state management library like Redux or Recoil. Due to time constraint, I chose to store states locally instead.
  
  2) The main components and methods in the index page can be further broken down into smaller functional components, which would give the overall code a much cleaner look.
  
  3) Unit tests could have been written in Mocha or Waffle. However, this time around, I tested the code in Remix.
  
  4) Faced some hydration issue with the UI when using WAGMI. It is somewhat fixed for now, but I have no idea what's causing it or how it got solved.
    
## Instructions

  1) Make sure you have a Metamask wallet 
  2) Get some MATIC for Mumbai testnet: https://faucet.polygon.technology/
  3) Head over to the Vercel app: https://quandrant-fs.vercel.app/
  4) Enter a score that you want -- I only preminted 10k tokens, so please input a small number haha, like 1-100 maybe
  5) Click on play -- If nothing pops up, try double/triple clicking the button.
  6) Check your score history below the card -- Your score history will only be updated every time you connect/re-connect your wallet

## Signing off

Always happy to build, make mistakes and learn from them.

Cheers,
Ashton
