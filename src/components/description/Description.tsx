import React from 'react'

const Description: React.FC<any> = (props) => {
    const { descriptionObj } = props;
    return (<div>
        <p style={{fontWeight:'bold'}}>{descriptionObj.title}</p>
        <span>{descriptionObj.content}</span>
    </div>)

}

export default Description;