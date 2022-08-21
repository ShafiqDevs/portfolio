import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";

export default function ItemViewer({
  logo,
  projectTitle,
  projectDescription,
  KeyWords,
  imgUrl,
  projectLink,
  roles,
  Deliverables,
  images,
  projectOverview,
  toggleItemViewer,
}) {
  return (
    <div
      className={`w-full h-fit min-h-screen bg-black/80  absolute top-0 bottom-0`}>
      <div className='flex justify-end p-8 fixed right-0'>
        <span
          onClick={() => toggleItemViewer(false)}
          className='hover:bg-black hover:text-white bg-white rounded-full text-4xl'>
          <AiFillCloseCircle />
        </span>
      </div>
      <div className='bg-neutral-900 md:w-1/2 h-fit ml-auto mr-auto p-8 md:p-16 text-white'>
        <div className='flex items-center gap-4 text-2xl'>
          <Image src={`/niic.png`} width={50} height={50} />
          <h1 className='text-xl'>{projectTitle}</h1>
        </div>
        <h1 className='md:text-3xl text-2xl mt-6'>{projectDescription}</h1>
        <div className='grid md:grid-cols-2 grid-flow-row text-xl mt-12 gap-6 md:gap-0'>
          <div className='flex flex-col gap-6  md:items-end text-start md:text-end md:order-last'>
            <div className='flex flex-col gap-1'>
              <h1>Role:</h1>
              {roles.map((role) => {
                return <h1 className='text-zinc-500'>{role}</h1>;
              })}
            </div>
            <div className='flex flex-col gap-1'>
              <h1>Deliverables:</h1>
              {Deliverables.map((deliverable) => (
                <h1 className='text-zinc-500'>{deliverable}</h1>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h1>The Project Overview</h1>
            <h1 className='text-zinc-500'>
            {projectOverview}
            </h1>
          </div>
        </div>
      </div>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    </div>
  );
}
