import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import CreateNew from "./pages/news/new-create";
import NewProduct from "./pages/product/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/product/productList/ProductList";
import NewUser from "./pages/user/newUser/NewUser";
import User from "./pages/user/User";
import UserList from "./pages/user/userList/UserList";
import UpdateNew from "./pages/news/new-update/index";
import NewsList from "./pages/news/new-list";
import ListCategory from "./pages/category/list-category";
import AddCategoriesPage from "./pages/category/new-category";
import EditCategoriesPage from "./pages/category/update-category";
import ListSubCategory from "./pages/sub-category/list-sub-category";
import AddSubCategoriesPage from "./pages/sub-category/add-sub-category";
import EditSubCategoriesPage from "./pages/sub-category/edit-sub-category";

function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/user/:userId">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route path="/new-product">
                        <NewProduct />
                    </Route>
                    <Route path="/news">
                        <NewsList />
                    </Route>
                    <Route path="/create-news">
                        <CreateNew />
                    </Route>
                    <Route path="/new/:id">
                        <UpdateNew />
                    </Route>
                    <Route path="/categories">
                        <ListCategory />
                    </Route>
                    <Route path="/new-category">
                        <AddCategoriesPage />
                    </Route>
                    <Route path="/category/:id">
                        <EditCategoriesPage />
                    </Route>
                    <Route path="/sub-categories">
                        <ListSubCategory />
                    </Route>
                    <Route path="/add-sub-category">
                        <AddSubCategoriesPage />
                    </Route>
                    <Route path="/sub-category/:id">
                        <EditSubCategoriesPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
