class TimeyApiClient {
  async fetchTasks(dueDate) {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/user/tasks/${dueDate}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }

  async fetchAllTasks() {
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
    return response.json();
  }

  async fetchLeftoverTasks() {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/user/leftoverTasks",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }

  async postTask(task) {
    const { title, description, priority, status, dueDate, labels } = task;
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
        dueDate,
        labels,
      }),
    });
    return response.json();
  }

  async updateTask(task) {
    const { taskId, title, description, priority, status, dueDate, labels } =
      task;
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/task/${taskId}/changeTaskInfo`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          priority,
          status,
          dueDate,
          labels,
        }),
      },
    );
    return response.json();
  }

  async fetchDeleteTask(task) {
    const { taskId } = task;
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/task/${taskId}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }

  async postLabel(title) {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + "/label", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    return response.json();
  }

  async fetchTasksByName(name) {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/task/search/${name}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  }
}

export default TimeyApiClient;
