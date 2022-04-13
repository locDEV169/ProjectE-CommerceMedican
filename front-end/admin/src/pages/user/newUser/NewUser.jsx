import { Form, message, Input, Select } from "antd";
import "antd/dist/antd.css";
import api from "./../../../constants/api";
import "./newUser.css";

const { Option } = Select;
export default function NewUser() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        api.post("auth/signup", { values })
            .then((res) => {
                message.success("User registered successfully!");
                // window.location.href = '/'
            })
            .catch((errors: ErrorType) => handlerError(errors));
    };

    const handlerError = (err: ErrorType) => {
        const status = err.response?.status;
        switch (status) {
            case 400:
                message.error(err.response.data.message);
                break;
            case 401:
                message.error("Invalid Register.Check form register");
                break;
            case 500:
                message.error("Request Register Failed");
                break;
            default:
                message.error("Request Register Failed");
        }
    };

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <Form className="newUserForm" onFinish={onFinish} form={form}>
                <div className="newUserItem">
                    <Form.Item
                        name="username"
                        label="User Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                            {
                                pattern: /^.{3,20}$/,
                                message:
                                    "Username must be minimum 3 characters, maximum of 20 characters,",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Username: abc"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your full name!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Full Name: Nguyen Van A"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                required: true,
                                message: "Please input your e-mail!",
                            },
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="abc@email.com"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                            {
                                pattern: /^.{6,40}$/,
                                message:
                                    "Password must be minimum 6 characters, maximum of 40 characters,",
                            },
                        ]}
                    >
                        <Input.Password
                            type="password"
                            placeholder="Password: abc123"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        name="phoneNumber"
                        label="Phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="012346789"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please input your address!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Viet Nam"
                            style={{ borderRadius: "10px" }}
                        />
                    </Form.Item>
                </div>
                <div className="newUserItem">
                    <Form.Item
                        label="Active"
                        name="role"
                        style={{ borderRadius: "10px" }}
                    >
                        <Select placeholder="Select a role for User" allowClear>
                            <Option value="[ROLE_ADMIN]">Admin</Option>
                            <Option value="[ROLE_USER]">User</Option>
                        </Select>
                    </Form.Item>
                </div>
                <button className="newUserButton">Create</button>
            </Form>
        </div>
    );
}
