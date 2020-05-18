import * as actionTypes from './actions';

const initialState = {
        checkoutItem:[],
        totalPrice:0,
        totalDiscount:0,
        totalPayable:0,
        quantityDict:{}
}

const reducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            const newQuantityDict = state.quantityDict
            newQuantityDict[action.productName.name] = 1;
            const itemArray = state.checkoutItem;
            itemArray.push(action.productName)
            localStorage.setItem('selectedItems',JSON.stringify(itemArray));
            alert("Item added to cart");
            return {
                ...state,
                checkoutItem:itemArray,
                totalPrice:state.totalPrice+action.productName.actualPrice,
                totalDiscount:state.totalDiscount+(action.productName.actualPrice-action.productName.displayPrice),
                totalPayable:state.totalPayable+action.productName.displayPrice,
                quantityDict:newQuantityDict
            };
        case actionTypes.ADD_QUANTITY: 
            const quantity = state.quantityDict[action.productName.name] + 1;
            const newQuantityDictAdd = state.quantityDict;
            newQuantityDictAdd[action.productName.name] = quantity;
            return {
                ...state,
                totalPrice:state.totalPrice+action.productName.actualPrice,
                totalDiscount:state.totalDiscount+(action.productName.actualPrice-action.productName.displayPrice),
                totalPayable:state.totalPayable+action.productName.displayPrice,
                quantityDict:newQuantityDictAdd
            };
        case actionTypes.REMOVE_QUANTITY: 
            const quantityRemoved = state.quantityDict[action.productName.name] - 1;
            const newQuantityDictRemoved = state.quantityDict;
            newQuantityDictRemoved[action.productName.name] = quantityRemoved;
            return {
                ...state,
                totalPrice:state.totalPrice-action.productName.actualPrice,
                totalDiscount:state.totalDiscount-(action.productName.actualPrice-action.productName.displayPrice),
                totalPayable:state.totalPayable-action.productName.displayPrice,
                quantityDict:newQuantityDictRemoved
            };     
        default:
            return state;    
    }
};

export default reducer;