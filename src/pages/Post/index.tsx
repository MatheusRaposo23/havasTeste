import React, { useCallback, useEffect, useState } from 'react';
import ShowMore from 'react-show-more';
import {
  Container,
  HighlightContainer,
  PostsContainer,
  PageContainer
} from './styles';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';
import { size } from 'polished';

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

const Post: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [usersPost, setUsersPost] = useState<IUsersPosts[]>([])
  const [fourPosts, setFourPosts] = useState<IUsersPosts[]>([])

  async function loadPosts() {
    const postsResponse = await api.get('posts');
    let usersPost = []
    for (const post of postsResponse.data) {
      const user = await api.get(`users/${post.userId}`);

      usersPost.push({
        post,
        user: user.data
      })
    }

    const postId = localStorage.getItem('postId');

    const clickedPost = usersPost.filter(userPost => userPost.post.id === Number(postId));

    const fourPosts = usersPost.slice(0, 5).filter(userPost => userPost.post.id !== Number(postId));

    if (clickedPost[0].post.id > 5) {
      fourPosts.pop()
    }

    setUsersPost(clickedPost)
    setFourPosts(fourPosts)
    setIsLoading(false)
  }

  function handleNavigation(postId: string) {
    localStorage.setItem('postId', postId)
    window.location.href = postId;
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Container>
        {isLoading === true ? (
          <div className="loader"></div>
        ) : (
          <div className="main">


            <PostsContainer >
              <h1>Publicação selecionada</h1>
              {usersPost.map(userPost => (
                <div key={userPost.post.id} className="post">
                  <p className="namePub">{userPost.user.name}</p>
                  <p className="titlePub">{userPost.post.title}</p>
                  <p className="bodyPub">{userPost.post.body}</p><br></br>
                </div>
              ))}
            </PostsContainer >


            <HighlightContainer>
              <h1>Últimas publicações</h1>
              <div className="high">
                {fourPosts.map(userPost => (
                  <div key={userPost.post.id}>
                    <p className="name">{userPost.user.name}</p>
                    <p className="title">{userPost.post.title}</p>
                    <Link to={`${userPost.post.id}`}>
                      <p onClick={() => handleNavigation(userPost.post.id.toString())} className="body">Ler mais</p>
                    </Link>
                  </div>
                ))}
              </div>
            </HighlightContainer>
            <div className="button">
              <Link to="/">
                <Button>Voltar</Button>
              </Link>
            </div>

          </div>
        )}

      </Container>
    </>
  );
}

export default Post;