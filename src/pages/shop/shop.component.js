import React from 'react';
import ShopData from '../../shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
class ShopPage extends React.Component {
  state = {
    collections: ShopData,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({id, ...otherProps}) => (
          <PreviewCollection key={id} {...otherProps}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
