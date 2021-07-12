import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collection-overview/collection-overview";

const Shoppage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={Collection}
            />
        </div>
    );
};

export default Shoppage;
