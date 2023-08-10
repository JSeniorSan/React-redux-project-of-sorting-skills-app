import React from "react";
import "../index.css";
import file from "../mock/data.json";

export default function CardList() {
  console.log(file);
  const newFile = file.map((obj) => {
    return (
      <div
        className="flex w-2/3 p-4 h-30 border shadow-lg rounded-md"
        key={obj.id}
      >
        <div className="flex flex-row w-full justify-between h-20">
          <div className="flex justify-around gap-8">
            <div className="rounded-full w-20 border relative">
              <img
                src={obj.logo}
                alt="dgd"
                className="absolute h-full w-full z-0"
              ></img>
            </div>
            <div className="flex flex-col gap-1">
              <div>11111</div>
              <div>22222</div>
              <div>33333</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-4 w-full">1 1 1 1 1</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-5/6 flex flex-col gap-14 items-center">
      {newFile}
    </div>
  );
}
