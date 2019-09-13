
const initState={
    authError:null,
    
}
const Auth = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {...state,authError: 'Login Failed'}
case 'LOGIN_SUCCESS':
    window.open('/student','_self')
    
    return{
        ...state,authError:null
    }
  case 'LOGOUT_SUCCESS':
      return{
          ...state,authError:null
      }
      case 'SIGNUP_SUCCESS':
            window.open('/student','_self')
            
 return{

 }  
    default:
        return state
    }

}
export default Auth;