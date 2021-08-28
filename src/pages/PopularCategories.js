import React, { useEffect, useState } from "react";
import axios from "axios"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Container from 'react-bootstrap/Container'
import { ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Features from "components/features/DashedBorderSixFeatures";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Typography } from "@material-ui/core";
import "./Webinar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    // borderRadius:'64px',
    border: '2px solid grey',
    borderRadius: '5px',
    marginBottom: '8px',
    width: "350px",
    transition: "all .5s ease",
    '&:hover': {
      border: "2px solid #2b4f60",
      width: "450px",
      backgroundColor: "white"
    },
  },
  ListItemText: {
    fontSize: "2rem"
  }
}));

const Text = tw.h6`font-semibold text-lg`;
const HeadingRow = tw.div`flex`;

const Heading = tw(SectionHeading)``;
const HeadingContainer = tw.div``;
const Posts = tw.div`mt-12 sm:-mr-8 flex flex-wrap`;
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
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;


export default ({


  headingText = "Domain Name",

}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://www.postman.com/collections/6eb5d7b53fd045b650ac");
      let run = result.data.item
      console.log(run)
      for (let i = 0; i < run.length; i++){
        console.log(run[i].item)
        run[i].item.filter((items) => {
          console.log(items.request)
        })
        
      }
    }
    fetchData();
  }, []);

 
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    // <AnimationRevealPage>
    <Container style={{ backgroundColor: "white" }} >
      <ContentWithPaddingXl style={{ paddingTop: '0rem', paddingBottom: "0rem" }}>
        <HeadingContainer style={{ paddingBottom: '2%', paddingBottom: "-100px" }}>
          <Heading className="popular-head" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: "1000px" }}>Popular Categories</Heading>
        </HeadingContainer>
        <div className={classes.root}>
          <Grid container spacing={2}>

            <Grid item md={4}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}

                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Marketing Automation</Typography>} />
                </ListItem>
                <ListItem className={classes.list}
                  button
                // selected={selectedIndex === 1}
                //  onClick={handleTab2}
                >
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Accounting</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab3}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>CRM</Typography>} />
                </ListItem>

                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Video Conferencing</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Project Management</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Video Conferencing</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>VPN Service</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Website Hosting</Typography>} />
                </ListItem>

              </List>

            </Grid>
            <Grid item md={8}>
              <Features />
            </Grid>
          </Grid>

        </div>
      </ContentWithPaddingXl>
    </Container>

    // </AnimationRevealPage> 

  );
};


