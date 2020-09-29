
export const shopReducer = ( state = [] , action ) => {

    switch ( action.type ) {
        
        case 'add':
            return [...state, action.payload];

        // case 'update':
        //     return state.map(
        //             product => product.id === action.payload.id
        //             ? ''
        //             : product
        //         )
       

        case 'delete':
            return state.filter( product => product.id !== action.payload ); 

        default:
            return state; 
    }

}
   
