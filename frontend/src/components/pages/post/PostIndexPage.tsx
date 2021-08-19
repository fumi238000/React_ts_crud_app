import React, { useState, useEffect,VFC} from 'react';
import axios from 'axios'

import { postsIndexUrl } from '../../../urls';
import { TodoType } from '../../../types/api/post';

export const PostIndexPage: VFC = () => {  
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
        <h1>TODOリスト一覧画面</h1>
        { posts.map((post) => ( 
            <div key={post.id}>
              <p>タイトル：{post.title}</p>
              <p>詳細：{post.details}</p>
            </div>
          ))}
      </div>  
  )
}
