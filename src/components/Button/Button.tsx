import React from 'react'
import styles from './button.module.scss'


export const Button = ({ children, ...props }) => {
    return (
        <button type='button' {...props}>{children}</button>
    )
}

export const ButtonSearch = ({ children, ...props }) => {
    return (
        <Button {...props} className={styles.search_button}><svg enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z" fill="#231F20" fill-rule="evenodd"/></svg></Button>
    )
}

export default ButtonSearch