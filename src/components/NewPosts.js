import React from 'react'

const resetPost = () => {
    
}

const Posts = ({newName, setNewName, newPost, setNewPost, postList, setPostList}) => {
    return (
        <div>
            <input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
            <input type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
            <button onClick={() => {
                setPostList([{newName, newPost}, ...postList])
                setNewName('')
                setNewPost('')
            }}/>
        </div>
    )
}

export default Posts