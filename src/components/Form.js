import React, {useState} from 'react'
import Vote from'./Vote'
import Reply from './Reply'

const Form = ({depth}) => {

    const [replyList, setReplyList] = useState([])

    return (
        <>
            <Vote/> 
            {depth > 1 && (
                <div>
                     <button onClick={() => {
                        {setReplyList([...replyList, <Reply depth={depth}/> ])}              
                    }}>Reply</button>
                    {replyList.map((reply, idx) => {return <div key={idx}> {reply} </div>})}
                </div>
            )}           
        </>
    )
}

export default Form