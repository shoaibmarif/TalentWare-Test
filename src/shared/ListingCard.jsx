import React from "react";
import "./ListingCard.css";
import pin from "../../public/icons/pin.png";
import Location from "../../public/icons/location.png";
import clock from "../../public/icons/clock.png";

export const ListingCard = ({
  alert,
  title,
  subTitle,
  location,
  time,
  applicants,
  image,
}) => {
  return (
    <div className="listing__card ">
      <div className="card-body">
        <h6 className="card-alert">{alert}</h6>
        <div className="details">
          <img src={image} alt="Company Logo" />
          <div>
            <h5 className="card-title mt-2">{title}</h5>
            <span className="subTitle">{subTitle}</span>
          </div>
        </div>

        <div className="time__applicant">
          <img src={Location} alt="Location Icon" />
          <span className="location">{location}</span>
        </div>
        <div className="time__applicant mb-0">
          <img src={clock} alt="Location Icon" />
          <span className="time">
            {time} day ago |{" "}
            <span className="applicant">{applicants} applicants</span>
          </span>
        </div>

        <div className="button__wrapper mt-4">
          <button className="card__btn">Apply Now</button>
          <img src={pin} alt="Pin Icon" />
        </div>
      </div>
    </div>
  );
};
