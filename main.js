const contractAddress = "0x5B9068546cFF41558C387a933EaDC16489A2932C"; // Replace with your deployed contract address
const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "addUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getUser",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getUsersCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]; // Replace with your contract's ABI

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Store user information
async function addUser() {
    const name = document.getElementById("nameInput").value;
    const id = parseInt(document.getElementById("idInput").value);
    const age = parseInt(document.getElementById("ageInput").value);

    web3.eth.defaultAccount = "0x56C20116a05596e1A9FdE7ebd08EA0239F36De36";

    await contract.methods.addUser(name, id, age).send({ from: web3.eth.defaultAccount });

    console.log("User added successfully!");
}

// Retrieve user information
async function getUser() {
    const index = parseInt(document.getElementById("indexInput").value);
    const result = await contract.methods.getUser(index).call();

    const name = result[0];
    const id = result[1];
    const age = result[2];

    document.getElementById("userDisplay").innerText = `Name: ${name}, ID: ${id}, Age: ${age}`;
}

async function getAllUser()
{
  let length = await contract.methods.getUsersCount().call();
  console.log(length);
  for(let i=0;i<length;i++)
  {
    console.log(i);
    await getUserByIndex(i);
  }
}

async function getUserByIndex(index) {
  //const index = parseInt(document.getElementById("indexInput").value);
  const result = await contract.methods.getUser(index).call();

  const name = result[0];
  const id = result[1];
  const age = result[2];

  //document.getElementById("userDisplay").innerText = `Name: ${name}, ID: ${id}, Age: ${age}`;

  let info = document.querySelector('#userDisplay');
  let oneinfo = document.createElement('div');
  oneinfo.innerText = `Name: ${name}, ID: ${id}, Age: ${age}`;
  info.appendChild(oneinfo);
}
