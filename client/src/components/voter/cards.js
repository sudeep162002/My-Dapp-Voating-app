import  React ,{useEffect, useState } from 'react';
import {  CardTitle, CardText, } from 'react-toolbox/lib/card';
import { IconButton} from 'react-toolbox/lib/button';
import './cards.css'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';























export default function Cards(props) {

  const [open, setOpen] = React.useState(false);

   


       

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  
  useEffect(()=>{
  
    //console.log(props.VoatMashine)
  })


  const voteTO1 = async()=>{
  
    await props.VoatMashine.methods.vote_applicant_1()
    .send({from : props.account})
    .on('transactionhash',()=>{
      console.log("sucessfully voted to applicant 1")
    })
};


const voteTO2 = async()=>{
  
  await props.VoatMashine.methods.vote_applicant_2()
 .send({from : props.account})
 .on('transactionhash',()=>{
   console.log("sucessfully voted to applicant 2")
 })
};

  return (
    <div className="cards" >

      <div className="card1">
      <Card sx={{ maxWidth: 345 }} elevation={8}>
      <CardMedia
        component="img"
        height="258"
        image="https://placeimg.com/800/450/nature"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ram bhaiya
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button  size="small" onClick={handleClickOpen} >Learn More</Button>
      </CardActions>
      <Button  elevation={8}   onClick={voteTO1}  variant="contained" disableElevation>
      VOTE-1
    </Button>
    </Card>



    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}  autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>




  </div>



<div className="card2">
<Card sx={{ maxWidth: 345 }} elevation={8}>
      <CardMedia
        component="img"
        height="258"
        image="https://placeimg.com/800/450/nature"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          guddu bhaiya
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button  size="small" onClick={handleClickOpen} >Learn More</Button>
      </CardActions>
      <Button  elevation={8} onClick={voteTO2}  variant="contained" disableElevation>
      VOTE-2
    </Button>
    </Card>



    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button  onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    
  </div>


  
 
  </div>
  );
}