import React from "react";

export default function Buttoonn({text,link}) {
  return (
    <>
      <button className='rounded-3xl hover:shadow-gray-900 shadow-md hover:bg-violet-900  hover:text-white bg-white  text-black w-fit py-4 px-6'>
        <a href={link}>{text}</a>
      </button>
    </>
  );
}
