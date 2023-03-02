import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import PaymentModal from "../PaymentModal";
import { NotificationContainer } from "react-notifications";
import { Outlet } from "react-router-dom";
import "../../css/notifications.css"


export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <NotificationContainer/>
            <PaymentModal/>
        </>
    )
}