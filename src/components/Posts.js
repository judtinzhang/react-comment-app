import React from 'react'
import Form from './Form'
const Posts = ({name, post}) => {
    
    return (
        <>   
            {name}: {post}
            <Form depth={3}/>  
        </>
    ) 
}

export default Posts