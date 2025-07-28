# Adapt Ready Indian Cuisine

A full-stack web application for exploring Indian cuisine, built with React, TypeScript, Vite, and Express.js.


## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Project Structure](#project-structure)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [Scripts](#scripts)
* [License](#license)


## Overview

Adapt Ready Indian Cuisine helps users discover Indian dishes, get recommendations, and manage their profiles. The app is split into a React frontend and an Express backend.


## Features

- Browse and search Indian dishes
- Dish suggestions and recommendations
- Login with dummy data
- User profile management *(coming soon)*
- User authentication and authorization *(coming soon)*
- Admin dashboard for managing dishes and users *(coming soon)*


## Project Structure

```
Adapt-Ready-IndianCuisine/
├── client/      # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── data/     #To use dummy data
│   │   ├── routes/
│   │   ├── styles/   #To define global styles
│   │   ├── types/    #To define data types
│   │   └── utils/
│   │   └── theme/    #To create theme for FluentUIProvider
│   ├── public/
│   └── ...
├── server/      # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── database/     #planned
│   │   ├── middleware/   #To secure the API
│   │   ├── models/       #To define data types
│   │   ├── routes/
│   │   └── services/
│   ├── openapi/
│   └── ...
└── README.md
└── settings.json   #VScode setting for personal use
```


## Technologies Used

- **Frontend:** React, TypeScript, Vite, ESLint, Prettier
- **Backend:** NodeJs, Express.js, TypeScript
- **Database:** PostgreSQL *(planned)*
- **API Docs:** OpenAPI (YAML)


## Getting Started

### Prerequisites

- Node.js (v18 recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/adapt-ready-indian-cuisine.git
   cd adapt-ready-indian-cuisine
   ```

2. **Install dependencies:**
   - Frontend:
     ```sh
     cd client
     npm install
     ```
   - Backend:
     ```sh
     cd ../server
     npm install
     ```

3. **Start development servers:**
   - Frontend:
     ```sh
     npm run dev
     ```
   - Backend:
     ```sh
     npm run dev
     ```


## Scripts

- **Frontend**
  - `npm run dev` – Start React dev server
  - `npm run build` – Build for production
  - `npm run lint` – Run ESLint

- **Backend**
  - `npm run dev` – Start Express server with nodemon


## License

This project is licensed under the ISC License.
