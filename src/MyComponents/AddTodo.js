import React, {useState} from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title or description can't be empty");
        }
        props.addTodo(title, desc);
    }

    return (
        <div className='container my-3'>

        <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Todo title</label>
                    <input type="text" value={title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Todo description</label>
                    <input type="text" value={desc} onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
