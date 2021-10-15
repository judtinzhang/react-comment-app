import React, {useState} from 'react'
import Form from './Form'

const Reply = ({depth}) => {
    
    const [newName, setNewName] = useState('')
    const [newPost, setNewPost] = useState('')
    const [showReply, setShowReply] = useState(false)

    if (depth === 0) {
        return null
    }

    return (
        <>
            {!showReply && (
                <div>
                    <input class='input' type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                    <input class='input' type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
                    <button class='button' onClick={() => {
                        if (newName && newPost) {
                            setShowReply(true)
                        }
                    }}>Submit</button>
                </div>
            )}
            {showReply && (
                <div>                    
                <h1>{newName} -- {newPost}</h1>
                <Form depth={depth-1}/>
            </div>
            )}
        </>
    )
}

export default Reply