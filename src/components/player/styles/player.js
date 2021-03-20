import styled from 'styled-components'

export const Container = styled.div``;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  border-radius: 6px;
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

export const Video = styled.video`
  display: none;
`;