
import './Buttons.scss';


const Button = ({content, style, ...others})=>{

    return(
        <button className={` ${style} btns `}>{content}</button>
    )
}

export default Button;