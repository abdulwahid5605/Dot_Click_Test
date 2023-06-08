import React from "react";

const RightContainer = () => {
  return (
    <>
      {/* 1st Component */}
      <div className="bg-grey  p-16">
        <h1 className="text-lightgreen font-semibold text-2xl">
          You currently have 3 requests
        </h1>
        <div className="bg-white p-12 mt-10 flex flex-col shadow ">
          <div className="flex flex-row justify-start items-center ">
            <div className="flex flex-col justify-start items-start border-r-2 pr-6">
              <h1 className="text-2xl font-semibold text-green">
                St Judes Hospital
              </h1>
              <p className="text-darkgrey">Sarasota,FL. 33178</p>
            </div>
            <div className="flex flex-row justify-evenly items-center  border-r-2 px-6">
              <div className="flex flex-col   ">
                <h1 className="text-lightgreen font-semibold text-2xl">10</h1>
                <p className="text-darkgrey">October</p>
              </div>
              <div>
                <h1 className="text-lightgreen font-semibold text-2xl">-</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lightgreen font-semibold text-2xl">17</h1>
                <p className="text-darkgrey">December</p>
              </div>
            </div>
            <div className=" pl-6 ">
              <h1 className="text-2xl font-semibold text-green">20 Rooms</h1>
              <p className="text-darkgrey">10 Singles, 10 doubles</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-4 ">
            <p className="border-2 w-1/3 border-black p-2 rounded-s-3xl bg-yellow">
              RECEIVED
            </p>
            <p className="border-2 w-1/3 border-black  p-2">NAGOTIATING</p>
            <p className="border-2 w-1/3 border-black  p-2 rounded-e-3xl">
              COMPLETED
            </p>
          </div>
        </div>
        {/*2nd component  */}

        <div className="bg-white p-12 mt-10 flex flex-col shadow rounded-3xl ">
          <div className="flex flex-row justify-start items-center ">
            <div className="flex flex-col justify-start items-start border-r-2 pr-6">
              <h1 className="text-2xl font-semibold text-green">
                St Judes Hospital
              </h1>
              <p className="text-darkgrey">Sarasota,FL. 33178</p>
            </div>
            <div className="flex flex-row justify-evenly items-center  border-r-2 px-6">
              <div className="flex flex-col   ">
                <h1 className="text-lightgreen font-semibold text-2xl">10</h1>
                <p className="text-darkgrey">October</p>
              </div>
              <div>
                <h1 className="text-lightgreen font-semibold text-2xl">-</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lightgreen font-semibold text-2xl">17</h1>
                <p className="text-darkgrey">December</p>
              </div>
            </div>
            <div className=" pl-6 ">
              <h1 className="text-2xl font-semibold text-green">20 Rooms</h1>
              <p className="text-darkgrey">10 Singles, 10 doubles</p>
            </div>
          </div>
          <div className="mt-5 ">
            <button className="bg-green text-white py-3 pl-7 font-semibold rounded-3xl w-4/6 text-start">
              COMPLETED
            </button>
          </div>

          <div className="mt-10 flex flex-row justify-between items-center">
            <div className="bg-mediumgrey relative">
              <div className="flex flex-col justify-center items-center italic text-lightgreen text-lg">
                <img src="./h.png" alt="" />
                <p className="">Holiday Inn</p>
              </div>
              <div className="shadow p-3">
                <h1 className="ml-2 text-darkgrey">
                  1.5 miles away from joblocation
                </h1>
                <div className="flex flex-row  justify-between items-end  ">
                  <div>
                    <p className="text-darkgrey">Singles: $120</p>
                    <p className="text-darkgrey">Doubles: $145</p>
                  </div>
                  <div>
                    <button className=" bg-green text-white py-2 px-4 font-semibold rounded-xl">
                      Book now
                    </button>
                  </div>
                </div>
                <button className="bg-green text-white py-2 px-4 font-semibold rounded-xl absolute right-[-15px] top-[-15px] bg-red">
                  Rare Find
                </button>
              </div>
            </div>
            <div className="bg-mediumgrey">
              <div className="flex flex-col justify-center items-center italic text-lightgreen text-lg">
                <img src="./h.png" alt="" />
                <p className="">Holiday Inn</p>
              </div>
              <div className="shadow p-3">
                <h1 className="ml-2 text-darkgrey">
                  1.5 miles away from joblocation
                </h1>
                <div className="flex flex-row  justify-between items-end  ">
                  <div>
                    <p className="text-darkgrey">Singles: $120</p>
                    <p className="text-darkgrey">Doubles: $145</p>
                  </div>
                  <div>
                    <button className=" bg-green text-white py-2 px-4 font-semibold rounded-xl">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-mediumgrey">
              <div className="flex flex-col justify-center items-center italic text-lightgreen text-lg">
                <img src="./h.png" alt="" />
                <p className="">Holiday Inn</p>
              </div>
              <div className="shadow p-3">
                <h1 className="ml-2 text-darkgrey">
                  1.5 miles away from joblocation
                </h1>
                <div className="flex flex-row  justify-between items-end  ">
                  <div>
                    <p className="text-darkgrey">Singles: $120</p>
                    <p className="text-darkgrey">Doubles: $145</p>
                  </div>
                  <div>
                    <button className=" bg-green text-white py-2 px-4 font-semibold rounded-xl">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContainer;
