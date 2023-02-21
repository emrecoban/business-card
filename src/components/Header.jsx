import React from "react"
import profile from "../images/profilex400.jpg"

export default function Header() {
    return (
        <header className="head">
            <img src={profile} className="personal"/>
            <h1>Emre COBAN</h1>
            <h3>Frontend Developer</h3>
            <h4>emrecoban.github.io</h4>
            <nav className="links">
                <button className="mail"><i class="fa fa-envelope"></i> Email</button>
                <button className="linkedin"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
            </nav>
        </header>
    )
}