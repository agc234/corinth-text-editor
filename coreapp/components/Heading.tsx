interface HeaderType {
    title: string,
    desc: string | undefined,
    classes: {
        h1: string | undefined,
        p: string | undefined
    }
}

const Heading = ({ title, desc, classes}: HeaderType) => {
    classes.h1 = classes.h1 + ' ' + Heading.defaultProps.classes.h1
    classes.p = classes.p + ' ' + Heading.defaultProps.classes.p

    return (
        <div className="flex flex-col">
            <h1 className={classes.h1}>{title}</h1>
            <p className={classes.p}>{desc}</p>
        </div>
    )
}

Heading.defaultProps = {
    desc: "",
    classes: {
        h1: `text-gray-900 dark:text-white text-xl text-center leading-tight font-medium`,
        p: `text-gray-700 dark:text-white text-base text-center`,
    }
}

export default Heading