import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import "./productList.css";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img
                            className="productListImg"
                            src={params.row.img}
                            alt=""
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <EditOutlined className="productListEdit" />
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product List</h1>
                <Link to="/new-product">
                    <button className="productAddButton">
                        <AddCircleOutlineIcon /> <p>Create</p>
                    </button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
