import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Styles from './modulesCSS/Landpage.module.css'





export default function Landpage(){

    return (
        <div className={Styles.imagen}>
            <div className={Styles.boton}>
                <Link to={"/Form"}><button>Log-in</button></Link>
                <Link to={"/Home"}><button>Invitado</button></Link>
            </div>
        </div>
    )
}