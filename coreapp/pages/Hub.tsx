import Button from "../components/Button"
import Card from "../components/Card"
import TextArea from "../components/TextArea"
import { marked } from 'marked'
import parse from 'html-react-parser'

const Hub = () => {
    const html = marked.parse(`## Marked in Node.js\n Rendered by **marked**.`);
    const jsx = parse(html)
    console.log(html)

    return (
        <div className='bg-slate-200 dark:bg-slate-900 p-5 h-screen flex flex-col'>
            <nav className="mb-2 p-2 flex flex-row-reverse gap-2 shadow-sm bg-white dark:bg-slate-800">
                <Button title="save"/>
                <Button title="bruh"/>
                <Button title="by"/>
            </nav>
            <TextArea></TextArea>
            <article className="h-full p-5 prose prose-base lg:prose-lg dark:prose-invert">
                { jsx }
            </article>
        </div>
    )
}

export default Hub