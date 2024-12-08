import React from 'react';
import Image from 'next/image';
import { browseRange } from '@/components/constant/browseRange';

function Browserange() {
  return (
    <>
      <section className="mt-14 px-4 md:px-10 lg:px-16 xl:px-20 mb-40 font-poppins">
        {/* Top Heading */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Browse The Range
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Card Body */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {browseRange.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                {/* Top Image */}
                <div className="w-full h-auto max-w-[380px]">
                  <Image
                    src={item.src}
                    alt="dining"
                    width={381}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Card Text */}
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black text-center mt-4">
                    {item.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Browserange;
