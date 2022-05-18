import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TASKS = "tasks";
const LABELS = "labels";

export const useLocalStorage = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(TASKS)) || [],
  );

  const getTasks = () => JSON.parse(localStorage.getItem(TASKS));

  const createTask = (newTask) => {
    const newId = uuidv4();
    const tasksInStore = JSON.parse(localStorage.getItem(TASKS)) || [];
    const updatedTasks = [...tasksInStore, { ...newTask, taskId: newId }];

    setTasks(updatedTasks);
    localStorage.setItem(TASKS, JSON.stringify(updatedTasks));

    return { message: "Task created" };
  };

  const changeTask = (id, priority, status) => {
    const tasksInStore = JSON.parse(localStorage.getItem(TASKS)) || [];
    const taskToChange = tasksInStore.find((task) => task.id === id);

    const updatedTask = {
      ...taskToChange,
      priority: priority || taskToChange.priority,
      status: status || taskToChange.status,
    };

    const filteredTasks = tasksInStore.filter((task) => task.taskId === id);
    const updatedTasks = [...filteredTasks, { ...updatedTask }];
    setTasks(updatedTasks);
    localStorage.setItem(TASKS, JSON.stringify(updatedTasks));

    return { message: "Task changed" };
  };

  const deleteTask = (id) => {
    const tasksInStore = JSON.parse(localStorage.getItem(TASKS)) || [];
    if (tasksInStore.find((task) => task.id === id)) {
      const updatedTasks = tasksInStore.filter((task) => task.taskId === id);
      setTasks(updatedTasks);
      localStorage.setItem(TASKS, JSON.stringify(updatedTasks));

      return { message: "Task Deleted" };
    } else {
      return { message: "No task with that ID" };
    }
  };

  const createLabel = (title) => {
    const newId = uuidv4();
    const labelsInStore = JSON.parse(localStorage.getItem(LABELS)) || [];
    const updatedLabels = [...labelsInStore, { labelId: newId, title }];
    localStorage.setItem(LABELS, JSON.stringify(updatedLabels));

    return { message: "Label created" };
  };

  return { tasks, getTasks, createTask, changeTask, deleteTask, createLabel };
};
