const WhoToFollowListItem = (who) => {
    return (`
            <div class="list-group wd-no-rounding">
                <div class="list-group-item">
                    <div class="row">
                       <div class="col-xxl-2 col-xl-2 col-lg-2">
                            <img src=${who.avatarIcon} class="wd-who-to-follow-pictures m-1 me-3"/>
                       </div>
                    
                       <div class="col-xxl-6 col-xl-6 col-lg-6">
                            <div class="row">
                            <div class="wd-white fw-bold wd-smaller">${who.userName} 
                                <i class="fa-solid fa-circle-check wd-white"></i>
                            </div>
                            </div>
                            <div class="row">
                                <div class="wd-white wd-smaller">@${who.handle}</div>
                            </div>
                        </div>
                    
                        <div class="col-xxl-4 col-xl-4 col-lg-4 pt-2 float-end">
                            <a href="../follow.html"
                            class="btn btn-primary btn-block rounded-pill">
                            Follow</a>
                        </div>                 
                    </div>
                </div>
            </div>        
`);
}

export default WhoToFollowListItem;