import { ethers } from "hardhat";

async function main() {
  
  console.log("Deploying Erc20contract contract...");
  const Erc20contract = await ethers.getContractFactory("Erc20contract");
  const deployedErc20contract = await Erc20contract.deploy(
    "_name",
    "_symbol", 
    "_decimals",
    ethers.utils.parseEther("100000") 
  );
  await deployedErc20contract.deployed();

  console.log("Erc20contract deployed to:", deployedErc20contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
