# Delta: User Registration

This app allows users to create accounts by registering with a username and password. Passwords are securely hashed before being stored in the MongoDB database. The app includes an authentication feature with proper checks to ensure unique usernames.

## Features

- **User Registration:** Allows new users to sign up with a username and password.
- **Password Hashing:** Passwords are hashed using bcrypt for security.
- **MongoDB Database:** User data is stored in MongoDB.
- **Client-Server Interaction:** The frontend communicates with the backend API using Axios.

## Tech Stack

- **Frontend:** React.js, Axios, Bootstrap
- **Backend:** Node.js, Express.js, bcrypt, MongoDB
- **Database:** MongoDB

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/delta-user-registration.git
    ```

2. Navigate to the `backend` directory:
    ```bash
    cd delta-user-registration/backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add your MongoDB URI:
    ```env
    MONGO_URI=mongodb://your_mongo_uri_here
    ```

5. Run the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd delta-user-registration/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the frontend application:
    ```bash
    npm start
    ```

The frontend will be running at `http://localhost:3000`, and the backend will be running at `http://localhost:5000`.

## Usage

- Open the app in your browser at `http://localhost:3000`.
- On the registration page, enter a unique username and password, then click on the "Register" button to create a new user.
- If the username already exists, you will receive a warning message.


## License

This project is open-source and available under the [MIT License](LICENSE).
