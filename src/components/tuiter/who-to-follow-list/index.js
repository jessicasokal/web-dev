import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
            <ul className="list-group">
                {
                   who.map(
                       person => {
                           return (
                               <WhoToFollowListItem who={person}/>
                           );
                       })
                }
            </ul>
); }

export default WhoToFollowList;
