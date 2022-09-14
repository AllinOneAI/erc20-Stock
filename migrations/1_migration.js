const iUseArchBtwERC20Token = artifacts.require("iUseArchBtwERC20Token");

const IterableMapping = artifacts.require("IterableMapping");
module.exports = function(deployer){
	deployer.deploy(IterableMapping);
	deployer.link(IterableMapping, iUseArchBtwERC20Token);
    deployer.deploy(iUseArchBtwERC20Token);
}
