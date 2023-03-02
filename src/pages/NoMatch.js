import React from "react";
import "../css/nomatch.css"

function NoMatch() {
    return (
        <div className="no-match">
            <div>
                <h1>404</h1>
                <h2>We couldn't find this page.</h2>
            </div>
            <a className="return-btn" href="/">Go back Home</a>
        </div>
    )
}


export default NoMatch