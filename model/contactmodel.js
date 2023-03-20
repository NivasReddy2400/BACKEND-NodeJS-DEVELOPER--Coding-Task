const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Contacts')
.then((res)=>{
    console.log('DB Connected')
}).catch((err)=>{
    console.log('DB connection error');
    });

const ContactSchema = new mongoose.Schema({
    contact_id:String,
    first_name:String,
    last_name:String,
    email:String,
    mobile_number:Number,
    data_store:String
});

const Contact = mongoose.model('contact',ContactSchema);

module.exports = Contact