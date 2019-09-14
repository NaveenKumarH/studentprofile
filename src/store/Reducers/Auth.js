import {database} from 'firebase'

const initState={
    authError:null,
    data:''
}
const Auth = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {...state,authError: 'Login Failed'}
case 'LOGIN_SUCCESS':
        const docRef = database.collection('users').doc(action.uid);
            
        docRef.get().then((doc) => {
           
                 this.setState( doc.data());
               
            });
        if(this.state.data.type==='student'){
            window.open('/student','_self')
          }
          else{
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