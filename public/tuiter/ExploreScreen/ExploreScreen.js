import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js"
import PostSummaryList from "../PostSummaryList/index.js"
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
$('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-sm-10 col-md-10 col-lg-6">
        ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <div class="list-group wd-top-rounding wd-subject-text wd-no-bottom-rounding">
               <div class="list-group-item">
                Who to Follow
                </div>
            </div>
            <div class="list-group wd-bottom-rounding">
                ${WhoToFollowList()}
            </div>
            
        </div>
        </div>

    `);
})($);


