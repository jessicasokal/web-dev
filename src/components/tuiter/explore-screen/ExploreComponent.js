import PostSummaryList from "../post-summary-list";
import React from "react";
import "../explore.css";

const ExploreComponent = () => {
    return(
        <>
            <div>
                <div className="row pb-2">
                    <div className="col-11 pe-0 me-0">
                        <div className="wd-text-container">
                            <span className="wd-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" placeholder="Search Tuiter" className="ps-5 wd-search_bar wd-text-area"/>
                        </div>
                    </div>
                    <div className="col-1 pt-2 ps-2 float-end">
                        <i className="fa-solid fa-gear fa-2x wd-gear-changes"></i>
                    </div>
                </div>
                <div className="row ps-2 me-2">
                    <ul className="nav nav-tabs wd-top-tabs wd-smaller-tabs m-1 pt-2">
                        <li className="nav-item wd-smaller-tabs">
                            <a className="nav-link active" href="../for-you.html">For you</a>
                        </li>
                        <li className="nav-item wd-smaller-tabs">
                            <a className="nav-link" href="../trending.html">Trending</a>
                        </li>
                        <li className="nav-item wd-smaller-tabs">
                            <a className="nav-link" href="../news.html">News</a>
                        </li>
                        <li className="nav-item wd-smaller-tabs">
                            <a className="nav-link" href="../sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-block wd-smaller-tabs">
                            <a className="nav-link" href="../entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
                <div className="row p-0 me-2">
                    <div className="card p-0 m-2">
                        <img src="../../labs/a4/bootstrap/starship.jpg" alt="SpaceX's Starship"
                             className="wd-main-image wd-no-rounding card-img p-0"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="wd-spacex-text">SpaceX's Starship</h5>
                        </div>
                    </div>
                </div>
            </div>
        <PostSummaryList/>
        </>
        );
}

export default ExploreComponent;
