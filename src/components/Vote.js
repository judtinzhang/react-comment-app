import React, {useState} from 'react'

const Vote = () => {
        
    const [vote, setVote] = useState(0)

    return (
        <div>
            <div>{vote}</div>
            <button class='button is-primary is-small' onClick={() => {
                setVote(vote + 1)  
            }
            }>Upvote</button>
            <p></p>
            <button class='button is-primary is-small' onClick={() => {
                setVote(vote - 1)   
            }
            }>Downvote</button>
        </div>
    )
}

export default Vote