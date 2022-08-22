import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

export default function Item({
  logo,
  projectTitle,
  projectDescription,
  KeyWords,
  imgUrl,
  roles,
  Deliverables,
  images,
  projectOverview,
  projectLink,
  toggleItemViewer,
  story,
}) {
  const requestItemViewer = () => {
    console.log("clicked Item");
    toggleItemViewer(
      true,
      logo,
      projectTitle,
      projectDescription,
      KeyWords,
      imgUrl,
      roles,
      Deliverables,
      images,
      projectOverview,
      projectLink,
      story,
    );
  };
  return (
    <div
      className='flex flex-col gap-6  hover:cursor-pointer'
      onClick={() => requestItemViewer()}>
      <div className='flex items-center gap-4'>
        <Image
          src={`${logo}`}
          width={40}
          height={40}
          alt={"Img"}
          className={`rounded-full`}
        />
        <h1>{projectTitle}</h1>
      </div>
      <div className='flex flex-col gap-5'>
        <img src={`${imgUrl}`} alt={`Img`} className={"aspect-video"} />
        <h1 className='text-xl md:text-2xl'>{projectDescription}</h1>
        <div className='flex gap-4'>
          {KeyWords.map((item) => {
            return (
              <h1 key={uuidv4()} className='text-sm font-semibold text-gray-600'>{item}</h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
