
import React, { useState } from "react";
import Product from "../components/Product";
import { useLoaderData } from "react-router-dom";
import "../css/homepage.css"


function HomePage() {
    const ITEMS_PER_PAGE = 4;
    const data = useLoaderData()
    const [loaded, setLoaded] = useState(8)


    return (
        <>
            <div className="hero">
                <h1 className="hero-title">Shoppyware best deals</h1>
                <p className="hero-text">Everything you can think of is here!</p>
            </div>
            <div className="container">
                <div className="product-container">
                    {data.map(prod => <Product key={prod.id} {...prod}/>).splice(0, loaded)}
                </div>
                {loaded < data.length && <button className="load-btn" onClick={() => setLoaded(prev=> prev + ITEMS_PER_PAGE)}>Load More</button>}
            </div>
        </>
    )
}

export default HomePage