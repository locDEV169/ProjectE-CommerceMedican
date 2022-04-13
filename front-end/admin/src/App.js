import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/product/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/product/productList/ProductList";
import NewUser from "./pages/user/newUser/NewUser";
import User from "./pages/user/User";
import UserList from "./pages/user/userList/UserList";

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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
