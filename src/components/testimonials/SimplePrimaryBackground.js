import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "twin.macro";
import "./SimplePrimary.css"
import Button from '@material-ui/core/Button';
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg"




const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

const setting = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: "linear"
}

export default ({
  subheading = "",
  heading = "Latest  Blogs",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  testimonials = [
    {
      customerName: "Education",
      customerProfile: "CTO, Coronax",
      imageSrc:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "It has been 8 months since we have switched to servana "
    },
    {
      customerName: "The Change",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1610928712141-a292b96f43e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Let's Unite",
      customerProfile: "Founder, Travana",
      imageSrc:
        " https://images.unsplash.com/photo-1556484687-30636164638b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGh1bWFuaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Medical & Healthcare",
      customerProfile: "CTO, Coronax",
      imageSrc:
        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "It has been 8 months since we have switched to servana "
    },
    {
      customerName: "Technology",
      customerProfile: "Founder, Travana",
      imageSrc:
        " https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    },
    {
      customerName: "Health & Wellness",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1608138404239-d2f557515ecb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfF9oYi1kbDRRLTRVfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "We are delighted with the quality and performance of the servers that."
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <Container>
      <ContentWithPaddingXl style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading style={{ fontSize: '2rem', fontWeight: '700', marginBottom: "20px", marginLeft: "-20px" }}>{heading}</Heading>
        </HeadingContainer>
        <div  className="card-head">
          <Slider {...setting} style={{ width: "100%" }}>
            {
              testimonials.map((test) => ((
                <div style={{backgroundColor:"orange"}} className="card" key={test.index} >
                  <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "80px", marginLeft: "5px" }} className="title">{test.customerName}</p>
                  <img style={{ width: "100%", borderRadius: "10px" }} src={test.imageSrc} alt="John" />




                  <p style={{ fontSize: "18px", fontWeight: "600", paddingTop: "10px" }}>{test.quote}</p>

                </div>

              )))


            }
          </Slider>
         <Button href="MainBlog" variant="contained" color="primary">
  View More
</Button>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
};
