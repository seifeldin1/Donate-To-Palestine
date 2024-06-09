import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen animate-fade-in">
      <Typography variant="h4" gutterBottom className="animate-pulse text-red-700">
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom className="text-red-500" >
        The page you are looking for does not exist.
      </Typography>
      <Link to="/home" className="mt-4">
        <Button
          variant="contained"
          color="primary"
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Return Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
