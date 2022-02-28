import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
//import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";

$('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4">
            ${WhoToFollowListItem({   avatarIcon: '../virgingalactic.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },)}
        </div>

    `);



