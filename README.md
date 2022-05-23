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

# 🌄 Timey - App Overview

This is a monorepo for the frontend and backend of our project.

Deployed on Heroku:

- Frontend: https://team-lp-project-5.herokuapp.com/
- Backend: https://team-lp-project-5.herokuapp.com/api

**Timey** allows users to keep tabs on their tasks, manage them efficiently and in the future will provide insights into statistics that have to do with task completion, or lack thereof.

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
- [Framer-motion](https://www.framer.com/motion/)
- [React Testing Library](https://testing-library.com/)

## 🧰 Backend:

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

ToDoApp
All endpoints to ToDoApp

User Endpoints: 

- POST Login
  http://localhost:3001/api/user/login
  You can login to the app

- POST register
  http://localhost:3001/api/user/register
  You can add user to the app
  {
    "username": "test",
    "first_name": "test1",
    "second_name": "test2",
    "password": "Test/1234",
    "email": "test@test.com"
}

- GET get user Info
  http://localhost:3001/api/user/userInfo
  You can get all information about user who is logged in

- GET Get task with date
  http://localhost:3001/api/user/tasks/2021-05-30
  You can get task with specific date

- GET Get Task with until date
  http://localhost:3001/api/user/tasks/until/2021-05-30
  You can get tasks until the specific date


Task Endpoints: 

- GET Search Task by phrase
  http://localhost:3001/api/task/search/ang
  You can search your tasks by phrase in the title or description

- POST Create task
  http://localhost:3001/api/task
  You can add task with information about him

- PUT change Taskinfo
  http://localhost:3001/api/task/1/changeStatus
  You can change all task information

- DEL Delete task
  http://localhost:3001/api/task/2
  You can delete specific task with task_id
  
  
Labels Endpoints: 

- POST Add Label
  http://localhost:3001/api/label
  You can add label

- DEL Delete label
  http://localhost:3001/api/label/1
  You can delete label and relation with task

- GET get all user labels
  http://localhost:3001/api/user/labels
  You can get all user labels

- POST Add relation
  http://localhost:3001/api/label/relation
  You can add relation between your task and labels


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

## *️⃣ Additional info

This monorepo was set up by following the guide by Reed Barger:

> https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
