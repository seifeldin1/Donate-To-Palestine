import React , {FC} from "react";
import { Link } from "react-router-dom";


const AboutUsPage: React.FC = ()=>{
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
        <body className="bg-emerald-950 max-h-full">
           <div className="flex items-center p-4 mt-10 mb-6">
                <p className="text-pink-800 max-w-xl mr-36 text-ellipsis hover:underline hover:font-bold ">
                Who Are We:
                <br></br>
                We are an organization that helps people in palestine by all means such as supporting them with money , food , drinks from donations and speeches about them. 
                We were and we will still support palestine by helping people donate to them and by raising the awarness of people.
                As war escalates in Gaza and the West Bank, women and their families are in dire need of life-saving essentials:
                    <ul className="list-disc pl-4">
                        <li>Meals from a community kitchen</li>
                        <li>Clothes & blankets</li>
                        <li>Hygiene kits and diapers</li>
                        <li>Trauma-informed counseling</li>
                    </ul>
                </p>
                <img src="https://amanah.pk/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-09-at-10.04.26-PM.jpeg" alt="urgent donations to palestine photo" className="max-w-lg hover:scale-125 animate-pulse"></img>
           </div>

           <div className="p-4 mt-10 mb-6 flex items-center">
               <img src="https://www.globalgiving.org/pfil/58496/pict_large.jpg" alt="photo for us helping palestinians" className="max-w-lg hover:scale-125 "></img>
                <p className="text-pink-800 max-w-xl ml-36 text-ellipsis hover:underline hover:font-bold  flex content-center max-h-48 ">
                Our Vision:
                <br></br>
                The Al-Kuds Organization is a world in which all people attain the highest 
                possible level of health and try to reach all people.
                    
                </p>
                
           </div>

           <div className="flex items-center p-4 mt-10 mb-6">
               
                <p className="text-pink-800 max-w-xl mr-96 text-ellipsis hover:underline hover:font-bold  ">
                Our Mission:
                <br></br>
                We are here to raise awarness of people around what is happening in gaza. 
                We are trying to help people in gaza by convincing other people worldwide to donate 
                and feel the life palestinans are living. Palestinans really need our help and we are here for that reason.
                    
                </p>
                <img src="https://jewishcurrents.org/imager/cloud/382248/2T1NHA6_7f79c9961bc25cd6c87b496101c37916.jpg" alt="photo for speech" className="max-w-lg hover:scale-125"></img>
                
           </div>

        </body>
        </div>
    )

}


export default AboutUsPage;