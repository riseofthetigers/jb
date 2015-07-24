/*  A high order component to provide values from the store to the child
    USAGE:
    Component = connectToStores(Component, [Store], props => ({
      propertie: Store.get(props.someOtherPropertie)
    });

    then `propertie` is added to the components props
    Pretty much copied from https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
*/

import React from 'react'

export default function connectToStores(Component, stores, getStateFromStores) {
  return React.createClass({
    displayName: 'StoreConnection',
    getInitialState() {
      return getStateFromStores(this.props);
    },
    componentDidMount() {
      stores.forEach(store =>
        store.on('change', this.handleStoresChanged)
      );
    },
    componentWillUnmount() {
      stores.forEach(store =>
        store.removeListener('change', this.handleStoresChanged)
      );
    },
    handleStoresChanged() {
      if (this.isMounted()) {
        this.setState(getStateFromStores(this.props));
      }
    },
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  });
};
