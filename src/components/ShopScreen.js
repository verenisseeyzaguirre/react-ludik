import React, { useEffect, useReducer } from 'react';

import { NavBar } from './NavBar';
import { ListItem } from './ListItem';
import { ShopAside } from './ShopAside';
import { shopReducer } from '../reducers/shopReducer';


const init = () => {
    return JSON.parse( localStorage.getItem('list') ) || [];
};

export const ShopScreen = () => {

    const [list, dispatch ] = useReducer(shopReducer, [], init )

    const handleAddNew = (product) => {

        if( list.includes(product)) {

            // dispatch({
            //     type: 'update',
            //     payload: product
            // });

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
