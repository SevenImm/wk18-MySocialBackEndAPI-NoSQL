const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialNetDB');

module.exports = mongoose.connection