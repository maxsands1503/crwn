import CartActionType from "./cart.type";

const INITIAL_STATE = {
    isHidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.SHOW_HIDE_CART_DROP_DOWN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}
