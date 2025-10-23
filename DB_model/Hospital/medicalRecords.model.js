import mongoose from "mongoose";


const medicalRecordSchema = new mongoose.Schema({
patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient",
    required:true
},
docter:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Docter",
    required:true
},

visitDate:{
    type:Date,
    default:Date.now
},
visitType:{
    type:String,
    enum:["OPD","Emergency","Surgery","Checkup"],

    default:"OPD"
}
,
diagnosis:String,
symptoms:[String],
notes:String,
admissionDate:Date,
dischargeDate:Date,
roomNumber:String,
isCritical:{
    type:Boolean,
    default:false
},
status:{
 type:String,
 enum:["Active","Dicharged","Follow-Up"],
 default:"Active"
}
}, {timestamps:true})


export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)