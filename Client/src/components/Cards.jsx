import Card from './Card';
import styles from './modulesCSS/Cards.module.css'



export default function Cards(props) {

   return <div className={styles.container}>
    {props.characters.map((obj)=>{
        return <Card
        onClose={props.onClose} 
        key={obj.id}
        id={obj.id}
        name={obj.name}
        status={obj.status} 
        species={obj.species} 
        gender={obj.gender}
        origin={obj.origin.name}
        image={obj.image}
        ></Card>
    })}
   </div>;
}
