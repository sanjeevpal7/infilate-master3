import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./Register.css"
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { Container as ContainerBase } from "components/misc/Layouts.js"
import { ContentWithPaddingLg } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import imagesrc from "../images/review8.png";
import imagesrc1 from "../images/webinar4.jpeg";
import imagesrc2 from "../images/review5.jpg";
const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`
const HeadingContainer = tw.div``;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const Heading = tw(SectionHeading)``;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Title = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;




const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  heading = "Write your Review",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",

  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Container className="register-head" >
        <ContentWithPaddingLg style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <HeadingContainer>


            {/* <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description> */}
          </HeadingContainer>
          <TwoColumn style={{
            paddingTop: '4%', paddingBottom: '4%'
          }}>
            < LeftColumn style={{ height: "400px" }}>
              <Title style={{ fontSize: '2.5rem', marginBottom: "20px", marginTop: "100px" }}>{heading}</Title>
              <h6 style={{ marginBottom: "60px" }}>{description}</h6>
              <Actions style={{ marginTop: "20px", marginLeft: "80px" }}>
                <PrimaryButton as="a" href="">{primaryButtonText}</PrimaryButton>
                {/* <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton> */}
              </Actions>

            </LeftColumn>
            <RightColumn >
              <IllustrationContainer style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <img

                  src={imagesrc}
                  alt="Hero"

                />

              </IllustrationContainer>

            </RightColumn>
          </TwoColumn>


        </ContentWithPaddingLg>
      </Container >
    </>
  );
};
