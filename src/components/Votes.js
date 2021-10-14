import React, {useEffect} from 'react'

const Votes = ({vote, setVote, name}) => {
        
    return (
        <div>
            <button onClick={() => {
                setVote(vote + 1)   
            }
            }>Upvote</button>
            <button onClick={() => {
                setVote(vote - 1)   
            }
            }>Downvote</button>
            <h1>{vote}</h1>
        </div>
    )
}

export default Votes