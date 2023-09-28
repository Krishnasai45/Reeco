import tableData from '../table.json'
const initialState = {
    data: tableData,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM':
            // Find the item in the data array and update it
            const updatedData = state.data.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            return { ...state, data: updatedData };
        default:
            return state;
    }
};
export default reducer