import Card from '../components/Card'
import Input from '../components/Input'
import Heading from '../components/Heading'
import Divider from '../components/Divider'
import Button from '../components/Button'
import type { NextPage } from 'next'

const Form = () => {
    return (
        <form>
            <Input title="Username" placeholder='Your Name'></Input>
            <Input title="Password" placeholder='Password'></Input>
        </form>
    )
}

const Login: NextPage = () => {
    return (
        <div className='bg-red-400 h-screen flex justify-center items-center'>
            <Card>
                <Heading title='Login'/>
                <Divider/>
                <Form/>
                <div className='grid grid-cols-2'>
                    <span className='cols-span-1'/>
                    <Button title='Login'/>
                </div>
            </Card>
        </div>
    )
}

export default Login