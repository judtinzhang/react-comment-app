import React, {useState} from 'react'
import Posts from './Posts'

const App = () => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [postList, setPostList] = useState([])

  return (
    <>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <input type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
      <button onClick={() => {
          if (name && desc) {
              setPostList([...postList, <div><Posts name={name} post={desc}/></div>])
              setName('')
              setDesc('')
          }
      }}>Submit</button>
      {postList.map((post, idx) => {return <div key={idx}> {post} </div>})}
    </>
  )
}
export default App
