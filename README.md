# CodeX

A real-time collaborative code editor built with React and Node.js.

## Description

CodeX is an online code editor that allows multiple developers to collaborate on code in real-time. It features a Monaco editor (the same editor used in VS Code) and supports live code synchronization across all connected users in a room.

## Features

- Real-time code collaboration
- Room-based sessions
- Monaco editor with syntax highlighting
- Code persistence in MongoDB
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend

- React
- Vite
- Monaco Editor
- Socket.io Client
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- Socket.io
- MongoDB with Mongoose

## Installation

1. Clone the repository:

   ```
   git clone <repo-url>
   cd CodeX
   ```

2. Install backend dependencies:

   ```
   cd Backend
   npm install
   ```

3. Install frontend dependencies:

   ```
   cd ../Frontend
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the Backend directory
   - Add your MongoDB connection string: `MONGO_URI=your_mongodb_uri`
   - Optionally, set `PORT=5000`

5. For local development, update the socket URL in `Frontend/src/pages/CodeEditor.jsx`:
   - Change `io("https://codex-backend-hsrs.onrender.com")` to `io("http://localhost:5000")`

## Usage

1. Start the backend server:

   ```
   cd Backend
   npm start
   ```

2. Start the frontend development server:

   ```
   cd Frontend
   npm run dev
   ```

3. Open your browser to `http://localhost:5173` (or the port shown by Vite)

4. Click "Start Session" to create a new room

5. Share the URL with others to collaborate

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
