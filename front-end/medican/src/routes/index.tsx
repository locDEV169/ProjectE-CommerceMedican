import { default as React, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainLayout } from '../layouts'

const HomePage = React.lazy(() => import('../page/home'))

export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <MainLayout>
                    {/* <Route exact path='/products/:slug/:id' component={ProductPage} />
                    <Route exact path='/catalog/:slug/:id' component={CatalogPage} />
                    <Route exact path='/category' component={CategoryPage} />
                    <Route exact path='/category/:slug/:id' component={DetailCategoryPage} /> */}
                </MainLayout>
                {/* <Route path='*' exact component={ErrorPage} /> */}
            </Switch>
        </Suspense>
    )
}
