import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "../css/loadingpage.css"

export default function LoadingPage() {
    return (
        <>
            <Header/>
            <div className="lds-dual-ring"></div>
            <Footer/>
        </>
    )
}

