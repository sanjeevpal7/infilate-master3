import React, { useState } from 'react'
import cashback from "../../images/cashback2.png"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Home from 'pages/Home'
import "./light.css"

function Headerj() {

    const [logobar, setLogobar] = useState(false)



    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setLogobar(true)
        }
        else {
            setLogobar(false)
        }
    }



    window.addEventListener("scroll", changeBackground)

    const [icon, seticon] = useState(false)

    const changeIcon = () => {
        seticon(!icon)
    }




    return (
        <>
        <Router>
        <div>
            <nav className="navbar">
                <div className="nav-super">
                    <a href="/" className="navbar-brand">
                        <div className={logobar ? "nav-logo active" : "nav-logo"}>


                        </div>

                    </a>
                    <div className="menu-icon" onClick={changeIcon}>  <i className={icon ? " fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>

                    </div>

                    <a>

                        <div style={{ zIndex: "999" }} className="dropdown">
                            <button className="dropbtn"><i className="fas fa-user fa-2"></i>Profile</button>
                            <div className="dropdown-content">
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "115px", padding: "10px", backgroundColor: "#e1e5ea" }}>
                                    <div>
                                        <img style={{ width: "150px", height: "100px" }} src={cashback} alt="images" /></div>
                                    <div style={{ paddingLeft: "10px" }}>
                                        <h3 style={{ fontSize: "16px" }}>Welcome</h3>
                                        <h6 style={{ fontSize: "13px" }}>
                                            Earn extra cashback on top of other discounts on your shopping via Infilate.</h6>
                                    </div>
                                </div >
                                <div style={{ width: "100%", height: "130px", padding: "10px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                    <a href="#">SIGN UP</a>
                                    <a href="#">LOGIN</a>
                                </div>

                            </div>
                        </div>


                    </a>
                </div>
                <div className={logobar ? "nav-sub active " : "nav-sub"}>
                    <ul className={icon ? "nav-menu active" : "nav-menu "}>
                        <div className="dropdowns">
                            <li className="dropdown-buttons"> <a >WEBINAR</a></li>
                            <div className="dropdown-contents">
                                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>

                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdowns">
                            <li className="dropdown-buttons"><a>COMPARE</a></li>
                            <div className="dropdown-contents">
                                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>

                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdowns">
                            <li className="dropdown-buttons"><a>TOP STORIES</a></li>
                            <div className="dropdown-contents">
                                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>

                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdowns">
                            <li className="dropdown-buttons" ><a>COUPONS</a></li>
                            <div className="dropdown-contents">
                                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>

                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                    <div className="dropdown-contents-head">
                                        <a style={{ fontSize: "20px", fontWeight: "600", borderBottom: "1px solid grey" }} href="#">Lorem ispum</a>
                                        <a href="#">lorem</a>
                                        <a href="#" >lorem</a>
                                        <a href="#">lorem</a>
                                        <a href="#">lorem</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>


                </div>
            </nav>
                </div>
                </Router>
                </>
    )
}

export default Headerj
