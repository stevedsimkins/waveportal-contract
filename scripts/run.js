async function main() {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed()
  console.log("Contract Address:", waveContract.address)

  let count = await waveContract.getTotalWaves()
  console.log(count.toNumber())

  let waveTxn = await waveContract.wave("this is wave #1")
  await waveTxn.wait();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
