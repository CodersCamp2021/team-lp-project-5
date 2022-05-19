/* eslint no-console: 0 */
import { useQuery } from "react-query";
import TimeyApiClient from "./timey";

export const useTasks = (date) => {
  if (date) {
    const { data: tasks, refetch: getTasks } = useQuery(
      ["tasks", date],
      async (date) => TimeyApiClient.fetchTasks(date),
      {
        onSuccess: (data) => console.log(data),
        onError: (error) => console.error(error),
        enabled: false,
        placeholderData: [],
      },
    );
    return { tasks, getTasks };
  } else {
    const { data: tasks, refetch: getTasks } = useQuery(
      ["tasks"],
      async () => TimeyApiClient.fetchAllTasks(),
      {
        onSuccess: (data) => console.log(data),
        onError: (error) => console.error(error),
        enabled: false,
        placeholderData: [],
      },
    );
    return { tasks, getTasks };
  }
};
