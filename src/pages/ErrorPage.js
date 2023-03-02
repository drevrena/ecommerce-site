import React from "react";
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import "../css/nomatch.css"

export default function ErrorPage() {
  
  return (
    <>
      <Header/>
      <div className="no-match">
          <div>
              <h1>Error</h1>
              <h2>Something went wrong with your request...</h2>
          </div>
          <a className="return-btn" href="/">Go back Home</a>
      </div>
      <Footer/>
    </>
  )
}

