/* eslint-disable */
import React, { useState, useEffect } from "react";
import Axios from "axios"
import styled from "styled-components";
import tw from "twin.macro";
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import imagesrc2 from "../../images/webinar7.jpg";
import imagesrc1 from "../../images/webinar5.jpg";
import imagesrc from "../../images/webinar8.jpg";


const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-4 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-2 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-4`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-8 py-3 rounded bg-secondary-500 hocus:text-black text-gray-100 hocus:bg-gray-500 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw` stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  heading = "Modern React Templates, Just For You",
  descri = "IT Infrastructure",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",

  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
const [webinarData,setWebinarData]=useState([])
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const toggleModa = () => setModalIsOpen(!modalIsOpen);
  const history = useHistory();
  const webinarList = () => {
    history.push("")
  }


    const fetchData = async () => {
            const result = await Axios(
                'http://infilate.com/backend/public/api/app/webinars/1', {
                method: "POST"
            }
            );
            let run = result.data.Data
            console.log("newdaaattt",run)
            setWebinarData(run)
        }
  useEffect(()=>{
      fetchData()
    }, [])
  
  return (
    <>


      <LeftColumn >
        <IllustrationContainer style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
          <div className="web-image" style={{ width: "400px", height: "400px", borderRadius: "50%", overflow: "hidden", backgroundColor: "white" }}>

          </div>
          <div className="web-offer" style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden" }} ></div>
          {imageDecoratorBlob && <DecoratorBlob2 />}
        </IllustrationContainer>
      </LeftColumn >
      <RightColumn >
      {
          webinarData.map((item) => {
          
          (
          
<>

          <h3 style={{ fontSize: "3rem", fontWeight: "bold", color: "white", }}>hiiii</h3>
          <h6 style={{ display: "flex", fontSize: "20px", color: "white" }}>hiiii</h6>
          <h6 style={{ display: "flex", fontSize: "20px", marginBottom: "2rem", color: "white" }}>hiiiii</h6>

          <div className="web-feature">
            <div className="web-feat">
              <h3 >Featured Event</h3>
              <h4  >online <span style={{ color: "green", fontSize: ".8rem" }}><i class="fas fa-circle"></i></span></h4>
            </div>

            <div className="web-book" >
                  <h1 > <span><i class="fas fa-rupee-sign"></i> {item.price}</span></h1>
              <button > <a href="#">Book Now</a></button>
            </div>
          
          </div>
          <button style={{ color: "white", width: "20%", marginTop: "20px" }} onClick={toggleModal} > <a href="#">Watch Video</a></button>
      


        </>
          )
        })
        
        }
        </RightColumn>
      <DecoratorBlob1 />
      <StyledModal
        closeTimeoutMS={300}
        className="mainHeroModal"
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <CloseModalButton onClick={toggleModal}>
          <CloseIcon tw="w-6 h-6" />
        </CloseModalButton>
        <div className="content">
          <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
        </div>
      </StyledModal>

    </>
  );
};
