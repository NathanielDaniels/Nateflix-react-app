import styled from 'styled-components'

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div``;

const Container = styled.section``;

const Title = styled.h1`
  font-size: 3rem;
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