
export const name = (state = { name: '' }, action) => {

    switch (action.type) {
        case 'NAME_CHANGE':
            return { ...state, name: action.payload };
        default:
            return state;

    }


}