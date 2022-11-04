import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button} from "antd";

const Landing = () => {
    return (
        <div>
            <Header >
                <h2 style={{color:"#eee"}}>Todo list</h2>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer> Use Ant Design & React</Footer>
        </div>
    );
};

export default Landing;
