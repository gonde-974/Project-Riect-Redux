import React from 'react';
import { useSelector } from 'react-redux';
import { GiThrowingBall } from "react-icons/gi";
import { MdElderlyWoman } from "react-icons/md";

function HomePage() {
  const { messageMarqueLeft } = useSelector((state) => state.productStore);

  return (
    <>
      <div className="bg-gray-500 h-[200px] text-center text-white font-bold mt-[15px] text-3xl">
        HomePage
        <div>
          <marquee behavior="scroll" direction="right">
            <span className="flex items-center gap-2">            
              {messageMarqueLeft?.title}
              <GiThrowingBall  className="text-green-500 " />
            </span>

            
          </marquee>
          <marquee behavior="scroll" direction="left">
          <MdElderlyWoman className='text-red-500 rotate-y-180 h-50px'/>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default HomePage;
