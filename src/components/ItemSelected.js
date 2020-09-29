import React from 'react'

export const ItemSelected = ( { product, handleDelete } ) => {

    const { name, image, price } = product;
    const { currency } = price;

    const nameShort = name.substring(0,15)

    // product.qty = 1;
    const subTotal = product.qty*price.amount

    return (
        <div className='selectedcard' >
            <i 
                className='far fa-times-circle pointer end'
                onClick= { () => handleDelete(product.id)  }
            ></i>
            <div className='flexrow' >
                <img className='selectedcard_img' src={image} alt="img"/>
                <div className='flexcolumn'>
                    <div className='flexrow'>
                        <p className='selectedcard_text'>  { product.qty  } </p>
                        <p className='selectedcard_text'> {nameShort} </p>	 
                    </div>   
                    <p className='selectedcard_text'> Total : {subTotal} {currency} </p>
                </div>
            </div>
        </div>
    )
}
