/**
 * Contract abstraction
 * truffle makes it available 
 * to use in front end apps
 */
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};