# middleware

<!-- TOC depthFrom:2 -->

- [Overview](#overview)
  - [Technologies Used](#10-technologies-used)
- [Getting Started](#1-getting-started)
  - [Prerequisites](#11-prerequisites)
  - [Installing/Running locally](#12-installing-running-locally)
- [Contributors (Maintainers)](#2-contributors)

<!-- /TOC -->

## 0. Overview

Middleware layer implementing API connection to databases and authentication

### 0.1 Technologies Used

1. Node.js
2. Express.js
3. _And others..._


## 1. Getting Started

### 1.1 Prerequisites

Ensure you have the following installed on your local machine.

- [NodeJS](https://nodejs.org/en/download/)

### 1.2 Installing/Running locally

- Clone repository

  ```bash
    - git clone https://github.com/BanTheBad/middleware.git
    - cd middleware
    - npm install
  ```

- Create/configure a `.env` file with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.

#### Google Oauth config
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

- Two `npm` scripts are available to spin up the server:
  - `npm run dev` spins up the server and watch for file changes
  - `npm run dev:debug` spins up the server and attaches a debugger to it


## 2. Contributors (Maintainers)
