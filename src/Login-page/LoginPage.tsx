import React from 'react';
import {Button, Divider, Form, Input} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

interface LoginInterface {
    username:string;
    password:string;
}
interface SetIsAuthInterface {
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPage = ({setIsAuth} :SetIsAuthInterface) => {
    const navigate = useNavigate()
    function login(e: LoginInterface) {
        console.log(e.username);
        console.log(e.password);
        setIsAuth(prev => !prev);
        navigate("/main");
    }
    return (
        <>
            <Divider orientation={"left"}><LoginOutlined style={{color:"red"}}/></Divider>
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
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
