import Button from "../Buttons/Button-component";
import Input from "../Search-inputs/Search-component";
import {useState} from 'react';
import './signUp.scss';

let defaultForm = {
    username:'',
    email:'',
    password:'',
    comfirmPassword:''

}



const SignUp = ()=>{
    let [form, setform] = useState(defaultForm);

    let {username, email, password, comfirmPassword}= form;


    let changeHandlar = (event)=>{
        let {name,value}= event.target;

        setform({...form, [name]: value})
        

    }

let submitHandlare = (e)=>{
    e.preventDefault();
    setform(defaultForm);
}



    return(
        <div    className="signUp-Container">
        <form onSubmit={submitHandlare}> 
        <h2>Don't have an account?</h2>
        <span>Sign up</span>
        <Input type='text' onChange={changeHandlar} name='username' value={username} required></Input>
        <Input type='email'onChange={changeHandlar}  name='email' value={email} required></Input>
        <Input type='password' onChange={changeHandlar}  name='password' value={password} required></Input>
        <Input type='password' onChange={changeHandlar}  name='comfirmPassword' value={comfirmPassword} required></Input>
        
        <Button style='black' content={'Sign up'}></Button>
          </form> 
        </div>
    )
}

export default SignUp;