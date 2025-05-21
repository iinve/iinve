import React from "react";

const LunaCoupleDetails = () => {
  return (
    <div className="w-[100%]  mx-auto bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-[40px] shadow-md max-w-2xl w-full p-8 text-[#50545c] text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#50545c]">
          Bride & Groom
        </h2>

        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#50545c]">
            Johny
          </h3>
          <p className="text-base md:text-lg">
            The daughter of Mrs. Renna James & Mr. James
            <br />
            Parakkal House, Kochi
          </p>
          <p className="mt-2 text-base md:text-lg">
            Grand daughter of Mr. Peter & Mrs. Jolly Peter,
            <br />
            Thrissur
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#50545c]">
            June
          </h3>
          <p className="text-base md:text-lg">
            The daughter of Mrs. Renna James & Mr. James
            <br />
            Parakkal House, Kochi
          </p>
          <p className="mt-2 text-base md:text-lg">
            Grand daughter of Mr. Peter & Mrs. Jolly Peter,
            <br />
            Thrissur
          </p>
        </div>
      </div>
    </div>
  );
};

export default LunaCoupleDetails;
