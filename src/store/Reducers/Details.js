const initstate ={
    name :'',
    email :'',
dob:'',
addr:'',
phno:'',
devt:'',
oss:'',
dbs:'',
coc:'',
secb:'',
secp:'',
highb:'',
highp:'',
gender:''
}
const Details =(state=initstate,action) =>{
switch(action.type){
    case 'UPDATE_EVENT_SUCCESS':
        window.open('/spersonal','_self')
        return{...state}
    default:
        return {...state}
}
}
export default Details