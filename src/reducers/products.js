import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
    var index = -1;
    var {id, product} = action;
    switch(action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_PRODUCT:
            state.push(product)
            return [...state]

        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            if(index !== -1) {
                state[index] = product;
            }
            return [...state]
            
        default: return [...state];
    }
};

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
            return result;
        }
    });
    return result;
}

export default products;