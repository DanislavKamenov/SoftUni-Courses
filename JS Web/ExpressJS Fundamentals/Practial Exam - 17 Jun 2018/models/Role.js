const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },    
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;