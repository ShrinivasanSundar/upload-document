import React from 'react'
import { Button } from 'antd';
import styles from "./CustomButton.module.scss"
const CustomButton: React.FC<any> = ({ name, variant,click }) => {
    return (<Button className={variant === "filled" ? styles.fillButton : styles.outlineButton} onClick={click}>{name}</Button>)
}

export default CustomButton;