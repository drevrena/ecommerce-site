import React from "react";

function Rating({rate}) {
    let stars = []
    for(let i=0; i<5; i++){
        let full= Math.round(rate) > i
        
        stars.push(<img
            key={i}
            className="product-star" 
            src={ full ? '../assets/images/star.png' : '../assets/images/star-empty.png'} 
            alt={ full ? "Full rating star" : "Empty rating star"}
        />)
    }

    return(
        stars
    )

}

export default Rating