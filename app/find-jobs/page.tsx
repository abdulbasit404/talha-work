"use client";

import React, { useState } from "react";
import MyCard from "../Components/cards/page";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const featuredJobs = [
    {
      promoHead: "Promoted",
      mainHead: "UI|UX Designer Teams",
      location: "Seattle, USA (Remote)",
      day: "1 day ago",
      applicants: "22 applicants",
      image: "/cardimage.png",
    },
  ];

  const recommendedJobs = [
    {
      mainHead: "UI|UX Designer Teams",
      location: "Seattle, USA (Remote)",
      day: "1 day ago",
      applicants: "22 applicants",
      image: "/cardimage.png",
    },
  ];

  const [interviews, setInterviews] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 lg:flex sm:px-5 sm:py-3 sm:gap-1">
      {/* Left profile column */}
      <div className="p-2 flex flex-col gap-2 lg:w-130">
        {/* Profile card */}
        <div className="bg-white h-75 lg:h-150 rounded-md relative overflow-hidden">
          <div className="absolute w-full h-32 rounded-md">
            <Image
              src="/profileimagecover.png"
              alt="Sample"
              fill
              className="object-contain rounded-md"
            />
          </div>
          <div className="relative top-19 text-center gap-4">
            <div className="flex justify-center items-center mb-3">
              <Image
                src="/profileimage.png"
                alt="profile"
                height={90}
                width={90}
                className="rounded-full border-white border-2"
              />
            </div>
            <h1 className="font-bold sm:text-2xl">Albert Flores</h1>
            <h1>Senior Product Designer | UI/UX</h1>
            <h1>Designer | Graphic Designer | Web Designer</h1>
            <p className="text-gray-500 text-sm">Clinton, Maryland</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white p-5 rounded-md">
          <div className="flex justify-between">
            <h1>Profile Visitor</h1>
            <span className="text-blue-500">140</span>
          </div>
          <hr className="text-gray-300 mt-1 mb-1" />
          <div className="flex justify-between">
            <h1>Resume Viewers</h1>
            <span className="text-blue-500">20</span>
          </div>
          <hr className="text-gray-300 mb-1 mt-1" />
          <div className="flex justify-between">
            <h1>My Jobs</h1>
            <span className="text-blue-500">88</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-md pb-2 h-full">
          <div className="flex justify-between items-center py-2 px-3">
            <div>
              <h1 className="font-bold sm:text-lg">My calendar</h1>
              <p className="text-gray-500 text-sm">Upcoming interviews</p>
            </div>
            <div>
              {interviews ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={() => setInterviews(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  onClick={() => setInterviews(true)}
                />
              )}
            </div>
          </div>

          {interviews && (
            <div className="flex justify-between items-center px-5 py-2 bg-gray-100 rounded-md mx-2">
              <div className="flex justify-center items-center gap-5 lg:gap-3">
                <Image
                  src="/figmaimage.png"
                  alt="figmaimage"
                  height={30}
                  width={30}
                />
                <div>
                  <h1 className="font-bold md:text-sm">UI | UX Designer</h1>
                  <h1 className="text-sm text-gray-400">Figma</h1>
                  <h1 className="text-sm text-gray-400 md:text-sm">
                    16th Sept | 13:45 | Remote
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-3">
                <button className="bg-teal-300 text-gray-500 rounded px-1 py-1 text-sm">
                  Accepted
                </button>
                <button className="text-blue-500 rounded px-1 py-1 text-sm">Deny</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right jobs column */}
      <div className="w-full">
        {/* Featured Jobs */}
        <div className="mt-4 sm:mt-0">
          <h1 className="px-2 py-2 text-lg sm:text-2xl">
            Featured Jobs{" "}
            <span className="ml-2 text-blue-500 text-sm sm:text-lg underline underline-offset-4">
              See Featured Jobs
            </span>
          </h1>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {featuredJobs.map((job, idx) => (
              <MyCard
                key={idx}
                titlePromo={job.promoHead || ""}
                titleHeading={job.mainHead}
                titleLocation={job.location}
                titleDay={job.day}
                titleApplicants={job.applicants}
                titleImage={job.image}
              />
            ))}
          </div>
        </div>

        {/* Recommended Jobs */}
        <div className="mt-5">
          <h1 className="px-2 py-2 text-lg sm:text-2xl">
            Recommended Jobs{" "}
            <span className="ml-2 text-blue-500 text-sm sm:text-lg underline underline-offset-4">
              See Recommended Jobs
            </span>
          </h1>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {recommendedJobs.map((job, idx) => (
              <MyCard
                key={idx}
                titlePromo={job.promoHead || ""}
                titleHeading={job.mainHead}
                titleLocation={job.location}
                titleDay={job.day}
                titleApplicants={job.applicants}
                titleImage={job.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
