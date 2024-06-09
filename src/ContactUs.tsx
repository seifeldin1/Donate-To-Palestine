import React ,{FC} from "react";
import { Link } from "react-router-dom";


const ContactUsPage:React.FC=()=>{
    const urlFacebook="https://www.facebook.com/seifeldin.sameh.9";
    const urlInstagram = "https://www.instagram.com/seifdakroury__/";
    const urlWhatsapp = "https://api.whatsapp.com/send/?phone=201501662828&text&type=phone_number&app_absent=0";
    const email ="seif1442004@gmail.com";
    return(
        <div className="bg-emerald-950 min-h-screen flex flex-col">
        <nav className="bg-red-800 flex ">
            <h1 className="font-mono text-2xl italic font-semibold p-4 hover:animate-bounce flex space-x-1 max-w-48 mr-56 ">
                <h1 className='flex'><h1 className='text-black'>Al-</h1><h1 className='text-white'>Kuds </h1></h1>
                <h1 className='text-green-600'> Organization</h1>
            </h1> 
            <h1 className="font-mono text-xl font-medium text-teal-600 flex flex-row-reverse space-x-4 space-x-reverse content-center p-4  ml-96 content-center">
            <Link to="/contactUs" className="hover:text-teal-700 active:text-teal-500">Contact Us</Link>
            <Link to="/events" className="hover:text-teal-700 active:text-teal-500">Events</Link>
            <Link to="/aboutUs" className="hover:text-teal-700 active:text-teal-300">About Us</Link>
            <Link to="/" className="hover:text-teal-700 active:text-teal-500" >Home</Link>
                
                
                
            </h1>
        </nav>

        <div>
            <div className="flex min-h-screen items-center justify-center mt-8 ">
                
                <a href={urlFacebook} target="_self"  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png"
                     alt="Facebook" 
                     className=" ml-2 mr-2 animate-bounce rounded-full bg-blue-500 hover:bg-blue-700 h-20 w-20 "></img>
                </a>
                <a href={urlInstagram} target="_self">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png" 
                    alt="Instagram" 
                    className="ml-2 mr-2 animate-bounce rounded-full bg-blue-500 hover:bg-blue-700 h-20 w-20 "></img>
                </a>
                <a href={urlWhatsapp} target="_self">
                    <img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo-whatsapp-1024.png" 
                    alt="Whatsapp" 
                    className="ml-2 mr-2 animate-bounce rounded-full bg-blue-500 hover:bg-blue-700 h-20 w-20 "></img>
                </a>
                <a href={`mailto:${email}`} target="_self">
                    <img src="https://freelogopng.com/images/all_img/1657906274logo-gmail-png.png" 
                    alt="Gmail" 
                    className="ml-2 mr-2 animate-bounce rounded-full bg-blue-500 hover:bg-blue-700 h-20 w-20 "></img>
                </a>
            </div>
        </div>
       
        </div>
    )
}

export default ContactUsPage;