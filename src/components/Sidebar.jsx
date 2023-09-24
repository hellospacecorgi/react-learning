import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Profile Card", path: "/" },
    { label: "Animal", path: "/animal" },
    { label: "Todo", path: "/todo" },
    { label: "Tic Tac Toe", path: "/tictactoe" },
    { label: "Accordion", path: "/accordion" },
    { label: "Playlist", path: "/playlist" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li className="nav-item" key={link.label}>
        <Link className="nav-link" to={link.path}>
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    // <div className="sticky top-0 overflow-y-scroll flex flex-col">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">{renderedLinks}</ul>
    </div>
  );
}

export default Sidebar;
