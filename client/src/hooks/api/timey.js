import dayjs from "dayjs";
class TimeyApiClient {
  async register(newUser) {
    const { firstName, lastName, username, email, password } = newUser;
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/user/register`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
        }),
      },
    );
    return response.json();
  }

  async login(credentials) {
    const { email, password } = credentials;
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/user/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
    return response.json();
  }

  async fetchTasks(date) {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/user/tasks/${formattedDate}`,
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
    const { title, description, priority, status, date, labels } = task;
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
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
        dueDate: formattedDate,
        labels,
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
