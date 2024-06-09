import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import QRCode from "qrcode.react";

const QRPayment:React.FC=()=>{
    const paymentURL = "https://www.paypal.com/eg/home"

    const [scanned , setScanned]= useState(false);

    const handleScan=()=>{
        setScanned(true);
    }

    return (
        <div className="flex items-center justify-center w-xl h-screen">
            <div className="h-96 w-96 border-b-8 m-5 p-5 rounded-lg border-white bg-white">
                <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
                    <h1 className="text-red-700 text-2xl font-mono font-bold">Scan To Pay</h1>
                    <p className="text-red-500 font-mono font-bold">Note this is a paypal payement , so you will be redirected to paybal after scanning for payment</p>
                    <QRCode value={paymentURL} size={220} className="m-5 p-10" onClick={handleScan}></QRCode>
                    {scanned && (
                        <Link to="/home/userInfo/payment/success">
                            <button className="bg-green-300 flex items-center justify-content text-red-700 w-60 h-20 rounded-lg m-5 p-5">
                                Proceed
                            </button>
                        </Link>
                     )}
                </Box>
            </div>

        </div>
    )
}


export default QRPayment;