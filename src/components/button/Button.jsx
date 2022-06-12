import './Button.css';

const Button = ({ text, width, height, textSize }) => {
    return (
        <div className="button"
            style={{
                width: width,
                height: height,
                fontSize: textSize
            }}    
        >
            {text}
        </div>
    )
}

export default Button