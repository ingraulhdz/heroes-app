import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const { heroId } = useParams();
  const heroImg = `/assets/heroes/${heroId}.jpg`;

  const hero = useMemo(()=> getHeroById(heroId)) 

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={heroImg} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearence:</b> {hero.first_appearance}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Characters:</b> {hero.characters}
          </li>
        </ul>
        <button className="btn btn-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
