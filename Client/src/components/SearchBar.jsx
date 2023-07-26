import { useState } from "react";
import Styles from './modulesCSS/Searchbar.module.css'


export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={Styles.container}>
         <input 
         
         className={Styles.input}
         type='text' 
         placeholder="Type any ID number"
         onChange={handleChange}
         value={id}
         />
         
         
         <button className={Styles.button} onClick={() => {props.onSearch(id)}}>
         <ion-icon name="search-outline"></ion-icon>
         </button>
      </div>
   );
}
 