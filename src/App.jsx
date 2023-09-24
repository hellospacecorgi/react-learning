// import "bulma/css/bulma.css";
import TodoPage from "./pages/TodoPage";
import TicTacToePage from "./pages/TicTacToePage";
import AnimalPage from "./pages/AnimalPage";
import ProfileCardPage from "./pages/ProfileCardPage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import PlaylistPage from "./pages/PlaylistPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="container mx-auto grid grid-cols-6 gap-4 mt-4"> */}
          <Sidebar />
          {/* <div className="col-span-5"> */}

          {/* </div> */}
          {/* </div> */}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ProfileCardPage />} />

        <Route path="/animal" element={<AnimalPage />} />

        <Route path="/todo" element={<TodoPage />} />

        <Route path="/tictactoe" element={<TicTacToePage />} />

        <Route path="/accordion" element={<AccordionPage />} />

        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
