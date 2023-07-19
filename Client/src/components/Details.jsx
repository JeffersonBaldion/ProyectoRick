import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Styles from './modulesCSS/Details.module.css' 

export default function Details() {
  const { id } = useParams();

  const params = useParams()

   console.log('Hello', params)

  const [character, setCharacter] = React.useState({})

  React.useEffect(() => {
    axios(`http://localhost:3001/characters/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
          
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 
 console.log(character.origin)

  return (
    <div className={Styles.container}>
      <div className={Styles.containerImagen}>
        <img src={character.image}></img>
        <h1>{character.name}</h1>
      </div>    
      <div className={Styles.containerDatos}>
        <h2>{character.status}</h2>
        <h2>{character.gender}</h2>
        
      </div>
    </div>
  );
}
