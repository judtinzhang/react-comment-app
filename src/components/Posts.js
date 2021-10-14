import React, {useState, useEffect} from 'react'
import Votes from './Votes'
const Posts = ({name, post}) => {

    const [vote, setVote] = useState(0)

    // useEffect(() => {
    //     console.log('test')   
    //     setVote(vote + 2)
    // })

    return (
        <div>
            <Votes vote={vote} setVote={setVote}/>
            <h1>{name}: {post}</h1>
        </div>
    ) 
}

export default Posts