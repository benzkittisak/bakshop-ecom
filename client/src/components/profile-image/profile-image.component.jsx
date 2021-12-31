import React from "react";
import { Link } from "react-router-dom";
import "./profile-image.style.scss";

const ProfileImage = ({image}) => {
  return (
    <div className="profile-info">
      <div className="profile-img">
        <Link to="/account/profile">
          <img
            src={
              image
                ? image
                : "https://i2.fpic.cc/file/img-b1/2021/12/31/blank-profile-picture-gdd86fa344_640.md.png"
            }
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default ProfileImage;