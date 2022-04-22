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

export default function InformationPage() {
    const [form] = Form.useForm();

    const onSubmit = (values: User) => {
        console.log(values);
    };

    return (
        <div className="grid-x">
            <SiderBarProfile />
            <div className="large-9 cell small-order-1 large-order-2">
                <div className="profile">
                    <h1>Update Contact Information</h1>
                    <Form
                        className="rows"
                        id="change_email"
                        onFinish={onSubmit}
                        form={form}
                    >
                        <fieldset className="fieldset">
                            <legend>Personal</legend>
                            <div className="rows">
                                <Form.Item
                                    name="fullName"
                                    label="Full Name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your full name!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Full Name: Nguyen Van A" />
                                </Form.Item>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend>Contact</legend>
                            <div className="rows">
                                <div className="large-6 columns">
                                    <Form.Item
                                        name="address"
                                        label="Address"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your address!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Nguyen Van Linh" />
                                    </Form.Item>
                                </div>
                                <div className="large-6 columns">
                                    <Form.Item
                                        name="city"
                                        label="City"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your City!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Da Nang" />
                                    </Form.Item>
                                </div>
                                <div className="large-12 columns">
                                    <Form.Item
                                        name="country"
                                        label="Country"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your Country!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Viet Nam" />
                                    </Form.Item>
                                </div>
                                <div className="large-12 columns">
                                    <Form.Item
                                        name="phoneNumber"
                                        label="Phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your phone!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="012346789" />
                                    </Form.Item>
                                </div>
                            </div>
                        </fieldset>
                        <p><input type="submit" value="Save" name="submit" className="button" /></p>
                    </Form>
                </div>
            </div>
        </div>
    );
}
