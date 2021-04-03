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

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [minPostList, setMinPostList] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [maxPostList, setMaxPostList] = useState<number>(10);
  const [usersPost, setUsersPost] = useState<IUsersPosts[]>([])

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

    setUsersPost(usersPost)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(usersPost.length / 10); i++) {
      pageNumbers.push(i);
    }
    setCurrentPage(1)
    setPosts(pageNumbers)
    setIsLoading(false)
  }

  async function handleNextPage() {
    if (maxPostList !== 100) {
      setCurrentPage(currentPage + 1)
      setMinPostList(minPostList + 10)
      setMaxPostList(maxPostList + 10)
    }
  }

  async function handlePreviousPage() {
    if (minPostList !== 0) {
      setCurrentPage(currentPage - 1)
      setMinPostList(minPostList - 10)
      setMaxPostList(maxPostList - 10)
    }
  }

  function handleNavigation(postId: string) {
    localStorage.setItem('postId', postId)
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
          <>
            <HighlightContainer className="mainHigh"> 
              <h1>Mais lidas nas últimas 24 horas</h1>
              <div className="high">
                {usersPost.slice(96, 100).map(userPost => (
                  <div key={userPost.post.id}>
                    <p className="name">{userPost.user.name}</p>
                    <p className="title">{userPost.post.title}</p>
                    <div className="body-link">
                      <p className="body">{userPost.post.body}</p>
                      <Link to={`post/${userPost.post.id}`}>
                        <p onClick={() => handleNavigation(userPost.post.id.toString())} className="body">Ler mais</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </HighlightContainer>

            <PostsContainer >
              <h1>Publicadas recentemente</h1>
              {usersPost.slice(minPostList, maxPostList).map(userPost => (
                <Link to={`post/${userPost.post.id}`}>
                  <div onClick={() => handleNavigation(userPost.post.id.toString())} key={userPost.post.id} className="post">
                    <p className="namePub">{userPost.user.name}</p>
                    <p className="titlePub">{userPost.post.title}</p>
                    <p className="bodyPub">{userPost.post.body}</p><br></br>
                  </div>
                </Link>
              ))}
            </PostsContainer >
            <PageContainer>
              <FiArrowLeft size={25} onClick={handlePreviousPage} />
              <p>Página {currentPage}</p>
              <FiArrowRight size={25} onClick={handleNextPage} />
            </PageContainer>
          </>
        )}

      </Container>
    </>
  );
}

export default Home;