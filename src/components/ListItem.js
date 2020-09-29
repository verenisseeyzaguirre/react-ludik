import React from 'react';

import { ItemShop } from './ItemShop';
import { products } from '../data/products';

export const ListItem = ( { handleAddNew } ) => {
    return (
        <div className='containerproducts'>
            
            {
                products.map( product => (
                    <ItemShop
                        key={product.id}
                        product = { product }
                        handleAddNew = {handleAddNew}
                    />
                ) )
            }

        </div>
    )
}