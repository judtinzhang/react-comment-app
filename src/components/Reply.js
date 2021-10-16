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
            <br></br>
            {!showReply && (
                <div>
                    <input class='input is-primary' placeholder="Name..." type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                    <input class='input is-primary' placeholder="Comment..." type='text' value={newPost} onChange={e => setNewPost(e.target.value)}/>
                    <button class='button is-primary is-small' onClick={() => {
                        if (newName && newPost) {
                            setShowReply(true)
                        }
                    }}>Submit</button>
                </div>
            )}
            {showReply && (
                <div>                    
                <div>Reply by: {newName}</div>
                <div>{newPost}</div>
                <br></br>
                <Form depth={depth-1}/>
            </div>
            )}
        </>
    )
}

export default Reply