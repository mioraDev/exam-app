Here is a README file that outlines the main steps to run your exam project using Docker, which includes an Angular application, a Node.js backend, and a MariaDB database.

# Exam Project

This project consists of an Angular frontend, a Node.js backend, and a MariaDB database. The project is containerized using Docker to simplify the setup and deployment process.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/)

## Setup Instructions

### 1. Clone the Repository
`git clone https://github.com/mioraDev/exam-app`

`cd exam-app`

### 2. Build project
Run the following command to build images
`docker compose build`

### 3. Run containers
Run the following command to start the containers:

`docker compose up`

## Access the application
The Angular application will be running at `http://localhost`
The Node.js backend will be running at `http://localhost:3000`

## Stop the Containers
To stop the running containers, use the following command:
`docker-compose down`



