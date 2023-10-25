const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    country: { type: String, require: true },
    department: { type: String, require: true },
    municipality: { type: String, require: true },
    document_type: { type: String, require: true },
    document: { type: String, require: true },
    active: { type: Boolean, require: true, default: false },
    avatar: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true },
    rol: { type: String, require: true },
})

module.exports = mongoose.model("User", userSchema);