import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import {connect} from 'react-redux'
export class SPersonal extends Component {
    
state={
   
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
 
    render() {
        
        const firestore=firebase.firestore()
        const docRef = firestore.collection('details').doc(this.props.firebase.auth.uid);
     
       docRef.get().then((doc)=>{
           console.log(doc.data())
           this.setState(doc.data())
           if(this.state.gender==='m'){
               this.setState({...this.state,gender:'Male'})
           }
           else if(this.state.gender==='f'){
            this.setState({...this.state,gender:'Female'})
           
           }
        }).catch((err)=>{
            console.log(err)
        })
        
        return (
            <div className="container white-text">
             
                <br></br>
                <div className="row s1 center">
<div className="col offset-s5 center"><div >Personal Information</div> </div><div className="col right"> <Link className="btn green white-text" to='/spersonale'>Edit</Link></div>

</div>
<div className="row s12">
<div className="col s6">
                <div className="row s1">
                    <div className="col s3">
                    <div>Student Name </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s3">
                    <div>{this.state.name}</div>
                    </div>
                  

                </div>
                
                <div className="row s1">
                    <div className="col s3">
                    <div htmlFor="email">Email </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >{this.state.email}</div>
                    </div>
                  

                </div>


                <div className="row s1">
                    <div className="col s3">
                    <div htmlFor="date">D.O.B</div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >{this.state.dob}</div>
                    </div>
                  

                </div>



                <div className="row s1">
                    <div className="col s3">
                    <div>Address </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div className="text" >{this.state.addr}</div>
                    </div>
                  

                </div>



                <div className="row s1">
                    <div className="col s3">
                    <div>Phone Number </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div className="number" >{this.state.phno}</div>
                    </div>
                  

                </div>


                <div className="row s1">
                    <div className="col s3">
                    <div>Gender </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >
               {this.state.gender}
                </div>
                    </div>
                  
</div>
                </div>

</div>
                <div className="row s1 center">
<div >Skills</div>
</div>
<div className="row s1 ">
    <div className="col s2">Technical :</div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Languages </div><div className="col s1">
                    <div >:</div>
                    </div> <div className="col s2">
                    <div >
               {this.state.plang}
                </div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Development Tools </div><div className="col s1">
                    <div >:</div>
                    </div><div className="col s2">
                    <div >
               {this.state.devt}
                </div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Operating Systems </div><div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >
               {this.state.oss}
                </div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Databases </div><div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >
               {this.state.dbs}
                </div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 ">Co-Curricular :</div><div className="col s2">
                    <div >
               {this.state.coc}
                </div>
                    </div>
</div>







<div className="row s1 center">
<div >Educational Information</div>

</div>
<div className="row s1 ">
    <div className="col s2"> Secondary</div><div className="col s1">
                    <div >:</div>
                    </div><div className="col s2">
                    <div ><span>Board : </span>
               {this.state.secb}
                </div>
                    </div>
                    <div className="col s2">
                    <div ><span>Percentage : </span>
               {this.state.secp}
                </div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2"> Higher  Secondary</div><div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div ><span>Board : </span>
               {this.state.highb}
                </div>
                    </div>
                    <div className="col s2">
                    <div ><span>Percentage : </span>
               {this.state.highp}
                </div>
                    </div>
</div>
<br></br>
<div className="row center">
<Link className="btn red white-text center offset-s6 col s1 pad2x" to='/student'>Back</Link>
</div>     
            
            </div>
        )
    }
}

const mapstate =(state) =>{
    return{
        
        ...state
    }
}



export default connect(mapstate)(SPersonal)
