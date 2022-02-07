interface InputType {
    title: string,
    classes: string,
    placeholder: string
}

const Input = ({ title, classes, placeholder }: InputType) => {
    return (
        <div className="flex flex-col py-1">
            <label className="grow text-center">
                {title}
            </label>
            <input
                type="text"
                className={classes}
                placeholder={placeholder}
            />
        </div>
    )
}

Input.defaultProps = {
    classes: `
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    `,
    placeholder: ``
}

export default Input