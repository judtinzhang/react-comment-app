import React, { useState } from 'react'
import Form from './Form'

const Reply = ({ depth }) => {
  const [newName, setNewName] = useState('')
  const [newPost, setNewPost] = useState('')
  const [showReply, setShowReply] = useState(false)

  if (depth === 0) return null

  return (
    <>
      <br />
      {!showReply && (
        <div>
          <input className="input is-primary" placeholder="Name..." type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
          <input className="input is-primary" placeholder="Comment..." type="text" value={newPost} onChange={e => setNewPost(e.target.value)}/>
          <button
            className="button is-primary is-small"
            type="submit"
            onClick={() => {
              if (newName && newPost) {
                setShowReply(true)
              }
            }}
          >
            Submit
          </button>
        </div>
      )}
      {showReply && (
        <div>
          <div>
            Reply by ~
            {newName}
          </div>
          <div>{newPost}</div>
          <br />
          <Form depth={depth - 1} />
        </div>
      )}
    </>
  )
}

export default Reply
