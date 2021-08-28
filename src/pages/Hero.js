import React, { useState } from "react";
import "./Hero.css"

import { motion } from "framer-motion";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { green, purple } from '@material-ui/core/colors';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import SearchIcon from '@material-ui/icons/Search';
import logo3 from 'images/Ava Hosting.png';
import logo4 from 'images/teamwork.png';
import logo5 from 'images/Active Camapign.png';
import logo6 from 'images/logo6.png';
import logo1 from 'images/Aweber.png';
import logo2 from 'images/Activechat.png';
import { Card, Grid, Paper, TextField, Button, withWidth } from '@material-ui/core';
import Container from 'react-bootstrap/Container'


const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;
const HeadingContainer = tw.div``;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const HeadingRow = tw.div`flex`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;


const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#f5f5f6',

    paddingRight: '2%',
    paddingLeft: '5%'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
    // width:'60%',
    // marginLeft:'20%'
  },
}));


export default ({
  heading = "Good Morning Harsh",
  tabs = [
    {
      imageSrc: '',
      title: "Veg Mixer",
      content: "Tomato Salad & Carrot",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc: '',
      title: "Macaroni",
      content: "Cheese Pizza",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: "#"
    },

  ],


}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const classes = useStyles();

  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index )
  }

  // const handleAgency = ()=>{
  //   alert('dfd')
  // }

  return (
    <Container style={{ paddingTop: "10rem", marginBottom: "8rem" }}>

      <HeadingContainer style={{ marginBottom: '3%', paddingLeft: "10rem" }}>
        <HeadingRow>
          <Heading style={{ fontSize: '2rem', fontWeight: '600' }}>{heading}</Heading>
        </HeadingRow>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

      </HeadingContainer>
      <div style={{ width: "100%", height: "220px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f6f6f6" }}>
        <div style={{ backgroundColor: "#f5f5f6" }} className="form-hero">
          <div className="form-cont">

            <div className="category">
              <ul className="category-item">
                <li className="category-list">
                  <a className={tab===1 ? "tabs active" :"tabs"} onClick={() => { toggleTab(1) }} >Tools</a>
                  <a className={tab===2 ? "tabs active" :"tabs"} onClick={() => { toggleTab(2) }}   >Institute</a>
                  <a className={tab===3 ? "tabs active" :"tabs"} onClick={() => { toggleTab(3) }} >Agency</a>
                </li>
              </ul>
            </div>
            <div style={{ overflow: "hidden", display: "flex", marginLeft: "20px", marginRight: "20px", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", borderRadius: "0 15px 15px 15px", boxShadow: "2px 4px 16px #888888" }}>
              <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername"></label>
                <div className="flex-item" style={{ width: "400px", height: "50px", borderRadius: "20px" }}>

                  <input style={{ width: "415px", height: "50px", borderRadius: "0 0 0 20px", outline: "none" }} type="text" id="inlineFormInputGroupUsername" placeholder="What you looking for" />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div >

                  <select className="select-style" id="inlineFormSelectPref">
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div >

                  <select className="select-style" id="inlineFormSelectPref">
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div >

                  <select className="select-style" id="inlineFormSelectPref">
                    <option defaultValue>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>



                <div >
                  <button style={{ borderRadius: "10px", width: "160px", height: "50px" }} type="submit" className="search-btn"><a>Search</a></button>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div style={{ width: "100%", backgroundColor: "#f5f5f6" }}>
          <div  ><h1 style={{ fontSize: "1.2rem", fontWeight: "700", marginLeft: "180px", marginBottom: "10px" }}>We Compare multiple deals here</h1></div>

        </div>
        <Grid style={{ backgroundColor: "#f5f5f6", paddingLeft: "11rem" }} container  >
          <Grid item xs={2}>
            <img style={{ width: "120px" }} src={logo1} />
          </Grid>
          <Grid item xs={2}>
            <img style={{ width: "120px" }} src={logo2} />
          </Grid>
          <Grid item xs={2}>
            <img style={{ width: "120px" }} src={logo3} />
          </Grid>
          <Grid item xs={2}>
            <img style={{ width: "120px" }} src={logo2} />
          </Grid>
          <Grid item xs={2}>
            <img style={{ width: "120px" }} src={logo5} />
          </Grid>
          {/* <Grid item xs={2}>
        <img src={logo6}/>
        </Grid> */}
        </Grid>
      </div>
      <div className="down-button" >
        <button><a>I-metric</a></button>
        <button><a>Server</a></button>
      </div>


      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </Container >
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */

