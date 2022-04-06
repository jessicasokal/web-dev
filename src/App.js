import './App.css';
import React from 'react';
//import './vendors/bootstrap/bootstrap.min.css';
//import './vendors/bootstrap/bootstrap.min.css';
//import './vendors/fontawesome/css/all.min.css';
// (linked cdns instead)
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreComponent from "./components/tuiter/explore-screen/ExploreComponent";
import HomeScreen from "./components/tuiter/home-screen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path=""
                               element={<Labs/>}/>
                    <Route path="labs"
                           element={<Labs/>}/>
                    <Route path="hello"
                           element={<HelloWorld/>}/>
                    <Route path="tuiter"
                           element={<Tuiter/>}>
                        <Route path="explore"
                               element={<ExploreComponent/>}/>
                        <Route path=""
                               element={<HomeScreen/>}/>
                    </Route>
                  </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

