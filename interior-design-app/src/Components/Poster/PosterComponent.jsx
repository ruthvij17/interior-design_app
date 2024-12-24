import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/design/${props.d_id}`}>
      <div className="flex flex-col items-start gap-2 px-1 py-3">
        <div className="h-40 md:h-80">
          {/* add image path from web */}
          <img
            src={props.image}
            alt="post"
            className="h-full w-full rounded-md"
          />
        </div>
        <h3 className={`text-lg font-bold`}>
          {/* poster title */}
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
