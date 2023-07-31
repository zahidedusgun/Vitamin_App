import React from "react";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Vitamins({ vitamins, remove }) {
  const [index, setIndex] = useState(0);
  const { id, vitamin_name, sources, daily_requirement, benefits } =
    vitamins[index];
  const rightButton = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const leftButton = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const checkNumber = (number) => {
    if (number > vitamins.length - 1) {
      return 0;
    }
    if (number < 0) {
      return vitamins.length - 1;
    }
    return number;
  };

  return (
    <div>
      <div>
        <h1>Features of Vitamins</h1>
      </div>
      <div className="MainDiv">
        <button className="icon" onClick={leftButton}>
          <BsFillArrowLeftCircleFill />
        </button>
        <div class="card">
          <h5 class="card-header">{vitamin_name}</h5>
          <div className="card-body">
            <p className="card-text">
              <div className="title">Sources: </div>
              {sources}
            </p>
            <p className="card-text">
              <div className="title">Daily Requirement: </div>
              {daily_requirement}
            </p>
            <p className="card-text">
              <div className="title">Benefits: </div>
              {benefits}
            </p>
            <br></br>
            <button className="delete" onClick={() => remove(id)}>
              Delete
            </button>
          </div>
        </div>
        <button className="icon" onClick={rightButton}>
          <BsFillArrowRightCircleFill />
        </button>

        <div className="cardDiv">
          {/* {vitamins && vitamins.map((vitamin) =>{ // && operatörü ile map hatası giderildi.
          return <Vitamin key={vitamin.id} {...vitamin} remove={remove} />; 
        })} */}
        </div>
      </div>
    </div>
  );
}

export default Vitamins;
