import React, { useState } from "react";
import {addTask} from "../store/store.js";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddTask(props) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Ajouter un todo"
        size="100"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={() => addTask(input)}><FontAwesomeIcon icon={faPlus} /> Ajouter la tâche</button>
    </>
  );
}

export default AddTask;
