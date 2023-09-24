import AnimalShow from "../components/AnimalShow";
import { useState } from "react";

function AnimalPage() {
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
      <div className="container">
        <p className="h1 p-3 mb-2 bg-success text-white">
          Favourite Animals List - button, useState, reusable component
        </p>

        <div className="container">
          <button className="add-animal-button" onClick={handleOnClick}>
            Add animals
          </button>
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="animal-list">{renderAnimals}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalPage;
