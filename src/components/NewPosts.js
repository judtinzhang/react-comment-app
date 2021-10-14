import React from 'react'

import Posts from './Posts'

const NewPosts = ({newName, setNewName, newPost, setNewPost, postList, setPostList}) => {
    return (
        <div>
            <input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
            <input type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
            <button onClick={() => {
                if (newName && newPost) {
                    setPostList([<Posts name={newName} post={newPost}/>, ...postList])
                    setNewName('')
                    setNewPost('')
                }
            }}>Submit</button>
        </div>
    )
}

export default NewPosts