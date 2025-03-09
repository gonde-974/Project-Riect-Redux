import React from "react";
import { useSelector } from "react-redux";

function ShowInfoComponent() {
  const { info } = useSelector((state) => state.productStore);
console.log(info);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 text-white text-lg font-semibold p-6 rounded-2xl shadow-lg w-[300px] text-center">
        {info ? info : "Нема податоци"}
      </div>
    </div>
  );
}

export default ShowInfoComponent;
