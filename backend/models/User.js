const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: {
        type: String,
    },
    role: { type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' },
    phone: { type: String },
    isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);
