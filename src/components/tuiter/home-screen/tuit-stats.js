import {useDispatch} from "react-redux";
import {updateTuit} from '../../../actions/tuits-actions';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
            <div className={'d-flex justify-content-between'}>
                <div><i className="fa-regular fa-comment"/> {40}</div>
                <div><i className="fa-solid fa-retweet"/> {46}</div>
                <div>
                    Likes: {tuit.likes}
                    <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1
                    })} className="far fa-thumbs-up ms-2"/>
                </div>
                <div>
                    Dislikes: {tuit.dislikes}
                    <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    })} className="far fa-thumbs-down ms-2"/>
                </div>
                <div><i className="fa-regular fa-share-from-square"/></div>
            </div>

);
}
export default TuitStats;
