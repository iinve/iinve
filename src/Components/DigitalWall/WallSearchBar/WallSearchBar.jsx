import { Button, Input } from "@heroui/react";
import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { getGreeting } from "utils/greetingUtils";

const WallSearchBar = () => {
  return (
    <div className="w-full  md:py-6 flex justify-between flex-col md:flex-row">
      <div className="flex justify-between items-start mb-6  w-full md:w-1/3">
        <div>
          <h2 className="text-base md:text-2xl  text-gray-500 font-medium -mb-1">
            Hello ,{" "}
          </h2>
          <h1 className=" text-lg md:text-3xl font-bold text-black">
            {getGreeting()}!
          </h1>
        </div>
        {/* <FiFilter className="text-blue-700 text-3xl mt-2 cursor-pointer" /> */}
      </div>

      <div className="flex items-center gap-4 w-full md:w-1/3">
        <div className="flex-1">
          <Input
            type="text"
            label="Search"
            variant="bordered"
            color="default"
            radius="full"
            className="w-full  py-2 text-blue-500 text-md"
          />
        </div>
        <Button
          isIconOnly
          variant="light"
          className="w-12 h-12 rounded-full  flex items-center justify-center border-2 border-blue-500 hover:bg-blue-300 transition"
        >
          <FiSearch className="text-blue-600 text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default WallSearchBar;
