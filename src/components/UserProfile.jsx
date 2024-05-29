import React from "react";
import UserFavoriteFood from "./UserFavoriteFood";
import UserUsername from "./UserUsername";




function UserProfile() {
    return (
     <div id="userProfile">
        <UserUsername  username="Bob Devin" />
        <UserFavoriteFood />
     </div>
    );
    
}export default UserProfile;

