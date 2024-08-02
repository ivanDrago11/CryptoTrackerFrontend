# Crypto Tracker Frontend

This is the frontend part of the Crypto Tracker application built with React and TypeScript. The project uses Material UI for styling and Redux for state management.

## Features

- User authentication
- Dashboard for displaying cryptocurrencies
- CRUD operations for managing crypto lists
- Responsive design

## Technologies

- React
- TypeScript
- Redux
- Material UI

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crypto-tracker-frontend.git
    cd crypto-tracker-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory and add any required environment variables:
```plaintext
REACT_APP_API_URL=http://localhost:8000/api
Project Structure
src/components: React components
src/store: Redux store, actions, and reducers
src/pages: Page components for different routes
src/utils: Utility functions
src/assets: Static assets like images and styles
Usage
User Authentication
To handle user authentication, use the useAuth hook provided in the AuthContext:

typescript
Copy code
const { loginUser, logoutUser } = useAuth();
Managing Crypto Lists
To manage crypto lists, dispatch actions from the Redux store:

typescript
Copy code
const dispatch = useDispatch();
dispatch(addItem(newItem));
dispatch(updateItem({ id, name }));
dispatch(deleteItem(id));
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
