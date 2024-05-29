import React from "react";
import { PropTypes } from 'prop-types';

function UserUsername(props) {
    
    return (
        <React.Fragment>
            <b>Username:</b>
            <span >{props.username}</span>
        </React.Fragment>
    );

}export default UserUsername;
UserUsername.propTypes ={
    username:PropTypes.string.isRequired,
};