import React from "react";

const HeadlineCard = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">Sun's Out BOGO's Out</p>
          <p className="px-2"> Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burger"
          className=" max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burgur"
          className=" max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className=" rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2"> Testy Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burgur"
          className=" max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
