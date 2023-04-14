import React from "react";
import Task from "./Task";
import {useSnapshot} from "valtio";
import {
    filterByDone,
    filterByKeyword,
    filterByPriority,
    sortTasksByDate,
    sortTasksByPriority,
    sortTasksByTitle,
    state
} from "../store/store.js";
import {faArrowDownWideShort, faArrowDownShortWide, faKey, faSquare, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List(props) {
    const snap = useSnapshot(state);
    let tasks = snap.tasks;
    let items = tasks.map((element, index) => (
        <li key={index}>
            <Task index={index}/>
        </li>
    ));

    return (
        <>
            <h4>Nombre de tâches: {tasks.length}</h4>
            <h4>Tri par date</h4>
            <span>
                <button onClick={() => {
                    sortTasksByDate("asc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                </button>
                <button onClick={() => {
                    sortTasksByDate("desc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownWideShort} />
                </button>
            </span>
            <br/>
            <h4>Tri par titre</h4>
            <span>
                <button onClick={() => {
                    sortTasksByTitle("asc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                </button>
                <button onClick={() => {
                    sortTasksByTitle("desc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownWideShort} />
                </button>
            </span>
            <br/>
            <h4>Tri par priorité</h4>
            <span>
                <button onClick={() => {
                    sortTasksByPriority("asc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                </button>
                <button onClick={() => {
                    sortTasksByPriority("desc")
                }}>
                    <FontAwesomeIcon icon={faArrowDownWideShort} />
                </button>
            </span>
            <br/>
            <br/>
            <br/>
            <h4>Recherche par mots <FontAwesomeIcon icon={faKey} /> </h4>
            <input type="text" name="keywords" onChange={(e) => {
                filterByKeyword(e.target.value)
            }
            }/>
            <br/>
            <h4>Filtrage par priorité </h4>
            <input type="number" name="priority" onChange={(e) => {
                filterByPriority(e.target.value)
            }
            }/>
            <br/>
            <h4>Filtrage par status </h4>
            <button onClick={() => {
                filterByDone(true)
            }}>
                <FontAwesomeIcon icon={faSquareCheck} />
            </button>
            <button onClick={() => {
                filterByDone(false)
            }}>
                <FontAwesomeIcon icon={faSquare} />
            </button>
            <button onClick={() => {
                filterByDone("")
            }}>Toutes</button>
            <br/>
            <ol>{items}</ol>
        </>
    );
}
