import React from 'react';
import Styles from './App.module.css'
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Details from './components/Details.jsx';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
   
  const location = useLocation();
  const navigate = useNavigate()
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = React.useState()
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '123456';


  
  function login(userData){
     if(userData.password === PASSWORD && userData.email === EMAIL){
        setAccess(true)
        navigate("/home")
     }
  }

  React.useEffect(()=>{
     !access && navigate('/')
  },[access])


  function onSearch(id) {
  
   axios(`http://localhost:3001/characters/${id}`)
     .then(({data}) => {
      if (data.name) {
          var filtrado = characters.map(x => x.name)
          if(data.name == filtrado.filter(x => x === data.name)){
            alert("Este Personaje ya existe en la lista");
          }else{
            setCharacters((oldChars) => [...oldChars, data]);
          }
      }
     })
     .catch((err) => alert(err.message));
 }


  function onClose(id){
     
     setCharacters(
      characters.filter((pj )=> {
         console.log(pj.id)
      return pj.id !== Number(id)
      }) 
     )
     
  }

  return (
    <div className={Styles.App}>
       {
          location.pathname !== '/' && <Nav className={Styles.Navbar} onSearch={onSearch} />
       }
       
       <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path='/about' element={<h1>Soy el about</h1>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/character/:id' element={<Details/>}/>

          
       </Routes>
    </div>
  )
}


export default App;
