import mongoose  from "mongoose";

const todosSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },

  // user refrence
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    // give imp refrence 
    ref:"User"
  },
  subTodos:[
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:"SubTodo"
    }
  ] // Array of SubTodos
})

const Todo = mongoose.model("Todo",todosSchema)

export default Todo;




const subTodoSchema = new mongoose.Schema({
content:{
    type:String,
    required:true,

},
complete:{
    type:Boolean,
    default:false
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
}, {timestamps:true})


export const SubTodo = mongoose.model("SubTodo", subTodoSchema)
