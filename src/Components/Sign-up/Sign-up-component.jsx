import Button from "../Buttons/Button-component";
import Input from "../Search-inputs/Search-component";
import {useState} from 'react';
import {emailAndPassAuth,createUser} from '../../Firebase/firebase';
import './signUp.scss';
import {ReactComponent as Logo} from './Assets/log.svg';
import {ReactComponent as Avatar} from './Assets/Avatar.svg';

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
  
}

    let signUpHandlar = async ()=>{
    
    if(password === comfirmPassword){
        let {user} = await emailAndPassAuth(email, password);
        let displayName = username;
        createUser(user, {displayName});
        setform(defaultForm);
    


    }else{
        console.log('Wrong input')
    }
     
    }



    return(
        <div    className="signUp-Container">
       
        <div    className="signUp-content">

        <div    className="Avatar-con">
            <Avatar className='Avatar'></Avatar>

        </div>
             <form onSubmit={submitHandlare}> 
        <h2>Don't have an account?</h2>
        <h4>Sign up</h4>
        <Input type='text' onChange={changeHandlar} name='username' value={username} required placeholder='.' label={'Username'}></Input>
        <Input type='email'onChange={changeHandlar}  name='email' value={email} required placeholder='.'    label={'Email'}></Input>
        <Input type='password' onChange={changeHandlar}  name='password' value={password} required placeholder='.' label={'Passowrd'}></Input>
        <Input type='password' onChange={changeHandlar}  name='comfirmPassword' value={comfirmPassword} required placeholder='.' label={'Comfirm Password'}></Input>
        <Button style='black' content={'Sign up'} onClick={signUpHandlar} type='submit'></Button>
          </form> 
          </div>
        <div className="signUp-card">
          
          <Logo className='logo'></Logo>

        </div>
         
        </div>
    )
}

export default SignUp;