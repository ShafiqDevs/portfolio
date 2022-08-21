import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className='flex justify-start pt-6 text-white'>
      <div className="flex items-center gap-4">
        <Image
          className='rounded-full mr-auto '
          src={"/shafiq.png"}
          width={65}
          height={65}
        />
        <h1 className="text-3xl">Shafiq</h1>
      </div>
      <div className='flex items-start gap-2 ml-auto text-4xl'>
        <h1>icon</h1>
        <h1>icon</h1>
        <h1>icon</h1>
      </div>
    </div>
  );
}
