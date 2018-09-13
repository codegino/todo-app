// FOR basic SHA256
// const {SHA256} = require('crypto-js');

const data = {
  id: 6
}

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//   console.log('data was not changed')
// } else {
//   console.log('data was changed. Do not trust!')
// }

// FOR JWT
const jwt = require('jsonwebtoken');

const token = jwt.sign(data, 'mysecret');

const decoded = jwt.verify(token, 'mysecret')
console.log(`token: ${token}`);
console.log(`decoded: ${decoded}`);

