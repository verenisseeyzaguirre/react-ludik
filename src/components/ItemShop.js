import React from 'react';

export const ItemShop = ( { product, handleAddNew } ) => {

    const { name, image, price } = product;
    const { amount, currency, measureUnit } = price;

    product.qty = 1;
    
    return (  
        <div className='cardproduct' >
            <img className='cardproduct__img' src={image} alt={ name }/>
            <p className='cardproduct__name' > { name } </p>
            
            <div className='cardproduct__precio'>
                <p> { amount } </p>
                <p> { currency } /{ measureUnit } </p>
            </div>

            <button
                className='pointer'
                onClick={ () => handleAddNew(product) }
            > Agregar </button>

        </div>
    )
}
