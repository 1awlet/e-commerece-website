
import './Buttons.scss';


const Button = ({content, style, ...others})=>{

    return(
      <div>

    <button  className={` ${style} btns `} {...others}>{content}</button>
    </div>
    )
}

export default Button;