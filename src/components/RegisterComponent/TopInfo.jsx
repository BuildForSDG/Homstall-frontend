import React from "react";

function TopInfo (props){
    return(
        <div class="top-info__div">
            <h1 class="top-info__header">{props.headerText}</h1>
            <p class="top-info__paragraph">{props.paragraphText}</p>
        </div>
    )
}

export default TopInfo;