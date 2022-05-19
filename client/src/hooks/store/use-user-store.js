/* eslint no-console: 0 */
import { useMutation, useQueryClient } from "react-query";
import { useTasks } from "../api/use-tasks";
import TimeyApiClient from "../api/timey";

export const useUserStore = () => {
  const queryClient = useQueryClient();

  const getTasks = (date) => useTasks(date);

  const { mutate: createTask } = useMutation(
    ({ title, description, priority, status, date }) =>
      TimeyApiClient.postTask(title, description, priority, status, date),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(["tasks", data.date]);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: changeTask } = useMutation(
    ({ id, title, description, date, priority, status, labels }) =>
      TimeyApiClient.updateTask(
        id,
        title,
        description,
        date,
        priority,
        status,
        labels,
      ),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(["tasks", data.date]);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: deleteTask } = useMutation(
    (id) => TimeyApiClient.fetchDeleteTask(id),
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
    (title) => TimeyApiClient.postLabel(title),
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

  return { getTasks, createTask, changeTask, deleteTask, createLabel };
};
