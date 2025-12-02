"use client";
import React, { useState } from "react";
import MyCard from "../Components/cards/page";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


function page() {
  const featuredJobs = [
    {
      promoHead: "Promoted",
      mainHead: "UI|UX Designer Teams",
      location: "Seattle, USA (Remote)",
      day: "1day ago",
      applicants: "22 applicants",
      image: "/cardimage.png",
    },
  ];
  const recommendedJobs = [
    {
      mainHead: "UI|UX Designer Teams",
      location: "Seattle, USA (Remote)",
      day: "1day ago",
      applicants: "22 applicants",
      image: "/cardimage.png",
    },
  ];
  const [interviews, setInterviews] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 lg:flex sm:px-5 sm:py-3 sm:gap-1 ">
      <div className="p-2 flex flex-col gap-2 lg:w-130">
        <div className="bg-white h-75 lg:h-150 rounded-md relative overflow-hidden ">
          <div className=" absolute w-full h-32 rounded-md">
            <Image
              src="/profileimagecover.png"
              alt="Sample"
              fill
              className="object-contain rounded-md"
            />
          </div>
          <div className=" relative top-19 text-center gap-4">
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
        <div className=" bg-white rounded-md pb-2 h-full">
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

          <div className="flex flex-col gap-5">
            {interviews && (
              <div className="flex justify-between items-center px-5 py-2 bg-gray-100 rounded-md mx-2">
                <div className="flex justify-center items-center gap-5 lg:gap-3">
                  <Image
                    src="/figmaimage.png"
                    alt="figmaimage"
                    height={30}
                    width={30}
                  />

                  <div className="">
                    <h1 className="font-bold md:text-sm">UI | UX Designer</h1>
                    <h1 className="text-sm text-gray-400">Figma</h1>
                    <h1 className="text-sm text-gray-400 md:text-sm">
                      16th Sept | 13:45 | Remote
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col gap-1 md:flex-row md:gap-3 ">
                  <button className="bg-teal-300 text-gray-500 rounded px-1 py-1 text-sm">
                    Accepted
                  </button>
                  <button className="  text-blue-500 rounded px-1 py-1 text-sm">
                    Deny
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="px-2 py-1 sm:py-8">
          <h1 className="text-lg font-bold sm:text-2xl">
            Find Your Dream Job,{" "}
            <span className="text-blue-500 font-bold">Albert!</span>
          </h1>
          <p className="text-gray-500">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>
        <div className=" bg-white mx-2 px-2 py-4 rounded flex flex-col text-center gap-4 sm:flex-row sm:justify-between sm:items-center sm:px-4 sm:py-4">
          <div>
            <h1 className="">Job Title, Company, or Keywords</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row lg:gap-5">
            <select className="w-35">
              <option value="">Select Location</option>
              <option value="banana">Saudi Arab</option>
              <option value="orange">Dubai</option>
              <option value="apple">Qatar</option>
            </select>
            <select className="w-23">
              <option value="">Job Type</option>
              <option value="apple">Frontend</option>
              <option value="banana">Backend</option>
              <option value="orange">Graphic Designer</option>
            </select>
            <button className="relative bg-blue-500 px-3 py-1 text-white rounded flex items-center gap-2">
              <MagnifyingGlassIcon
                className="w-5 h-5 text-white "
                strokeWidth={2.5}
              />
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:py-8">
          <h1 className="px-2">Similar:</h1>
          <div className="flex justify-center gap-2 px-2">
            <button className="border border-blue-500 px-2 py-2 text-sm rounded lg:px-6">
              Frontend
            </button>
            <button className="border border-blue-500 px-2 py-2 text-sm rounded lg:px-6">
              Backend
            </button>
            <button className="border border-blue-500 px-2 py-2 text-sm rounded lg:px-6">
              Graphic Designer
            </button>
          </div>
        </div>
        {/* {*Featured Cards*} */}
        <div className="mt-4 sm:mt-0">
          <div className="px-2 py-2 gap-5">
            <h1 className=" text-lg sm:text-2xl">
              Featured Jobs{" "}
              <span className="ml-2 text-blue-500 text-sm sm:text-lg underline underline-offset-4">
                See Featured Jobs
              </span>
            </h1>
          </div>
          <div className="p-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {featuredJobs.map((items, index) => (
                <MyCard
                  key={index}
                  titlePromo={items.promoHead}
                  titleHeading={items.mainHead}
                  titleLocation={items.location}
                  titleDay={items.day}
                  titleApplicants={items.applicants}
                  titleImage={items.image}
                />
              ))}
            </div>
          </div>
        </div>
        {/* {*Recommended Cards*} */}
        <div className=" mt-5">
          <div className="px-2 py-2 gap-5">
            <h1 className="text-lg sm:text-2xl">
              Recommended Jobs{" "}
              <span className="ml-2 text-blue-500 text-sm sm:text-lg underline underline-offset-4">
                See Recommended Jobs
              </span>
            </h1>
          </div>
          <div className="p-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {recommendedJobs.map((items, index) => (
                <MyCard
                  key={index}
                  titlePromo={(items.promoHead)}
                  titleHeading={items.mainHead}
                  titleLocation={items.location}
                  titleDay={items.day}
                  titleApplicants={items.applicants}
                  titleImage={items.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
