# Project: nv-Project

This project is a variation of the nv-webblog68 project, extended with a new model: **Project**.

## New Model: Project

### Schema
- **name**: STRING\n- **description**: TEXT\n- **status**: STRING\n- **startDate**: DATE\n- **endDate**: DATE

## New Controller
A dedicated controller `ProjectController` has been added to handle CRUD operations for `Project`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/projects` - Get all projects
- **POST** `/project` - Create a new project
- **GET** `/project/:projectId` - Get a project by ID
- **PUT** `/project/:projectId` - Update a project
- **DELETE** `/project/:projectId` - Delete a project

## Usage
Follow standard setup instructions for Client and Server.
