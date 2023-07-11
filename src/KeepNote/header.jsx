import React from "react";
import './KeepNote.css'
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const Header = () => {
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <p className="logoPic"> {<NoteAltIcon/>} </p>
                <p> KeepNote </p>
            </div>

            <div className="nav-menu">
                <ul>
                    <li> About KeepNote </li>
                    <li> Contact Us </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;