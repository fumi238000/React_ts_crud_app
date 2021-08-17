import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { postsIndexUrl } from '../urls'

const PostIndex = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios.get(postsIndexUrl)
    .then(res => {
      setPosts(res.data)
    })
  },[])

  return (
    <div>
      <ul>
        {
          posts.map(post => 
            <>
            <li key={post.id}>{post.title} <button>削除</button></li>
            </>
          )}
      </ul>  
    </div>
  )
}


export default PostIndex