import { ADD_ITEM, REMOVE_ITEM, MODIFY_ITEM } from "../actionType";

export const AddItem = (name, price) =>({
    type: ADD_ITEM,
    payload:{
        name: name,
        price: price
    }
});

export const RemoveItem = (name) =>({
    type: REMOVE_ITEM,
    payload:{
        name: name
    }
});

export const ModifyItem = (name, price) =>({
    type: MODIFY_ITEM,
    payload:{
        name: name,
        price: price
    }
})