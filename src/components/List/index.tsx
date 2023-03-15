import React from 'react'

export const List = ({ title = '', children }) => {
    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            { title && <h2 style={{ margin: 4 }}>{title}</h2>}
            {children}
        </div>
    )
}

export const ListItem = ({ children, value }) => {
    return (
        <div style={{ cursor: 'pointer', padding: '14px 0px', display:"flex", justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{ fontSize: '18px', fontWeight: '500', color: '#dfdfdf' }}>{children}</div>
            <div style={{ color: 'white', fontWeight: '500'}}>{value}</div>
        </div>
    )
}