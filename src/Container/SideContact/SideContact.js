import React from "react";
import "./SideContact.css";

export default function SideContact() {
  return (
    <div className="sideContact">
      <div className="sideContact-icons">
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
      </div>
      <div className="sideContact-mail">
        <a href="">marquesinro@gmail.com</a>
      </div>
    </div>
  );
}
