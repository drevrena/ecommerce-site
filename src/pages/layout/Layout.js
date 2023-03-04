import React from "react";
import { NotificationContainer } from "react-notifications";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import PaymentModal from "../PaymentModal";
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