import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./assets/png/alexa.png";
import CortanaImage from "./assets/png/cortana.png";
import SiriImage from "./assets/png/siri.png";
import Game from "./components/Game";
import Todo from "./components/Todo";
import AnimalShow from "./components/AnimalShow";
import { useState } from "react";
import "./App.css";

console.log(AlexaImage); // alexa.png is less than 9.7kb gets inlined in bundle.js
console.log(SiriImage); // siri.png is larger than 9.7kb gets treated as a separate file

function App() {
  //for jest tutorial
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "throw rubbish", completed: true },
  ];

  //animal list
  const [animals, setAnimals] = useState([]);
  const handleOnClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "horse", "gator"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Alexa was created by Amazon"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageSrc={CortanaImage}
                description="Cortana was created by Microsoft"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageSrc={SiriImage}
                description="Siri was created by Apple"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Scene"
                handle="@scenephotography"
                imageSrc="https://picsum.photos/200/300"
                description="Photo from picsum"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="hero is-primary" style={{ marginBottom: 10 }}>
        <div className="hero-body">
          <p className="title">Favourite Animals List</p>
        </div>
      </div>
      <div className="container">
        <button onClick={handleOnClick}>Add animals</button>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="animal-list">{renderAnimals}</div>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
        <Game />
      </div>
    </div>
  );
}

export default App;
