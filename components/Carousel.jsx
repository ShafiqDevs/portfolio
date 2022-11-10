import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
export default function Carousel({ images }) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current);
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);

  return (
    <motion.div ref={carousel} className='carousel cursor-grab overflow-x-auto'>
      <motion.div className='innerCarousel flex min-w-min'>
        {images.map((image, index) => {
          return (
            <motion.div key={uuidv4()} className='item pointer-events-none min-h-[10rem] min-w-fit md:min-w-[80%] w-[50%] p-9 my-auto'>
              <img className='rounded-lg aspect-video max shadow-lg' src={image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
