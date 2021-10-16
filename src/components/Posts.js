import React from 'react'
import Form from './Form'
const Posts = ({name, post}) => {
    
    return (
        <div class='box post column'>
            <div>Post by: {name}</div>
            <div>{post}</div>
            <br></br>
            <Form depth={3}/>  
        </div>
    ) 
}

export default Posts