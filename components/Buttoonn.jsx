import React from "react";

export default function Buttoonn({text}) {
  return (
    <>
      <button className='rounded-3xl hover:shadow-gray-900 shadow-md hover:bg-violet-900  hover:text-white bg-white  text-black w-fit py-4 px-6'>
        <a href="mailto:shafiq.belaroussi@outlook.com">{text}</a>
      </button>
    </>
  );
}
