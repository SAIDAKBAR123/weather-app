import React from 'react'
import styles from './input.module.scss'


export const Input = ({ children, ...props }) => {
    return (
        <input type='text' className={styles.search_input} {...props}>{children}</input>
    )
}


export default Input