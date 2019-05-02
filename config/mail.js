const Mailer = require('nodemailer');
const keys = require('./keys');

var transporter = Mailer.createTransport({
	service: keys.mailer.service,
		auth: {
		user: keys.mailer.user,
		pass: keys.mailer.pass
	}
});

module.exports = transporter;