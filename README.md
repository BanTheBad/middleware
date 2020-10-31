# middleware

<!-- TOC depthFrom:2 -->

- [middleware](#middleware)
  - [0. Overview](#0-overview)
    - [0.1 Technologies Used](#01-technologies-used)
  - [1. Getting Started](#1-getting-started)
    - [1.1 Prerequisites](#11-prerequisites)
    - [1.2 Setting up environment variables](#12-setting-up-environment-variables)
    - [1.3 Installing and running with Docker](#13-installing-and-running-with-docker)
      - [1.3.1 For Development](#131-for-development)
      - [1.3.1 For Production](#131-for-production)
    - [1.4 Installing/Running locally](#14-installingrunning-locally)
  - [2. Misc](#2-misc)
  - [3. Contributors (Maintainers)](#3-contributors-maintainers)

<!-- /TOC -->

## 0. Overview

Middleware layer implementing API connection to databases and authentication

### 0.1 Technologies Used

1. Node.js
2. Express.js
3. MySQL (with `Sequelize` as ORM)


## 1. Getting Started

### 1.1 Prerequisites

Ensure you have the following installed on your local machine.

- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/downloads/)

### 1.2 Setting up environment variables
- Google Oauth config
  - Visit the [Google API Console](https://console.developers.google.com/) (create an account if necessary)
  - From the project drop-down, select an existing project, or create a new one by selecting Create a new project
  - You may need to fill out the `OAuth consent screen`
    - Unless you're a G Suite user, you have to select `External` for the `User Type`
    - You don't need to fill out the `App Domains` section
    - Select the `userinfo.email` and `userinfo.profile` scopes to match the scopes used by the server
    - When done, go back to the Credentials page and repeat the process, this time you'll be able to create
    the Oauth client
  - In the sidebar under "APIs & Services", select Credentials
  - In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID.
  - Under Application type, select Web application.
  - In Authorized redirect URI use `http://localhost:<PORT>/auth/google/callback`
  - Press the Create button and copy the generated client ID and client secret
  - In your `.env` file, paste the values in the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` variables

- Create/configure a `.env` file with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.

### 1.3 Installing and running with Docker
- Ensure docker is fully setup on your machine https://www.docker.com/products/docker-desktop
- From the terminal clone repository `git clone https://github.com/BanTheBad/middleware.git`
- Change into project directory `cd middleware`

#### 1.3.1 For Development
- For development run `docker-compose up -d` or `docker-compose up`
- First build and processing takes some time, but subsequents ones are faster
- Use http://localhost:5000 as the server base URL
- Use http://localhost:8080 for PHPMyAdmin
- Use http://localhost:8090 for Adminer (if you don't like PHPMyAdmin :) )

#### 1.3.1 For Production
- For production run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`
- First build and processing takes some time, but subsequents ones are faster
- Use http://localhost:5000 as server base URL
- Use http://localhost:8080 for PHPMyAdmin
- No Adminer here :)

Username and Password for logging into PHPMyAdmin or Adminer are the ones defined already in your `.env` file, Server or Host is **db**

TODO:
- Add more docker configuration for testing
- Create and load different **envFiles** for different environment when needed
- Separate databases for **development**, **staging**, **production** and **testing**
- Make the services ports configurable from the env to help against port conflicts on machines

### 1.4 Installing/Running locally

- Clone repository

  ```bash
    - git clone https://github.com/BanTheBad/middleware.git
    - cd middleware
    - npm install
  ```

- Two `npm` scripts are available to spin up the server:
  - `npm run dev` spins up the server and watch for file changes
  - `npm run dev:debug` spins up the server and attaches a debugger to it
  - `npm run db:migrate` to create schemas in the database


## 2. Misc

- [Database Schema](https://dbdiagram.io/d/5f90a4a93a78976d7b78a42e)


## 3. Contributors (Maintainers)
