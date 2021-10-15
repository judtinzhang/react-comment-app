import React, {useState} from 'react'

const Vote = () => {
        
    const [vote, setVote] = useState(0)

    return (
        <div>
            <button class='button' onClick={() => {
                setVote(vote + 1)  
            }
            }>Upvote</button>
            <button class='button' onClick={() => {
                setVote(vote - 1)   
            }
            }>Downvote</button>
            <h1>{vote}</h1>
        </div>
    )
}

export default Vote