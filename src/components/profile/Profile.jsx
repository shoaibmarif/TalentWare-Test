import React from "react";
import "./Profile.css";
import headerProfile from "../../../public/images/header-profile.jpg";
import profile from "../../../public/images/profile.png";
import { CardWrapper } from "../../shared/CardWrapper";
import { profileDetails } from "../../data/profileData";
import DownArrow from "../../../public/icons/arrow.png";

export const Profile = () => {
  return (
    <div className="profile__wrapper mt-5 ">
      {/* Profile Header Section  */}
      <div className="profile__header">
        <img
          src={headerProfile}
          className="profile_bg"
          alt="User Profile Background"
        />
        <img src={profile} className="profile_img" alt={"User Profile"} />
        <div className="content__wrapper">
          <h2 className="profile__name">Albert Flores</h2>
          <p className="profile__designation">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="profile__location">Clinton, Maryland</p>
        </div>
      </div>

      <CardWrapper classes={"profile__details mt-3"}>
        {profileDetails.map((detail, index) => {
          return (
            <div key={index} className="details__wrapper">
              <span className="name">{detail.name}</span>
              <span className="count">{detail.counter}</span>
            </div>
          );
        })}
      </CardWrapper>
      <CardWrapper classes={"profile__calender mt-3"}>
        <div className="calender__wrapper">
          <div>
            <p className="calender__heading">My calendar</p>
            <p className="calender__upcoming">Upcoming Interviews</p>
          </div>
          <span>
            <img src={DownArrow} alt="Calender Icon" />
          </span>
        </div>
      </CardWrapper>
    </div>
  );
};
