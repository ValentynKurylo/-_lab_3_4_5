const initialState = {
    demands: []
}

export const DemandReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEMAND':
            return {
                ...state,
                demands: action.payload,
            }
        default:
            return state
    }
}