import React from "react";
import "./Header.css";
import Logo from "../../logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="cont-logo">
          <a href="">
            <img src={Logo} alt="Logo Rocio" className="logo-header" />
          </a>
        </div>
        <div className="header-r">
          <ol className="sidebar">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ol>
        <div>
          <a href="" className="resume-button">Resume</a>
        </div>
        </div>
      </nav>
    </header>
  );
}
