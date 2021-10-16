import React, { useState } from 'react'
import Vote from './Vote'
import Reply from './Reply'

const Form = ({ depth }) => {
  const [replyList, setReplyList] = useState([])

  return (
    <>
      <Vote />
      <br />
      {depth > 1 && (
        <div>
          <button
            className="button is-primary is-small"
            type="submit"
            onClick={() => {
              setReplyList([...replyList, <Reply depth={depth} />])
            }}
          >
            Reply
          </button>
          {replyList}
        </div>
      )}
    </>
  )
}

export default Form
