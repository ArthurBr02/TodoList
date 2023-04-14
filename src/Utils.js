function getCompletedTasks(taskList) {
    let list = taskList.filter((task) => task.completed);
    return list;
}

function getIncompleteTasks(taskList) {
    let list = taskList.filter((task) => !task.completed);
    return list;
}

function getTaskCount(taskList) {
    return taskList.length;
}

function getCompletedTaskCount(taskList) {
    return getCompletedTasks(taskList).length;
}

function getIncompleteTaskCount(taskList) {
    return getIncompleteTasks(taskList).length;
}

function removeCompletedTasks(taskList) {
    taskList = taskList.filter((task) => !task.completed);
    return taskList;
}

function markAllTasksAsCompleted(taskList) {
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].completed = true;
    }
    return taskList;
}

function markAllTasksAsIncomplete(taskList) {
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].completed = false;
    }
    return taskList;
}