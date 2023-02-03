export default function Reducer(state = {images: {}}, action){
    switch(action.type){
       case "set":
            return {images: action.images};
       case "get":
            return state;
       default: 
            return state;
}
}