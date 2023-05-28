// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserContract {
    struct User {
        string name;
        uint256 id;
        uint256 age;
    }

    User[] public users;

    function addUser(string memory _name, uint256 _id, uint256 _age) public {
        User memory newUser = User(_name, _id, _age);
        users.push(newUser);
    }

    function getUser(uint256 _index) public view returns (string memory, uint256, uint256) {
        require(_index < users.length, "Invalid user index");
        User storage user = users[_index];
        return (user.name, user.id, user.age);
    }

    function getUsersCount() public view returns (uint256) {
        return users.length;
    }
}
