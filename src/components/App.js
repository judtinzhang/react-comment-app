import React, {useState} from 'react'
import Posts from './Posts'
import '../../style.css'

const App = () => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [postList, setPostList] = useState([])

  return (
    <div class='content'>
      <h1>🎨 CIS197 Comment App 🎬</h1>
      <div class='post'>
        <h2> New Post </h2>
        <div>
          <input class='input' type='text' value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <input class='input' type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
        </div>
        <button class='button is-primary' onClick={() => {
            if (name && desc) {
                setPostList([...postList, <div><Posts name={name} post={desc}/></div>])
                setName('')
                setDesc('')
            }
        }}>Submit</button>
        </div>
        {postList.map((post, idx) => {return <h1 key={idx}> {post} </h1>})}
        
      
      
    </div>
  )
}
export default App
