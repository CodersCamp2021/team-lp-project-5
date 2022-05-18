class TimeyApiClient {
  async fetchTasks(date) {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/user/tasks",
      {
        body: {
          date,
        },
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.json;
  }

  async postTask(title, description, priority, status, date) {
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
        date,
      }),
    });
    return response.json();
  }

  async updateTask(id, priority, status) {
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
  }

  async fetchDeleteTask(id) {
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
}

export default TimeyApiClient;
