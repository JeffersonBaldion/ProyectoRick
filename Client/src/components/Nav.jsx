import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Styles from "./modulesCSS/Navbar.module.css"
// import styles from '../../assets/Logo.png'



export default function Nav(props){

    return (
    <div className={Styles.Navbar}>
        <Link className={Styles.logoContainer} to='/'><img className={Styles.Logo} src='../../assets/Logo.png'/></Link>
        <Link className={Styles.About} to="/about">ABOUT</Link>
        <Link className={Styles.Home} to="/home">HOME</Link>
        <Link className={Styles.fav} to="/favorites">FAVORITES</Link>
        <SearchBar onSearch={props.onSearch}/>
    </div>        
)
}

