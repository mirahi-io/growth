const  AssetManagement = artifacts.require("AssetManagement");

module.exports = function(deployer) {
    deployer.deploy(AssetManagement);
};
