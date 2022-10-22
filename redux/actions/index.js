import { ADD_ITEM, REMOVE_ITEM, MODIFY_ITEM, HIDE_API, SHOW_API } from "../actionType";

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

export const ShowApi = (list) =>({
    type: SHOW_API,
    payload:{
        list: list
    }
})

export const HideApi = () =>({
    type: HIDE_API,
    payload:{
    }
})