import { useState } from 'react'
import './HoverImage.css'

const HoverImage = ({ image, text }) => {

    const [isHoverd, setIsHovered] = useState(false);

    return (
        <div className="hover-image" 
            onMouseEnter={(e) => setIsHovered(true)} 
            onMouseLeave={(e) => setIsHovered(false)}
        >
            <img src={require(`../../../assets/${image}`).default} alt="" />
            {
                isHoverd &&
                <div className="hover-div"> {text} </div>
            }
        </div>
    )
}

export default HoverImage