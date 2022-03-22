import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul class="list-group">
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
