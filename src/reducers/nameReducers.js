
export const nameReducer = (state = { name: '', lastName: 'hernandez' }, action) => {

    switch (action.type) {
        case 'NAME_CHANGE':
            // console.log(state)
            return { ...state, name: action.payload };
        default:
            return state;

    }


}