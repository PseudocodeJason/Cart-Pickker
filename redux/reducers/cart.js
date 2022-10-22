import { ADD_ITEM, REMOVE_ITEM, MODIFY_ITEM } from "../actionType/index";
const initial_state ={
    itemList: [],
};

export default(state = initial_state, action) => {
    if(action.type == ADD_ITEM){
        var myArray = [...state.itemList, {item: action.payload.name, price: action.payload.price}];

        console.log(JSON.stringify(action));
        console.log(JSON.stringify(myArray));
        
        return{
            ...state,
            itemList: myArray
        } 
    }else if (action.type == REMOVE_ITEM){
        return {
            ...state,
            itemList: state.itemList.filter(
              (thing) => thing.item !== action.payload.name
            ),
          };
    }else if (action.type == MODIFY_ITEM){
        console.log(JSON.stringify(action))
        var index = state.itemList.findIndex(item => item.item === action.payload.name)
        var myArray = [...state.itemList]
        console.log(JSON.stringify(index))
        myArray[index].price = action.payload.price
        console.log(JSON.stringify(myArray))
        
        return{
            ...state,
            itemList: myArray
        }
    }
    return state
}