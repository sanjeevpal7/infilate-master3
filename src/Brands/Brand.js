import React from 'react'
import Header from "../components/headers/Headerj"
import Home from "./Home"
import Domain from "./Domain"
import Recommend from "./Recommend"
import "./Brand.css"
import Frequently from './Frequently'
import Review from './Review'
import Brandpage from './Brandpage'






function Brand() {


    return (
        <>
            <Header />
            <Home />
            <Brandpage />
            <Domain />
            <Recommend />
            <Frequently />
            <Review />

        </>
    )
}

export default Brand

