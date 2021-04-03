import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 104%;
  height: 100%;

  .button {
    width:100%;
  }

  .button > a {
    display: flex;
    justify-content: center;
    width:100%;
    text-decoration: none;
  }

  .main{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }

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
`;



export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:80px;

  h1{
    margin-bottom: 20px;
  }
  

  div {
    font-size:20px;
    width:66%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:yellow;
    margin-bottom:40px;
    padding: 20px;
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
        color: white;
        font-weight: bold;
      }


      @media (max-width: 890px)
      {
        div{
          height: 240px;
        }
      }

      @media (max-width:615px)
      {
        div{
          height: 300px;
        }
      }
`;

export const HighlightContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left:0;
  top:80px;

  h1{
    margin-bottom:20px;
  }

  .high{
    font-size:18px;
    width:70%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
    
    

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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color:#245caa;
      height:140px;
      width: 440px;
      margin: 10px;
      border-radius:10px;
      padding:20px;

      p{
        color:white;
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


