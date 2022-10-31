import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Link to={"login"}>log</Link>
            <Link to={"main"}>main</Link>


            <Outlet/>
        </div>
    );
};

export default Landing;
