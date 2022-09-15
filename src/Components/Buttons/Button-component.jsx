
import './Buttons.scss';


const Button = ({content, style, ...others})=>{

    return(
        <button  className={` ${style} btns `} {...others}>{content}</button>
    )
}

export default Button;