import React from 'react'

const Posts = ({newName, setNewName, newPost, setNewPost, postList, setPostList}) => {
    return (
        <div>
            <input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
            <input type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
            <button onClick={() => {
                if (newName && newPost) {
                    setPostList([{newName, newPost}, ...postList])
                    setNewName('')
                    setNewPost('')
                }
            }}>Submit</button>
        </div>
    )
}

export default Posts