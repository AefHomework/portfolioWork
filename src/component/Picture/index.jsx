import React from "react";

const Picture = ({picture}) => {
  return (
    <div>
      <img
        src={picture}
        className="w-5/6 rounded-md border-4 border-primarySubContent"
        alt=""
      />
    </div>
  );
};

export default Picture;
