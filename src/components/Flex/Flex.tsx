import React from 'react'
import styles from './flex.module.scss'


export const Row = ({ children, url }) => {
    return (
        <div style={{ backgroundImage: `url("${url}")`}} className={styles.container} >
            {children}
        </div>
    )
}

export const Col = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}


export default Row