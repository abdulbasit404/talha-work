import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


function Page({}) {
  return (
    <div
      className={`bg-white flex flex-col justify-center  gap-3 p-2 shadow-lg rounded-md w-full `}
    >
      <h1 className="font-bold">Promoted</h1>
      <div className="flex gap-2 items-center">
        <Image src="/cardimage.png" alt="card-image" height={50} width={50}/>
        <h1 className="text-lg">UI|UX Designer Teams</h1>
      </div>
      <div className="flex items-center gap-2">
        <MapPinIcon className="w-5 h-5 text-gray-600" />
        <h1 className="text-sm">Seattle, USA (Remote)</h1>
      </div>
      <div className="flex items-center gap-2">
        <ClockIcon className="w-5 h-5 text-gray-600" />
        <h1 className="text-sm">
          1day ago | <span className="text-blue-500">22 applicant</span>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-5">
          <button className="bg-blue-800 text-white px-4 py-1 rounded-md">
            Apply Now
          </button>
          <BookmarkIcon className="w-7 h-7 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Page;
