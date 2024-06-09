import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";

const VodafoneCashNumber: React.FC = () => {
    const [error, setError] = useState("");
    const [vodafoneNumber, setVodafoneNumber] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setVodafoneNumber(value);
        if (!/^010\d{8}$/.test(value)) {
            setError("Invalid Vodafone Cash Number");
        } else {
            setError("");
        }
    };

    const handleProceeding = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (vodafoneNumber.length !== 11 || error) {
            setError("Invalid Vodafone Cash Number");
            e.preventDefault();
        }
    };

    return (
        <div className="flex items-center justify-center w-xl h-screen">
            <div className="h-80 border-b-8 m-5 p-5 rounded-lg border-white bg-white">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "600px",
                        margin: "auto"
                    }}
                >
                    <h1 className="text-red-700 font-mono font-bold">Vodafone Cash Payment</h1>
                    <br></br>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, marginBottom: 2 }}>
                        <TextField
                            name="vodafoneNumber"
                            type="text"
                            value={vodafoneNumber}
                            onChange={handleChange}
                            label="Vodafone Number"
                            variant="outlined"
                            fullWidth
                            error={!!error}
                            helperText={error}
                        />
                    </Box>
                    <Link to="/home/userInfo/payment/paymentOptions/vodafoneCash/verify" onClick={handleProceeding}>
                        <button
                            className="bg-green-300 flex items-center justify-content text-red-700 w-60 h-20 rounded-lg m-5 p-5"
                            disabled={!!error || vodafoneNumber.length !== 11}
                        >
                            Proceed To Verification
                        </button>
                    </Link>
                    {error && <p className="text-red-700">{error}</p>}
                </Box>
            </div>
        </div>
    )
};

export default VodafoneCashNumber;
