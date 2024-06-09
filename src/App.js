import logo from './logo.svg';
import './App.css';
import Test from './testingComponent.tsx';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import About from './AboutUs.tsx';
import Contact from './ContactUs.tsx';
import Events from './Events.tsx';
import Home from './Home.tsx';
import Payment from './payment.tsx';
import Data from './userDetails.tsx';
import Options from './paymentOptions.tsx';
import Visa from './visaOptions.tsx';
import VodafoneCash from './vodafoneCashOption.tsx';
import RepPayment from './payToRepOption.tsx';
import QRcode from './QRcodeOption.tsx';
import VodafoneVerification from './vodafoneCashVerification.tsx';
import Success from './successPage.tsx';
import ContactingRep from './repContact.tsx';
import ErrorPage from './errorPage.tsx';

export default function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/Donate-To-Palestine/' element={<Home/>}></Route>
          <Route path='/aboutUs' element={<About/>}></Route>
          <Route path="/contactUs" element={<Contact/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/home/userInfo/payment' element={<Payment/>}></Route>
          <Route path='/home/userInfo' element={<Data/>}></Route>  
          <Route path='/home/userInfo/payment/paymentOptions' element={<Options/>}></Route>
          <Route path='/home/userInfo/payment/paymentOptions/visa' element={<Visa/>}></Route>
          <Route path='/home/userInfo/payment/paymentOptions/vodafoneCash' element={<VodafoneCash/>} ></Route>
          <Route path='/home/userInfo/payment/paymentOptions/REPpayment' element={<RepPayment/>}></Route>
          <Route path='/home/userInfo/payment/paymentOptions/QR' element={<QRcode/>}></Route>
          <Route path='/home/userInfo/payment/paymentOptions/vodafoneCash/verify' element={<VodafoneVerification/>}></Route>
          <Route path='/home/userInfo/payment/success' element={<Success/>}></Route>
          <Route path='/home/userInfo/payment/RepContacting' element={<ContactingRep/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

