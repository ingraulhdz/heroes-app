import React, { useState } from "react";
import { HeroCard } from "../components/HeroCard";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroeByName";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formState, setformState] = useState({
    searchText: q,
  });

  const { searchText } = formState;

  const onInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const heroes = getHeroByName(q);
  console.log(heroes);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (searchText.trim().length < 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
    //navigate to the current page with query parameters
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div
              className="alert alert-primary animate__animated animate__fadeIn"
              style={{ display: q !== "" ? "none" : "" }}
            >
              {" "}
              Search a hero{" "}
            </div>
          ) : (
            heroes.length === 0 && (
              <div
                className="alert alert-danger animate__animated animate__fadeIn"
                style={{ display: (heroes.length = 0 ? "none" : "") }}
              >
                No hero with {q}{" "}
              </div>
            )
          )}

          {/* <HeroCard   /> */}

          {heroes.map((hero) => (
            <HeroCard {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
