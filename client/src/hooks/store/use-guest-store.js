import dayjs from "dayjs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TASKS = "tasks";
const LABELS = "labels";

export const useGuestStore = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(TASKS)) || [],
  );

  const getTasks = (date) => {
    if (date && tasks.length > 0) {
      return (
        JSON.parse(localStorage.getItem(TASKS))
          ?.filter((task) =>
            dayjs(new Date(task.date)).isSame(dayjs(date), "day"),
          )
          .sort((a, b) => a.priority - b.priority) || []
      );
    }

    return JSON.parse(localStorage.getItem(TASKS)) || [];
  };

  const getLeftoverTasks = () =>
    JSON.parse(localStorage.getItem(TASKS))
      ?.filter(
        (task) =>
          task.status === false &&
          dayjs(new Date(task.date)).isBefore(dayjs(), "day"),
      )
      .sort((a, b) => a.priority - b.priority) || [];

  const createTask = (newTask) => {
    const newId = uuidv4();
    const tasksInStore = tasks || [];
    const updatedTasks = [...tasksInStore, { ...newTask, taskId: newId }];

    setTasks(updatedTasks);
    localStorage.setItem(TASKS, JSON.stringify(updatedTasks));

    return { message: "Task created" };
  };

  const changeTask = (
    id,
    title,
    description,
    date,
    priority,
    status,
    labels,
  ) => {
    const tasksInStore = tasks || [];
    const taskToChange = tasksInStore.find((task) => task.id === id);

    const updatedTask = {
      ...taskToChange,
      priority: priority || taskToChange.priority,
      status: status || taskToChange.status,
      title: title || taskToChange.title,
      description: description || taskToChange.description,
      date: date || taskToChange.date,
      labels: labels || taskToChange.labels,
    };

    const filteredTasks = tasksInStore.filter((task) => task.taskId === id);
    const updatedTasks = [...filteredTasks, { ...updatedTask }];
    setTasks(updatedTasks);
    localStorage.setItem(TASKS, JSON.stringify(updatedTasks));

    return { message: "Task changed" };
  };

  const deleteTask = (id) => {
    const tasksInStore = tasks || [];
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

  return {
    getTasks,
    getLeftoverTasks,
    createTask,
    changeTask,
    deleteTask,
    createLabel,
  };
};
