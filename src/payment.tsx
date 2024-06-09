import React  , {FC} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { userData } from "../database/server";



const PaymentPage:React.FC=()=>{

    const [payment,setPayment]=useState(false);
    const [amount , setAmount ]= useState<number|string>(0);
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
        <div className="flex items-center justify-center w-3xl h-screen  ">
            <div className="h-96 w-full border-2 m-5 p-5 rounded-lg border-white bg-white text-red-700 font-mono">
                <div>
                <h1 className="text-5xl font-bold text-red-700 "> Payment Form </h1>
                </div>
                <form >
                    <label className="bg-white ">
                        Amount Donated:

                    </label>
                    <div className="border-2 rounded-lg flex items-center justify-left m-5 p-5">
                        <TextField id="filled-basic" type='number' className="border-0 active:border-0 text-red-700"
                        value={amount}
                        onChange={handleChangeInAmount}
                         InputProps={{
                            startAdornment: <InputAdornment position="start">LE</InputAdornment>,
                          }}
                        ></TextField>
                      
                        
                    </div>
                     <div className="flex w-fit items-center justify-content">
                        <button className="bg-green-300 flex items-center justify-content text-red-700 w-60 h-20 rounded-lg m-5 p-5" disabled={amount === "" || !enteredAmount} onClick={handleAmount}>
                          <Link to={amount !== " " && enteredAmount ? "/home/userInfo/payment/paymentOptions" : "#"} > Confirm Payment Of {amount} </Link>  
                        </button>
                        <button className="bg-green-300  flex items-center justify-content text-red-700 w-30 h-20 rounded-lg m-5 p-5" onClick={(e)=>setAmount(0)}>
                            <Link to="#"> Cancel</Link>
                        </button>
                        <button className="bg-green-300  flex items-center justify-content text-red-700 w-70 h-20 rounded-lg m-5 p-5">
                            <Link to="/home"> Return back to home page</Link>

                        </button>
                    </div>
                    {error&& <p className="text-red-700">{error}</p>}
                </form>
               
            </div>
        </div>
    )
}


export default PaymentPage;