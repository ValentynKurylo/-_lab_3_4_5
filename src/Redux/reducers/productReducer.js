const initialState = {
    products: [],
    product: {}
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}