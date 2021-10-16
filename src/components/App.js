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
      <div class='box'>
        <div class='post'>
          <h2> New Post </h2>
          <div>
            <input class='input is-primary' placeholder="Name..." type='text' value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <br></br>
          <div>
            <input class='input is-primary' placeholder="Post..." type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
          </div>
          <br></br>
          <button class='button is-primary' onClick={() => {
              if (name && desc) {
                  setPostList([...postList, <div><Posts name={name} post={desc}/></div>])
                  setName('')
                  setDesc('')
              }
          }}>Submit</button>
          </div>
      </div>
      
      {postList.map((post, idx) => {return <div key={idx}> {post} </div>})}
        
      
      
    </div>
  )
}
export default App
