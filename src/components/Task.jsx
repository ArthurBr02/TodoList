import React from 'react';
import {navigate} from "raviger";
import {changeDone, deleteTask, moveTaskDown, moveTaskUp, state} from "../store/store.js";
import {faArrowCircleUp, faArrowCircleDown, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Task(props) {
    let task = state.tasks[props.index];
    let cssClass = task.done ? "done" : "";
    let buttons = [];

    if (props.index > 0) {
        buttons.push(
            <button onClick={() => {
                moveTaskUp(props.index)
            }
            }>
                <FontAwesomeIcon icon={faArrowCircleUp} />
            </button>
        )
    }
    if (props.index < state.tasks.length - 1) {
        buttons.push(
            <button onClick={() => {
                moveTaskDown(props.index)
            }
            }>
                <FontAwesomeIcon icon={faArrowCircleDown} />
            </button>
        )
    }

    return (
    <>
      <input id={props.index} onChange={() => changeDone(props.index)}
             type="checkbox" checked={task.done} />
      <label className={cssClass} htmlFor={props.index}>{task.text} |</label>
        <label className={cssClass} htmlFor={props.index}> Date : {task.date.toUTCString()}</label>
        <label className={cssClass} htmlFor={props.index}> | Priorité : {task.priority}</label>
        <button onClick={() => {
            navigate(`/task/${props.index}/edit`)
        }}>
            <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={() => {
            deleteTask(props.index);
        }
        }>
            <FontAwesomeIcon icon={faTrash} />
        </button>
        {buttons}
    </>
  );
}