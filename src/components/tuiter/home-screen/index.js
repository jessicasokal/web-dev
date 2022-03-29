import TuitList from "./tuit-list";
import WhatsHappening from "./whats-happening";
import NavigationItem from "../navigation-sidebar/NavigationItem";

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;