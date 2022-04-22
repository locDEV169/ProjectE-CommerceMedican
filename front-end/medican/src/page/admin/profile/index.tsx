import { default as Form } from "antd/es/form";
import "antd/es/form/style/index.css";
import { default as Input } from "antd/es/input";
import "antd/es/input/style/index.css";
import { default as React } from "react";
import SiderBarProfile from "../layouts/slider-bar";
import "./style.scss";

interface User {
    username?: String;
    email?: String;
    password?: String;
    fullName?: String;
    address?: String;
    phoneNumber?: Number;
    roles?: String[];
}

export default function EmailPage() {
    const [form_Email] = Form.useForm();
    const [form_Password] = Form.useForm();

    const onSubmitEmail = (values: User) => {
        console.log(values);
    };

    const onSubmitPassword = (values: User) => {
        console.log(values);
    };

    return (
        <div className="grid-x">
            <SiderBarProfile />
            <div className="large-9 cell small-order-1 large-order-2">
                <div className="profile">
                    <h1>E-mail &amp; Password</h1>
                    <Form
                        className="rows"
                        id="change_email"
                        onFinish={onSubmitEmail}
                        form={form_Email}
                    >
                        <h2>Change E-mail</h2>
                        <div className="rows">
                            <div className="columns">
                                <label className="current_email">
                                    Current Email: loc16910@gmail.com{" "}
                                </label>
                            </div>
                            <div className="columns">
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your e-mail!",
                                        },
                                        {
                                            type: "email",
                                            message:
                                                "The input is not valid E-mail!",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="abc@email.com"
                                        style={{ borderRadius: "10px" }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="columns">
                                <button className="button small">Submit</button>
                            </div>
                        </div>
                    </Form>
                    <Form
                        id="change_password"
                        onFinish={onSubmitPassword}
                        form={form_Password}
                    >
                        <h2>Change Password</h2>
                        <div className="rows">
                            <div className="columns">
                                <Form.Item
                                    name="currentPassword"
                                    label="Current Password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                        {
                                            pattern: /^.{6,40}$/,
                                            message:
                                                "Password must be minimum 6 characters, maximum of 40 characters,",
                                        },
                                    ]}
                                >
                                    <Input.Password style={{ borderRadius: "10px" }}/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="New Password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                        {
                                            pattern: /^.{6,40}$/,
                                            message:
                                                "Password must be minimum 6 characters, maximum of 40 characters,",
                                        },
                                    ]}
                                >
                                    <Input.Password style={{ borderRadius: "10px" }}/>
                                </Form.Item>
                                <Form.Item
                                    name="confirm_password"
                                    label="Confirm Password"
                                    dependencies={["password"]}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please confirm your password!",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (
                                                    !value ||
                                                    getFieldValue(
                                                        "password"
                                                    ) === value
                                                ) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    new Error(
                                                        "Password are not matching"
                                                    )
                                                );
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password style={{ borderRadius: "10px" }}/>
                                </Form.Item>
                            </div>
                            <div className="columns">
                                <button className="button small">Submit</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
