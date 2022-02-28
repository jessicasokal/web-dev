const NavigationSidebar = () => {
    return(`
            <div class="list-group wd-no-bottom-rounding">
                <a class="list-group-item" href="../tuit.html">
                    <i class="fab fa-twitter"></i></a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../home.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none"><i class="fa-solid fa-house-chimney"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-house-chimney"></i> Home</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="explore.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-hashtag"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-hashtag"></i> Explore</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../notifications.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-bell"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-bell"></i> Notifications</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../messages.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-envelope"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-envelope"></i> Messages</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../bookmarks.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-bookmark"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-bookmark"></i> Bookmarks</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../lists.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-list"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-list"></i> Lists</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-rounding">
                <a class="list-group-item" href="../profile.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-user-astronaut"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-user-astronaut"></i> Profile</div>
                    </a>
            </div>
            
            <div class="list-group wd-no-top-rounding">
                <a class="list-group-item" href="../more.html">
                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <i class="fa-solid fa-circle-minus"></i></div>
                    <div class="d-none d-xl-block"><i class="fa-solid fa-circle-minus"></i> More</div>
                    </a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
