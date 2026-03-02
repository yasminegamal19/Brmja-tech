import { memo } from "react";
import "./MainTitle.css";

const MainTitle = ({ title, align = "center", desc }) => {
  return (
    <div className={`title ${align}`}>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7">
      <h2>{title}</h2>
      <p className="pb-2" >{desc}</p>
      </div>
      </div>
    </div>
  );
};

export default memo(MainTitle);
