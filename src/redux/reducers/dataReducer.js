let initialState = {
    stableIndex: {},
    momentumIndex: {},
}

function dataReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "GET_UPLOAD_DATA":
            return {
                ...state,
                momentumIndex: payload.momentumIndex,
                stableIndex: payload.stableIndex,
            };
            default:
            return {...state};
    }
    
}

export default dataReducer;