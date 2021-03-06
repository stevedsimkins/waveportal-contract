async function main() {
  // const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // const waveContract = await waveContractFactory.deploy({ value: ethers.utils.parseEther("0.01") });
  // await waveContract.deployed()
  // console.log("WavePortal address:", waveContract.address);

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the accound:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await hre.ethers.getContractFactory("WavePortal");
  const token = await Token.deploy();
  console.log("WavePortal address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

