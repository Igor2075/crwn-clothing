import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
    firestore,
    convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "../collection/collection";
import CollectionOverview from "../../components/collection-overview/collection-overview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shoppage extends React.Component {
    state = {
        loading: true,
    };
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections");
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
            async (snapshot) => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({ loading: false });
            }
        );
    }

    render() {
        const match = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shoppage);
