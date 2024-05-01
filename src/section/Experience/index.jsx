import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import picAlt from "../../assets/135576619_3508227552632497_1604397364193011674_o.jpg";
import FormattedDate from "../../component/FormattedDate";
import Picture from "../../component/Picture";

const Experience = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="">
      <div className="text-primaryTitle font-medium">Experience</div>
      <div
        className={`grid grid-cols-[25%_75%]  px-2 py-6 rounded-md  ${
          isHover["exp1"] ? "bg-[#d5c1a4]" : ""
        }`}
        onMouseEnter={() => setIsHover({ exp1: true })}
        onMouseLeave={() => setIsHover({ exp1: false })}
      >
        <div>
          <FormattedDate isHighlight={isHover["exp1"]}>2022-2023</FormattedDate>
          <Picture picture={picAlt} />
        </div>
        <div className="grid gap-y-3">
          <div
            className={`text-primaryContent ${
              isHover["exp1"] ? "text-primaryTitle" : ""
            }`}
          >
            Title
          </div>
          <div className="flex gap-4 text-2xl">
            <FontAwesomeIcon
              className="transition-all hover:scale-125"
              icon={faGithub}
            />
          </div>
          <div className="text-sm">Description</div>
          <div className="flex gap-x-4 text-sm">
            <div
              className={`bg-primarySubContent px-3 py-1 rounded-md ${
                isHover["exp1"] ? "hover:text-primaryTitle font-semibold" : ""
              }`}
            >
              React
            </div>
            <div
              className={`bg-primarySubContent px-3 py-1 rounded-md ${
                isHover["exp1"] ? "hover:text-primaryTitle font-semibold" : ""
              }`}
            >
              Tailwind
            </div>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-[25%_75%]  px-2 py-6 rounded-md  ${
          isHover["exp2"] ? "bg-[#d5c1a4]" : ""
        }`}
        onMouseEnter={() => setIsHover({ exp2: true })}
        onMouseLeave={() => setIsHover({ exp2: false })}
      >
        <div>
          <FormattedDate isHighlight={isHover["exp2"]}>2022-2023</FormattedDate>
          <div>
            <img
              src={picAlt}
              className="w-5/6 rounded-md border-4 border-primarySubContent"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-y-3">
          <div
            className={`text-primaryContent ${
              isHover["exp2"] ? "text-primaryTitle" : ""
            }`}
          >
            Title
          </div>
          <div className="flex gap-4 text-2xl">
            <FontAwesomeIcon
              className="transition-all hover:scale-125"
              icon={faGithub}
            />
          </div>
          <div className="text-sm">Description</div>
          <div className="flex gap-x-4 text-sm">
            <div
              className={`bg-primarySubContent px-3 py-1 rounded-md ${
                isHover["exp2"] ? "hover:text-primaryTitle font-semibold" : ""
              }`}
            >
              React
            </div>
            <div
              className={`bg-primarySubContent px-3 py-1 rounded-md ${
                isHover["exp2"] ? "hover:text-primaryTitle font-semibold" : ""
              }`}
            >
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
