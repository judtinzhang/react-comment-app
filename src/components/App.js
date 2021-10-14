import React, {useState, useEffect} from 'react'
 
import NewPosts from './NewPosts'
import Posts from './Posts'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPost, setNewPost] = useState('')
  const [postList, setPostList] = useState([])
  

  return (
    <div>
      <NewPosts newName={newName} setNewName={setNewName} newPost={newPost} setNewPost={setNewPost} postList={postList} setPostList={setPostList}/>
      <h2>{postList.map((post, id) => {return <li key={id}> <Posts name={post.newName} post={post.newPost}/>></li>})}</h2>      
    </div>
  )
}
export default App
