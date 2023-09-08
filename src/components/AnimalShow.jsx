import bird from "../assets/svg/bird.svg";
import cat from "../assets/svg/cat.svg";
import cow from "../assets/svg/cow.svg";
import dog from "../assets/svg/dog.svg";
import gator from "../assets/svg/gator.svg";
import horse from "../assets/svg/horse.svg";
import heart from "../assets/svg/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show">
      <img
        className="animal"
        src={svgMap[type]}
        atl={type}
        onClick={handleClick}
      ></img>
      <img
        className="heart"
        src={heart}
        atl="heart"
        style={{ width: 10 + 10 * clicks }}
      ></img>
    </div>
  );
}

export default AnimalShow;
