import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todoitem) => {
                    return (<TodoItem todoitem={todoitem} key={todoitem.abc} onDelete={props.onDelete} />)
                })

            }
        </div>
    )
}
