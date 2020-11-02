import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Nav.css";

import { IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { darkblue } from "color-name";

export default function Nav() {
  const [colour, setColour] = useState("darkblue");
  return (
    <nav className="Nav-bar">
      <div className="Nav-members">
        <img className="logo" src="tu.png" alt="logo" />

        <div className="name-block">Tribhuvan University</div>
        <ul className="Nav-items">

        <li className="Nav-links">
            <NavLink to="/student" activeStyle={{ color: colour }}>
              <IoMdPersonAdd size={30} />
            </NavLink>
          </li>
          <li className="Nav-links">
            <NavLink to="/studentlist" activeStyle={{ color: colour }}>
              <IoMdPerson size={30} />
            </NavLink>
          </li>
         

          <li className="Nav-links">
            <NavLink to="/search" activeStyle={{ color: colour }}>
              <FaSearch size={30} />
            </NavLink>
          </li>

          <li className="Nav-links">
            <NavLink to="/resultlist" activeStyle={{ color: colour }}>
              <CgUserList size={30} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
