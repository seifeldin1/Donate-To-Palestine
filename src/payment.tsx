import React  , {FC} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TextField  , Button, Typography , InputLabel , FilledInput} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { userData } from "../database/server";



const PaymentPage:React.FC=()=>{

    const [payment,setPayment]=useState(false);
    const [amount , setAmount ]= useState<number|string>(``);
    const [error , seterror] = useState('');
    const [enteredAmount , setEnteredAmount] = useState(false);

    const handleChangeInAmount= (e:React.ChangeEvent<HTMLInputElement>)=>{
      
        e.preventDefault();
        const cash = Number(e.target.value);
        setAmount(cash>0? cash:"");
        setEnteredAmount(cash > 0);
        if (cash <= 0) {
            seterror("Please enter a valid amount");
        } else {
            seterror("");
        }
    }
    
    const handleAmount= async ( )=>{ 
        
      
        if(typeof amount === 'number' && amount>0){
            setPayment(true);
            
        
            try{
                console.log("Amount to be donated:", amount);
                const response= await axios.post('http://localhost:3000/api/users' , {amountPaid: amount});
                console.log("user entered amount of:" , response.data.amountPaid);
                
            }
            catch(error){
                setPayment(false);
                console.log("error creating user")
            }
        }
        else{
            setPayment(false);
            seterror('Please enter a valid amount');
        }
    }

    return(
        <div className="flex items-center justify-center w-full h-screen  ">
            <div className="h-96 m-5 p-5 rounded-lg bg-white text-red-700 font-mono">
                <Typography
                    variant ="h3"
                    gutterBottom 
                    className="text-center mb-4"
                >
                Payment Form
                </Typography>
                <form >
                    
                    <div className=" rounded-lg flex items-center justify-center m-5 p-5">
                        <TextField
                        label="Amount Donated"
                        id="filled-basic" 
                        type='number' 
                        variant="outlined"
                        className="border-0 active:border-0 text-red-700"
                        value={amount}
                        onChange={handleChangeInAmount}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">LE</InputAdornment>,
                          }}
                        placeholder="Enter amount of money"
                        ></TextField>
                      
                        
                    </div>
                    {error&& <p className="text-red-700">{error}</p>}

                     <div className="flex items-center justify-between mt-10">
                        <Button 
                        variant="contained"
                        color="success"
                        className="flex items-center justify-content w-70 h-20 m-5 p-5"
                        disabled={amount === "" || !enteredAmount}
                        onClick={handleAmount}>
                          <Link to={amount !== " " && enteredAmount ? "/home/userInfo/payment/paymentOptions" : "#"} > Confirm Payment Of LE {amount} </Link>  
                        </Button>
                        <span className="w-10" ></span>
                        <Button 
                        variant="contained"
                        color="error"
                        className=" flex items-center justify-content text-red-700 w-40 h-20 m-5 p-5" 
                        onClick={(e)=>setAmount('')}>
                            <Link to="#"> Cancel</Link>
                        </Button>
                        <span className="w-10"></span> 
                        <Button 
                        variant="contained"
                        color="primary"
                        
                        className="flex items-center justify-content text-red-700 w-70 h-20 m-5 p-5">
                            <Link to="/home"> Return back to home page</Link>

                        </Button>
                    </div>
                </form>
               
            </div>
        </div>
    )
}


export default PaymentPage;