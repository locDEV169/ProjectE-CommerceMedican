/* eslint-disable react-hooks/exhaustive-deps */
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useEffect, useRef, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { userRows } from "../../../dummyData";
import api from './../../../constants/api';
import "./userList.css";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const [state, setState] = useState({ dataUser: [] });
    const urlApi = `/user/list-user`;
    const mountStack = useRef({ [urlApi]: true }).current;
    const history = useHistory();

    async function getDataList() {
        try {
            const response = await api.get(`${urlApi}`)
            const { data: dataUser } = response
            if (mountStack[urlApi]) {
                return setState((prev) => ({
                    ...prev,
                    dataUser: dataUser,
                }));
            }
        } catch (err) {}
    }

    useEffect(() => {
        getDataList();
        history.listen((location) => {
            mountStack[urlApi] && getDataList();
        });
        return () => {
            mountStack[urlApi] = false;
        };
    }, [getDataList()]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg"
                            src={params.row.avatar}
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <EditOutlined className="userListEdit" />
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <div className="userTitleContainer">
                <h1 className="userTitle">List User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">
                        <AddCircleOutlineIcon />
                        <p>Create</p>
                    </button>
                </Link>
            </div>
            <DataGrid
                rows={state.dataUser.map((row) => {
                    return row;
                })}
                getRowId={(r) => r.id}
                id="id"
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
