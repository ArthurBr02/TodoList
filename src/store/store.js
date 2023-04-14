// store.js
// using valtio
import { proxy } from 'valtio'

let initState = [
    { text: 'Learn js', done: false, date: new Date(new Date().getDate() + 100000000000), priority: 1, description: "Learn js desc" },
    { text: 'Clean bedroom', done: true, date: new Date(new Date().getDate() + 50000000000), priority: 2, description: "Jamais" },
    { text: 'TODO ??', done: false, date: new Date(new Date().getDate() + 10000000000), priority: 4, description: "Rien" },
    {text : 'dame ginette', done : false, date : new Date(new Date().getDate() + 2000000000000), priority: 3, description: "C'est okaaaaaaay" },
]
export const state = proxy({ tasks: initState, flicker: false })

setInterval(() => {
    if (state.flicker) document.body.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
});

export const getTaskByIndex = (index) => {
    return state.tasks[index]
}

export const updateTask = (index, task) => {
    state.tasks[index] = task
}


export const changeDone = (index) => {
    state.tasks[index].done = !state.tasks[index].done
}

export const deleteTask = (index) => {
    state.tasks.splice(index, 1);
    initState = state.tasks
}

export const addTask = (text) => {
    const task = {
        text: text, done: false, date: new Date(), priority: 1, description: ""
    };
    state.tasks.push(task);
    initState = state.tasks
}

export const filterByKeyword = (keyword) => {
    state.tasks = initState
    if (keyword !== '') {
         state.tasks = state.tasks.filter((task) => task.text.toUpperCase().includes(keyword.toUpperCase()));
    }
}

export const filterByPriority = (priority) => {
    state.tasks = initState
    if (priority !== '') {
        state.tasks = state.tasks.filter((task) => Number(task.priority) === Number(priority));
    }
}

export const filterByDone = (status) => {
    state.tasks = initState
    if (status !== '') {
        state.tasks = state.tasks.filter((task) => task.done === status);
    }
}

export const sortTasksByDate = (ordre) => {
    state.tasks.sort((a, b) => {
        if (ordre === 'asc') {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
        } else {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
        }
        return 0;
    });
}

export const sortTasksByPriority = (ordre) => {
    state.tasks.sort((a, b) => {
        if (ordre === 'asc') {
            if (a.priority < b.priority) {
                return -1;
            }
            if (a.priority > b.priority) {
                return 1;
            }
        } else {
            if (a.priority > b.priority) {
                return -1;
            }
            if (a.priority < b.priority) {
                return 1;
            }
        }
        return 0;
    });
}

export const sortTasksByTitle = (ordre) => {
    state.tasks.sort((a, b) => {
        if (ordre === 'asc') {
            if (a.text < b.text) {
                return -1;
            }
            if (a.text > b.text) {
                return 1;
            }
        } else {
            if (a.text > b.text) {
                return -1;
            }
            if (a.text < b.text) {
                return 1;
            }
        }
        return 0;
    });
}
export const moveTaskUp = (index) => {
    if (index === 0) {
        return;
    }
    const newIndex = index - 1;
    let tempTask = state.tasks[index];
    state.tasks[index] = state.tasks[newIndex];
    state.tasks[newIndex] = tempTask;
}

export const moveTaskDown = (index) => {
    if (index === state.tasks.length - 1) {
        return;
    }
    const newIndex = index + 1;
    let tempTask = state.tasks[index];
    state.tasks[index] = state.tasks[newIndex];
    state.tasks[newIndex] = tempTask;
}