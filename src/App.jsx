import "bulma/css/bulma.css";
import TodoPage from "./pages/TodoPage";
import TicTacToePage from "./pages/TicTacToePage";
import AnimalPage from "./pages/AnimalPage";
import ProfileCardPage from "./pages/ProfileCardPage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
        <div className="col-span-5">
          <Routes>
            <Route path="/" element={<ProfileCardPage />} />

            <Route path="/animal" element={<AnimalPage />} />

            <Route path="/todo" element={<TodoPage />} />

            <Route path="/tictactoe" element={<TicTacToePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
