import React, {useContext} from 'react';
import {Button, Divider, Form, Input} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import UserContext from "../UserContext/UserContext";

interface LoginInterface {
    username:string;
    password:string;
}
interface SetIsAuthInterface {
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPage = ({setIsAuth} :SetIsAuthInterface) => {
    const state = useContext(UserContext)
    function searchedIsAuthedUser (e : LoginInterface){
        state.map(item => item.user === e.username && item.password === e.password&&console.log(item))
    }
    const navigate = useNavigate()
    function login(e: LoginInterface) {
        // setIsAuth(prev => !prev);
        // navigate("/main" );
        searchedIsAuthedUser(e)
    }
    return (
        <>
            <Divider orientation={"left"}><LoginOutlined style={{color:"red"}}/></Divider>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={(e)=>login(e)}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default LoginPage;
