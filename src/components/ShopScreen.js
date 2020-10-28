import React, { useEffect, useReducer } from 'react';

import { NavBar } from './NavBar';
import { ListItem } from './ListItem';
import { ShopAside } from './ShopAside';
import { shopReducer } from '../reducers/shopReducer';


const init = () => {
    return JSON.parse( localStorage.getItem('list') ) || [];
};

export const ShopScreen = () => {

    const [list, dispatch ] = useReducer(shopReducer, [], init );
    console.log(list);

    const handleAddNew = (product) => {

        // list.includes(product)
        if( list.findIndex(elem => elem.id === product.id) !== -1) {
            console.log(product);
            dispatch({
                type: 'update',
                payload: product
            });

        }  else {
            dispatch({
                type: 'add',
                payload: product
            });
        }

    }

    const handleDelete = ( productId) => {      
        dispatch({
            type :'delete',
            payload : productId
        });
    }

    useEffect( () => {
        localStorage.setItem('list', JSON.stringify( list ) )
    }, [list] )
    
    return (
        <div className='screencontainer' >
            <NavBar />
            <div className='maincontainer'>
                <ListItem 
                    handleAddNew = {handleAddNew}
                />
                <ShopAside
                    list = {list}
                    handleDelete = {handleDelete}
                />
            </div>
        </div>

    )
}
