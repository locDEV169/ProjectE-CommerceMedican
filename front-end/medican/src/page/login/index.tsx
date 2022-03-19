import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "antd/dist/antd.css";
import { default as React } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface User {
    username: string;
    password: string;
}

export default function LoginPage() {
    const onFinish = (values: User) => {
        return message.info(`Username: ${values.username}`);
    };

    return (
        <div id="article">
            <div className="grid-x grid-margin-x">
                <div className="large-8 cell">
                    <h2>Benefits to Being a Registered Labconco User</h2>
                    <ul>
                        <li>
                            <strong>Download information</strong>. One
                            registration provides immediate access to hundreds
                            of PDFs, CAD drawings and more.
                        </li>
                        <li>
                            <strong>Save time</strong>. No need to re-enter your
                            information; simply login to quickly download
                            documents and complete forms.
                        </li>
                        <li>
                            <strong>Stay connected</strong>. Access your account
                            any time to change your contact information and view
                            your previous requests for quote and purchases.
                        </li>
                    </ul>
                    <p>Thank you for registering with Labconco.</p>
                </div>
                <div className="large-4 cell">
                    <div className="callout secondary">
                        <h5>Log in to Labconco</h5>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Username!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to="/">
                                    Forgot password
                                </Link>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                            Or{" "}
                            <Link className="login-form-forgot" to="/">
                                Register
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
