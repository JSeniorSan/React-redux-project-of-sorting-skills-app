import React from "react";
import "../index.css";
import file from "../mock/data.json";

export default function CardList() {
  console.log(file);
  const newComponent = (
    <div
      className="p-1 rounded-lg text-white
     bg-teal-600 text-xs font-medium"
    >
      NEW!
    </div>
  );
  const fetureComponent = (
    <div className="bg-black rounded-lg text-white font-medium p-1 text-xs">
      FEATURED
    </div>
  );
  const newFile = file.map((obj) => {
    const btnToolsFn = () => {
      const newArr = obj.tools.map((skill, i) => {
        if (obj.tools.length === 0) {
          return null;
        } else {
          return (
            <button
              key={i}
              className="text-teal-600 p-2 bg-gray-100 hover:text-gray-100 hover:bg-teal-600 h-8 text-sm flex flex-row justify-center items-center rounded-md"
            >
              {skill}
            </button>
          );
        }
      });
      return newArr;
    };

    const btnLanguagesFn = () => {
      const newArr = obj.languages.map((language, i) => {
        if (obj.languages.length === 0) {
          return null;
        } else {
          return (
            <button
              key={i}
              className="text-teal-600 p-2 bg-gray-100 hover:text-gray-100 hover:bg-teal-600 h-8 text-sm flex flex-row justify-center items-center rounded-md"
            >
              {language}
            </button>
          );
        }
      });
      return newArr;
    };

    return (
      <div
        className="flex w-2/3 p-4 h-30 border shadow-lg rounded-md hover:transition-all hover:shadow-xl z-30 bg-white"
        key={obj.id}
        style={{ borderLeft: obj.featured ? "5px solid green" : null }}
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
              <div className="flex flex-row gap-2">
                <div className="text-xs text-teal-600 font-bold flex items-center">
                  {obj.company}
                </div>
                <div className="flex items-center">
                  {obj.new ? newComponent : null}
                </div>

                <div className="flex items-center">
                  {obj.featured ? fetureComponent : null}
                </div>
              </div>
              <div className="font-bold text-base text-black hover:text-teal-600 cursor-default">
                {obj.position}
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="text-xs text-gray-400 font-normal ">
                  {obj.postedAt}
                </div>
                <div className="text-xs text-gray-400 font-normal ">·</div>
                <div className="text-xs text-gray-400 font-normal ">
                  {obj.contract}
                </div>
                <div className="text-xs text-gray-400 font-normal ">·</div>
                <div className="text-xs text-gray-400 font-normal ">
                  {obj.location}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <button className="text-teal-600 p-2 bg-gray-100 hover:text-gray-100 hover:bg-teal-600 h-8 text-sm flex flex-row justify-center items-center rounded-md">
              {obj.role}
            </button>
            <button className="text-teal-600 p-2 bg-gray-100 hover:text-gray-100 hover:bg-teal-600 h-8 text-sm flex flex-row justify-center items-center rounded-md">
              {obj.level}
            </button>
            {btnLanguagesFn()}
            {btnToolsFn()}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-5/6 flex flex-col gap-10 items-center m-5 bg-teal-100">
      {newFile}
    </div>
  );
}
