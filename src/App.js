import React from "react"
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
import ProductDetailPage from "./pages/ProductDetailPage.js"
import SuccessPage from "./pages/SuccessPage.js"
import LoadingPage from "./pages/LoadingPage.js"
import ErrorPage from "./pages/ErrorPage.js"
import HomePage from "./pages/HomePage.js"
import CartPage from "./pages/CartPage.js"
import NoMatch from "./pages/NoMatch.js"
import Layout from "./pages/layout/Layout.js"
import "./reset.css"
import "./App.css"


export default function App() {
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
                <Route index 
                    element={<HomePage/>} 
                    loader={() => {
                        return fetch(`https://fakestoreapi.com/products`)
                    }}/>
                <Route 
                    path="products/:id" 
                    element={<ProductDetailPage />} 
                    loader={({params}) => {
                        return fetch(`https://fakestoreapi.com/products/${params.id}`)
                    }}/>
                <Route path="cart" element={<CartPage />} />
                <Route path="success" element={<SuccessPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        )
    )

    return (
        <RouterProvider 
            router={router} 
            fallbackElement={<LoadingPage/>}>
            <Layout/>
        </RouterProvider>
    )
}
