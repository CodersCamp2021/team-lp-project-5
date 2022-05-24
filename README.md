# CodersCamp 2021 - Team: Łukasz Powązka

## Project 5: Advanced Frontend & Backend

**Mentor**: [Łukasz Powązka](https://github.com/lukiq)

**Team members**:

- [Patryk Brodziak](https://github.com/patrykbrodziak1)
- [Jakub Czerwiński](https://github.com/kubaczerwinski77)
- [Huber Grobelny](https://github.com/Burbinox)
- [Maciej Jankowski](https://github.com/macjank)
- [Krzysztof Prońko](https://github.com/Ruud1990)
- [Paweł Stępień](https://github.com/pastepi)

# 🌄 ToDoApp Overview

This is a monorepo for the frontend and backend of our project.

Deployed on Heroku:

- Frontend: https://team-lp-project-5.herokuapp.com/
- Backend: https://team-lp-project-5.herokuapp.com/api

**ToDoApp** allows users to keep tabs on their tasks, manage them efficiently and in the future will provide insights into statistics that have to do with task completion, or lack thereof.

### Features:

- Register/login
- Ability to use the app without authenticating
- Task management - add/edit/delete
- Dashboard and calendar views

# 🛠️ Used Tech

## 🎨 Frontend:

- [React Query](https://react-query.tanstack.com/)
- [React Router](https://reactrouter.com/)
- [Mantine](https://mantine.dev/)
- [React Testing Library](https://testing-library.com/)

## 🧰 Backend:

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## 🌎 Global:

- [Husky](https://typicode.github.io/husky/#/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Heroku](https://www.heroku.com/)
- [Figma](https://www.figma.com/)
- [Trello](https://trello.com/)

# 🔑 How to use

### **Installing dependencies**

To install every dependency:

`npm install && cd client && npm install && cd ..`

Backend only:

`npm install`

Frontend only:

`cd client && npm install`

### **Running tests**

`npm test`

### **Starting the app**

Build and run the app:

`npm run build && npm start`

Running backend only:

`npm start`

Running frontend only:

`cd client && npm start`

## All endpoints ToDoApp
## User

> ### **POST** `/api/user/login`
> 
  - You can login to the app

> ### **POST** `/api/user/register`
> 
  - You can add user to the app
  - Example request:
  ```
  {
    "username": "test",
    "first_name": "test1",
    "second_name": "test2",
    "password": "Test/1234",
    "email": "test@test.com"
  }
```
> ### **GET** `/api/user/userInfo`
> 
  - You can get all information about user who is logged in

> ### **GET** `/api/user/tasks/:dueDate`
> 
  - You can get task with specific date

> ### **GET** `/api/user/tasks/until/:dueDate`
> 
  - You can get tasks until the specific date

> ### **GET** `/api/user/labels`
> 
  - You can get all user labels

## Task

> ### **GET** `/api/task/search/:searchPhrase`

  - You can search your tasks by phrase in the title or description

> ### **POST** `/api/task`
> 
  - You can add task with information about him

> ### **PUT** `/api/task/:task_id/changeStatus`
> 
  - You can change all task information

> ### **DELETE** `/api/task/:task_id`
> 
  - You can delete specific task with task_id
  
  
## Label

> ### **POST** `/api/label`
> 
  - You can add label

> ### **DELETE** `/api/label/:label_id`
> 
  - You can delete label and relation with task

> ### **POST** `/api/label/relation`
>
  - You can add relation between your task and labels

## *️⃣ Additional info

This monorepo was set up by following the guide by Reed Barger:

> https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
