import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from "@material-ui/core/Grid"
import tw from "twin.macro";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { css } from "styled-components/macro";
import webinars from "../images/webinars.jpg"
import webinars1 from "../images/webinars1.jpg"
import webinars2 from "../images/webinars2.jpg"
import webinars3 from  "../images/webinars3.jpg"
import webinars4 from "../images/webinars4.jpg"
import webinars5 from "../images/webinars5.jpg"
import webinars6 from "../images/webinars6.jpg"
import webinars7 from "../images/webinars7.jpg"
import webinars8 from "../images/webinars8.jpg"
import webinars9 from "../images/webinars9.jpg"
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { postData } from "components/FetchServices";
import Axios from "axios"



const useStyles = makeStyles({
  banner: {
    marginTop: "24px",
    marginBottom: "40px",
    width: "100%",
    height: "160px",
     position:"relative"
  },
  bannerImage: {
    width: "100%",
    height: "100%",
   position:"absolute"
  },
  host: {
    position: "absolute",
    padding:"20px 20px",
    "& h2": {
      color: "white",
      fontSize:"30px"
    },
    "& Button": {
      backgroundColor: "transparent",
      border:"1px solid white",
      color:"white"
      
    }
    
},
  cardHead: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  outline:"none"
  },
  root: {
    maxWidth: 329,
    marginBottom: "40px",
    transition: "all .3s ease",
    outline:"none",
    "&:hover": {
      boxShadow: "5px 5px 15px grey",
      transform: "translateY(-10px)"
      
    }
  },
  media: {
    height: 185,
    outline:"none"
  },
  priceButton: {
    fontSize: "18px",
    fontWeight:"bold",
    color: "#7C83FD",
    textTransform:"capitalize"
  },
  onlineButton: {
    fontSize: "16px",
    fontWeight:"bold",
    color: "#476072",
    textTransform:"capitalize"
  }
});


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
 const data = [
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars1
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars2
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars3
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars4
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars5
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars6
      
  
    },
    {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image: webinars7
      
  
    },
  {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image:webinars8
      
  
    },
  {
      webinar_name: "Total defence Run-Ride-walk",
      webinar_date: "june 13",
      price: 120,
      image:webinars9
      
  
}]

   
export default ({
  headingText = "All Webinars",
  posts = [
    
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(6);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  {/*---
  const [webinars,setWebinars] = useState([])
  const readAllWebinars = async()=>{
    let result = await postData('webinars/1')
    console.log(result)
    setWebinars(result.Data)
  }
  React.useEffect(()=>{
    readAllWebinars()
  },[]) --------*/}
 

  const [webinarss, setWebinarss] = useState(data)
  const [webinar, setWebinar] = useState([])
  const classes = useStyles();
// const fetchData = async () => {
//   const result = Axios('http://infilate.com/backend/public/api/app/webinars/detail/1', {
//     method:'POST'
//   });
//   console.log("webssss",result)
//   setWebinar(result.data)
//   console.log("webiarss",webinar)

  
// }

  
  
  useEffect(() => {
         async function fetchData  ()  {
  const result =await Axios('http://infilate.com/backend/public/api/app/webinars/detail/1', {
    method:'POST'
  });
  console.log("webssss",result)
           setWebinar([result.data.Data])
           
  
}
    fetchData();
  }
    , []);

  return (
     console.log("new webinar",webinar),
<>
   
    <div>
   
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
            <Grid Container>
              <Grid className={classes.banner} item md={12}>
                <img className={classes.bannerImage} src="https://image.shutterstock.com/image-vector/vector-illustration-circuit-board-hexagons-260nw-1186861738.jpg" alt="images" />
                <div className={classes.host}>
                <h2>Host Your Online Events With Infilate</h2>

                <Button >Learn More</Button>
                </div>
              </Grid>
          </Grid>
             {/* <video width="500" height="400"  controls autoPlay src={`http://netdemo.site/infilate/public/images/${section1.media } `} type="video/mp4" / > */}
          <Card>
            {webinar.map((post, index) => (
                          <Card className={classes.root} key={index}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        video={`http://infilate.com/backend/public/images/${post.image } `}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {post.webinar_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {post.webinar_date}
          </Typography>
        </CardContent>
      </CardActionArea>
     
             </Card>
            ))}
            </Card>
            
              
              <div className={classes.cardHead} >
               
            {webinarss.slice(0, visible).map((post, index) => (
          
            <Card className={classes.root} key={index}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {post.webinar_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {post.webinar_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:"flex",justifyContent:"space-between"}}>
        <Button className={classes.priceButton}>
         &#8377;{post.price}<span style={{fontSize:"14px",color:"grey",fontWeight:"400"}}> /Onwards </span>
        </Button>
                  <Button className={classes.onlineButton}>
          <span> <FiberManualRecordIcon  style={{color:"red",fontSize:"14px",marginBottom:"4px"}} /> </span> Online
        </Button>
      </CardActions>
             </Card>
           
              ))}
              </div>
          {visible < webinars.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      
    </AnimationRevealPage>
  
      </div>
      </>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});
