import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #757575;
  font-size: 13px;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
 font-size: 13px;
  color: #757575;
  margin-bottom: 40px;`;

export const Break = styled.br`
  flex-basis: 100%;
  height: 0;
`;
