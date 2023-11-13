"use client";

import { BillboardProps } from "@/lib/interface";
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
                className="relative w-full object-cover aspect-[1.5/1] md:aspect-[2.5/1] rounded-lg overflow-hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          src={data.imageUrl}
          alt={data.imageUrl}
          className="relative w-full object-cover aspect-[1.5/1] md:aspect-[2.5/1] rounded-lg overflow-hidden"
        />
      )}
    </div>
  );
};

export default Billboard;
