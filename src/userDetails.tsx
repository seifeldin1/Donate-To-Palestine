import React  , {FC} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { userData, userDetails } from "../database/server";

const UserDetailPage:React.FC=()=>{

    type UserInfoType = {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        nationalID: string;
        age: string;
        country: string;
        city: string;
        [key: string]: string; 
    };

    // let UserData:userDetails= await userData.findOne({
    //     email: interaction.user.email;
    // })

    const [userInfo , setUserInfo]=useState<UserInfoType>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        nationalID:'',
        age:'',
        country:'',
        city:''
    })

    const [error , setError]=useState('');
    const [proceed , setProceed]=useState(false);


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target;
        if (name === 'nationalID' && value.length !== 14) {
            setError('National ID must be exactly 14 digits');
        } else if (name === 'phoneNumber' && value.length !== 11) {
            setError('Phone number must be exactly 11 digits');
        }

        if (name === 'nationalID' && value.length === 14) {
            setError('');
        } 
        if (name === 'phoneNumber' && value.length === 11) {
            setError('');
        }
    
        setUserInfo(prevState=>({...prevState , [name]:value}));
    }

    const submitHandler=async()=>{
        try{
            const response = await axios.post('http://localhost:3000/api/users', userInfo);
            console.log("User submitted data:",response.data);
        }
        catch(error){
            console.log("unable to create user");
            //setError("You have entered a wrong data");
        }
        if(userInfo.firstName===''|| userInfo.lastName===''||userInfo.email===''|| userInfo.country===''
        || userInfo.city===''|| userInfo.phoneNumber===''|| userInfo.nationalID===''|| userInfo.age===''){
            setProceed(false);
            setError('There is an incompelete field');
        }
        else{
            setProceed(true);
        }
    }


    return(
        <div className="flex items-center justify-center w-3xl h-screen  ">
            <div className="h-5/6 w-full min-h-full border-b-8 m-5 p-5 rounded-lg border-white bg-white text-red-700 font-mono">
                <div>
                <h1 className="text-5xl font-bold text-red-700 "> Details Form </h1>
                </div>
                <form className="w-fit p-4 m-4" >
                    {['firstName' , 'lastName' , 'email' , 'phoneNumber' , 'nationalID', 'age'  , 'country' , 'city' ].map(field=>(

                        <div key={field} className=" flex  items-center justify-center m-3 w-96 h-8">
                            <label className="bg-white capitalize  m-2 w-32">{field==='nationalID'? 'National ID':field.replace(/([A-Z])/g , ' $1')}:</label>
                            <TextField 
                            name={field}
                            type={
                                field==='email'? 'email': (field === 'phoneNumber' ||field ==='nationalID' ||field ==='age') ? 'number':'text'
                            }
                            value={userInfo[field]}
                            onChange={handleChange}
                            className="text-black w-64 "
                            >

                            </TextField>
                        </div>
                        

                    ))}
                    
                    
                     <div className="flex w-fit items-center justify-content">
                        <button className="bg-white border-3 flex items-center justify-content text-red-700 w-40 h-10 rounded-lg m-5 p-5" onClick={submitHandler} disabled={proceed}>
                          <Link to={proceed?"/home/userInfo/payment":"#"} > Proceed to Paying</Link>  
                        </button >
                       <button className="bg-white border-3 flex items-center justify-content text-red-700 w-40 h-10 rounded-lg m-5 p-5" onClick={
                        () => setUserInfo({
                            firstName: '',
                            lastName: '',
                            email: '',
                            phoneNumber: '',
                            nationalID: '',
                            age: '',
                            country: '',
                            city: ''

                        })}>
                            Reset
                       </button>
                        
                    </div>
                    {error&& <p className="text-red-700">{error}</p>}
                </form>
               
            </div>
        </div>
    )
}

export default UserDetailPage;