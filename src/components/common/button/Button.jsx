import './Button.css';

const Button = ({ text, width, height, textSize, action }) => {
    return (
        <div className="button"
            style={{
                width: width,
                height: height,
                fontSize: textSize
            }}
            onClick={action}
        >
            {text}
        </div>
    )
}

export default Button