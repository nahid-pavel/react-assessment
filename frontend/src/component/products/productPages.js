import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './products/Products';
import ProductItem from './products/ProductItem';

export default function ProductPages() {
    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/:id" component={ProductItem} />

        </Switch>
    )
}
