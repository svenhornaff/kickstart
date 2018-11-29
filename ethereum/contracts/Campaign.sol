pragma solidity ^0.4.17;

// anything that is chanaged here needs to be redeployed
// remember to copy the contarct deployment address to 'web3.js' and
// park it in ADDRESS for later usage
// call from the 'ethereum folder': ➜  ethereum git:(master) ✗ node deploy.js

// contract factory
contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}

// contract
contract Campaign {
    // just a struct definition, not creating an instance ... this a new type
    // defined here in the contract ... it is just the iead of a struct
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // with solidity web3@1.0.0-beta.36 this leads to: warning defining constructors as
    // functions with the same name as the contract is deprecated.
    // resulution: function Campaign (...) public {...} is replace with the below
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    // take part of a campaign and send some Wei/Ether = money
    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    // this needs a function modifier only allowing the manager accessing the
    // function ... see at the top 'modifier'
    // keep the structs as key value pair to keep it flexible in order
    // Note: keep the 'storage' vs.'memory' concept in mind
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    // keep in mind array's at contracts are evil ... think of mapping
    // mappings provide a 'constant time search' once the # growth
    // index is the request ID we look for
    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(!request.complete);

        // check that 50% have been approved the request
        require(request.approvalCount > (approversCount /2));

        request.recipient.transfer(request.value);

        request.complete = true;
    }

    // geting campaign details to be presented at the DOM
    // web3@1.0.0-beta.36 throws a waring in case 'this.balance' is used = deprecated
    // resolution: replace with 'address(this).balance'
    function getCampaignSummary() public view returns (uint, uint, uint, uint, address) {
      return (
        minimumContribution,
        address(this).balance,
        requests.length,
        approversCount,
        manager
      );
    }

    // used for approval
    function getRequestCount() public view returns (uint) {
      return requests.length;
    }

}
