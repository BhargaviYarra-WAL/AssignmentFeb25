import axios from 'axios'
import {useState} from 'react'
const Form = props => {
    const [username, setUsername] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }
    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={event =>
                    setUsername(event.target.value)} placeholder="Enter GitHub username"
                required
            /><br/>
            <button className="btn1" type="submit">Add card</button>
        </form>
    )
}
export default Form