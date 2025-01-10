async function main() {
    // Get the contract to deploy
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Log the balance of the deployer account
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());

    // Replace the addresses below with actual Ethereum addresses
    const buyerAddress = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";  // Replace with a valid address
    const sellerAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; // Replace with a valid address

    // Replace "Escrow" with the actual contract name
    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(buyerAddress, sellerAddress, 1000); // Adjust args if needed

    console.log("Escrow contract deployed to:", escrow.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
