import React from 'react';
import DropDown from '../dropDown/DropDown';
const SelectFile:React.FC<any> = (props)=>{

    return (
        <React.Fragment>
        <h3>Select a document Type</h3>
        <DropDown/>
        </React.Fragment>
    )
}

export default SelectFile;