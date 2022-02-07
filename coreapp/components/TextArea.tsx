interface TextAreaType {
    classes: string
}

const TextArea = ({classes} : TextAreaType) => {
    classes = classes + TextArea.defaultProps.classes

    return (
        <textarea className={classes}>
        </textarea>
    )
}

TextArea.defaultProps = {
    classes: `
        dark:bg-slate-800 
        dark:text-white 
        font-sans 
        font-normal 
        text-base 
        leading-snug 
        shadow-md
        resize-none 
        focus:outline-none focus:ring focus:ring-blue-400 
        dark:focus:outline-none dark:focus:ring-purple-400
        shadow-inner 
        p-5 
        h-full
        scrollbar-thin
        hover:scrollbar-thumb-gray-300
        active:scrollbar-thumb-gray-400
        dark:scrollbar-thumb-gray-800
        dark:scrollbar-track-gray-800
        dark:hover:scrollbar-thumb-gray-500
        dark:active:scrollbar-thumb-gray-400
    `
}

export default TextArea
