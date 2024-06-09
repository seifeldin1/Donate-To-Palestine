import React ,{FC} from "react";
import { Link } from "react-router-dom";


const HomePage:React.FC=()=>{
   

    return(
        <div className="bg-emerald-950">
        <nav className="bg-red-800 flex ">
            <h1 className="font-mono text-2xl italic font-semibold p-4 hover:animate-bounce flex space-x-1 max-w-48 mr-56 ">
                <h1 className='flex'><h1 className='text-black'>Al-</h1><h1 className='text-white'>Kuds </h1></h1>
                <h1 className='text-green-600'> Organization</h1>
            </h1> 
            <h1 className="font-mono text-xl font-medium text-teal-600 flex flex-row-reverse space-x-4 space-x-reverse content-center p-4  ml-96 content-center">
            <Link to="/contactUs" className="hover:text-teal-700 active:text-teal-500">Contact Us</Link>
            <Link to="/events" className="hover:text-teal-700 active:text-teal-500">Events</Link>
            <Link to="/aboutUs" className="hover:text-teal-700 active:text-teal-300">About Us</Link>
            <Link to="/" className="hover:text-teal-700 active:text-teal-500" ><Link to="/home">Home</Link></Link>
                
                
                
            </h1>
        </nav>
        
        <div className="flex justify-center mt-4">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/support-palestine-dontae-design-template-27e402e62d368ecb96633626432174c2_screen.jpg?ts=1697403939" 
            alt="Organization Logo" 
            className="animate-pulse w-44 h-44 ">   
            </img>
            <br>
            </br>
           
        </div>
        <p className="flex mt-12 mb-0 ml-80 mr-48 w-fit justify-center items-center text-white font-bold font-serif">
            The over-all objective of Al-Kuds Organization is service to humanity while living one's life.
            It attempts to raise the awarness of human beings, creatively and constructively about what is happening in 
            Palestine sepcifically Gaza and Rafah. People must know and understand that what happens there is absolutely should
            be unaccpetable by any means. Every day around more than one thousand person is killed in palestine including women , children 
            and elder people.If you relaly want to hand in the process of raising the people awarness and want to hand in helping people in palestine 
            then you are in the right place. We are here to help you to do so.
            </p>
        
        <div className="flex items-baseline justify-center h-screen">
            <button className="inline-flex whitespace-normal px-4 py-2 items-center justify-center rounded-2xl mt-8 bg-sky-700 w-auto h-auto font-mono text-rose-900 animate-pulse ">
                <Link to="/home/userInfo">
                    Donate Now And Save A Child
                </Link>
            </button>
        </div>
        </div>
    )
}

export default HomePage;