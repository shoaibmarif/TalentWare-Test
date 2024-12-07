import React from "react";
import { headerData } from "../../data/headerData";
import logo from "../../../public/images/logo.png";
import "./Header.css";
import Search from "../../../public/icons/search.png";
import profileIcon from "../../../public/images/profile-1.jpg";
export const Header = () => {
  return (
    <nav className="header__wrapper global__content__wrapper">
      <div className="links__wrapper">
        <img src={logo} alt="TalentVare Logo" />
        <ul className="nav__list__wrapper">
          {headerData.map((item, index) => {
            return (
              <li key={index} className="list__item">
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="left__section">
        <div className="group__input__search">
          <input type="text" placeholder="Search" />
          <img src={Search} alt="Search" />
        </div>
        <button className="text-white custom-button mx-3">
          Resume Builder
        </button>
        <img
          className="profile__icon"
          src={profileIcon}
          alt="Profile Picture"
        />
      </div>
    </nav>
  );
};
