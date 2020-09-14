const initialState = {
    generations: [],
    messagge: ""
};

const generationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GENERATION_LOADING":
            return {
                ...state,
                generations: [],
                messagge: action.payload
            }

        case "GENERATION_SUCCESS": 
            return {
                ...state,
                generations: action.payload,
                messagge: ""
            
        }
        case "GENERATION_FAILURE": 
            return {
                ...state,
                generations: [],
                messagge: action.payload
            }
            default:
                return state
        
    }
}

export default generationReducer;