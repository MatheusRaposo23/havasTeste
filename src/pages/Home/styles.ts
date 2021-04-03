import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  .loader {
  position: fixed;
  top: 50%;
  left: 50%;
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #245caa;
  height: 50px;
  width: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width:1680px) {
    align-items: center;
    flex-direction: column-reverse;
    
    .mainHigh{
      position:unset;
    }
  }

  @media(max-width: 600px) {
    h1 {
      font-size: 20px
    }
  }
`;

export const HighlightContainer = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:fixed;
  left:60px;
  top:30px;

  .high > div{
    /* width: 100%; */
    height: 180px;

  }

  //div dentro da div high width 280px p title max-width 220px bodylink .high fontsize 11px

  @media (max-width:1680px){
    margin-bottom:20px;

    .high > div{
      width:280px;
    }
  }

  @media (max-width:600px){
    margin-bottom:20px;

    .high > div {
      width:280px !important;
      height: 200px !important;
    }
  }

  h1{
    margin-bottom:20px;
  }

  .high{
    font-size:18px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    

    .name{
      font-weight:bold;
      font-size:20px;
      margin-bottom:12px;
    }

    .title{
      font-style: italic;
      margin-bottom:8px;
      text-transform: uppercase;
      font-weight:bold;
      font-size:14px;
    }
    
  }

  .high > div {
    margin-bottom:25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#245caa;
    height: 180px;
    border-radius:10px;
    padding:28px;
    margin-bottom:20px;

    div {
      display: flex;
      width: 100%;
    }

    p {
      color:white;
      max-width: 500px; // Limite maximo do texto
      white-space: nowrap; // Removendo quebra de linha
      overflow: hidden; // Removendo a barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final do texto
    }

    .title {
      white-space: initial
    }

    span{
      color:white;
      font-style:italic;
    }

    a{
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }

  
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top:30px;
 

  @media (max-width: 1680px){
    align-items: center;
    margin-top:10px;

    a {
      display: flex;
      justify-content: center;
    }
    
    .post {
      margin-right: 0;
      margin-bottom:20px;
      width:80%;
      font-size:14px;
    }
  }

  @media (max-width: 600px){   
    .post {
      height: 250px;
    }
  }

  @media (max-width: 460px){   
    .post {
      height: 300px;
    }
  }

  h1{
    margin-bottom: 20px;
  }
  

  div {
    font-size:20px;
    width:920px;
    margin-right:70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:yellow;
    margin-bottom:20px;
    padding: 28px;
    border-radius:10px;
    background-color:#245caa;
    height:200px;
    cursor: pointer;
  }


  .namePub{
    font-weight:bold;
      font-size:28px;
      margin-bottom:12px;
  }

  .titlePub{
      font-style: italic;
      margin-bottom:8px;
      text-transform: uppercase;
      font-weight:bold;
      font-size:16px;
    }
      p{
        font-weight:24px;
        color:white;
        text-align: justify;
      }

      span{
        color:white;
        font-style:italic;
      }

      a{
        text-decoration: none;
        width: 80%;
        color: white;
        font-weight: bold;
      }
`;

export const PageContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;

  p {
    color: #245caa;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    cursor: default;
  }

  svg {
    margin: 20px;
    cursor: pointer;
    color: #245caa;
  }

`;
