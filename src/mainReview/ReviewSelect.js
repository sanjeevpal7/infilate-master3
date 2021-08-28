import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CategoryPage from './CategoryPage';
import {Link} from "react-router-dom";


function ReviewSelect() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          paddingTop: "200px",
          paddingRight: "300px",
          paddingLeft:"300px",
          paddingBottom: "100px",
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    
      const classes = useStyles();
      
    
      function FormRow1() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review">
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Advertising</Button>
            </Link>   
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Ecommerce/Retail</Button>
            </Link>
            </Grid>
            <Grid item xs={4}><Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Finance & Accounting</Button>
            </Link>
            </Grid>
          </React.Fragment>
        );
      }

      function FormRow2() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>HR</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Sales</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Information Technology</Button>
            </Link>
            </Grid>
          </React.Fragment>
        );
      }

      function FormRow3() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Marketing</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Business Operations & Analytics</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Media and Communications</Button>
            </Link>
            </Grid>
          </React.Fragment>
        );
      }

      function FormRow4() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }}  to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Customer Support</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }}  to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Software Development</Button>
            </Link>
            </Grid>
            <Grid item xs={4}>
            <Link style={{ textDecoration: "none" }} to="/review" >
            <Button variant="outlined" color="primary" style={{width:"100%",fontWeight: "bold"}}>Program and Project Management</Button>
            </Link>
            </Grid>
          </React.Fragment>
        );
      }



    return (
      <div>

      
      
        <div className={classes.root}>
        <Grid container spacing={1}>
            <div>
            <p style={{fontWeight: 'bold',fontSize:'30px'}}>Lets find the software and services you use at work</p>
            <br/>
            <p style={{color: '#808080'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a </p>
            <br/><br/>   
            <p style={{fontWeight: 'bold',fontSize:'25px'}}>Pick a role and we'll show you related products and services to review.</p>
            <br/>  
            </div>

        <Grid container item xs={12} spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow3 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow4 />
        </Grid>
      </Grid>

        </div>


      </div>
        
    )
}

export default ReviewSelect
