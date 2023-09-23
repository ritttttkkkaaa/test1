import React from "react";
import './Todolist.css'

const Todolist = ({contacts, onDeleteTodo}) => (
    <ul>
       {contacts.map(({id, name}) => (
        <li key={id}>
            <p>{name}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
       ))}
            
    </ul>


)
export default Todolist;