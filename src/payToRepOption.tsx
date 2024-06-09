import React , {FC , useState} from "react";
import { Link } from "react-router-dom";
import { TextField , Box, Select, SelectChangeEvent, MenuItem } from "@mui/material";

const RepPayment:React.FC=()=>{
    const [city , setCity] =useState("");
    const [error , setError] =useState("");

    const egyptCities = [
        "Abu Simbel", "Adlyia", "Agami", "Ain Sukhna", "Alexandria", "Al Fayyum", "Al Minya", "Al Qusayr", "Al Wadi Al Jadid", "Aswan", "Assiut", "Banha", "Benha", "Bilbeis", "Cairo", "Damietta", "Desouk", "Dumyat", "Edfu", "El Arish", "El Mahalla El Kubra", "Faiyum", "Giza", "Hala'ib", "Hurghada", "Ismailia", "Kafr El Sheikh", "Luxor", "Mallawi", "Marsa Alam", "Matrouh", "Minya", "Monufia", "New Borg El Arab", "Port Said", "Qena", "Safaga", "Saint Catherine", "Sharm el-Sheikh", "Sohag", "Tanta", "Zagazig"
    ];

    
    const handleChange=(e:SelectChangeEvent<string>)=>{
        setCity(e.target.value)
        if(e.target.value!=="") setError("");
        
    }

    const handleProceeding=(e:React.MouseEvent<HTMLButtonElement , MouseEvent>)=>{
        if(city==="") setError("You must choose a city! If you are not living in Egypt then press the go back button.");
        else setError("");
    }
        

    return(
        <div className="flex items-center justify-center w-xl h-screen">
            <div className="h-96 w-96 border-b-8 m-5 p-5 rounded-lg border-white bg-white">
                <Box sx={{minWidth:150, minHeight:200}}>
                    <Select
                    value={city}
                    onChange={handleChange}
                    displayEmpty
                    >
                        <MenuItem disabled value="">
                            Select A City
                        </MenuItem>
                        {
                            egyptCities.map((nameOfCity)=>(
                                <MenuItem key={nameOfCity} value={nameOfCity}>
                                    {nameOfCity}
                                </MenuItem>
                            )

                            )
                        }

                    </Select>
                    <Link to={city !== "" ? "/home/userInfo/payment/RepContacting" : "#"}>
                        <button   className="bg-green-300 flex items-center justify-content text-red-700 w-60 h-20 rounded-lg m-5 p-5"
                                  onClick={handleProceeding}
                                  disabled={error!==""}>
                                Proceed
                        </button>
                    </Link>
                    <Link to="/home/userInfo/payment/paymentOptions">
                        <button className="bg-blue-300 flex items-center justify-content text-white w-60 h-20 rounded-lg m-5 p-5">
                            Go Back
                        </button>

                    </Link>
                    {error && <p className="text-red-700">{error}</p>}
                </Box>
            </div>
        </div>
    )
}


export default RepPayment;