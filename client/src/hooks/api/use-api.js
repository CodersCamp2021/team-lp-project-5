import { useMutation, useQuery, useQueryClient } from "react-query";

export const fetchTasks = async () => {
  const response = await fetch(
    process.env.REACT_APP_SERVER_URL + "/user/tasks",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json;
};

export const postTask = async (title, description, priority, status) => {
  const response = await fetch(process.env.REACT_APP_SERVER_URL + "/task", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      priority,
      status,
    }),
  });
  return response.json();
};

export const updateTask = async (id, priority, status) => {
  const response = await fetch(
    process.env.REACT_APP_SERVER_URL + `/task/${id}/changeStatus`,
    {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priority,
        status,
      }),
    },
  );
  return response.json();
};

export const fetchDeleteTask = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_SERVER_URL + `/task/${id}`,
    {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
};

export const postLabel = async (title) => {
  const response = await fetch(process.env.REACT_APP_SERVER_URL + "/label", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  return response.json();
};

export const useApi = () => {
  const queryClient = useQueryClient();

  const { data: tasks } = useQuery("tasks", fetchTasks, {
    onSuccess: (data) => console.log(data),
  });

  const { mutate: createTask } = useMutation(
    ({ title, description, priority, status }) =>
      postTask(title, description, priority, status),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("tasks");
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: changeTask } = useMutation(
    ({ id, priority, status }) => updateTask(id, priority, status),
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("tasks");
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const { mutate: deleteTask } = useMutation((id) => fetchDeleteTask(id), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("tasks");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutate: createLabel } = useMutation((title) => postLabel(title), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("labels");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { tasks, createTask, changeTask, deleteTask, createLabel };
};
