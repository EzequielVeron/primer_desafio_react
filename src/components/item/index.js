import React from "react";

import "./item.css"

const Item = ({info}) => {
    return(
        <a href="#" className="film">
            <img src="info.image" alt=""/>
            <p>{info.tittle}</p>
        </a>
    )
}


export default Item;