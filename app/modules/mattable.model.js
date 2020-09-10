const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Mattable = new Schema({
    id:{
        type:Number,
        unique:true
    },
name: {
 type: String,
 required: true,
        unique: false,
       
 },
 progress:{type:Number},
color:{type: String}, // field level
 published: Boolean
},{
   timestamps: true 
});

Mattable.index({ id: 1, type: -1  }, { unique: true }) // schema level
Mattable.set('autoIndex', false);
module.exports = mongoose.model('Mattable', Mattable);

