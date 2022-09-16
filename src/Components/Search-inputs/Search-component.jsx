import './search.scss';

const Input = ({label,...attribute})=>{

    return(

       <div className='input-container'>
       
      <div  className='inputfields'>
       <input  {...attribute}></input>
       <label>{label}</label>

       </div>
       </div>
    )
}

export default Input;
