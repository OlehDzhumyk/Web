import React from "react";
import "./loader.css";
import {FadeLoader} from "react-spinners";

function Loader() {
    return(
        <div className="loader">
            <FadeLoader color="#d79f0e" />
        </div>
    )
}

export default Loader;
