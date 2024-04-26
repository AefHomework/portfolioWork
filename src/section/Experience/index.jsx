import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import picAlt from '../../assets/135576619_3508227552632497_1604397364193011674_o.jpg'

const Experience = () => {
    const [isHover, setIsHover] = useState(false)


  return (
    <div className="">
      <div>Experience</div>
      <div className="grid grid-cols-[25%_75%] bg-amber-100 px-2 py-6 rounded-md"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
        <div>
          <div >
            <span className="text-sm">2022-2023</span>
          </div>
          <div>
            <img src={picAlt} className="w-5/6 rounded-md border-4 border-primarySubContent" alt="" />
          </div>
        </div>
        <div className="grid gap-y-3">
          <div className="text-primaryTitle ">Title</div>
          <div className="flex gap-4 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="text-sm">Description</div>
          <div className="flex gap-x-4 text-sm">
            <div className={`bg-primarySubContent px-3 py-1 rounded-md ${isHover ? "hover:text-primaryTitle" :""}`}>
              React
            </div>
            <div className={`bg-primarySubContent px-3 py-1 rounded-md ${isHover ? "hover:text-primaryTitle" :""}`}>
              Tailwind
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[25%_75%]">
        <div>
          <div >
            <span className="text-sm">2022-2023</span>
          </div>
          <div>
            <img src={picAlt} className="w-5/6 rounded-md border-4 border-primarySubContent" alt="" />
          </div>
        </div>
        <div className="grid gap-y-3">
          <div className="text-primaryTitle ">Title</div>
          <div className="flex gap-4 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="text-sm">Description</div>
          <div className="flex gap-x-4 text-sm">
            <div className="bg-primarySubContent px-3 py-1 rounded-md hover:text-primaryTitle">
              React
            </div>
            <div className="bg-primarySubContent px-3 py-1 rounded-md hover:text-primaryTitle">
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
