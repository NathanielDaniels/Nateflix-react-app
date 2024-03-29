import styled from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h2`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  transition: color .2s ease-in-out, font-weight .2s ease-in-out;
`;

export const Picture = styled.img`
  margin: 50px 0 5px;
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  border-radius: 10px;
  transition: border .2s ease-in-out;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
      border: 2px solid white;
  }
  
  &:hover ${Name} {
      font-weight: bold;
      color: #fff;
  }
  
  &:last-of-type {
      margin-right: 0;
  }
`;

