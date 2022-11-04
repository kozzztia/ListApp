import React  from 'react';
import {Navigate, Outlet} from "react-router-dom";

interface PrivateRoutesHocInterface {
    isAuth: boolean | null,
    children?: React.ReactNode,
}


const PrivateRoutesHoc = ({isAuth , children} : PrivateRoutesHocInterface) => {

    if(!!isAuth) return (
        <Outlet/>

    )
    else return (
        <Navigate to="login"/>
    )
};

export default PrivateRoutesHoc;
