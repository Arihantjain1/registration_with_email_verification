var Transporter = require('../../config/mail');
var keys = require('../../config/keys');

class sendEmail {
    constructor(reciever, type, token) {
        this.reciever = reciever;
        this.type = type;
        this.token = token
    }

    email() {
        return new Promise((resolve, reject) => {
            var emailContent = require(`../emailTemplate/${this.type}`)
            var response = {};
            var mailOpts = {
                from: keys.mailer.user,
                to: this.reciever,
                subject: emailContent.subject,
                text: `${emailContent.body}`+ this.reciever + `/` + this.token
            };
            Transporter.sendMail(mailOpts, function (error, info) {
                if (error) {
                    response.error = error;
                    return this.failureHandler(response, reject);
                }
                else {
                    response.result = 'Success';
                    response.code = 201;
                    return resolve(response)
                }
            });
        })
    }

    failureHandler(response, reject) {
        response.responseTimestamp = new Date();
        response.result = 'Failed';
        return reject(response);

    }

}

module.exports = sendEmail;