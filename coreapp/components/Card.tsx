import React from 'react'

interface CardType {
    children: React.ReactNode,
    classes: string
}

const Card = ({ children, classes }: CardType) => {
    classes = classes + ' ' + Card.defaultProps.classes
    return (
        <div className='flex justify-center'>
            <div className={ classes }>
                { children }
            </div>
        </div>
    )
}

Card.defaultProps = {
    classes: `flex flex-col p-6 rounded-lg shadow-lg bg-white dark:bg-slate-900`
}

export default Card