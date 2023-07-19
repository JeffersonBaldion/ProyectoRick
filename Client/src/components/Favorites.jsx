import React from "react";
import { connect } from "react-redux";
import { filterGender, resetFilter } from "../redux/actions/actions";
import Card from "./Card";
import Styles from "./modulesCSS/Favorites.module.css";

function Favorites(props) {
  function handleSelect(event) {
    var genero = event.target.value;
    if (genero == "All") {
      props.reiniciarFiltro();
    } else {
      return props.filtrarGender(genero);
    }
  }

  return (
    <div>
      <div className={Styles.selectorContainer}>
        <select onChange={handleSelect}>
          <option value="All">--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>

      <div className={Styles.fav}>
        {props.favorites.map((obj) => {
          return (
            <Card
              key={obj.id}
              id={obj.id}
              name={obj.name}
              status={obj.status}
              species={obj.species}
              gender={obj.gender}
              origin={obj.origin}
              image={obj.image}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    filtrarGender: function (gender) {
      dispatch(filterGender(gender));
    },
    reiniciarFiltro: function () {
      dispatch(resetFilter());
    },
  };
}

export function mapStateToProps(globalState) {
  return {
    favorites: globalState.favorites,
    copyFavorites: globalState.copyFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
