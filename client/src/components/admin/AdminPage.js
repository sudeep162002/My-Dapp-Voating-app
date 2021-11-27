import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import  { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AdminPage(props) {

    
    const [candidate1, setCandidate1]=React.useState("");
    const [candidate2, setCandidate2]=React.useState("");
    const [candidate1info, setCandidate1info]=React.useState("");
    const [candidate2info, setCandidate2info]=React.useState("");

    const oncandidate1TextChange = (e) => setCandidate1(e.target.value);
    const oncandidate2TextChange = (e) => setCandidate2(e.target.value);
    const oncandidate1infoTextChange = (e) => setCandidate1info(e.target.value);
    const oncandidate2infoTextChange = (e) => setCandidate2info(e.target.value);

  

    const handelSubmit=()=>{
      console.log(candidate1)
      console.log(candidate1info)
      console.log(candidate2)
      console.log(candidate2info)
      props.setCandidate1BF(candidate1);
      props.setCandidate2BF(candidate2);
      props.setcandidate1infoBF(candidate1info);
      props.setcandidate2infoBF(candidate2info);

    }
    

    const viewCurrentResult= async()=>{
      const fetch_vote1=await props.VoatMashine.methods.get_applicant_1_data().call()
      const fetch_vote2=await props.VoatMashine.methods.get_applicant_2_data().call()
      window.alert(
        "current vote of candidate 1 is : "+ fetch_vote1 + "\n" +
        "current vote of candidate 2 is : "+ fetch_vote2
         )
     
    };


  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });





    const [open, setOpen] = React.useState(false);

    const suscessClick = () => {
      setOpen(true);
      handelSubmit();
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    



  return (
    <>
  
    <div className="adminPage">
      <div className="snackbar">

      <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Election created sucessfuly😁
        </Alert>
      </Snackbar>
     
      
    </Stack>

      </div>

      <div className="adminHeading">
        <h1>CHOOSE YOUR PARTIES IN ELECTION</h1>
      </div>

      

      <div className="partyText">
        <div className="partyTextField">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Candidate 1 name"
              variant="outlined"
              value={candidate1}
              onChange={oncandidate1TextChange}
              
              
            />
          </Box>
        </div>

        <div className="partyTextField">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Candidate 2 name"
              variant="outlined"
              value={candidate2}
              onChange={oncandidate2TextChange}
            />
          </Box>
        </div>
      </div>
      <div className="partyText">
        <div className="partyTextField">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              value={candidate1info}
              onChange={oncandidate1infoTextChange}
              label="Candidate 1 info"
              multiline
              variant="outlined"
            />
          </Box>
        </div>

        <div className="partyTextField">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              value={candidate2info}
              onChange={oncandidate2infoTextChange}
              label="Candidate 2 info"
              multiline
              variant="outlined"
            />
          </Box>
        </div>
      </div>

      <div className="creatButton">
      <Button  elevation={8}   onClick={suscessClick}  variant="contained" disableElevation>
      Creat Election
    </Button>

 <div className="resultButton">
    <Button onClick={viewCurrentResult} elevation={8} variant="contained" disableElevation>
      VIEW RESULT
    </Button>
    </div>

    
     

      </div>


    </div>
    </>
  );
}

export default AdminPage;
