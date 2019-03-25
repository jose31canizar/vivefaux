import React from "react";
import Link from "next/link";
import "./index.styl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ path, icon, title, color }) => {
  console.log(path, icon, title, color);

  return (
    <span className="card">
      <Link href={path} className="card-link" tabIndex="-1">
        {/* <div className="card-content" style={{ backgroundColor: color }}>
          <FontAwesomeIcon icon={icon} color="#ffffff75" />
        </div> */}
        <div className="card-label">
          <label>{title}</label>
        </div>
      </Link>
    </span>
  );
};
export default Card;
