import '../../../vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import '../../../vendors/bootstrap/bootstrap.min.css';
import '../explore.css';

const WhoToFollowListItem = ({
    who = {
        "avatar": "java.png",
        "username": "Java",
        "handle": "Java"
    }
}) => {
    return (
            <div className="list-group wd-no-rounding">
                <div className="list-group-item">
                    <div className="row">
                       <div className="col-xxl-2 col-xl-2 col-lg-2">
                            <img src={who.avatar} className="wd-who-to-follow-pictures m-1 me-3"/>
                       </div>
                    
                       <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="row">
                            <div className="wd-white fw-bold wd-smaller">{who.username + ' '}
                                <i className="fa-solid fa-circle-check wd-white"></i>
                            </div>
                            </div>
                            <div className="row">
                                <div className="wd-white wd-smaller">@{who.handle}</div>
                            </div>
                        </div>
                    
                        <div className="col-xxl-4 col-xl-4 col-lg-4 pt-2 float-end">
                            <a href="../follow.html"
                            className="btn btn-primary btn-block rounded-pill">
                            Follow</a>
                        </div>                 
                    </div>
                </div>
            </div>        
);
}

export default WhoToFollowListItem;