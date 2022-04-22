import { default as React, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "../layouts";

const HomePage = React.lazy(() => import("../page/home"));
const LoginPage = React.lazy(() => import("../page/login"));
const LogoutPage = React.lazy(() => import("../page/logout"));
const RegisterPage = React.lazy(() => import("../page/register"));
const ProductDetail = React.lazy(() => import("../page/products/detail"));
const QuotePage = React.lazy(() => import("../page/quote"));


export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <MainLayout>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/logout" component={LogoutPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path='/products/:slug/:id' component={ProductDetail} />
                    <Route exact path="/quote" component={QuotePage} />
                </MainLayout>
                {/* <Route path='*' exact component={ErrorPage} /> */}
            </Switch>
        </Suspense>
    );
}