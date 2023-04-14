import React from "react";
import {getTaskByIndex, state, updateTask, changeDone, deleteTask} from "../store/store.js";
import {navigate} from "raviger";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function EditTask(props) {
    const task = getTaskByIndex(props.index);
    return (
        <>
            <h1>Edit Task Index {props.index}</h1>
            <p>Edit Task page</p>
            <input id={props.index}
                   type="checkbox" defaultChecked={task.done} onChange={() => changeDone(props.index)} />
            <input type="text" defaultValue={task.text} onChange={(e) => task.text = e.target.value}/>
            <br/>
            <label>Description </label>
            <input type="text" height="200px" defaultValue={task.description} onChange={(e) => task.description = e.target.value}/>
            <br/>
            Date de création <input type="date" disabled defaultValue={task.date.toISOString().slice(0, 10)} onChange={(e) => task.date = new Date(e.target.value)}/>
            <br/>
            Priorité <input type="number" defaultValue={task.priority} onChange={(e) => task.priority = e.target.value}/>
            <br/>
            <button onClick={() => {
                updateTask(props.index, task);
                navigate("/")
            }}>
                <FontAwesomeIcon icon={faSave} /> Sauvegarder</button>
        </>
    );
}

export default EditTask;