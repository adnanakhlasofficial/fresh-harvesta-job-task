"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(327261000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getTimeFormat = (miliseconds: number) => {
    let total_seconds = Math.floor(miliseconds / 1000);
    let total_minutes = Math.floor(total_seconds / 60);
    let total_hours = Math.floor(total_minutes / 60);
    let days = Math.floor(total_hours / 24);

    let seconds = total_seconds % 60;
    let minutes = total_minutes % 60;
    let hours = total_hours % 24;

    return { days, hours, minutes, seconds };
  };

  return (
    <div className="my-8 grid grid-cols-4 gap-2 lg:max-w-lg">
      <div className="p-7 bg-white rounded-lg w-full text-center">
        <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
          {getTimeFormat(time).days}
        </p>
        <p className="lg:text-lg text-xs text-[#4A4A52]">days</p>
      </div>
      <div className="p-7 bg-white rounded-lg w-full text-center">
        <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
          {getTimeFormat(time).hours}
        </p>
        <p className="lg:text-lg text-xs text-[#4A4A52]">hours</p>
      </div>
      <div className="p-7 bg-white rounded-lg w-full text-center">
        <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
          {getTimeFormat(time).minutes}
        </p>
        <p className="lg:text-lg text-xs text-[#4A4A52]">minutes</p>
      </div>
      <div className="p-7 bg-white rounded-lg w-full text-center">
        <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
          {getTimeFormat(time).seconds}
        </p>
        <p className="lg:text-lg text-xs text-[#4A4A52]">seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
