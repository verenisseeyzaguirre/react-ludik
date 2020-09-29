import React from 'react';

import { ItemSelected } from './ItemSelected'


export const ShopAside = ( {list, handleDelete} ) => {

    const total = list.reduce((acc, element) => (
        acc + ( element.qty * element.price.amount)), 0);

    return (
        <aside className='aside__sidebar'>

            <div>
                <h1>Kosarica</h1>
            </div>

            {
                list.map( product => (
                    <ItemSelected 
                    key={product.id}
                    product = { product }
                    handleDelete = {handleDelete}
                    />
                ) )
            }
            
            
            {
                (total > 0) &&
                <div>
                    <hr/>
                    <div className='aside__total'>
                        <h3 className='aside__text'>Total</h3>
                        <p> { total } Kn </p>
                    </div>
                </div>
            }


        </aside>
    )
}
