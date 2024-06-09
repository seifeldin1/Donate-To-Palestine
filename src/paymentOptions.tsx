import React, { FC } from "react";
import { Link } from "react-router-dom";

const PaymentOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mr-4">
      <div className="flex flex-col justify-center items-center w-full"> 
        <div className="my-4">
          <div className="flex items-center justify-center">
            <Link to="/home/userInfo/payment/paymentOptions/visa">
              <button className="flex items-center bg-red-700 text-black rounded-lg text-xl w-72 h-24"> 
                <img src="https://i0.wp.com/fintechgate.net/wp-content/uploads/2020/09/%D9%81%D9%8A%D8%B2%D8%A7.png?resize=750%2C430&ssl=1" alt="Visa Logo" className="w-15 h-10 ml-2 mr-2"/>
                Pay With Visa
              </button>
            </Link>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-center">
            <Link to="/home/userInfo/payment/paymentOptions/QR">
              <button className="flex items-center bg-red-700 text-black rounded-lg text-xl w-72 h-24"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR Code Logo" className="w-20 h-14 ml-2 mr-2"/>
                Scan QR Code
              </button>
            </Link>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-center">
            <Link to="/home/userInfo/payment/paymentOptions/vodafoneCash">
              <button className="flex items-center bg-red-700 text-black rounded-lg text-xl w-72 h-24"> 
                <img src="https://www.ep4n.net/images/payments/18-1605361721.webp?/vodafone-top-up/vodafone-cash-(reseller)" alt="Vodafone Cash Logo" className="w-15 h-10 ml-2 mr-2"/>
                Vodafone Cash
              </button>
            </Link>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-center">
            <Link to="/home/userInfo/payment/paymentOptions/REPpayment">
              <button className="flex items-center bg-red-700 text-black rounded-lg text-xl w-72 h-24"> 
                    <img src="data:image/jpeg;base64,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" 
                    alt="Vodafone Cash Logo" className="w-15 h-10 ml-2 mr-2"/>
                Pay To A Representative
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
