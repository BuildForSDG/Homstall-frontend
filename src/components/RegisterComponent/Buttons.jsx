import React from "react";
import facebook from './facebook.png'

export default function Buttons (props){
    return (
      <div>
        <button class="button__sign-in">{props.buttonText}</button>
        <hr />
        <button class="button__facebook">
          <img src={facebook}></img>{props.facebookText}
        </button>
        <p class="disclaimer__text">
          {props.disclaimerText}
          <span>{props.disclaimerTextTwo}</span>
        </p>
      </div>
    );
}