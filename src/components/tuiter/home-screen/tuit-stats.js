import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
            <div className={'d-flex justify-content-between'}>
                <div><i className="fa-regular fa-comment"></i> {tuit.stats.comments}</div>
                <div><i className="fa-solid fa-retweet"></i> {tuit.stats.retuits}</div>
                <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                    {
                        !tuit.liked &&
                        <i className="far fa-heart me-1"></i>
                    }
                    {tuit.stats && tuit.stats.likes}
             </span>
                <div><i className="fa-regular fa-share-from-square"></i></div>
            </div>

);
}
export default TuitStats;