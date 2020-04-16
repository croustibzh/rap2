const mongoose = require('mongoose');

const schema = mongoose.Schema;

const messageSchema = new schema({
    chat:{type: String, required:true},
    userName:{type: String, required:true},
    message:{type:String, required:true}
}, {
    timestamps:true,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;