import React from "react";
import "./style.scss";
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Input } from "postcss";
const index = () => {
  const [input, setInput] = useState();
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  const videoConstraints = () => {
    facingMode: "user";
  };
  return (
    <>
      <div className="container">
        <div className="attendance shadow-2xl w-3/4 mx-24 mt-6 p-6 rounded-lg">
          <div className="attendance-track nav-title">
            <h3 className="nav-title text-lg">Worker Attendance Track</h3>
          </div>
          <div className="video-track flex items-start gap-6  justify-between w-full">
            {/* <video className="video w-1/2 rounded-md bg-slate-600"></video> */}
            <div className="video rounded-md w-1/2">
              <Webcam
                className="rounded-lg w-full"
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                ref={webcamRef}
                audio={false}
              />
            </div>
            <div className="w-1/2 track-form">
              <form className=" flex flex-col items-start mt-6 justify-between w-full">
                <label
                  htmlFor="userName"
                  className="flex w-full nav-title font-medium flex-col items-start"
                >
                  UserName
                  <input
                    type="text"
                    required
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    id="userName"
                    placeholder="Please your User name"
                    className="border bg-slate-100 w-full text-black rounded-md my-4 p-2 focus:border-outline-400"
                  />
                </label>
                <button
                  type="button"
                  className="nav-title font-medium hover:bg-orange-400 focus:ring-orange-600 focus:ring-2 bg-orange-500 py-1 px-3 rounded-2xl"
                  onClick={capture}
                >
                  Save Time
                </button>
              </form>
              {imgSrc && (
                <div className="video-tracker">
                  <div className="track-time border rounded-md p-2 mt-5 flex items-start justify-between gap-3">
                    <img
                      className="camera-screen-img  rounded-full m-0"
                      src={imgSrc}
                    />
                    <div className="flex items-start gap-3 justify-between m-0 p-0">
                      <h4>{input}</h4>
                      <span className="time-start">00:00</span>
                      <span className="time-start finally">00:00</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
