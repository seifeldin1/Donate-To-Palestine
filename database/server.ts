import mongoose, { Document } from "mongoose";
import {Request , Response} from 'express';
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

interface connectionOptions extends mongoose.ConnectOptions{
    useNewUrlParser?: boolean;
    useUnifiedTopology?: boolean;
}

(async () => {
    try {
        const connectOptions:connectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
      await mongoose.connect("mongodb+srv://seifdakroury_:palestineDonation@cluster0.l1sqadn.mongodb.net/");
      console.log('Connection to MongoDB was established successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
})();



interface userDetails extends Document{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    nationalID: number;
    age:number;
    country: string;
    city:string;
    gender?: string;
    currencyPaid:string;
    amountPaid:number;
    
}

const userSchema = new mongoose.Schema<userDetails>({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    nationalID: {
        type: Number
    },
    age: {
        type: Number
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    currencyPaid:{
        type:String,
        default:"LE"
    },
    amountPaid: {
        type: Number
    },
  });


const userData = mongoose.model<userDetails>('userData', userSchema);


app.post('/api/users' , async(req:Request , res:Response) =>{
    try{
        const{amountPaid , firstName , lastName , email , phoneNumber , nationalID , age , country , city} = req.body;
        const addedUser = new userData({
            amountPaid,
            firstName, 
            lastName,
            email,
            phoneNumber,
            nationalID,
            age,
            country,
            city,
            });
        await addedUser.save();
        res.status(201).json(addedUser);
    }
    catch(error){
        console.log("Error creating the user:" , error);
        res.status(500).json({ error: 'Internal server error' });
    }
    

});


app.get('/api/users' , async(req:Request , res:Response)=>{
    try{
        const users = await userData.find();
        res.status(201).json(users);
    }
    catch(error){
        console.log("Error getting the users:" , error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


const PORT:number = parseInt(process.env.PORT||'3000');

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
} )


export {userData , userDetails};