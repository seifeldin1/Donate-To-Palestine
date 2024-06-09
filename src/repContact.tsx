import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material"; 

const RepContact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen animate-fade-in">
      <Typography variant="h4" gutterBottom className="animate-pulse">
        One of our representatives will be contacting you soon...
      </Typography>
      <Typography variant="body1" gutterBottom >
        Thank you for your donation. You will receive an email with the time and location for a meeting with one of our representatives
      </Typography>
      <Link to="/home" className="mt-4">
        <Button variant="contained" color="primary" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            
          Return Back To Home
        </Button>
      </Link>
    </div>
  )
};

export default RepContact;
