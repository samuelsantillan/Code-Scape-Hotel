import React from "react"

const IconContainer = (props) => {
    const {icon , name} = props;

    return ( 
        <div>
            <div className='icon-container'>
                {icon}
                <h3 className='color-fonts'>{name}</h3>
            </div>
        </div>
 
    )
};

export default IconContainer;