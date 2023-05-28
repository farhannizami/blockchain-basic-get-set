var record_contract = artifacts.require("UserContract");

module.exports = async function(deployer) {
    // deployment steps
    await deployer.deploy(record_contract);
  };