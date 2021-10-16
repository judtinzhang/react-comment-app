import React from 'react'
import Form from './Form'

const Posts = ({ name, post }) => (
  <div className="box post column">
    <div>
      Post by ~
      {name}
    </div>
    <div>{post}</div>
    <br />
    <Form depth={3} />
  </div>
)

export default Posts
