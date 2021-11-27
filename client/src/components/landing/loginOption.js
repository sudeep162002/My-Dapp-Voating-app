import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function loginOption(props) {
  return (
    <div className="loginOption">
      <Accordion elevation={8}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>For admin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="adminLogin">
              <div className="credintials">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="email"
                    variant="standard"
                  />
                  <TextField
                    
                    id="standard-basic"
                    label="password"
                    variant="standard"
                    type="password"
                  />
                </Box>
              </div>
              <div className="submitButton">
              <Link to="/admin">
                <Button elevation={8} variant="contained" disableElevation>
                  submit
                </Button>
                </Link>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={8}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>For voters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="voterLogin">
              <div className="credintials">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    type="password"
                  />
                </Box>
              </div>
              <div className="submitButton">
              <Link to="/cards">
                <Button elevation={8} variant="contained" disableElevation>
                  submit
                </Button>
                </Link>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default loginOption;
