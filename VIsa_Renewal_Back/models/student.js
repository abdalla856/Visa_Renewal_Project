import mongoose from 'mongoose'
const Schema = mongoose.Schema
import uniqueValidator from'mongoose-unique-validator';
import arrayValidator from'mongoose-array-validator';
const studentSchame = new Schema({



type :{type: String, required: true},   
name :{type :String , required : true},
matric : {type :String , required : true , unique :true},
password :{type :String , required : true  ,minlength :6},
apps :[{type :mongoose.Types.ObjectId , required:true , ref :'App' ,maxItems:1} ]
})

studentSchame.plugin(arrayValidator);
studentSchame.plugin(uniqueValidator);
const Student= mongoose.model('Student' , studentSchame)
export default Student