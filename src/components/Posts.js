import React, {useState, useEffect} from 'react'
import Votes from './Votes'
const Posts = ({name, post}) => {

    const [vote, setVote] = useState(0)

    return (
        <div>
            <h1>{name}: {post}</h1>
            <Votes vote={vote} setVote={setVote} name={name}/>
            <h2>{name}</h2>
        </div>
    ) 
}

export default Posts