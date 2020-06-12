import React from "react";

export default function Buttons (props){
    return (
      <div>
        <button class="button__sign-in">{props.buttonText}</button>
        <hr />
        <button class="button__facebook">
          {/* <img src="facebook.png" alt="facebook-icon"> */}
            {props.facebookText}
          {/* </img> */}
        </button>
        <p class="disclaimer__text">
          {props.disclaimerText}
          <span>{props.disclaimerTextTwo}</span>
        </p>
      </div>
    );
}