import React from 'react';
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import './explore.css';
import '../../vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import '../../vendors/bootstrap/bootstrap.min.css';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";
import WhoToFollowList
    from "./who-to-follow-list";
import {combineReducers, createStore} from "redux";
const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});

const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <div className="list-group wd-top-rounding wd-subject-text wd-no-bottom-rounding">
                    <div className="list-group-item">
                        Who to follow
                    </div>
                </div>
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>
    );
};
export default Tuiter;
