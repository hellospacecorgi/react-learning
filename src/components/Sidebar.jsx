import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Profile Card", path: "/" },
    { label: "Animal", path: "/animal" },
    { label: "Todo", path: "/todo" },
    { label: "Tic Tac Toe", path: "/tictactoe" },
    { label: "Accordion", path: "/accordion" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="button is-light m-3 hover:bg-violet-600 active:bg-violet-700"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    // <div className="sticky top-0 overflow-y-scroll flex flex-col">
    <div>{renderedLinks}</div>
  );
}

export default Sidebar;
