import React from 'react'

export const TodoItem = ({ todoitem, onDelete }) => {
    return (
        <>
            <div className="container">
                <h4>{todoitem.title}</h4>
                <p>{todoitem.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todoitem) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}
