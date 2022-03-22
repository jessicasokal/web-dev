import React from "react";
import options from "./navigation-options.json";
import NavigationItem from "./NavigationItem";

const NavigationSidebar = (
    {
        active = 'Explore'
    }) => {
    return(
        <>
          {
            options.map(option => {
              return (<NavigationItem activeItem={active} item={option}/>);
            })
          }
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
