import React ,{FC} from "react";
import { Link } from "react-router-dom";


const EventsPage:React.FC=()=>{
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
            <Link to="/" className="hover:text-teal-700 active:text-teal-500" >Home</Link>
                
                
                
            </h1>
        </nav>

        <body className="bg-emerald-950 max-h-full flex">
           <div className="flex-col items-center  p-4 ">
                <p className="text-pink-800 max-w-xl mb-12 text-ellipsis underline font-bold ">
                25th of April 2024:
                <br></br>
                Emergency aid in Palestine is now even more crucial to support the population in the midst of the ongoing crisis.
                This country, scarred by decades of conflict, is experiencing periods of insecurity and enormous suffering.
                Basic needs such as food, clean drinking water and medical care are under threat.
                We are doing all we can to provide vital emergency aid to alleviate the plight of Palestinians by distributing food, water, medicine, blankets, mattresses and tents.
                
                </p>
                <img src="https://barakah.ch/wp-content/uploads/2023/12/3H7A2713-2048x1365.jpg.webp" 
                alt="urgent donations to palestine photo" className="max-w-96 animate-pulse"></img>
           </div>

           <div className="p-4 mt-10 mb-6 flex-col items-center">
               <img src="https://www.islamic-relief.org.uk/wp-content/uploads/2024/05/Psychosocial-support-in-Gaza-April-2024-2.jpg" alt="photo for us helping palestinians" className="max-w-96 "></img>
                <p className="text-pink-800 max-w-xl mt-12 text-ellipsis underline font-bold  flex content-center max-h-48 ">
                Upcoming Event in 10th of June 2024:
                <br></br>
                We will be aiding palestinans living in Egypt by supporting and motivating them to educate well and live the lifes that they were not able to live under the occupation.
                In addotion, we will be donating with money , food and water to palestinans in gaza and rafah. 
                    
                </p>
                
           </div>

           
        </body>
        </div>
    )
}

export default EventsPage;