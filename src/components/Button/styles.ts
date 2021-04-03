import styled from 'styled-components';

export const Container = styled.button`
  background: #245caa;
  height: 56px;
  border-radius: 30px;
  border: 0;
  color: #fff;
  padding: 0 16px;  
  width: 140px;
  font-weight: 1000;

  transition: background-color 0.2s;
  &:hover {
    background: #fff;
    color: #245caa;
    border: 3px solid #245caa;
  }
`;