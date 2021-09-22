import React from "react"
//import { updateTodo } from './../API';

type Props = TodoProps & {
    updateTodo : (todo:ITodo)=>void
    deleteTodo : (_id:string)=>void
}


const TodoItem: React.FC<Props> = ({todo,updateTodo,deleteTodo}) =>{
return (
<div className="Card">
    <div className="Card--text">
        <h1 style={{textDecoration:!todo.status ? `line-through` : ''}}>{todo.name}</h1>
        <span style={{textDecoration:!todo.status ? `line-through` : ''}}>{todo.description}</span>

    </div>
    <div className="Card--button">
        <button  className={todo.status ? 'hide--button':'Card--buuton__done'} onClick={()=>updateTodo(todo)}>Complete</button>
        <button className="Card--button__delete" onClick={()=>deleteTodo(todo._id)}>Delete</button>
    </div>


</div>

)

}
export default TodoItem