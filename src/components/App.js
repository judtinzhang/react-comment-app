import React, {useState, useEffect} from 'react'
 
import Posts from './Posts'
const App = () => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')

  return (
    <div>
    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    <input type='text' value={post} onChange={e => setPost(e.target.value)}/>
    <h1>{name}</h1>
    <h1>{post}</h1>
    </div>
  )
}
export default App
