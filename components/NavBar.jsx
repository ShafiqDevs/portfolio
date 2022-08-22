import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className='flex flex-col gap-5 md:flex-row justify-start pt-6  text-white'>
      <div className="flex items-center gap-4">
        <Image
          className='rounded-full mr-auto '
          src={"/shafiq.png"}
          width={65}
          height={65}
          alt={`img`}
        />
        <h1 className="text-3xl font-fancy">Shafiq Belaroussi</h1>
      </div>
      <div className='flex items-start gap-2 md:ml-auto text-4xl'>
        <h1><a href="https://github.com/ShafiqDevs"><AiFillGithub/></a></h1>
        <h1><a href="https://www.linkedin.com/in/shafiq-belaroussi/"><AiFillLinkedin/></a></h1>
      </div>
    </div>
  );
}
