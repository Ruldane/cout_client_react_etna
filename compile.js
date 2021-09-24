// solidity compiler
const solc = require('solc');
const path = require('path');
const fs = require('fs');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// will return ABI (interface) of bytecode of contract
module.exports = solc.compile(source, 1).contracts[':Inbox'];