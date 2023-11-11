"use client";

import { BillboardProps } from "@/lib/interface";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {Array.isArray(data) ? (
        <Swiper navigation={true} modules={[Navigation]}>
          {data.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
                className="relative w-full object-cover aspect-[1.5/1] md:aspect-[2.5/1] overflow-hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          src={data.imageUrl}
          alt={data.imageUrl}
          className="relative w-full object-cover aspect-[1.5/1] md:aspect-[2.5/1] overflow-hidden"
        />
      )}

      {/* <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">{data?.label}</div>
        </div>
      </div> */}
    </div>
  );
};

export default Billboard;
