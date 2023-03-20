const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()
const Contact = require('../model/contactmodel');

router.post('/',async (req,res)=>{
    try{
    const {first_name,last_name,email,mobile_number} = req.body
    const contact = new Contact({
        contact_id: uuidv4(),
        first_name,
        last_name,
        email,
        mobile_number
    })
    await contact.save();
    res.send(contact)
    }catch(err){
        res.send('insertion error')
    }
})

router.get('/:id',async (req,res)=>{
    try{
    const {id} = req.params;
    const contact = await Contact.findOne({contact_id:id});
    if(contact === null ){
        res.status(404).send(`no contact found with id ${id}`)
    }else{
    res.send(contact);
        }
    }catch(err){
        res.send('unable to get data')
    }
})

//USING PATCH INSTEAD OF POST AS a best practice is use POST only to cre­ate a resource

router.patch('/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const {first_name,last_name,email,mobile_number} = req.body;
        const contact = await Contact.findOne({contact_id:id});
        if(contact === null ){
            res.status(404).send(`no contact found with id ${id}`)
        }else{
            const updatedContact = await Contact.updateOne({contact_id:id},{$set:{first_name,last_name,email,mobile_number}})
            res.send(updatedContact)
        }
        }catch(err){
            res.send('unable to get data')
        }
})

router.delete('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const contact = await Contact.findOne({contact_id:id});
        if(contact === null ){
            res.status(404).send(`no contact found with id ${id}`)
        }else{
            res.send(await Contact.deleteOne({contact_id:id}))
        }

    }catch(err){

    }
})

module.exports = router

