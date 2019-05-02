const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    phone: {
        country: { type: String, required: false, default: "India" },
        digits: { type: String, required: false, min: 10, max: 12 },
    },
    role: { type: String, required: true, max: 10 },
    password: { type: String, required: true },
    status: { type: String, required: false },
    vcode: { type: String, required: false },
    created: { type: Date, default: Date.now }
});



module.exports = mongoose.model('User', userSchema);