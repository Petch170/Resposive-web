import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [food, setFood] = useState(data);
  // console.log(data)

  // Fillter type burger/pizza/etc  ฟังก์ชั่น filter กรองสมาชิกในไฟล์data  ที่มีค่าเป็นcatagory และนำค่าที่ได้กำหนดค่าใหม่ให้กับ food
  const filterType =(catag)=>{ 
    setFood(
      data.filter((item)=>{
        return item.category === catag;
      })
    );
  };

  //filter ราคา
  const filterPrice =(price)=>{
    setFood(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }
  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        
        {/* filter Type */}
        <div>
          <p className=" font-bold text-gray-700">Filter Type</p>
          <div className=" flex flex-wrap">
            <button onClick={()=>setFood(data)} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white ">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white" >
              Burgers
            </button>
            <button onClick={()=>filterType('pizza')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white ">
              Pizza
            </button>
            <button onClick={()=>filterType('salad')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white ">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white ">
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
  
          <p className=" font-bold text-gray-700">Filter Price</p>
          <div className=" flex justify-between max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
            <img src={item.image} alt={item.name} className=" w-full h-[200px] object-cover rounded-t-lg"/>
            <div className="flex justify-between px-2 py-4">
              <p className=" font-bold">{item.name}</p>
              <p className="">
                <span className=" bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
