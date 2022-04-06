import '../explore.css';
import {useDispatch} from 'react-redux';
import TuitStats from "./tuit-stats";
import {deleteTuit}
    from "../../../actions/tuits-actions";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <div className='row pe-1'>
                <div className="d-none d-sm-block col-sm-1">
                    <img alt={tuit.handle} src={tuit.avatar_image} className='wd-who-to-follow-pictures'/>
                </div>
                <div className="d-none d-sm-block col-sm-11">
                    <div className={"row ps-3"}>
                        <div>
                            <div><span className='wd-subject-text'>{tuit.postedBy.username}</span>
                                <span className={'wd-topic-text ps-2'}>{`@${tuit.handle}`}</span>
                                <i className="fas fa-remove float-end"
                                   onClick={() => deleteTuit(
                                       dispatch, tuit)}/></div>

                        </div>
                        <div>
                            {tuit.tuit}
                        </div>
                        <div className={'pt-2'}>
                            {tuit.image_there && <img alt={tuit.handle} src={tuit.image} className={'wd-home-images'}/>}
                        </div>
                    </div>
                    <div className={"row pt-3 ps-3"}>
                        <TuitStats tuit={tuit}/>
                    </div>

                </div>
            </div>
        </li>
    );
};

export default TuitItem;
