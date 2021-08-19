// TODO: apiの情報を取得することに特化させる


import React, { useState, useEffect} from 'react';
import axios from 'axios'

import { postsIndexUrl } from '../urls'
import { TodoType } from '../types/api/post'

export const PostIndex = () => {  
  const [posts, setPosts] = useState<Array<TodoType>>([])
  console.log(posts);
  useEffect(() => {
    axios.get<Array<TodoType>>(postsIndexUrl)
    .then(res => {
      setPosts(res.data); 
    })
  },[])

  return (
      <div>
        { posts.map((post) => ( 
            <div key={post.id}>
              <p>タイトル：{post.title}</p>
              <p>詳細：{post.details}</p>
            </div>
          ))}
      </div>  
  )
}