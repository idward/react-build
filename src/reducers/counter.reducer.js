const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            var {caption} = action.payload;
            return {...state, [caption]: state[caption] + 1};
        case 'DECREMENT':
            var {caption} = action.payload;
            return {...state, [caption]: state[caption] - 1};
        default:
            return state;
    }
}

export default reducer;