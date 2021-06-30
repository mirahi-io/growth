pragma solidity ^0.5.16;

contract AssetManagement {

    event NewOwnership(string serialNumber, string name);

    address ownerWallet;
    string ownerName;
    Device[] public devices;

    struct Device {
        string name;
        string serialNumber;
    }


    mapping(string => address) public deviceToOwner;
    mapping(address => uint) ownerDevicesCount;

    function associateDeviceToOwner(string memory _serialNumber, string memory _name) public {
        require(ownerDevicesCount[msg.sender] < 2);
        devices.push(Device(_serialNumber, _name));
        ownerDevicesCount[msg.sender]++;
        emit NewOwnership(_serialNumber, _name);
    }



}
