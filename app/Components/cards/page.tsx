import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function page({
  titlePromo,
  titleHeading,
  titleDay,
  titleLocation,
  titleApplicants,
  titleImage,
}) {
  return (
    <div
      className={`bg-white flex flex-col justify-center  gap-3 p-2 shadow-lg rounded-md w-full `}
    >
      <h1 className="font-bold">
        {titlePromo && <span className="promo">{titlePromo}</span>}
      </h1>
      <div className="flex gap-2 items-center">
        <Image src={titleImage} alt="card-image" height={45} width={45} />
        <h1 className="text-lg">{titleHeading}</h1>
      </div>
      <div className="flex items-center gap-2">
        <MapPinIcon className="w-4 h-4 text-gray-600" />
        <h1 className="text-sm">{titleLocation}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ClockIcon className="w-4 h-4 text-gray-600" />
        <h1 className="text-sm">
          {titleDay} | <span className="text-blue-500">{titleApplicants}</span>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
            Apply Now
          </button>
          <BookmarkIcon className="w-7 h-7 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default page;
