import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import ProductPages from './component/products/productPages';
import Header from './header/Header';

export default function Routes() {
    return (
        <>
            <div className="header-wrapper">
                <Header />
            </div>
            <Switch>
                <Route exact path="/" component={ProductPages} />
                <Route path="/products" component={ProductPages} />
                <Route path="/account" component={AuthPage} />

            </Switch>
        </>
    )
}
