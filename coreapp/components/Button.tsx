import React from 'react'

interface ButtonType {
    title: string | React.ReactNode;
    classes: string,
}

const Button = ({title, classes}: ButtonType) => { 

    classes = classes + " " + Button.defaultProps.classes

    return (
        <button type="button" className={classes}>{title}</button>
    )
}

Button.defaultProps = {
    title: `button`,
    classes: `
        bg-blue-600
        hover:bg-blue-300 
        focus:bg-blue-700 
        focus:ring-blue-300
        active:bg-blue-300
        focus:ring-2
        focus:outline-none
        dark:bg-purple-600 
        dark:hover:bg-purple-300
        dark:hover:bg-purple-300 
        dark:focus:bg-purple-700 
        dark:focus:ring-purple-300
        dark:active:bg-purple-300
        transition 
        duration-75 
        ease-in-out
        inline-block
        text-white
        px-6
        py-2.5
        justify-self-end
        font-medium 
        text-xs 
        leading-tight 
        uppercase rounded 
        shadow-md
    `,
}

export type { ButtonType };
export default Button;