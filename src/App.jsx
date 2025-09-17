import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CodeEditor from "./pages/CodeEditor";
import HomePage from "./pages/Home";

function Room() {
  const { roomId } = useParams();
  return <CodeEditor roomId={roomId} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:roomId" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
