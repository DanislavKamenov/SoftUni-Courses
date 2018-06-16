const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    users: {
        type: [
            mongoose.SchemaTypes.ObjectId,        
        ], ref: 'User'
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;