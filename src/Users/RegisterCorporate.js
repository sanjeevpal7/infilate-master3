
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import { CssBaseline, Container, Grid, Box,TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop:"140px",
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: "0px 0px 0px 400px",
    
     
  },
}));

function getSteps() {
  return ['User Details', 'Organisation Details','Contact Details','Finished'];
}

function getStepContent(stepIndex) {
    
  switch (stepIndex) {
    case 0:
          return (
              <>
                  <Grid container>
                     
                      <Grid item md={6} style={{display:"flex",flexDirection:"column"}}>
                          <TextField
                             
            id="first-name"
            label="First Name"
            variant="filled"
            placeholder="Enter Your First Name"
              size="small"
                              margin="normal"
                            
                              name="firstName"
                             
          />
          <TextField
            id="last-name"
            label="Last Name"
           variant="filled"
            placeholder="Enter Your Last Name"
               width={300}
            margin="normal"
            name="lastName"
          />
          <TextField
            id="email"
            label="email"
           variant="filled"
            placeholder="Enter Your Email"
               width={300}
            margin="normal"
            name="nickName"
                  />
                   <TextField
            id="Password"
            label="Password"
           variant="filled"
            placeholder="Enter Your Password"
               width={300}
            margin="normal"
            name="Password"
                  />
                   <TextField
            id="Confirm Password"
            label="Confirm Password"
           variant="filled"
            placeholder="Enter Your confirm password"
               width={300}
            margin="normal"
            name="Password"
                          />
                          </Grid>
                   </Grid>     
              </>
      );
    case 1:
          return (
              <>
                     <Grid item md={6} style={{display:"flex",flexDirection:"column"}}>
                     <TextField
            id="Organisation Type"
            label="Organisation Type"
           variant="filled"
            placeholder="Organisation Type"
               width={300}
            margin="normal"
            name="Organisation Type
"
                  />
                     <TextField
            id="Confirm Password"
            label="Confirm Password"
           variant="filled"
            placeholder="Enter Your confirm password"
               width={300}
            margin="normal"
            name="Password"
                  />
                     <TextField
            id="Organisation Name"
            label="Organisation Name"
           variant="filled"
            placeholder="Organisation Name"
               width={300}
            margin="normal"
            name="Organisation Name"
                  />
                     <TextField
            id="Organisation Title"
            label="Organisation Title"
           variant="filled"
            placeholder="Organisation Title"
               width={300}
            margin="normal"
            name="Organisation Title"
                  />
                     <TextField
            id="Organisation Description"
            label="Organisation Description"
           variant="filled"
            placeholder="Organisation Description"
               width={300}
            margin="normal"
            name="Organisation Description"
                  />
                    <TextField
            id="Organisation Email"
            label="Organisation Email"
           variant="filled"
            placeholder="Organisation Email"
               width={300}
            margin="normal"
            name="Organisation Email"
                  />
                    <TextField
            id="Category"
            label="Category"
           variant="filled"
            placeholder="Category"
               width={300}
            margin="normal"
            name="Category"
                      />
                      </Grid>
                  </>
      );
    case 2:
          return (
              <>
                     <Grid item md={6} style={{display:"flex",flexDirection:"column"}}>
                   <TextField
            id="Address Line 1"
            label="Address Line 1"
           variant="filled"
            placeholder="Address Line 1"
               width={300}
            margin="normal"
            name="Address Line 1"
                  />
                    <TextField
            id="Address Line 2"
            label="Address Line 2"
           variant="filled"
            placeholder="Address Line 2"
               width={300}
            margin="normal"
            name="Address Line 2"
                  />
                    <TextField
            id="City"
            label="City"
           variant="filled"
            placeholder="City"
               width={300}
            margin="normal"
            name="City"
                  />
                    <TextField
            id="State"
            label="State"
           variant="filled"
            placeholder="State"
               width={300}
            margin="normal"
            name="State"
                  />
                    <TextField
            id="Country"
            label="Country"
           variant="filled"
            placeholder="Country"
               width={300}
            margin="normal"
            name="Country"
                  />
                    <TextField
            id="Pincode"
            label="Pincode"
           variant="filled"
            placeholder="Pincode"
               width={300}
            margin="normal"
            name="Pincode"
                  />
                    <TextField
            id="Latitudinal Position"
            label="Latitudinal Position"
           variant="filled"
            placeholder="Latitudinal Position"
               width={300}
            margin="normal"
            name="Latitudinal Position"
                  />
                    <TextField
            id="Longitudinal Position"
            label="Longitudinal Position"
           variant="filled"
            placeholder="Longitudinal Position"
               width={300}
            margin="normal"
            name="Longitudinal Position"
                  />
                    <TextField
            id="GST Number"
            label="GST Number"
           variant="filled"
            placeholder="GST Number"
               width={300}
            margin="normal"
            name="GST Number"
                  />
                   <TextField
            id="Contact Number"
            label="Contact Number"
           variant="filled"
            placeholder="Contact Number"
               width={300}
            margin="normal"
            name="Contact Number"
                      />
                      </Grid>
                  </>
          );
      case 3:
          return (
              <>
                  <div>
                      <h1>You have been successfully Registered </h1>
                      <h1>Thanku </h1>
                  </div>
                  </>
          );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
          </Stepper>
         
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
                      <div>
                           
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{display:"flex",justifyContent:"space-between",padding:"40px 100px"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}