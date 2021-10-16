import React, { useState } from 'react'
import Posts from './Posts'
import '../../style.css'

const App = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [postList, setPostList] = useState([])

  return (
    <div className="content">
      <h1>🎨 CIS197 Comment App 🎬</h1>
      <div className="box">
        <div className="post">
          <h2> New Post </h2>
          <div>
            <input className="input is-primary" placeholder="Name..." type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <br />
          <div>
            <input className="input is-primary" placeholder="Post..." type="text" value={desc} onChange={e => setDesc(e.target.value)} />
          </div>
          <br />
          <button
            className="button is-primary"
            type="submit"
            onClick={() => {
              if (name && desc) {
                setPostList([...postList, <div><Posts name={name} post={desc} /></div>])
                setName('')
                setDesc('')
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
      {postList}
    </div>
  )
}
export default App
