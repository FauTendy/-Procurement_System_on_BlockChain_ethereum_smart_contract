const ProjectContract = artifacts.require("./ProjectContract.sol");
const ProjectManagement = artifacts.require("./ProjectManagement.sol");

// To simplfy I merged 3_initial_migrations.js with this file


module.exports = function(deployer){
     deployer.deploy(ProjectManagement);

     // Project Contract needs 5 parameters when it is constructed
     
     const projectId = 0
     const contractOwner = "0xaD6D458402F60fD3Bd25163575031ACDce07538D"
     const contractName = "Name"
     const contractSymbol = "CN"
     const txHash = "A TXHash"

     deployer.deploy(ProjectContract,projectId,contractOwner,contractName,contractSymbol,txHash);

     // "ProjectContract" -- Invalid number of parameters for "undefined". Got 0 expected 5!.



   };
