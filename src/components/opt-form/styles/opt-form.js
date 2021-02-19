import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e50914;
  color: white; 2
  padding: 0 32px;
  height: 60px;
  cursor: pointer;
  font-size: 26px;
  border: 0;

  img {
    width: 30px;
    margin-left: 10px;
    filter: invert(1);

    @media (max-width: 1000px) {
      width: 18px;
    }
  }
  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    letter-spacing: .5px;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }

`;