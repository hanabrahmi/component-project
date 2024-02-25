import React from "react";
import profile from "./Profile.jpg";
import './ProfilePhoto.css';

const ProfilePhoto = () => {
    return (
        <div> 
            <img src={profile} style={{borderRadius: '50%' }} className="profile-photo " />

        </div>
    )
}
export default ProfilePhoto;