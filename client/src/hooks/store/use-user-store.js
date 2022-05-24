/* eslint no-console: 0 */
import React from "react";
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "react-query";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";

import TimeyApiClient from "../../api/timey";

const timeyApi = new TimeyApiClient();

export const useUserStore = () => {
  const queryClient = useQueryClient();

  const getTasks = async (date) => {
    try {
      const tasks = await queryClient.fetchQuery(["tasks", date], () =>
        timeyApi.fetchTasks(date),
      );
      return tasks;
    } catch (error) {
      showNotification({
        title: "Something went wrong!",
        message: error.message,
        icon: <ImCross />,
        color: "red",
      });
      return [];
    }
  };

  const getLeftoverTasks = async () => {
    try {
      const tasks = await queryClient.fetchQuery(["tasks", "leftovers"], () =>
        timeyApi.fetchLeftoverTasks(),
      );
      return tasks || [];
    } catch (error) {
      showNotification({
        title: "Something went wrong!",
        message: error.message,
        icon: <ImCross />,
        color: "red",
      });
    }
  };

  const { mutate: createTask } = useMutation(
    (task) => timeyApi.postTask(task),
    {
      onSuccess: (_, task) => {
        showNotification({
          title: "Success",
          message: "Task created.",
          icon: <BsCheckLg />,
          color: "teal",
        });
        queryClient.invalidateQueries(["tasks", task.dueDate]);
      },
      onError: (error) => {
        showNotification({
          title: "Something went wrong!",
          message: error.message,
          icon: <ImCross />,
          color: "red",
        });
      },
    },
  );

  const { mutate: changeTask } = useMutation(
    (task) => timeyApi.updateTask(task),
    {
      onSuccess: (_, task) => {
        showNotification({
          title: "Success",
          message: "Task updated.",
          icon: <BsCheckLg />,
          color: "teal",
        });
        queryClient.invalidateQueries(["tasks", task.dueDate]);
      },
      onError: (error) => {
        showNotification({
          title: "Something went wrong!",
          message: error.message,
          icon: <ImCross />,
          color: "red",
        });
      },
    },
  );

  const { mutate: deleteTask } = useMutation(
    (task) => timeyApi.fetchDeleteTask(task),
    {
      onSuccess: (_, task) => {
        showNotification({
          title: "Success",
          message: "Task deleted.",
          icon: <BsCheckLg />,
          color: "teal",
        });
        queryClient.invalidateQueries(["tasks", task.dueDate]);
      },
      onError: (error) => {
        showNotification({
          title: "Something went wrong!",
          message: error.message,
          icon: <ImCross />,
          color: "red",
        });
      },
    },
  );

  const { mutate: createLabel } = useMutation(
    (title) => timeyApi.postLabel(title),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("labels");
      },
      onError: (error) => {
        showNotification({
          title: "Something went wrong!",
          message: error.message,
          icon: <ImCross />,
          color: "red",
        });
      },
    },
  );

  const getTasksByName = async (name) => {
    try {
      const tasks = await queryClient.fetchQuery("tasks", () =>
        timeyApi.fetchTasksByName(name),
      );
      return tasks;
    } catch (error) {
      showNotification({
        title: "Something went wrong!",
        message: error.message,
        icon: <ImCross />,
        color: "red",
      });
      return [];
    }
  };

  return {
    getTasks,
    getLeftoverTasks,
    createTask,
    changeTask,
    deleteTask,
    createLabel,
    getTasksByName,
  };
};
