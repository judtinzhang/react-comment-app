import React, {useState} from 'react'
import Votes from './Votes'
import Reply from './Reply'
const Posts = ({name, post}) => {
    
    const [replyList, setReplyList] = useState([])

    return (
        <>
            <Votes/>    
            {name}: {post}
            <button onClick={() => {
                {setReplyList([...replyList, <Reply depth={2}/> ])}              
            }}>Reply</button>
            {replyList.map((reply, idx) => {return <div key={idx}> {reply} </div>})}
        </>
    ) 
}

export default Posts