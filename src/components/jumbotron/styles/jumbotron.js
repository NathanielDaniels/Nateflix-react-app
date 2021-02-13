import styled from 'styled-components'

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({direction}) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  
  @media (max-width: 1000px) {
      flex-direction: column;
  }
`;

const Item = styled.div``;

const Container = styled.section``;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export {Inner, Item, Container, Title, SubTitle, Image}