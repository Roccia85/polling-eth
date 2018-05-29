var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {

    it("initializes with three candidates", function () {
        return Election.deployed().then(function (instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 3);
        });
    });

    it("initializes with the correct values",function(){
        return Election.deployed().then(function(instance){
            return instance.candidates(1)
        }).then(function(candidate){
            assert.equal(candidate[0],1,"contains correct id");
            assert.equal(candidate[1],"Candidate 1","contains correct name");
            assert.equal(candidate[2],0,"contains correct votes number"); 
        });
    });
});