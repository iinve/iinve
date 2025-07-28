import Image from "next/image";
import React from "react";
import Subtract from "../../assets/images/Subtract.png";
import map from "../../assets/coffeePremium/mahesh-megha/map.jpg";

const EternityCoupleDetails = ({ data, showMap = false }) => {
  return (
    <div className="bg-white ">
      {showMap && (
        <div className="w-full overflow-hidden">
          <Image src={map} alt="map" className="object-cover" />
        </div>
      )}
      <div className="bg-white py-16 px-4 text-center text-gray-700 max-w-[500px] w-full mx-auto">
        {/* Top separator */}

        {/* Groom */}
        <div className="py-10">
          {data?.couples_data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 mb-4 ${
                index % 2 !== 0 ? "flex-row-reverse text-right" : "text-left"
              }`}
            >
              <Image
                src={item.avatar}
                alt={item.full_name}
                className="w-16 h-16 rounded-xl border-2 border-[#5a2f43] object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  {item.full_name}
                </h2>
                <p
                  className="text-sm max-w-md"
                  dangerouslySetInnerHTML={{ __html: item.bio }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        {/* Bride */}
        {/* <div className="flex justify-end items-center gap-4 mt-12">
          <div className="text-right">
            <h2 className="text-2xl font-semibold text-gray-700">June</h2>
            <p className="text-sm mt-2 max-w-md">
              The daughter of Mrs. Renna James & Mr. James
              <br />
              Parakkal House, Kochi
            </p>
          </div>
          <Image
            src={bride}
            alt="Bride"
            className="w-16 h-16 rounded-xl border-2 border-[#EE6C4D]"
          />
        </div> */}

        {/* Bottom separator */}
        <div className="flex justify-center mt-12">
          <Image
            src={Subtract}
            alt="Separator"
            width={180}
            height={180}
            className="object-contain rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default EternityCoupleDetails;
