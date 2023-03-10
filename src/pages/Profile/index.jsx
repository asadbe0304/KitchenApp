import React from "react";
import "./style.scss";
import Img from "./.././../assets/img/2.jpg";

const index = () => {
  return (
    <>
      <div className="profile-page">
        <section className="relative block py-16 ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="relative profile-inner ml-28 flex flex-col min-w-0 break-words bg-white w-9/12 mb-6 shadow-xl rounded-lg">
              <div className="px-6">
                <div className="flex w-full flex-wrap justify-center items-center flex-col">
                  <div className="w-full profile-top ">
                    <div className=" w-full profile-avatar flex items-center justify-center">
                      <div className="rounded-full p-2 animate animate-pulse"></div>
                      <img
                        alt="avatar profile"
                        width={120}
                        height={120}
                        src={Img}
                        className="shadow-xl  avatar rounded-full max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full profile-bottom flex items-center flex-row-reverse justify-between ">
                    <div className="w-1/2 top-right flex items-end justify-end ">
                      <button
                        className="bg-amber-500 active:bg-amber-600 uppercase  text-white font-bold  px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all text-sm duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                    <div className="w-1/2 top-left flex justify-between items-start">
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className=" p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-700 mb-2">
                    Asadbek
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                    Uzbekistan, Andhijan
                  </div>
                  <div className="mb-2 text-gray-600 mt-10">
                    CEO Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-600">
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <button className="font-normal text-pink-500">
                        Show more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
