import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container,
} from './styles';

//import { FiEdit, FiTrash } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

interface IPosts {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface IUsers {
  
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

interface IUsersPosts {
  post: IPosts,
  user: IUsers
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [usersPost, setUsersPost] = useState<IUsersPosts[]>([])

  async function loadPosts() {
    const postsResponse = await api.get('posts');
    let usersPost = []
    for(const post of postsResponse.data) {
      const user = await api.get(`users/${post.userId}`);

      usersPost.push({
        post,
        user: user.data
      })
    }
    setUsersPost(usersPost)
    setPosts(postsResponse.data);
  }

  useEffect(() => {
    loadPosts();
  }, []);
  
  return (
    <>
      <Container>
        {usersPost.map(userPost => (
          <div className="post">
            <p>{userPost.user.name}</p>    
            <p>{userPost.post.title}</p>
            <p>{userPost.post.body}</p><br></br>
          </div> 
        ))} 
      </Container>
    </>
  );
}

export default Home;