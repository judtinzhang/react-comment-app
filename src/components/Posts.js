import React from 'react'
import Form from './Form'
const Posts = ({name, post}) => {
    
    return (
        <div class='post'>   
            {name}: {post}
            <Form depth={3}/>  
        </div>
    ) 
}

export default Posts