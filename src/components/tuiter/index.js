import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore-screen/ExploreComponent"
import './explore.css';

const Tuiter = () => {
  return(
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="Explore"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6">
        <ExploreComponent/>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <div className="list-group wd-top-rounding wd-subject-text wd-no-bottom-rounding">
              <div className="list-group-item">
                  Who to follow
              </div>
          </div>
        <WhoToFollowList/>
      </div>
    </div>
)
};

export default Tuiter;
