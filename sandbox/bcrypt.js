const bcrypt = require('bcryptjs');

const password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
});

const hashedPassword = '$2a$10$h.IdU5ZKrHCztMCa.dJ2t.G.orTFWXdkn0AhZLf8JZYgn2xZVMkJ.'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log('MATCHED:', res);
});