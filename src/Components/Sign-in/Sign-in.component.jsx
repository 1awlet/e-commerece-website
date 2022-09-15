import Input from "../Search-inputs/Search-component";
import {useState} from 'react';
import Buttons from '../Buttons/Button-component';
import {signINWithGoogle} from '../../Firebase/firebase';
let DefaultForm= {
    email:'',
    password:''
}


const SignIN = ()=>{
    const [form, setForm] = useState(DefaultForm);

    let {email, password}= form;

    let changeHandlar = (event)=>{
    let {value,name} = event.target;
    
     setForm({...form, [name]: value})
}

    let SubmitHandlar = (e)=>{
        e.preventDefault();

    }

let signINWithGoogle = async  ()=>{

    let res = await signINWithGoogle();



}


    return(
   <div>
    <form onSubmit={SubmitHandlar}>
    <Input type='email' required value={email} onChange={changeHandlar} name='email'></Input>
    <Input type='password' required value={password} onChange={changeHandlar} name='password'></Input>

    <Buttons type='submit' style='blue' content={'Sign in'}></Buttons>

    <Buttons type='button' style='blue' content={'Sign in with Google'} onClick={signINWithGoogle}></Buttons>
          
    </form>
    
   </div>
    )
}


export default SignIN;