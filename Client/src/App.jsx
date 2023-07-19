import axios from "axios";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Details from "./components/Details.jsx";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = React.useState();

  const login = async (userData) => {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/login/';
   
   try {
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      console.log(data)
      const {access} = data;
      setAccess(data)
      access && navigate('/home')

   } catch (error) {
      alert(error.message)
   }
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/characters/${id}`);
      
        if(data.name){
        var filtrado = characters.map((x) => x.name);
        if (data.name == filtrado.filter((x) => x === data.name)) {
          alert("Este Personaje ya existe en la lista");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }}
      
    } catch (error) {
      alert(error.message)
    }

    // axios(`http://localhost:3001/characters/${id}`)
    //   .then(({data}) => {
    //    if (data.name) {
    //        var filtrado = characters.map(x => x.name)
    //        if(data.name == filtrado.filter(x => x === data.name)){
    //          alert("Este Personaje ya existe en la lista");
    //        }else{
    //          setCharacters((oldChars) => [...oldChars, data]);
    //        }
    //    }
    //   })
    //   .catch((err) => alert(err.message));
  };

  function onClose(id) {
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  return (
    <div className={Styles.App}>
      {location.pathname !== "/" && (
        <Nav className={Styles.Navbar} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<h1>Soy el about</h1>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/form" element={<Form />} />
        <Route path="/character/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
