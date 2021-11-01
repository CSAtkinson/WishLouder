import React from 'react'

import Header from "../components/Header"
import Footer from "../components/Footer"

import 'normalize.css'
import '../assets/css/main.css'


const Layout = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}

export default Layout
