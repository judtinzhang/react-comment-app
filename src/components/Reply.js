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
                    <input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                    <input type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
                    <button onClick={() => {
                        if (newName && newPost) {
                            setShowReply(true)
                        }
                    }}>Submit</button>
                </div>
            )}
            {showReply && (
                <div>                    
                <div>{newName} -- {newPost}</div>
                <Form depth={depth-1}/>
            </div>
            )}
        </>
    )
}

export default Reply