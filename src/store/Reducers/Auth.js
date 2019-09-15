

const initState={
    authError:null,
    data:''
}
const Auth = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
          console.log(action.err)
            return {...state,authError: 'Login Failed'}
case 'LOGIN_SUCCESS':
 console.log(action)
     if(action.utype==='student')
     
        {  window.open('/student','_self')
    }
    else if(action.utype==='teacher'){
       
        window.open('/teacher','_self')
       
    }



        
        
    return{
        ...state,authError:null
    }
  case 'LOGOUT_SUCCESS':
      return{
          ...state,authError:null
      }
      case 'SIGNUP_SUCCESS':
          if(action.utype==='student'){
            window.open('/student','_self')
          }
          else{
              window.open('/teacher','_self')
          }
            
            
 return{

 }  
    default:
        return state
    }

}
export default Auth;