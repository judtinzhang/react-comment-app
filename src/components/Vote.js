import React, { useState } from 'react'

const Vote = () => {
  const [vote, setVote] = useState(0)

  return (
    <div>
      <div>{vote}</div>
      <button
        className="button is-primary is-small"
        type="submit"
        onClick={() => {
          setVote(vote + 1)
        }}
      >
        Upvote
      </button>
      <p />
      <button
        className="button is-primary is-small"
        type="submit"
        onClick={() => {
          setVote(vote - 1)
        }}
      >
        Downvote
      </button>
    </div>
  )
}

export default Vote
