import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import QRCode from "qrcode.react";

const QRPayment: FC = () => {
    const paymentURL = "https://www.paypal.com/eg/home";
    const [scanned, setScanned] = useState(false);
    const navigate = useNavigate();

    const handleScan = () => {
        setScanned(true);
        navigate("/home/userInfo/payment/success");
    };

   
   /* React.useEffect(() => {
        const timer = setTimeout(() => {
            handleScan();
        }, 5000); // Simulate 5 seconds delay

        return () => clearTimeout(timer);
    }, []);*/

    return (
        <div className="flex items-center justify-center w-xl h-screen">
            <div className="h-96 w-96 border-b-8 m-5 p-5 rounded-lg border-white bg-white">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="text-red-700 text-2xl font-mono font-bold">Scan To Pay</h1>
                    <p className="text-red-500 font-mono font-bold">Note this is a PayPal payment, so you will be redirected to PayPal after scanning for payment</p>
                    <QRCode value={paymentURL} size={220} className="m-5 p-10" onClick={handleScan} />
                </Box>
            </div>
        </div>
    );
};

export default QRPayment;
