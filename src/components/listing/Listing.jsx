import React from "react";
import "./Listing.css";
import { CardWrapper } from "../../shared/CardWrapper";
import SearchLight from "../../../public/icons/searchlight.png";
import { ListingTitle } from "../../shared/ListingTitle";
import { ListingCard } from "../../shared/ListingCard";
import teams from "../../../public/icons/team.png";
export const Listing = () => {
  return (
    <div className="listing__wrapper mt-5">
      <div className="listing__header">
        <h2>
          Find your Dream Job, <span>Albert!</span>
        </h2>
        <p>
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>
      <CardWrapper classes={"listing__filter"}>
        <input type="text" placeholder="Job Title, Company, or Keywords" />
        <div className="search__section">
          <div class="dropdown">
            <button
              class=" dropdown-toggle dropdown-toggle-first"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Selected Location
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">
                Karachi
              </button>
              <button class="dropdown-item" type="button">
                Islamabad
              </button>
              <button class="dropdown-item" type="button">
                Lahore
              </button>
            </div>
          </div>
          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <button className="search__btn">
            <img src={SearchLight} alt="Search Product" />
            <span>Search</span>
          </button>
        </div>
      </CardWrapper>
      <div className="listing__similar">
        <span>Similar:</span>
        <div>
          <span>Frontend</span>
          <span>Backend</span>
          <span>Graphic Designer</span>
        </div>
      </div>

      {/* Featured Jobs  */}
      <div className="list__wrapper">
        <ListingTitle title="Featured Jobs" subTitle="See Featured Jobs" />
        <div className="list__card">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            <div className="col">
              <ListingCard
                alert={"Promoted"}
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                alert={"Promoted"}
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                alert={"Promoted"}
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                alert={"Promoted"}
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                alert={"Promoted"}
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
          </div>
        </div>
        <div className="hori__line"></div>
        <ListingTitle
          title="Recommended Jobs"
          subTitle="See Recommended Jobs"
        />
        <div className="list__card">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
          </div>
        </div>
        <div className="hori__line"></div>
        <ListingTitle title="Latest Jobs" subTitle="See Latest Jobs" />
        <div className="list__card">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
            <div className="col">
              <ListingCard
                title="UI/UX Designer"
                subTitle="Teams"
                location="Seattle, USA (Remote)"
                time="1"
                applicants="22"
                image={teams}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Recommended Jobs  */}
      {/* Latest Jobs  */}
    </div>
  );
};
