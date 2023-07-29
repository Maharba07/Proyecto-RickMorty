import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";

function Favorites({ myFavorites }) {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const myFavorite = useSelector((state) => state.myFavorites);

  if (myFavorite.length === 0) {
    return <h2>No has agregado un Favorito</h2>;
  }

  const handleOrder = (event) => {
    setAux(!aux);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {myFavorite.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
            onClose={char.onClose}
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
