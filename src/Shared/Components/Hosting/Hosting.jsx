import { memo } from "react";
import HostingItem from "./HostingItem";
import MainTitle from "../MainTitle/MainTitle";

const Hosting = ({title}) => {
   return (
     <div className="hosting py-5" id="hosting">
       <div className="container">
         <MainTitle title="Hosting Prices" />
         <div className="row justify-content-center">
           <HostingItem />
         </div>
       </div>
     </div>
   );
}
export default memo(Hosting);