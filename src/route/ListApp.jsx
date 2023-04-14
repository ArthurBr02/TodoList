import List from "../components/List.jsx";
import AddTask from "../components/AddTask.jsx";
import React from "react";
import {state} from "../store/store.js";

import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListApp() {
    // changer le status du todo
    return (
        <div className={"text-center"}>
            <h1>Todo List App</h1>
            <button onClick={() => {
                state.flicker = !state.flicker
            }}><FontAwesomeIcon icon={faLightbulb} /> Clignotement</button>
            <List />
            <AddTask />
        </div>
    )
}

export default ListApp;