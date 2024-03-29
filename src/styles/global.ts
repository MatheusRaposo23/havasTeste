import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    font: 400 14px Roboto, sans-serif;
    background: #E0E4F4;
    -webkit-font-smoothing: antialiased;
}
input,button, textarea{
    font: 400 18px Roboto, sans-serif;
}
button{
    cursor: pointer;
}
form input{
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcde;
    border-radius: 8px;
    padding: 0 24px;
}
form textarea{
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcde;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
}

.back-link{
    display: flex;
    align-items: center;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    margin-top: 100px;
}
.back-link svg{
    margin-right: 8px;
}
.back-link:hover{
    opacity: 0.8;
}
`;