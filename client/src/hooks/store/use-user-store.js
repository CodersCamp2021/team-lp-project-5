/* eslint no-console: 0 */
import { useMutation, useQueryClient } from "react-query";
import TimeyApiClient from "../api/timey";

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
      console.error(error);
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
      console.error(error);
    }
  };

  const { mutateAsync: createTaskAsync, mutate: createTaskSync } = useMutation(
    (task) => timeyApi.postTask(task),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(["tasks", data.dueDate]);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: changeTask } = useMutation(
    (task) => timeyApi.updateTask(task),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(["tasks", data.dueDate]);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: deleteTask } = useMutation(
    (id) => timeyApi.fetchDeleteTask(id),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
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
        console.error(error);
      },
    },
  );

  return {
    getTasks,
    getLeftoverTasks,
    createTask: { createTaskAsync, createTaskSync },
    changeTask,
    deleteTask,
    createLabel,
  };
};
