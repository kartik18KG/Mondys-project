import React from "react";
import { NavLink } from "react-router-dom";
import DeleteButton from "../DeleteButton";
import UpdateCard from "./UpdateCard";
import "./card.css";

const Card = props => {
  const { learningCards } = props;
  return (
    <div className="learn-container">
      {learningCards &&
        learningCards.map(item => {
          console.log(item);
          return (
            <div
              className="card  mr-2 mb-5"
              key={item.id}
              style={{ width: "23rem" }}
            >
              <img
                className="card-img-top"
                width="300px"
                src={item.imageUrl}
                alt="Card cap"
              ></img>
              <hr />
              <div>
                <h2 className="text-center">{item.Name}</h2>
              </div>
              <div className="your-progress">
                <div>Your Progress</div>
                <div className="progress md-progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className=" m-2 mt-4">
                <NavLink
                  to={"/learn/" + item.Name}
                  className="btn btn-outline-primary float-right"
                >
                  Start
                </NavLink>
                <DeleteButton collectionName="Specialities" DocId={item.id} />
                <UpdateCard currentCard={item} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
