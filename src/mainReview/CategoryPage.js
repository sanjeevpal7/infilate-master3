import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './categoryPage.css'
import ScrollIntoView from 'react-scroll-into-view'
//icons
import Bluejeansmeetings from '../images/minicons/bluejeans-meetings.svg'
import Boxicon from '../images/minicons/box.svg'
import Dropboxicon from '../images/minicons/dropbox-professional.svg'
import Eyesonicon from '../images/minicons/eyeson.svg'
import Googledriveicon from '../images/minicons/google-drive.svg'
import Icontacticon from '../images/minicons/icontact.svg'
import Joinmeicon from '../images/minicons/join-me.svg'
import Richcallicon from '../images/minicons/richcall.svg'
import Roblyicon from '../images/minicons/robly.webp'
import Sendinblueicon from '../images/minicons/sendinblue.svg'
import Shopifyicon from '../images/minicons/shopify.svg'
import Surveymonkeyicon from '../images/minicons/surveymonkey.svg'
import Zohosurveyicon from '../images/minicons/zoho-survey.svg'
import Zoomicon from '../images/minicons/zoom.svg'

function CategoryPage(props) {


    const testdata = [
        {
            value: "Marketing Automation",
            data: ["HubSpot Marketing Hub", "Distribution", "Oracle Eloqua", "GetResponse", "Autopilot",
                "Customer.io", "Pardot", "ActiveCampaign", "XMPie", "SharpSpring", "Act-On", "dotdigital Engagement Cloud"],
            dataicon: [<Bluejeansmeetings />, <Boxicon />, <Dropboxicon />, <Eyesonicon />, <Googledriveicon />, <Icontacticon />,
            <Joinmeicon />, <Richcallicon />, <Roblyicon />, <Sendinblueicon />, <Shopifyicon />, <Surveymonkeyicon />]
        },
        {
            value: "Digital Analytics",
            data: ["statCounter", "Matamo(Formerly Piwik)", "FoxMetrics", "HockeyStack", "Quantcast Measure", "Google Analyticals 360",
                "Oribi", "Google Analytics", "Woopra", "Adobe Analytics", "AT Internet's Analytics Suite", "Visitor Analytics"]
        },
        {
            value: "CRM",
            data: [{ "Bluejeansmeetings": Bluejeansmeetings }, { "HubSpot Marketing Hub": Boxicon }, { "DropBox": Dropboxicon }, { "Pardot": Eyesonicon },
            { "Google Drive": Googledriveicon }, { "Oribi": Icontacticon }, { "Join Me": Joinmeicon }, { "Rich Call": Richcallicon },
            { "AT Internet's Analytics Suite": Roblyicon }, { "Send In Blue": Sendinblueicon }, { "Shopify": Shopifyicon }, { "Survey Monkey": Surveymonkeyicon }]
        },

    ]
    let chmm = []
    testdata[2].data.map((item, index) => {
        chmm.push(item)
    })
    console.log(chmm)
    // const aja=[]
    // chmm.forEach(element=>aja.push(Object.entries(element)))
    // console.log(aja)
    // chmm.forEach(element=>console.log(Object.values(element)))


    // const parentArray=[]

    // testdata.forEach(obj=>{
    //   const {value} = obj
    //   parentArray.push(value)
    // })

    // console.log(parentArray)
    //1st row
    const [checkedState, setCheckedState] = React.useState(new Array(testdata[0].data.length).fill(false));
    const [checkedState2, setCheckedState2] = React.useState(new Array(testdata[0].data.length).fill(false));
    //2nd row
    const [checkedState3, setCheckedState3] = React.useState(new Array(testdata[0].data.length).fill(false));
    const [checkedState4, setCheckedState4] = React.useState(new Array(testdata[0].data.length).fill(false));
    //3rdrow
    const [checkedState5, setCheckedState5] = React.useState(new Array(testdata[0].data.length).fill(false));
    const [checkedState6, setCheckedState6] = React.useState(new Array(testdata[0].data.length).fill(false));
    //4th report
    const [checkedState7, setCheckedState7] = React.useState(new Array(testdata[0].data.length).fill(false));
    const [checkedState8, setCheckedState8] = React.useState(new Array(testdata[0].data.length).fill(false));

    const secondCol = Math.floor(testdata[0].data.length / 2)

    const newArray = []
    const newArray2 = []

    const newArray3 = []
    const newArray4 = []

    const newArray5 = []
    const newArray6 = []

    const newArray7 = []
    const newArray8 = []
    //fill newArray[] {0,1,2,3,4,5}
    checkedState.map((item, index) => {

        if (item == true) {
            newArray.push(index)
        }
    })
    console.log(newArray)
    //fill newArray2[]
    checkedState2.map((item, index) => {

        if (item == true) {
            newArray2.push(index)
        }
    })

    checkedState3.map((item, index) => {

        if (item == true) {
            newArray3.push(index)
        }
    })
    checkedState4.map((item, index) => {

        if (item == true) {
            newArray4.push(index)
        }
    })

    checkedState5.map((item, index) => {

        if (item == true) {
            newArray5.push(index)
        }
    })
    checkedState6.map((item, index) => {

        if (item == true) {
            newArray6.push(index)
        }
    })


    checkedState7.map((item, index) => {

        if (item == true) {
            newArray7.push(index)
        }
    })
    checkedState8.map((item, index) => {

        if (item == true) {
            newArray8.push(index)
        }
    })



    // console.log(newArray2)

    let Col1data = []
    newArray.map((item, index) => {
        Col1data.push(chmm[item])
        // console.log(we)
    })

    let getSecondColdata = []
    //even columns
    for (let i = secondCol; i < secondCol * 2; i++) {
        getSecondColdata.push(chmm[i])
    }

    // console.log(getSecondColdata)

    let Col2data = []
    newArray2.map((item, index) => {
        Col2data.push(getSecondColdata[item])
    })



    let Col1data2ndrow = []
    newArray3.map((item, index) => {
        Col1data2ndrow.push(chmm[item])
    })

    let getSecondRowCol2data = []
    //even columns
    for (let i = secondCol; i < secondCol * 2; i++) {
        getSecondRowCol2data.push(chmm[i])
    }

    let Col2data2ndrow = []
    newArray4.map((item, index) => {
        Col2data2ndrow.push(getSecondRowCol2data[item])
    })








    let Col1data3rdrow = []
    newArray5.map((item, index) => {
        Col1data3rdrow.push(chmm[item])
    })

    let getThirdRowCol2data = []
    //even columns
    for (let i = secondCol; i < secondCol * 2; i++) {
        getThirdRowCol2data.push(chmm[i])
    }

    let Col2data3rdrow = []
    newArray6.map((item, index) => {
        Col2data3rdrow.push(getSecondRowCol2data[item])
    })







    let Col1data4throw = []
    newArray7.map((item, index) => {
        Col1data4throw.push(chmm[item])
    })

    let getFourthRowCol2data = []
    //even columns
    for (let i = secondCol; i < secondCol * 2; i++) {
        getFourthRowCol2data.push(chmm[i])
    }

    let Col2data4throw = []
    newArray8.map((item, index) => {
        Col2data4throw.push(getFourthRowCol2data[item])
    })

    // console.log(Col2data)



    // console.log(checkedState2)
    // const array=checkedState.filter(element=>element==true)
    // console.log(array)

    const handleChange = (position, value) => {

        const updatedCheckedState = checkedState.map((item, index) => {
            if (index === position) {

                return !item

            }
            else {
                return item
            }
        }
            // index===position ? !item : item             
        )
        setCheckedState(updatedCheckedState);
    };


    // console.log(checkedState)

    const handleChange2 = (position) => {
        const updatedCheckedState2 = checkedState2.map((item, index) =>
            index === position ? !item : item)
        setCheckedState2(updatedCheckedState2);
    };

    const handleChange3 = (position) => {
        const updatedCheckedState3 = checkedState3.map((item, index) =>
            index === position ? !item : item)
        setCheckedState3(updatedCheckedState3);
    };

    const handleChange4 = (position) => {
        const updatedCheckedState4 = checkedState4.map((item, index) =>
            index === position ? !item : item)
        setCheckedState4(updatedCheckedState4);
    };

    const handleChange5 = (position) => {
        const updatedCheckedState5 = checkedState5.map((item, index) =>
            index === position ? !item : item)
        setCheckedState5(updatedCheckedState5);
    };

    const handleChange6 = (position) => {
        const updatedCheckedState6 = checkedState6.map((item, index) =>
            index === position ? !item : item)
        setCheckedState6(updatedCheckedState6);
    };


    const handleChange7 = (position) => {
        const updatedCheckedState7 = checkedState7.map((item, index) =>
            index === position ? !item : item)
        setCheckedState7(updatedCheckedState7);
    };

    const handleChange8 = (position) => {
        const updatedCheckedState8 = checkedState8.map((item, index) =>
            index === position ? !item : item)
        setCheckedState8(updatedCheckedState8);
    };






    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(100),
            },
        },
    }));

    const classes = useStyles();

    function MoveTo() {

    }


    return (
        <>
            <Grid  container md={12}>
            <div className="chakde">
                <p style={{ fontSize: "16px", fontWeight: "bold", cursor: "default" }}>Categories</p> <br />
                <ScrollIntoView selector="#dhut1" smooth="true">
                    <li>Marketing Automation</li><br />
                </ScrollIntoView>
                <ScrollIntoView selector="#dhut2" smooth="true">
                    <li>Digital Analytics</li><br /></ScrollIntoView>
                <ScrollIntoView selector="#dhut3" smooth="true">
                    <li>CRM</li><br /></ScrollIntoView>
                <ScrollIntoView selector="#dhut4" smooth="true">
                    <li>Cloud Content Collaboration</li><br /></ScrollIntoView>
                <ScrollIntoView selector="#dhut5" smooth="true">
                    <li>Video Conferencing</li><br /></ScrollIntoView>

            </div>


            <div className={classes.root}>

                <Paper elevation={3} style={{padding:"10px",
                    height: 'max-content'
                }} >
                    <p style={{ color: '#808080', fontSize: "2rem", paddingLeft: "15px" }}>Select the solutions you use, and then click continue to start a review:</p><br />

                    <strong id="dhut1" style={{ paddingLeft: '15px' }}>Marketing Automation</strong><br />




                    <Grid container spacing={1} style={{ flexWrap: 'nowrap', justifyContent: "space-between", paddingLeft: "15px" }}>
                        {/* <Grid item xs={12}> */}

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(0, secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">
                                                <img src={Object.values(value)} alt="" />

                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange(index, value)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })}
                        </Grid>

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">

                                                <img src={Object.values(value)} alt="" />
                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState2[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange2(index)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>


                    {/* 2nd row */}
                    <br /><strong id="dhut2" style={{ paddingLeft: '15px' }}>Digital Analytics</strong><br />
                    <Grid container spacing={1} style={{ flexWrap: 'nowrap', justifyContent: "space-between", paddingLeft: "15px" }}>
                        {/* <Grid item xs={12}> */}

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(0, secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">
                                                <img src={Object.values(value)} alt="" />

                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState3[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange3(index, value)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })}
                        </Grid>

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">

                                                <img src={Object.values(value)} alt="" />
                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState4[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange4(index)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                    {/* 3rd row */}

                    <br /><strong id="dhut3" style={{ paddingLeft: '15px' }}>CRM</strong><br />
                    <Grid container spacing={1} style={{ flexWrap: 'nowrap', justifyContent: "space-between", paddingLeft: "15px" }}>
                        {/* <Grid item xs={12}> */}

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(0, secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">
                                                <img src={Object.values(value)} alt="" />

                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState5[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange5(index, value)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })}
                        </Grid>

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">

                                                <img src={Object.values(value)} alt="" />
                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState6[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange6(index)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                    {/* 4th row */}

                    <br /><strong id="dhut4" style={{ paddingLeft: '15px' }}>Cloud Content Collaboration</strong><br />
                    <Grid container spacing={1} style={{ flexWrap: 'nowrap', justifyContent: "space-between", paddingLeft: "15px" }}>
                        {/* <Grid item xs={12}> */}

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(0, secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">
                                                <img src={Object.values(value)} alt="" />

                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState7[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange7(index, value)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })}
                        </Grid>

                        <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <br />
                            {

                                chmm.slice(secondCol).map((value, index) => {

                                    return (
                                        <Grid key={value} item xs={4}>
                                            <div className="myfirsttest">

                                                <img src={Object.values(value)} alt="" />
                                                <div className="b">{Object.keys(value)}</div>
                                                <Checkbox
                                                    checked={checkedState8[index]}
                                                    id={`custom-checkbox-${index}`}
                                                    onChange={() => handleChange8(index)}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}

                                                />
                                            </div></Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                </Paper>
            </div>







            <div className="custom-checkbox-label">
                <p style={{ fontWeight: 'bold', fontSize: "20px" }}>You use:</p><br />

                <Grid container item spacing={1} style={{ flexWrap: "nowrap", flexDirection: "column" }}>
                    {
                        Col1data.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })

                    }
                    {
                        Col2data.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })

                    }

                    {
                        Col1data2ndrow.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })
                    }

                    {
                        Col2data2ndrow.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })
                    }

{
                        Col1data3rdrow.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })
                    }

{
                        Col2data3rdrow.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })
                    }

{
                        
Col1data4throw.map((item, index) => {
                            return (
                                <Grid key={1} item xs={4}>

                                    <div className="myfirsttestticked">

                                        <img src={Object.values(item)} alt="" />
                                        <div className="c">{Object.keys(item)}</div>
                                        <Checkbox
                                            checked={true}
                                            // id={`custom-checkbox-${index}`}
                                            // onChange={()=>handleChange(index)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}

                                        />
                                    </div></Grid>
                            )
                        })
                    }

{
                        
                        Col2data4throw.map((item, index) => {
                                                    return (
                                                        <Grid key={1} item xs={4}>
                        
                                                            <div className="myfirsttestticked">
                        
                                                                <img src={Object.values(item)} alt="" />
                                                                <div className="c">{Object.keys(item)}</div>
                                                                <Checkbox
                                                                    checked={true}
                                                                    // id={`custom-checkbox-${index}`}
                                                                    // onChange={()=>handleChange(index)}
                                                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                        
                                                                />
                                                            </div></Grid>
                                                    )
                                                })
                                            }

                </Grid>
                <br />

                <p style={{ color: "#808080" }}>You have selected {Col1data.length + Col2data.length} products
                    {Col1data.length + Col2data.length || Col1data2ndrow.length + Col2data2ndrow.length || Col1data3rdrow.length + Col2data3rdrow.length || 
Col1data4throw.length + Col2data4throw.length !== 0 ? <Button onClick={props.next} variant="contained" style={{ marginLeft: "182px", backgroundColor: "#2196f3", color: "white" }}>Continue</Button> :
                        <Button variant="contained" disabled style={{ marginLeft: "182px"}} >Continue</Button>
                    }
                </p>


            </div>
</Grid>
      </>
    )
}

export default CategoryPage
