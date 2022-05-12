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
