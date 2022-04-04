import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row pb-2">
                <div class="col-11 pe-0 me-0">
                    <div class="wd-text-container">
                    <span class="wd-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" placeholder="Search Tuiter" class="ps-5 wd-search_bar wd-text-area">
                    </div>
                </div>
            <div class="col-1 pt-2 ps-2 float-end">
                <i class="fa-solid fa-gear fa-2x wd-gear-changes"></i>
            </div>
           </div>
            <div class="row ps-2 me-2">
                <ul class="nav nav-tabs wd-top-tabs wd-smaller-tabs m-1 pt-2">
                    <li class="nav-item wd-smaller-tabs">
                    <a class="nav-link active" href="../for-you.html">For you</a>
                    </li>
                    <li class="nav-item wd-smaller-tabs">
                    <a class="nav-link" href="../trending.html">Trending</a>
                    </li>
                    <li class="nav-item wd-smaller-tabs">
                    <a class="nav-link" href="../news.html">News</a>
                    </li>
                    <li class="nav-item wd-smaller-tabs">
                    <a class="nav-link" href="../sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block wd-smaller-tabs">
                    <a class="nav-link" href="../entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
           <!-- image with overlaid text -->
            <div class="row p-0 me-2">
                <div class="card p-0 m-2">
                    <img src="../../labs/a4/bootstrap/starship.jpg" alt="SpaceX's Starship" 
                    class="wd-main-image wd-no-rounding card-img p-0"/>
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                <h5 class="wd-spacex-text">SpaceX's Starship</h5>
                </div>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
