import React, { useEffect } from "react";
import Styles from "./modulesCSS/Card.module.css"
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../redux/actions/actions";
import { connect } from "react-redux";

function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
  removeFav,
  addFavorite,
  favorites,
}) {

   const [fav, setFav] = React.useState(false)

   function handleClick(){
      if(fav){
         setFav(false)
         removeFav(id)
      }else{
         setFav(true)
         addFavorite({
            name,
            species,
            onClose,
            gender,
            status,
            origin,
            image,
            id,
         })
      }
   }
   
   useEffect(() => {
      favorites.forEach((fav) => {
        if (fav.id == id) {
          setFav(true);
        }
      });
    }, [favorites]);

   return (
      <div className={Styles.carta}>
         <button className={Styles.fav} onClick={handleClick}>
         {fav ? "❤️" : "🤍" }  
         </button>
         {onClose ? (
        <button className={Styles.close} onClick={() => onClose(id)}>
          X
        </button>
      ) : null}
         <h2 className={Styles.id}>{id}</h2>
         <h2>{gender}</h2>
         <Link className={Styles.imagenContainer}to={`/character/${id}`}>
            <img className={Styles.imagen} src={image} alt="Una imagen aqui"></img>
         </Link>
         <h2 className={Styles.name}>{name}</h2>
         <h2 className={Styles.origin}>{origin}</h2>
         
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
     addFavorite: function (character) {
       dispatch(addFav(character));
     },
     removeFav: function (id) {
       dispatch(deleteFav(id));
     },
   };
 }

export function mapStateToProps(globalState){
   return {
      favorites: globalState.favorites
   }
} 

 export default connect(mapStateToProps, mapDispatchToProps)(Card)