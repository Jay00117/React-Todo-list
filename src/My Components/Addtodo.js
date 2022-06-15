import React, { useState } from 'react'


export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            console.log("Your title or description is empty");
        }

        else {
            props.addTodo(title, desc);

            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form onClick={submit}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Add todo title here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder="Add your todo description here" rows="2"></textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
