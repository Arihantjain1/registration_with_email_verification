const crypto = require('crypto');

class EncryptDecrypt {

    encrypt(publicKey,password) {
        var pub = publicKey;
        var pass = password;
        var secret = `${pub}+*${pass}`
        return secret;
    }

    decrypt(encryptPass) {
        var pub = this.publicKey;
        var pass = this.password;
        var secret = `${pub}+*${pass}`
        return this.valid(secret,pass,encryptPass);
    }

    setPassword(email,password) {
        var salt = this.encrypt(email,password);
        var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex');
        return hash;
    }

    valid(user,password) {
        var salt = this.encrypt(user.email,password);
        var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex');
        return user.password == hash;
    }
}

module.exports = new EncryptDecrypt();