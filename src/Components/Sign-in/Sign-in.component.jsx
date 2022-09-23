import Input from "../Search-inputs/Search-component";
import {useState} from 'react';
import Buttons from '../Buttons/Button-component';
import {SingINWithGoogle, signInEmailAndPass, createUser} from '../../Firebase/firebase';
import { async } from "@firebase/util";
import './Sign-in.scss';
import {ReactComponent as Icon} from './Assets/Logo.svg'
import {ReactComponent as Avatar} from './Assets/Avatar.svg'
let DefaultForm= {
    email:'',
    password:''
}


const SignIN = ()=>{
    const [form, setForm] = useState(DefaultForm);
    const [errorMessage, setErrorMessage] = useState();

    let {email, password}= form;

    let changeHandlar = (event)=>{
    let {value,name} = event.target;
    
     setForm({...form, [name]: value})
}

    let SubmitHandlar = (e)=>{
        e.preventDefault();

        // e.stopPropagation();

    }

    const googleSingIN= async ()=>{
        console.log('Hi')
        let res = await SingINWithGoogle();
        
        createUser(res.user)
      
    }
    
   


    const signInHandlar = async ()=>{

      try {
        let res = await signInEmailAndPass(email, password);
        
      } catch (error) {
        

      setErrorMessage(error.message)
        
       
      }  
        // console.log(res)
    }






    return(
   <div className="signIn">
   
  <div  className="signIN-Conent">
    <div    className="Avatar-con">
         <Avatar className='Avatar'></Avatar>
         </div>
 
    <form onSubmit={SubmitHandlar}>
    <span className={errorMessage ? 'error-handlars' : ''}>{errorMessage}</span>
        <h2>Have an account?</h2>
        <h4>Sign in</h4>

       
    <Input type='email' required value={email} onChange={changeHandlar} name='email' placeholder={'email'} label='Email'></Input>
    <Input type='password' required value={password} onChange={changeHandlar} name='password' placeholder={'password'} label='Password'></Input>

  
      <Buttons type='submit' style='blue' content={'Sign in'}  onClick={signInHandlar}></Buttons>
    
    <div    className="google-singIN"> 
    <p>
        Or
    </p>
    <Buttons  onClick={googleSingIN} content={'Sign in with Google'} style={'blue'} type='button'></Buttons>
    </div> 
    </form>
    </div>

    <div    className="signIN-Banner">
        <Icon className='Icon'></Icon>
    </div>
   </div>
    )
}


export default SignIN;