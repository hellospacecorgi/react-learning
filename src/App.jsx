import "./App.css";
import "bulma/css/bulma.css";
import TodoPage from "./pages/TodoPage";
import TicTacToePage from "./pages/TicTacToePage";
import AnimalPage from "./pages/AnimalPage";
import ProfileCardPage from "./pages/ProfileCardPage";

function App() {
  return (
    <div>
      <ProfileCardPage />
      <AnimalPage />
      <TodoPage />
      <TicTacToePage />
    </div>
  );
}

export default App;
