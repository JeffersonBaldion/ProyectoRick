import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";
import Styles from "./modulesCSS/Navbar.module.css"


export default function Nav(props){

    return (
    <div className={Styles.Navbar}>
        <Link className={Styles.logoContainer} to='/'><img className={Styles.Logo} src='../../assets/Logo.png'/></Link>

        <NavLink style={
            ({isActive})=>({
                
                paddingTop: isActive? '10px':'10px',
                verticalAlign: isActive? 'middle':'middle',
                fontFamily: isActive? 'Bahnschrift':'Bahnschrift',
                height: isActive? '50%':'50%',
                textDecoration: isActive? 'none': 'none',
                transitionDuration: isActive? '0.5s': '0.5s',
                
                width: isActive? '40%':'40px',
                letterSpacing: isActive? '5px': '',
                border: isActive? "1px solid #32044F" : "",
                borderRadius: isActive? '30px':'',
                
                color: isActive? '#220136' : '#9B48CF',
                backgroundColor: isActive? "#780088" : 'transparent',
            

        })} to="/about">ABOUT</NavLink>
        <NavLink  style={
            ({isActive})=>({
                
                
                paddingTop: isActive? '10px':'10px',
                verticalAlign: isActive? 'middle':'middle',
                fontFamily: isActive? 'Bahnschrift':'Bahnschrift',
                height: isActive? '50%':'50%',
                textDecoration: isActive? 'none': 'none',
                transitionDuration: isActive? '0.5s': '0.5s',
                
                width: isActive? '40%':'40px',
                letterSpacing: isActive? '5px': '',
                border: isActive? "1px solid #32044F" : "",
                borderRadius: isActive? '30px':'',
                color: isActive? '#220136' : '#9B48CF',
                backgroundColor: isActive? "#780088" : 'transparent',
            

        })} to="/home">HOME</NavLink>
        <NavLink style={
            ({isActive})=>({

                paddingTop: isActive? '10px':'10px',
                verticalAlign: isActive? 'middle':'middle',
                fontFamily: isActive? 'Bahnschrift':'Bahnschrift',
                height: isActive? '50%':'50%',
                textDecoration: isActive? 'none': 'none',
                transitionDuration: isActive? '0.5s': '0.5s',
                
                width: isActive? '40%':'40px',
                letterSpacing: isActive? '5px': '',
                border: isActive? "1px solid #32044F" : "",
                borderRadius: isActive? '30px':'',
                color: isActive? '#220136' : '#9B48CF',
                backgroundColor: isActive? "#780088" : 'transparent',
            

        })} to="/favorites">FAVORITES</NavLink>
        
        <SearchBar onSearch={props.onSearch}/>
    </div>        
)
}

