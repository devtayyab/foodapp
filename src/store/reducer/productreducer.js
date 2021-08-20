export default (state= [], action)=>{
console.log(action)
console.log(state)
  switch(action.type){

    case "GETPRODUCT":
        return state = action.payload
        case "SEARCH":
          return state = action.payload
          case "DETAIL":
            return  [action.payload]
    default: 
        return state
  }
    
}