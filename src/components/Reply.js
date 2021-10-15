import React, {useState} from 'react'
import Votes from './Votes'
const Reply = ({depth}) => {
    
    const [newName, setNewName] = useState('')
    const [newPost, setNewPost] = useState('')
    const [showReply, setShowReply] = useState(false)
    const [replyList, setReplyList] = useState([])

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
                <Votes/>
                {depth > 1 && (
                    <div>
                        <button onClick={() => {
                            {setReplyList([...replyList, <Reply depth={depth-1}/> ])}              
                        }}>Reply</button>
                        {replyList.map((reply, idx) => {return <div key={idx}> {reply} </div>})}
                    </div>
                )}
            </div>
            )}
        </>
    )
}

export default Reply