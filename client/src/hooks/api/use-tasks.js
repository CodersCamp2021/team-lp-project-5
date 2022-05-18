import { useQuery } from "react-query";
import TimeyApiClient from "./timey";

export const useTasks = (date) => {
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
};
