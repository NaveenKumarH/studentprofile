const initState={
    addError:null
    
}
const Event = (state = initState,action) => {
    switch(action.type){
        case 'ADD_EVENT_SUCCESS':
            return {
                
            }
case 'ADD_EVENT_ERROR':
    
    return{
        
    }
    default:
        return state
    }

}
export default Event;