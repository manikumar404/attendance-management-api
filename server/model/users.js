const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        enum : ['Male','Female','Others'],
        required: true,
       
    },
    id : {
        type: String,
        required: true,
        unique: true
    },
    
     password : {
         type:String,
         required:true
    },
    userType:{
        type:String,
        enum : ['student','tutor','admin'],
        default: 'student'
        
    },
    userGroup:String,
    moduleList:[
        {
            id:{
                type:String,
                required:true
            },
            className:{
                type:String,
                required:true
            },
            moduleCode:{
                type:String,
                required:true
            }


        }
    ]
    
    
 
   
},
{timestamps:true}
)

const Users = mongoose.model('Users', schema);

module.exports = Users;