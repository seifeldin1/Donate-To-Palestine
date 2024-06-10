import React, { FC, useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const VisaPayment: FC = () => {
  const [visaNumber, setVisaNumber] = useState('');
  const [ccv, setCCV] = useState('');
  const [visaError, setVisaError] = useState('');
  const [ccvError, setCCVError] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "visaNumber") {
      if (!/^\d*$/.test(value)) {
        setVisaError("Visa must be all numeric");
      } else {
        setVisaNumber(value);
        setVisaError(value.length === 16 ? "" : "Visa is not valid");
      }
    } else if (name === "ccv") {
      if (!/^\d*$/.test(value)) {
        setCCVError("CCV must be all numeric");
      } else {
        setCCV(value);
        setCCVError(value.length === 3 ? "" : "CCV is not valid");
      }
    }
  };

  const handleProceeding = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (visaNumber.length !== 16 || ccv.length !== 3 || visaError || ccvError) {
      setError('Please re-check your entries!');
      e.preventDefault();
    } else {
      setError('');
    }
  };

  return (
    <div className="flex items-center justify-center w-xl h-screen">
      <div className="h-80 border-b-8 m-5 p-5 rounded-lg border-white bg-white">
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "600px", margin: "auto" }}
        >
          <Typography variant="h4" className="text-red-700 font-mono font-bold">Visa Payment</Typography>
          <Typography variant="body1" className="text-red-500 font-mono font-bold">Please note that for your safety, we don't save your visa card.</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, marginBottom: 2  , marginTop:4}}>
            <TextField
              name="visaNumber"
              type="text"
              value={visaNumber}
              onChange={handleChange}
              label="Visa Number"
              variant="outlined"
              fullWidth
              error={!!visaError}
              helperText={visaError}
            />
            <TextField
              name="ccv"
              type="text"
              value={ccv}
              onChange={handleChange}
              label="CCV"
              variant="outlined"
              fullWidth
              error={!!ccvError}
              helperText={ccvError}
            />
          </Box>
          <Link to="/home/userInfo/payment/success" onClick={handleProceeding}>
            <Button
              variant="contained"
              color="success"
              className="flex items-center justify-content text-red-700 w-60 h-20 m-5 p-5"
              disabled={ccvError !== "" || visaError !== "" || visaNumber.length !== 16 || ccv.length !== 3}
            >
              Proceed
            </Button>
          </Link>
          {error && <p className="text-red-700">{error}</p>}
        </Box>
      </div>
    </div>
  )
};

export default VisaPayment;
