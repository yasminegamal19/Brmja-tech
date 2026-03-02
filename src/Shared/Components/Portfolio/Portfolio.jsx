import { memo } from "react";
import MainTitle from "../MainTitle/MainTitle";
import PortfolioItem from "./PortfolioItem";
const Portfolio = ({title, desc}) => {
    return (
      <div className="portfolio py-5" id="portfolio">
        <div className="container">
          <MainTitle
            title="Our Work"
            desc="A collection of the best projects we have developed"
          />
          <div className="row">
              <PortfolioItem />
          </div>
        </div>
      </div>
    );
}

export default memo(Portfolio);