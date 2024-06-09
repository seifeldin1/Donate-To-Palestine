import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material"; 

const PaymentSuccessful = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen animate-fade-in">
      <Typography variant="h4" gutterBottom className="animate-bounce">
        Payment Successful!
      </Typography>
      <Typography variant="body1" gutterBottom className="animate-pulse">
        Thank you for your donation. Your payment was successful.
      </Typography>
      <Link to="/home" className="mt-4">
        <Button variant="contained" color="primary" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            
          Return Back To Home
        </Button>
      </Link>
    </div>
  )
};

export default PaymentSuccessful;
