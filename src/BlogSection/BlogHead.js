import React,{useContext} from 'react';
import "./Blog.css"
import blog from "../images/blog.jpeg"
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom"
import { DataContext } from './DataProvider'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height:"auto",
      paddingTop:"90px",

      // maxWidth: 360,
     
    },
    heading:{
        fontSize:"2rem",
        fontWeight:"bold"
    },
    heading3:{
fontSize:"1rem",
lineHeight:"40px"
    },
    card:{
      
        maxWidth:"200px",
        height:"500px",
        backgroundColor:"white",
        marginBottom:"40px",
        transition:"all .5s ease",
       

        '& h1':{
            padding:"0rem 1rem",
            fontSize:"1.5rem",
            fontWeight:"bold"
        },
        '& h3':{
            padding:"0rem 1rem",
            fontSize:"1rem",
            marginBottom:"10px"
          
        },
        '& button':{
            marginLeft:"50px",
            padding:"0rem",
           width:"140px",
           height:"40px",
           borderRadius:"25px",
           backgroundColor:"orange",
           fontSize:"16px",
           color:"white",
           
        },
        '&:hover':{
            backgroundColor:"grey",
        },
       
        
    },
    title:{
        textAlign:"center",
        fontsize:"14px",
        fontWeight:"bold",
        color:"#03256C"
    },
    post:{
       
    },
   

    
  
  }));



function BlogHead() {

     const {id} = useParams();
    const [products,setProducts] = useContext(DataContext)


   
{/*---const detail=BlogData.filter((newdetail,index) => newdetail.id === id )
console.log(detail)--*/}
    const classes = useStyles();
    return (
        <>
            {
                products.filter(items =>items.id == id).map((items,index) =>
                ((
 <div  className="main-blog">
           
                    <div className="left-blog">
                        <h1>
                            Productivity
                        </h1>
                            <h2>{items.title1}</h2>
                        <p> {items.title2}</p>
                        <div className="blog-author">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={items.authorimg} alt="image" />
                                <h1>{items.authorh}</h1>
                        </div>
            
                    </div>
                    <div className="right-blog">
                        <img src={`http://netdemo.site/infilate/public/images/${items.media } `} alt="image" />
                    </div>
           
                </div>
                )))
               
            }

        <Grid container style={{padding:"0rem 3rem"}}>
            <Grid style={{display:"flex",flexDirection:"column"}} md={2}>
                <h1 style={{fontsize:"32px",fontWeight:"600",marginBottom:"5px"}}>IN THIS POST</h1>
                <a style={{fontsize:"16px",fontWeight:"600",marginBottom:"5px"}} href="#">Signs of presenteeism</a>
                <a style={{fontsize:"16px",fontWeight:"600",marginBottom:"5px"}} href="#">Presenteeism and mental health</a>
                <a style={{fontsize:"16px",fontWeight:"600",marginBottom:"5px"}} href="#">Consequences of presenteeism</a>
                <a style={{fontsize:"16px",fontWeight:"600",marginBottom:"5px"}} href="#">How to reduce presenteeism</a>
                <a style={{fontsize:"16px",fontWeight:"600",marginBottom:"5px"}} href="#"> How to measure presenteeism</a>
            </Grid>
            <Grid  style={{padding:"0rem 3rem"}} md={7}>
                <h3 className={classes.heading3}>A migraine that comes out of nowhere. A bout with anxiety that you didn’t see coming. A phone call from a physician with less-than-ideal news. 

Unfortunately, these are all parts of life that are sometimes unavoidable and they tend to result in an unproductive workday. These things can really throw a wrench into our to-do lists, regardless of how minor or trivial they seem. Worse, they can result in presenteeism in the workplace, causing productivity to dip.</h3>
<h1 className={classes.heading}>Sign of Presentation </h1>
<h3 className={classes.heading3}>As an HR professional, department manager, or team leader, there are specific signs of presenteeism that you can watch out for from your team or fellow employees. If you notice any of these, your co-worker may be suffering from presenteeism. </h3>
<h2>Visible illness</h2>
<h3  className={classes.heading3}>The first sign of presenteeism in the workplace from a team member is when you consistently notice they’re sick, ill, or in poor health, but are still at work. When a coworker constantly comes into work feeling unwell, not only will it likely take them longer to recover from their illness, but they could spread it to other members of the team, too.

Keep an eye out for a high number of employees coming to work looking tired or having signs of an illness, like a cough, runny nose, or mentioning having a headache, as these can be signs of presenteeism. </h3>
            </Grid>
            <Grid md={3}>
                <card className={classes.card}>
                    <img src="https://cdn.pixabay.com/photo/2018/03/26/06/10/technology-3261750__340.jpg" alt="image" />
                    <h1>Out of office</h1>
                    <h3>Discover the best absence management software to help your company track and manage absences, sick leave, and time off. </h3>
                    <button>Software</button>
                </card>
            </Grid>
        </Grid>
<div className={classes.recommendmain}>
<h1 style={{fontSize:"2rem",fontWeight:"bold",textAlign:"center",margin:"20px 0px"}}>Recommended Acticles</h1>
        <div className="blog-card-head">
              {
products.map((item) =>((
    <div className="blog-card">
        <img src={`http://netdemo.site/infilate/public/images/${item.media } `} className="blog-card-image" alt="image"/>
        <div className="blog-data">
           
            <h1>{item.title}</h1>
            <h2>{item.title1}</h2>
            <p>{item.title2}</p>
            <div className="blog-author">
               <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={item.img} alt="image"/>
                <h1>by Mara Calvello</h1>
            </div>

        </div>
    </div>
)))
                }
            </div>

            </div>
                
        </>  
    )
}

export default BlogHead
