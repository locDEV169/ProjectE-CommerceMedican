import { default as Button } from "antd/es/button";
import "antd/es/button/style/index.css";
import "antd/es/checkbox/style/index.css";
import { default as Form } from "antd/es/form";
import "antd/es/form/style/index.css";
import { default as Input } from "antd/es/input";
import "antd/es/input/style/index.css";
import { default as notification } from "antd/es/notification";
import "antd/es/notification/style/index.css";
import { default as Select } from "antd/es/select";
import "antd/es/select/style/index.css";
import { default as Spin } from "antd/es/spin";
import "antd/es/spin/style/index.css";
import { default as React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../constants/api";
import "./style.css";

interface Props {
    onSubmit: (values: object) => void;
    sub_categories?: object;
}
interface Categories {
    id: number;
    name?: string;
}

interface State {
    dataSource: Categories[];
    dataValueUpdate: object[];
}

export default function SubCategoriesForm(props: Props) {
    const { onSubmit, sub_categories } = props;
    const [form] = Form.useForm();
    let history = useHistory();
    const [state, setState] = useState({
        dataSource: [],
        dataValueUpdate: [],
    });

    async function getDataList() {
        try {
            const response = await api.get("categories");
            const { totalRecords: totalRecords } = response.data.data;
            const response2 = await api.get(`categories?limit=${totalRecords}`);
            const { data: dataSource } = response2.data.data;
            setState((prev) => ({ ...prev, dataSource }));
        } catch (err) {
            notification.error({
                message: "Error is occured",
                description: "No data found.",
            });
        }
    }

    useEffect(() => {
        getDataList();
        form.setFieldsValue(sub_categories);
        return () => {
            form.setFieldsValue({});
        };
    }, []);

    const onChangeUpdate = (values) => {
        setState({ ...state, dataValueUpdate: values });
    };

    return (
        <div className="sub-categories-form">
            <h2>
                {sub_categories
                    ? "Update sub-categories"
                    : "Add sub-categories"}
            </h2>
            <Form
                onFinish={onSubmit}
                form={form}
                onValuesChange={onChangeUpdate}
            >
                <div className="sub-categories-form item">
                    <div className="sub-categories-form__item__left">
                        <Form.Item
                            className="sub-categories-form__item__left__input"
                            label="Sub-Category Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Name!",
                                },
                                {
                                    pattern:
                                        /^[a-zA-Z0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+(([a-zA-Z ])?[a-zA-Z0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*)*$/,
                                    message: "Sub-Category name is not valid",
                                },
                            ]}
                        >
                            <Input type="text" placeholder="Enter full name" />
                        </Form.Item>
                    </div>
                    <div className="sub-categories-form__item__right">
                        <Form.Item
                            name="categoryId"
                            label="Categories Name : "
                            rules={[
                                {
                                    required: true,
                                    message: "Please choose your categories!",
                                },
                            ]}
                        >
                            {state.dataSource.length > 0 ? (
                                <Select
                                    showSearch
                                    disabled={sub_categories && true}
                                    placeholder="Select a category"
                                    optionFilterProp="children"
                                    filterOption={(input, option: any) =>
                                        option.children
                                            .toLowerCase()
                                            .indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {state.dataSource.map(
                                        (category: Categories) => {
                                            return (
                                                <Select.Option
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </Select.Option>
                                            );
                                        }
                                    )}
                                </Select>
                            ) : (
                                <Spin size="large" />
                            )}
                        </Form.Item>
                    </div>
                </div>
                <div className="sub-categories-form__onSubmit">
                    <Form.Item>
                        <Button
                            type="primary"
                            className="btnSubmit"
                            htmlType="submit"
                            disabled={
                                Object.keys(state.dataValueUpdate).length > 0
                                    ? false
                                    : true
                            }
                        >
                            {sub_categories ? "Update" : "Submit"}
                        </Button>
                    </Form.Item>
                    <Button type="ghost" onClick={() => history.goBack()}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
