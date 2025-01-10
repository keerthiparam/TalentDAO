const { ethers } = require("hardhat");

async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get balance using provider
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance), "ETH");

    // Replace the following with actual Ethereum addresses for testing
    const buyerAddress = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
    const sellerAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

    // Compile and deploy the "Escrow" contract
    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(buyerAddress, sellerAddress, 1000);

    await escrow.waitForDeployment(); // Wait for deployment to complete
    console.log("Escrow contract deployed to:", await escrow.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });